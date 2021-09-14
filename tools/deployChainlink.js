const Web3 = require("web3");
const fs = require('fs');
const path = require('path');
const mkdirp = require("mkdirp");

const Config = require("../Config");
const eth = require("../eth");

const web3 = eth.web3();

async function run() {
    var privateKey = Config.privateKey[0];
    eth.setPrivateKey(privateKey);

    var addressesDirectory = path.join(__dirname, "../addresses");
    if (!fs.existsSync(addressesDirectory)) {
        await mkdirp(addressesDirectory);
    }
    var outputPath = path.join(__dirname, "../addresses/" + Config.network + ".json");
    var Address = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8').trim() || "{}") : {};

    try {
        console.log("deployer ETH balance: " + web3.utils.fromWei(await web3.eth.getBalance(eth.getAddress())));
        switch (Config.network) {
            case "mainnet":
                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlink");
                break;
            case "kovan":
                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkKovan", [Address["DAI"], Address["USDC"], Address["USDT"]]);
                break;
            case "rinkeby":
                var MOCK_CL_USDT = await eth.deploy("MockChainlink", [18, "USDT", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_USDT, "setRoundData", [1, Web3.utils.toWei((1/1590).toString().substring(0,20)), 1, 1, 1])
                Address["MockChainlinkUSDT"] = MOCK_CL_USDT;
                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkRinkeby", [Address["DAI"], Address["USDC"], Address["USDT"], MOCK_CL_USDT]);
                break;
            case "ropsten":
                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkRopsten", [Address["DAI"], Address["USDC"], Address["USDT"]]);
                break;
            case "binance":
            case "binanceMainnet":
                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkBinance");
                break;
            case "binanceTestnet":
                var MOCK_CL_USDC = await eth.deploy("MockChainlink", [18, "USDC", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_USDC, "setRoundData", [1, Web3.utils.toWei((1/240).toString().substring(0,20)), 1, 1, 1])    
                Address["MockChainlinkUSDC"] = MOCK_CL_USDC;

                var MOCK_CL_USDT = await eth.deploy("MockChainlink", [18, "USDT", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_USDT, "setRoundData", [1, Web3.utils.toWei((1/250).toString().substring(0,20)), 1, 1, 1])
                Address["MockChainlinkUSDT"] = MOCK_CL_USDT;

                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkBinanceTestnet", [
                    Address.WETH9,  // WBNB
                    Address["DAI"], Address["USDC"], Address["USDT"], 
                    Address["MockChainlinkUSDC"], Address["MockChainlinkUSDT"]
                ]);
                break;
            default: {
                var MOCK_CL_DAI = await eth.deploy("MockChainlink", [18, "DAI", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_DAI, "setRoundData", [1, Web3.utils.toWei((1/1600).toString().substring(0,20)), 1, 1, 1])
                Address["MockChainlinkDAI"] = MOCK_CL_DAI;

                var MOCK_CL_USDC = await eth.deploy("MockChainlink", [18, "USDC", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_USDC, "setRoundData", [1, Web3.utils.toWei((1/1610).toString().substring(0,20)), 1, 1, 1])    
                Address["MockChainlinkUSDC"] = MOCK_CL_USDC;

                var MOCK_CL_USDT = await eth.deploy("MockChainlink", [18, "USDT", 1]);
                var receipt = await eth.send("MockChainlink", MOCK_CL_USDT, "setRoundData", [1, Web3.utils.toWei((1/1590).toString().substring(0,20)), 1, 1, 1])
                Address["MockChainlinkUSDT"] = MOCK_CL_USDT;

                Address["OAXDEX_OracleChainlink"] = await eth.deploy("OAXDEX_OracleChainlinkTestnet",  [
                    Address.WETH9, 
                    [Address["DAI"], Address["USDC"], Address["USDT"]], 
                    [MOCK_CL_DAI, MOCK_CL_USDC, MOCK_CL_USDT]
                ]);
                break;
            }
        }
        console.log("Deployment done. Addresses written to ../addresses/" + Config.network + ".json");
        console.log("deployer ETH balance: " + web3.utils.fromWei(await web3.eth.getBalance(eth.getAddress())));
    } catch (e) {
        console.log(e);
    } finally {
        fs.writeFileSync(outputPath, JSON.stringify(Address, null, "    "), "utf8");
    }
}
run();