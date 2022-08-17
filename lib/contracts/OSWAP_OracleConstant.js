"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleConstant = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleConstant_json_1 = __importDefault(require("./OSWAP_OracleConstant.json"));
class OSWAP_OracleConstant extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleConstant_json_1.default.abi, OSWAP_OracleConstant_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.token0, params.token1, eth_wallet_1.Utils.toString(params.price0), eth_wallet_1.Utils.toString(params.price1)]);
    }
    assign() {
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getLatestPriceParams = (params) => [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.param3)];
        let getLatestPrice_call = async (params) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let getRatioParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), eth_wallet_1.Utils.stringToBytes(params.payload)];
        let getRatio_call = async (params) => {
            let result = await this.call('getRatio', getRatioParams(params));
            return {
                numerator: new eth_wallet_1.BigNumber(result.numerator),
                denominator: new eth_wallet_1.BigNumber(result.denominator)
            };
        };
        this.getRatio = getRatio_call;
        let isSupportedParams = (params) => [params.param1, params.param2];
        let isSupported_call = async (params) => {
            let result = await this.call('isSupported', isSupportedParams(params));
            return result;
        };
        this.isSupported = isSupported_call;
        let pricesParams = (params) => [params.param1, params.param2];
        let prices_call = async (params) => {
            let result = await this.call('prices', pricesParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.prices = prices_call;
    }
}
exports.OSWAP_OracleConstant = OSWAP_OracleConstant;
