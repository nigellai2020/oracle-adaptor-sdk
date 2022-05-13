"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleSigned = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleSigned_json_1 = __importDefault(require("./OSWAP_OracleSigned.json"));
class OSWAP_OracleSigned extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleSigned_json_1.default.abi, OSWAP_OracleSigned_json_1.default.bytecode);
        this.assign();
    }
    deploy(signer) {
        return this.__deploy([signer]);
    }
    async decimals() {
        let result = await this.call('decimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getRatio(params) {
        let result = await this.call('getRatio', [params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.call('isSupported', [params.param1, params.param2]);
        return result;
    }
    async sequenceNumber() {
        let result = await this.call('sequenceNumber');
        return new eth_wallet_1.BigNumber(result);
    }
    async signer() {
        let result = await this.call('signer');
        return result;
    }
    async updateSequenceNumber_send(params) {
        let result = await this.send('updateSequenceNumber', [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return result;
    }
    async updateSequenceNumber_call(params) {
        let result = await this.call('updateSequenceNumber', [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return;
    }
    assign() {
        this.updateSequenceNumber = Object.assign(this.updateSequenceNumber_send, { call: this.updateSequenceNumber_call });
    }
}
exports.OSWAP_OracleSigned = OSWAP_OracleSigned;
