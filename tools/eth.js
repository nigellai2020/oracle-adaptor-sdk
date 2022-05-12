const Web3 = require("web3");
const fs = require('fs');
const networks = require("../data/networks");
const path = require('path');
const BigNumber = require('bignumber.js');
const Config = fs.existsSync(path.join(__dirname,"./Config.json")) ? require("./Config") : {};

let network = networks[Config.network];
if (!network)
    network = networks["kovan"];
if (network.rpc.indexOf("INFURA_ID") > 0 && Config.InfuraID) {
    network.rpc = network.rpc.replace("INFURA_ID", Config.InfuraID);
}

const web3 = new Web3(new Web3.providers.HttpProvider(network.rpc));

const getGasPrice = async function() {
    if (network.forceGasPrice) {
        return network.forceGasPrice;
    }
    return await web3.eth.getGasPrice();
}


var blockGasLimit = network.blockGasLimit;

web3.eth.transactionConfirmationBlocks = 1;

var privateKey = null;
var myAddress = null;

function setPrivateKey(key) {
    privateKey = key;
    myAddress = web3.eth.accounts.privateKeyToAccount(privateKey).address;
}
function setAddress(addr) {
    if (addr == myAddress) return;
    privateKey = null;
    myAddress = addr;
}
function getAddress() {
    return myAddress;
}
let contracts = {};

function padLeft(string, chars, sign){
    return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
};
function padRight(string, chars, sign){
    return string + new Array(chars - string.length + 1).join(sign ? sign : "0");
};
function numberToBytes32(value, prefix) {
    var v = value.toString(16)
    v = v.replace("0x", "");
    v = padLeft(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
function addressToBytes32(value, prefix) {
    var v = value
    v = v.replace("0x", "");
    v = padLeft(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
function addressToBytes32Right(value, prefix) {
    var v = value
    v = v.replace("0x", "");
    v = padRight(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
function stringToBytes32(value, prefix) {
    var v = value
    v = v.replace("0x", "");
    v = v.split('').map((c) => {
        var c = c.charCodeAt(0).toString(16);
        return c.length < 2
            ? ("0" + c)
            : c;
    }).join('');
    v = padRight(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}

function nullAddress(){
    return "0x0000000000000000000000000000000000000000";
}
function getAbi(contractName){
    // truffle
    // return JSON.parse(fs.readFileSync(path.join(__dirname, "../build/contracts/" + contractName + ".json"), "utf8")).abi;
    // compile.js / deploy.js
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../build/abis.json"), "utf8"))[contractName];
}

function getEvent(contractName, eventName) {
    return getAbi(contractName).filter(e => e.type == "event" && e.name == eventName)[0];
}
function getEventTopic(contractName, eventName) {
    var event = getEvent(contractName, eventName);
    return Web3.utils.soliditySha3(event.name + "(" + event.inputs.map(e => e.type).join(",") + ")");
}
function parseReceiptForEvent(receipt, contractName, eventName) {
    var event = getEvent(contractName, eventName);
    var topic = Web3.utils.soliditySha3(event.name + "(" + event.inputs.map(e=>e.type).join(",") + ")");
    var log = receipt.logs.filter(log => log.topics[0] == topic);

    if (log && log.length)
    if (log.length == 1) {
        var log2 = Object.assign({address: log[0].address}, web3.eth.abi.decodeLog(event.inputs, log[0].data, log[0].topics.slice(1)))
        return log2;
    } else if (log.length > 1) {
        return log.map(e => Object.assign({address: e.address}, web3.eth.abi.decodeLog(event.inputs, e.data, e.topics.slice(1))))
    }
}

async function deploy(contractName, args, options){
    console.log("Deploying " + contractName);
    // truffle
    // var data = JSON.parse(fs.readFileSync(path.join(__dirname, "../build/contracts/") + contractName + ".json", "utf8"))
    // var bytecode = data.bytecode;
    // var abi = data.abi;

    // compile.js / deploy.js
    var bytecode = require("../build/bytecodes.json")[contractName];//JSON.parse(fs.readFileSync(path.join(__dirname, "../build/bytecodes.json"), "utf8"))[contractName];
    var abi = require("../build/abis.json")[contractName];//JSON.parse(fs.readFileSync(path.join(__dirname, "../build/abis.json"), "utf8"))[contractName];
    var contract2 = new web3.eth.Contract(abi);
    var {arguments, send, estimateGas,  encodeABI} = await contract2.deploy({data: bytecode, arguments: args});

    var nonce = (options && options.nonce) ? options.nonce : await web3.eth.getTransactionCount(myAddress);
    var gasPrice = (options && options.gasPrice) ? options.gasPrice : await getGasPrice();
    var gas;
    try {
        gas = (options && (options.gas || options.gasLimit)) || (await estimateGas({data: bytecode, from: myAddress, value: (options && options.value) || 0}));
        // var gasLimit = (await web3.eth.getBlock("latest")).gasLimit;
        // if (gas > blockGasLimit) {
        //     gas = blockGasLimit;
        // }
    } catch (e) {
        // gas = (21000 + 32000 + ((bytecode.length / 2) * 300)) * 2
        console.log(e);
        throw e;
    }

    console.log("gasPrice: " + gasPrice + ", gas: " + gas);

    var tx = {
        nonce: "0x" + new BigNumber(nonce.toString()).toString(16),
        gasPrice: "0x" + new BigNumber(gasPrice.toString()).toString(16),
        gas:"0x" + new BigNumber(gas.toString()).toString(16),
        value: "0x" + new BigNumber((options && options.value) || 0).toString(16),
        data: encodeABI()
    }

    var signedTx = await web3.eth.accounts.signTransaction(tx, privateKey)
    var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('transactionHash', (hash) => {
        console.log("deploy " + contractName + " transactionHash " + hash)
    })
    .on('receipt', (receipt) => {
        console.log("deploy " + contractName + " receipt " + JSON.stringify(receipt))
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("deploy " + contractName + " confirmation " + confirmationNumber)
    })
    .on('error', (error) => {
        console.log("deploy " + contractName + " error " + JSON.stringify(error))
    });
    console.log(receipt)
    return receipt.contractAddress;
}


async function call(contractName, address, methodName, args){
    console.log("Calling " + contractName + "." + methodName, args);
    var contract = contracts[address];
    if (!contract){
        var abi = getAbi(contractName);
        contract = new web3.eth.Contract(abi, address);
        contracts[address] = contract;
    }
    try {
        if (args != undefined && !Array.isArray(args))
            args = [args]
        var method = contract.methods[methodName].apply(this, args)
        var result = await method.call({from: myAddress}); 
        return result;
    } catch(e) {
        if (e.message.includes("VM execution error.")) {
            var msg = (e.data || e.message).match(/0x[0-9a-fA-F]+/);
            if (msg && msg.length) {
                msg = msg[0];
                if (msg.startsWith("0x08c379a")) {
                    msg = web3.eth.abi.decodeParameter('string', "0x"+msg.substring(10));
                    throw new Error(msg);
                }
            }
            console.log(msg);
        }
        console.log(e)
        throw e;
    }
}
function callEthCall(contractName, address, methodName, args, options, callback){
    if (typeof args === "function"){
        callback = args;
        options = undefined;
        args = undefined;
    } else if (options === "function"){
        callback = options;
        options = undefined;
    } 
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Calling " + contractName + "." + methodName, args);
            var tx = await createTransaction(contractName, address, methodName, args, options, true);
            tx.from = options.from;
            var result = await web3.eth.call(tx, options.defaultBlock?Number(options.defaultBlock).toString(16):null);
            if (callback)
                callback(null, result);
            return resolve(result);
        }catch(e){
            try {
                if (e.message.includes("VM execution error.")) {
                    var msg = (e.data || e.message).match(/0x[0-9a-fA-F]*/)[0]
                    if (msg.startsWith("0x08c379a")) {
                        msg = web3.eth.abi.decodeParameter('string', "0x"+msg.substring(10));
                        console.log(msg);
                        var err = new Error(msg);
                        if (callback)
                            callback(err)
                        return reject(err);
                    }
                }
            } catch (e2) {
                console.log(e2);
            }
            console.log(e)
            return reject(e);
        }
    });
}
function batchCall(batch, key, contractName, address, methodName, args){
    console.log("Batch Calling " + contractName + "." + methodName, args);
    var contract = contracts[address];
    if (!contract){
        var abi = getAbi(contractName);
        contract = new web3.eth.Contract(abi, address);
        contracts[address] = contract;
    }
    if (args != undefined && !Array.isArray(args)) {
        args = [args]
    }
    var method = contract.methods[methodName].apply(this, args)
    batch.promises.push(new Promise((resolve, reject) => {
        batch.batch.add(method.call.request({from: myAddress}, 
            (e,v) => {
                return resolve({key:key, result:e ? null : v});
            }
        ));
    }));
}
function batchEthCall(batch, key, methodName, args){
    if (!args == undefined) {
        args = [];
    } else if (!Array.isArray(args)) {
        args = [args]
    }
    batch.promises.push(new Promise((resolve, reject) => {
        batch.batch.add(web3.eth[methodName].request.apply(this,args.concat( 
            (e,v) => {
                return resolve({key:key, result:e ? null : v});
            }
        )));
    }));
}

async function signTransaction(contractName, address, methodName, args, options){
    var tx = await createTransaction(contractName, address, methodName, args, options);
    var signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    return {tx:tx, signedTx:signedTx};
}
async function createTransaction(contractName, address, methodName, args, options){
    console.log("Sending " + contractName + "." + methodName, args);    
    var nonce = (options && options.nonce) ? options.nonce : await web3.eth.getTransactionCount(myAddress);
    var contract = contracts[address];
    if (!contract){
        var abi = getAbi(contractName);
        contract = new web3.eth.Contract(abi, address);
        contracts[address] = contract;
    }
    var method = contract.methods[methodName].apply(this, args);
    var data = method.encodeABI();    
    var gas;

    try {
        gas = (options && (options.gas || options.gasLimit)) || (await method.estimateGas({from: myAddress, value: (options && options.value) || 0})) * 2;
        // var gasLimit = (await web3.eth.getBlock("latest")).gasLimit;
        if (gas > blockGasLimit) {
            gas = blockGasLimit;
        }
    } catch (e) {
        try {
            await call(contractName, address, methodName, args, options)
        } catch(e2) {
            throw e2;
        }
        console.log(e);
        throw e;
    }

    var gasPrice = (options && options.gasPrice) ? options.gasPrice : await getGasPrice();

    var tx = {
        nonce: "0x" + new BigNumber(nonce.toString()).toString(16),
        gasPrice: "0x" + new BigNumber(gasPrice.toString()).toString(16),
        gas:"0x" + new BigNumber(gas.toString()).toString(16),
        to: address,
        value: "0x" + new BigNumber((options && options.value) || 0).toString(16),
        data: data
    }
    console.log(tx);
    return tx;
}
async function send(contractName, address, methodName, args, options){
    let {tx, signedTx} = await signTransaction(contractName, address, methodName, args, options);
    var receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('transactionHash', (hash) => {
        console.log(contractName + "." + methodName + " transactionHash " + hash)
    })
    .on('receipt', (receipt) => {
        console.log(contractName + "." + methodName + " receipt " + JSON.stringify(receipt))
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log(contractName + "." + methodName + " confirmation " + confirmationNumber)
    })
    .on('error', (error) => {
        console.log(contractName + "." + methodName + " error " + JSON.stringify(error))
    });
    return receipt;
    //return {transactionHash:receipt.transactionHash, tx: tx, receipt: receipt};
}
async function batchSend(contractName, address, methodName, args, options, callback){
    let {tx, signedTx} = await signTransaction(contractName, address, methodName, args, options);
    var request = web3.eth.sendSignedTransaction.request(signedTx.rawTransaction, (e,v)=>{callback(e,v,signedTx.transactionHash)});
    return {transactionHash:signedTx.transactionHash, request: request};
}
function newBatchRequest() {
    return {
        batch: new web3.BatchRequest(),
        promises: [],
        execute: function(){this.batch.execute(); return Promise.all(this.promises)}
    }
}
async function balanceOf(account){
    var result = await web3.eth.getBalance(account)
    return web3.utils.fromWei(result, "ether")
}
async function getTransactionReceipt(transactionHash) {
    return web3.eth.getTransactionReceipt(transactionHash);
}
function _web3(){
    return web3;
}

function getContractEventTopics(contractName) {
    debugger
    let events = getAbi(contractName).filter(e => e.type=="event");
    let eventMap = {};

    for (let i = 0 ; i < events.length ; i++) {
        let topic = web3.utils.soliditySha3(events[i].name + "(" + events[i].inputs.map(e=>e.type).join(",") + ")");
        eventMap[topic] = events[i];
    }
    return eventMap;
}
async function getPastEvents(fromBlock, toBlock, contractEvents, address, eventTypes) {
    console.log("getPastEvents", fromBlock, toBlock, address, eventTypes)
    try {
        let logs = await web3.eth.getPastLogs({
            fromBlock: fromBlock,   
            toBlock: toBlock,
            address: address
        })
        let results = [];
        if (logs) {
            if (!Array.isArray(logs)) {
                logs = [logs];
            }
            for (let i = 0 ; i < logs.length ; i++) {
                let e = logs[i];
                let event = contractEvents[e.topics[0]];
                if (event)
                if (!eventTypes || eventTypes.includes(event.name)) {
                    let log = web3.eth.abi.decodeLog(event.inputs, e.data, e.topics.slice(1));
                    log.__name = event.name;
                    log.__address = e.address;
                    log.__blockNumber = e.blockNumber;
                    log.__transactionHash = e.transactionHash;
                    results.push(log);
                }
            }
        }

        return results;
    } catch (e) {
        console.log(e);
    }
}

function fromTokenAmount(token, amount) {
    return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(-Number(token.decimals)).toFixed();
}

function toTokenAmount(token, amount) {
    return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(Number(token.decimals)).decimalPlaces(0, BigNumber.ROUND_FLOOR);
}

function toWei(amount) {
    return (BigNumber.isBigNumber(amount) ? amount : new BigNumber(amount.toString())).shiftedBy(18).decimalPlaces(0);
}

module.exports = {
    nullAddress: nullAddress,
    balanceOf: balanceOf,
    padLeft: padLeft,
    padRight: padRight,
    numberToBytes32: numberToBytes32,
    addressToBytes32: addressToBytes32,
    addressToBytes32Right: addressToBytes32Right,
    stringToBytes32: stringToBytes32,
    deploy: deploy,
    send: send,
    batchSend: batchSend,
    call: call,
    batchCall: batchCall,
    batchEthCall: batchEthCall,
    getEvent: getEvent,
    getEventTopic: getEventTopic,
    parseReceiptForEvent: parseReceiptForEvent,
    setPrivateKey: setPrivateKey,
    setAddress: setAddress,
    getAddress: getAddress,
    newBatchRequest:newBatchRequest,
    getTransactionReceipt:getTransactionReceipt,
    web3: _web3,
    callEthCall: callEthCall,
    getContractEventTopics: getContractEventTopics,
    getPastEvents: getPastEvents,
    fromTokenAmount: fromTokenAmount,
    toTokenAmount: toTokenAmount,
    toWei: toWei,
    network: network
}
