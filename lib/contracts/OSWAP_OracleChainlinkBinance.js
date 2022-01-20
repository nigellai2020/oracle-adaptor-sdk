"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkBinance = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/contracts/OSWAP_OracleChainlinkBinance.json");
class OSWAP_OracleChainlinkBinance extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    async WETH() {
        let result = await this.methods('WETH');
        return result;
    }
    async _WBNB() {
        let result = await this.methods('_WBNB');
        return result;
    }
    async chainlinkDeicmals() {
        let result = await this.methods('chainlinkDeicmals');
        return new eth_wallet_1.BigNumber(result);
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
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.param3), eth_wallet_1.Utils.toString(params.param4), params.param5);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.from, params.to);
        return result;
    }
    async priceFeedAddresses(param1) {
        let result = await this.methods('priceFeedAddresses', param1);
        return result;
    }
}
exports.OSWAP_OracleChainlinkBinance = OSWAP_OracleChainlinkBinance;
