"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkGeneric = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_OracleChainlinkGeneric_json_1 = __importDefault(require("./OSWAP_OracleChainlinkGeneric.json"));
class OSWAP_OracleChainlinkGeneric extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleChainlinkGeneric_json_1.default.abi, OSWAP_OracleChainlinkGeneric_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.weth, params.tokens, params.pricefeeds], options);
    }
    assign() {
        let WETH_call = async (options) => {
            let result = await this.call('WETH', [], options);
            return result;
        };
        this.WETH = WETH_call;
        let chainlinkDeicmals_call = async (options) => {
            let result = await this.call('chainlinkDeicmals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.chainlinkDeicmals = chainlinkDeicmals_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getLatestPriceParams = (params) => [params.from, params.to, this.wallet.utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params, options) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let getRatioParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.param3), this.wallet.utils.toString(params.param4), this.wallet.utils.stringToBytes(params.param5)];
        let getRatio_call = async (params, options) => {
            let result = await this.call('getRatio', getRatioParams(params), options);
            return {
                numerator: new eth_contract_1.BigNumber(result.numerator),
                denominator: new eth_contract_1.BigNumber(result.denominator)
            };
        };
        this.getRatio = getRatio_call;
        let isSupportedParams = (params) => [params.from, params.to];
        let isSupported_call = async (params, options) => {
            let result = await this.call('isSupported', isSupportedParams(params), options);
            return result;
        };
        this.isSupported = isSupported_call;
        let priceFeedAddresses_call = async (param1, options) => {
            let result = await this.call('priceFeedAddresses', [param1], options);
            return result;
        };
        this.priceFeedAddresses = priceFeedAddresses_call;
    }
}
exports.OSWAP_OracleChainlinkGeneric = OSWAP_OracleChainlinkGeneric;
