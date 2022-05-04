"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkFiatGeneric = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleChainlinkFiatGeneric_json_1 = __importDefault(require("./OSWAP_OracleChainlinkFiatGeneric.json"));
class OSWAP_OracleChainlinkFiatGeneric extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleChainlinkFiatGeneric_json_1.default.abi, OSWAP_OracleChainlinkFiatGeneric_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.tokens, params.pricefeeds);
    }
    async WETH() {
        let result = await this.call('WETH');
        return result;
    }
    async chainlinkDeicmals() {
        let result = await this.call('chainlinkDeicmals');
        return new eth_wallet_1.BigNumber(result);
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.from, params.to, params.payload]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.call('getRatio', [params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), params.payload]);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.call('isSupported', [params.from, params.to]);
        return result;
    }
    async priceFeedAddresses(param1) {
        let result = await this.call('priceFeedAddresses', [param1]);
        return result;
    }
    assign() {
    }
}
exports.OSWAP_OracleChainlinkFiatGeneric = OSWAP_OracleChainlinkFiatGeneric;
