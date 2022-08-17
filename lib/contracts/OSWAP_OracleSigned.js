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
    assign() {
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let getLatestPriceParams = (params) => [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)];
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
        let sequenceNumber_call = async () => {
            let result = await this.call('sequenceNumber');
            return new eth_wallet_1.BigNumber(result);
        };
        this.sequenceNumber = sequenceNumber_call;
        let signer_call = async () => {
            let result = await this.call('signer');
            return result;
        };
        this.signer = signer_call;
        let updateSequenceNumberParams = (params) => [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)];
        let updateSequenceNumber_send = async (params) => {
            let result = await this.send('updateSequenceNumber', updateSequenceNumberParams(params));
            return result;
        };
        let updateSequenceNumber_call = async (params) => {
            let result = await this.call('updateSequenceNumber', updateSequenceNumberParams(params));
            return;
        };
        this.updateSequenceNumber = Object.assign(updateSequenceNumber_send, {
            call: updateSequenceNumber_call
        });
    }
}
exports.OSWAP_OracleSigned = OSWAP_OracleSigned;
