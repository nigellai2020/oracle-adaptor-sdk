"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleConstantLimited = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleConstantLimited_json_1 = __importDefault(require("./OSWAP_OracleConstantLimited.json"));
class OSWAP_OracleConstantLimited extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleConstantLimited_json_1.default.abi, OSWAP_OracleConstantLimited_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.token0, params.token1, this.wallet.utils.toString(params.price0), this.wallet.utils.toString(params.price1), this.wallet.utils.toString(params.limit0), this.wallet.utils.toString(params.limit1)], options);
    }
    assign() {
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getLatestPriceParams = (params) => [params.from, params.to, this.wallet.utils.stringToBytes(params.param3)];
        let getLatestPrice_call = async (params, options) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let getRatioParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.fromAmount), this.wallet.utils.toString(params.toAmount), this.wallet.utils.stringToBytes(params.payload)];
        let getRatio_call = async (params, options) => {
            let result = await this.call('getRatio', getRatioParams(params), options);
            return {
                numerator: new eth_contract_1.BigNumber(result.numerator),
                denominator: new eth_contract_1.BigNumber(result.denominator)
            };
        };
        this.getRatio = getRatio_call;
        let isSupportedParams = (params) => [params.param1, params.param2];
        let isSupported_call = async (params, options) => {
            let result = await this.call('isSupported', isSupportedParams(params), options);
            return result;
        };
        this.isSupported = isSupported_call;
        let limitsParams = (params) => [params.param1, params.param2, params.param3];
        let limits_call = async (params, options) => {
            let result = await this.call('limits', limitsParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.limits = limits_call;
        let pricesParams = (params) => [params.param1, params.param2];
        let prices_call = async (params, options) => {
            let result = await this.call('prices', pricesParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.prices = prices_call;
    }
}
exports.OSWAP_OracleConstantLimited = OSWAP_OracleConstantLimited;
