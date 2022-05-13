"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleConstantLimited = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleConstantLimited_json_1 = __importDefault(require("./OSWAP_OracleConstantLimited.json"));
class OSWAP_OracleConstantLimited extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleConstantLimited_json_1.default.abi, OSWAP_OracleConstantLimited_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.token0, params.token1, eth_wallet_1.Utils.toString(params.price0), eth_wallet_1.Utils.toString(params.price1), eth_wallet_1.Utils.toString(params.limit0), eth_wallet_1.Utils.toString(params.limit1)]);
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.param3)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.call('getRatio', [params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.call('isSupported', [params.param1, params.param2]);
        return result;
    }
    async limits(params) {
        let result = await this.call('limits', [params.param1, params.param2, params.param3]);
        return new eth_wallet_1.BigNumber(result);
    }
    async prices(params) {
        let result = await this.call('prices', [params.param1, params.param2]);
        return new eth_wallet_1.BigNumber(result);
    }
    assign() {
    }
}
exports.OSWAP_OracleConstantLimited = OSWAP_OracleConstantLimited;
