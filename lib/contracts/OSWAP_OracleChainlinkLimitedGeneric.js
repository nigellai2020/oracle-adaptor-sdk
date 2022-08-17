"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkLimitedGeneric = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleChainlinkLimitedGeneric_json_1 = __importDefault(require("./OSWAP_OracleChainlinkLimitedGeneric.json"));
class OSWAP_OracleChainlinkLimitedGeneric extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleChainlinkLimitedGeneric_json_1.default.abi, OSWAP_OracleChainlinkLimitedGeneric_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.factory, params.weth, params.token, params.pricefeeds]);
    }
    assign() {
        let WETH_call = async () => {
            let result = await this.call('WETH');
            return result;
        };
        this.WETH = WETH_call;
        let chainlinkDeicmals_call = async () => {
            let result = await this.call('chainlinkDeicmals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.chainlinkDeicmals = chainlinkDeicmals_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let getLatestPriceParams = (params) => [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params) => {
            let result = await this.call('getLatestPrice', getLatestPriceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getLatestPrice = getLatestPrice_call;
        let getRatioParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), eth_wallet_1.Utils.stringToBytes(params.payload)];
        let getRatio_call = async (params) => {
            let result = await this.call('getRatio', getRatioParams(params));
            return {
                numerator: new eth_wallet_1.BigNumber(result.numerator),
                denominator: new eth_wallet_1.BigNumber(result.denominator)
            };
        };
        this.getRatio = getRatio_call;
        let isSupportedParams = (params) => [params.from, params.to];
        let isSupported_call = async (params) => {
            let result = await this.call('isSupported', isSupportedParams(params));
            return result;
        };
        this.isSupported = isSupported_call;
        let priceFeedAddresses_call = async (param1) => {
            let result = await this.call('priceFeedAddresses', [param1]);
            return result;
        };
        this.priceFeedAddresses = priceFeedAddresses_call;
    }
}
exports.OSWAP_OracleChainlinkLimitedGeneric = OSWAP_OracleChainlinkLimitedGeneric;
