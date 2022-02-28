"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkPriceGuardBinance = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/contracts/OSWAP_OracleChainlinkPriceGuardBinance.json");
class OSWAP_OracleChainlinkPriceGuardBinance extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.factory, eth_wallet_1.Utils.toString(params.maxValue), eth_wallet_1.Utils.toString(params.deviation), params.returnAmmPrice);
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
    async decimals_1(param1) {
        let result = await this.methods('decimals', param1);
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.methods('factory');
        return result;
    }
    async getLatestPrice(params) {
        let result = await this.methods('getLatestPrice', params.from, params.to, params.payload);
        return new eth_wallet_1.BigNumber(result);
    }
    async getPriceInfo(params) {
        let result = await this.methods('getPriceInfo', params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount));
        return {
            chainlinkPrice: new eth_wallet_1.BigNumber(result.chainlinkPrice),
            ammPrice: new eth_wallet_1.BigNumber(result.ammPrice),
            usdAmount: new eth_wallet_1.BigNumber(result.usdAmount)
        };
    }
    async getRatio(params) {
        let result = await this.methods('getRatio', params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), params.payload);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async high() {
        let result = await this.methods('high');
        return new eth_wallet_1.BigNumber(result);
    }
    async isSupported(params) {
        let result = await this.methods('isSupported', params.from, params.to);
        return result;
    }
    async low() {
        let result = await this.methods('low');
        return new eth_wallet_1.BigNumber(result);
    }
    async maxValue() {
        let result = await this.methods('maxValue');
        return new eth_wallet_1.BigNumber(result);
    }
    async priceFeedAddresses(param1) {
        let result = await this.methods('priceFeedAddresses', param1);
        return result;
    }
    async returnAmmPrice() {
        let result = await this.methods('returnAmmPrice');
        return result;
    }
    async wethDecimals() {
        let result = await this.methods('wethDecimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async wethPriceFeed() {
        let result = await this.methods('wethPriceFeed');
        return result;
    }
}
exports.OSWAP_OracleChainlinkPriceGuardBinance = OSWAP_OracleChainlinkPriceGuardBinance;
