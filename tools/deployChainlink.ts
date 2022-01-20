import Web3 from "web3";
import fs from "fs"
import path from "path"
import mkdirp from "mkdirp"

import {Wallet, Utils} from "@ijstech/eth-wallet";

const Config = require("../Config");
const networks = require("./networks");

import * as OA from "../src/contracts";
import * as OA2 from "../test/src/contracts";

async function run() {
    let provider = new Web3.providers.HttpProvider(networks[Config.network].rpc, networks[Config.network].rpcOptions);
    let wallet = new Wallet(provider);

    wallet.privateKey = Config.privateKey[0];

    var addressesDirectory = path.join(__dirname, "../addresses");
    if (!fs.existsSync(addressesDirectory)) {
        await mkdirp(addressesDirectory);
    }
    var outputPath = path.join(__dirname, "../addresses/" + Config.network + ".json");
    var Address = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, 'utf8').trim() || "{}") : {};

    let chainlink:OA2.MockChainlink;
    try {
        switch (Config.network) {
            case "mainnet":
                Address["OAXDEX_OracleChainlink"] = await new OA.OSWAP_OracleChainlink(wallet).deploy();
                break;
                case "kovan":
                    Address["OAXDEX_OracleChainlink"] = await new OA2.OSWAP_OracleChainlinkKovan(wallet).deploy({dai:Address["DAI"], usdc:Address["USDC"], usdt:Address["USDT"]});
                    break;
                case "rinkeby":
                    var MOCK_CL_USDT = await (chainlink = new OA2.MockChainlink(wallet)).deploy({decimals:18, description:"USDT", version:1});
                    var receipt = await chainlink.setRoundData({roundId:1, answer:Utils.toDecimals((1/1590).toString().substring(0,20)), startedAt:1, updatedAt:1, answeredInRound:1});
                    Address["MockChainlinkUSDT"] = MOCK_CL_USDT;
                    Address["OAXDEX_OracleChainlink"] = await new OA2.OSWAP_OracleChainlinkRinkeby(wallet).deploy({dai:Address["DAI"], usdc:Address["USDC"]/*, usdt:Address["USDT"], MOCK_CL_USDT*/});
                    break;
                case "ropsten":
                    Address["OAXDEX_OracleChainlink"] = await new OA2.OSWAP_OracleChainlinkRopsten(wallet).deploy({dai:Address["DAI"], usdc:Address["USDC"], usdt:Address["USDT"]});
                    break;
                case "binance":
                case "binanceMainnet":
                    Address["OAXDEX_OracleChainlink"] = await new OA.OSWAP_OracleChainlinkBinance(wallet);
                    break;
                case "binanceTestnet":
                    Address["OAXDEX_OracleChainlink"] = await new OA2.OSWAP_OracleChainlinkBinanceTestnet(wallet).deploy({
                        wbnb:Address.WETH9,  // WBNB
                        dai:Address["DAI"]
                    });
                    break;
                default: {
                    var MOCK_CL_DAI = await (chainlink = new OA2.MockChainlink(wallet)).deploy({decimals:18, description:"DAI", version:1});
                    var receipt = await chainlink.setRoundData({roundId:1, answer:Utils.toDecimals((1/1600).toString().substring(0,20)), startedAt:1, updatedAt:1, answeredInRound:1});
                    Address["MockChainlinkDAI"] = MOCK_CL_DAI;

                    var MOCK_CL_USDC = await (chainlink = new OA2.MockChainlink(wallet)).deploy({decimals:18, description:"USDC", version:1});
                    var receipt = await chainlink.setRoundData({roundId:1, answer:Utils.toDecimals((1/1610).toString().substring(0,20)), startedAt:1, updatedAt:1, answeredInRound:1});
                    Address["MockChainlinkUSDC"] = MOCK_CL_USDC;

                    var MOCK_CL_USDT = await (chainlink = new OA2.MockChainlink(wallet)).deploy({decimals:18, description:"USDT", version:1});
                    var receipt = await chainlink.setRoundData({roundId:1, answer:Utils.toDecimals((1/1590).toString().substring(0,20)), startedAt:1, updatedAt:1, answeredInRound:1});
                    Address["MockChainlinkUSDT"] = MOCK_CL_USDT;

                    Address["OAXDEX_OracleChainlink"] = await new OA2.OSWAP_OracleChainlinkTestnet(wallet).deploy({
                        weth:Address.WETH9,
                        tokens:[Address["DAI"], Address["USDC"], Address["USDT"]],
                        pricefeed:[MOCK_CL_DAI, MOCK_CL_USDC, MOCK_CL_USDT]
                    });
                    break;
                }
        }
    } catch (e) {
        console.log(e);
    } finally {
        fs.writeFileSync(outputPath, JSON.stringify(Address, null, "    "), "utf8");
    }
}