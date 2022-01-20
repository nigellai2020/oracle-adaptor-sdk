"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleSigned = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/contracts/OSWAP_OracleSigned.json");
class OSWAP_OracleSigned extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(signer) {
        return this._deploy(signer);
    }
    async decimals() {
        let result = await this.methods('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.from, params.to, params.payload);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), params.payload);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.param1, params.param2);
        return result;
    }
    async sequenceNumber() {
        let result = await this.methods('sequenceNumber');
        return new eth_wallet_1.BigNumber(result);
    }
    async signer() {
        let result = await this.methods('signer');
        return result;
    }
    async updateSequenceNumber(params) {
        let result = await this.methods('updateSequenceNumber', params.from, params.to, params.payload);
        return result;
    }
}
exports.OSWAP_OracleSigned = OSWAP_OracleSigned;
