"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleConstantLimited = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/contracts/OSWAP_OracleConstantLimited.json");
class OSWAP_OracleConstantLimited extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.token0, params.token1, eth_wallet_1.Utils.toString(params.price0), eth_wallet_1.Utils.toString(params.price1), eth_wallet_1.Utils.toString(params.limit0), eth_wallet_1.Utils.toString(params.limit1));
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.from, params.to, params.param3);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), params.payload);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.param1, params.param2);
        return result;
    }
    async limits(params) {
        let result = await this.methods('limits', params.param1, params.param2, params.param3);
        return new eth_wallet_1.BigNumber(result);
    }
    async prices(params) {
        let result = await this.methods('prices', params.param1, params.param2);
        return new eth_wallet_1.BigNumber(result);
    }
}
exports.OSWAP_OracleConstantLimited = OSWAP_OracleConstantLimited;
