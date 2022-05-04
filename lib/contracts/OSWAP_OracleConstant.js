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
        return this._deploy(params.token0, params.token1, eth_wallet_1.Utils.toString(params.price0), eth_wallet_1.Utils.toString(params.price1));
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.from, params.to, params.param3]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.call('getRatio', [params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), params.payload]);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.call('isSupported', [params.param1, params.param2]);
        return result;
    }
    async prices(params) {
        let result = await this.call('prices', [params.param1, params.param2]);
        return new eth_wallet_1.BigNumber(result);
    }
    assign() {
    }
}
exports.OSWAP_OracleConstant = OSWAP_OracleConstant;
