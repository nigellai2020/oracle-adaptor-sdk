const fs = require('fs');
const path = require('path');
const Web3 = require('web3');
const BigNumber = require('bignumber.js');

const eth = require("./eth");
const Config = fs.existsSync(path.join(__dirname,"./Config.json")) ? require("./Config") : {};

const WETH = {
    mainnet: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    ropsten: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    rinkeby: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    kovan: "0xd0A1E359811322d97991E03f863a0C30C2cF029C"
}

async function deployMockOracle(){
    eth.setPrivateKey(Config.privateKey[0]);
    var MOCK_CL_USDC = await eth.deploy("MockChainlink", [18, "USDC", 1]);
    var MOCK_CL_USDT = await eth.deploy("MockChainlink", [18, "USDT", 1]);
    var MOCK_CL_DAI = await eth.deploy("MockChainlink", [18, "DAI", 1]);
    console.log(MOCK_CL_USDC, MOCK_CL_USDT, MOCK_CL_DAI);

    var receipt = await eth.send("MockChainlink", MOCK_CL_USDC, "setRoundData", [1, Web3.utils.toWei((1/1610).toString().substring(0,20)), 1, 1, 1])    
    var receipt = await eth.send("MockChainlink", MOCK_CL_USDT, "setRoundData", [1, Web3.utils.toWei((1/1590).toString().substring(0,20)), 1, 1, 1])
    var receipt = await eth.send("MockChainlink", MOCK_CL_DAI, "setRoundData", [1, Web3.utils.toWei((1/1600).toString().substring(0,20)), 1, 1, 1])

    var chainlink = 
`{
    "DAI": {"WETH9": "${MOCK_CL_USDC}"},
    "USDC": {"WETH9": "${MOCK_CL_USDT}"},
    "USDT": {"WETH9": "${MOCK_CL_DAI}"}
}`

    fs.writeFileSync(path.join(__dirname,"./chainlink."+Config.network+".json"), chainlink)
};
async function deployOracleChainlinkTestnet(){
    eth.setPrivateKey(Config.privateKey[0]);
    const Chainlink = require("./chainlink."+(Config.network));
    const Address = require("./addresses/" + Config.network + ".json");

    var oracle = await eth.deploy("OSWAP_OracleChainlinkTestnet", [Address.WETH9, [Address.DAI, Address.USDT, Address.USDC], [Chainlink.DAI.WETH9, Chainlink.USDT.WETH9, Chainlink.USDC.WETH9]]);
    console.log(oracle);
};

// kovan: 0xE3CDC4E88F565f2844F270B28684aEfe11868db8
async function deploySignedOracle(){
    eth.setPrivateKey(Config.privateKey[0]);
    var oracle = await eth.deploy("OSWAP_OracleSigned", [eth.getAddress()]);
    console.log(oracle);
}
async function getSignedOracleNonce(oracle){
    var nonce = await eth.call("OSWAP_OracleSigned", oracle, "nonce");
    console.log(nonce);
}
async function getSignedPriceData(oracle, from, to, price, nonce, expire, chainId){
    console.log(oracle, from, to, price, expire, nonce, chainId);
    price = Web3.utils.padLeft(Web3.utils.numberToHex(Web3.utils.toWei(price)), 64).replace("0x", "");
    nonce = Web3.utils.padLeft(Web3.utils.numberToHex(nonce), 64).replace("0x", "");
    expire = Math.floor(Date.now() / 1000) + Number(expire);
    expire = Web3.utils.padLeft(Web3.utils.numberToHex(expire), 64).replace("0x", "");
    chainId = Web3.utils.padLeft(Web3.utils.numberToHex(chainId), 64).replace("0x", "");

    var data = "0x" + oracle.replace("0x", "") + 
                      from.replace("0x", "") + 
                      to.replace("0x", "") + 
                      price +
                      nonce +
                      expire +
                      chainId;

    // data = Web3.utils.soliditySha3(data);
    // var prefix = "\x19Ethereum Signed Message:\n32"
    // var data = "0x19457468657265756d205369676e6564204d6573736167653a0a3332" + data.replace("0x", "");
    data = Web3.utils.soliditySha3(data);

    const web3 = eth.web3();

    var signature = web3.eth.accounts.sign(data, Config.privateKey[0]);
    var payload = "0x" + price + nonce + expire + signature.signature.replace("0x","");

    console.log(payload)
    return payload;
}

function main(){
    var args = process.argv.slice(2);    
    var command = args[0];    
    switch(command) {
        case "deployMockOracle":
            deployMockOracle();
            break;
        case "deploySignedOracle":
            deploySignedOracle();
            break;s
        case "getSignedOracleNonce":
            getSignedOracleNonce(args[1]);
            break;s
        case "getSignedPriceData":
            getSignedPriceData(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
            break;
        case "deployOracleChainlinkTestnet":
            deployOracleChainlinkTestnet();
            break;
        default:
            console.log("unknown command");
            console.log("commands are:")
            console.log("deployMockOracle");
            console.log("deploySignedOracle");
            console.log("getSignedOracleNonce(oracle)");
            console.log("getSignedPriceData(oracle, from, to, price, nonce, expire, chainId)");
            console.log("deployOracleChainlinkTestnet");
            break;
    }
}

main();