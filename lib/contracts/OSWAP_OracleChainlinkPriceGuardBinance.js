"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_OracleChainlinkPriceGuardBinance = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const OSWAP_OracleChainlinkPriceGuardBinance_json_1 = __importDefault(require("./OSWAP_OracleChainlinkPriceGuardBinance.json"));
class OSWAP_OracleChainlinkPriceGuardBinance extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_OracleChainlinkPriceGuardBinance_json_1.default.abi, OSWAP_OracleChainlinkPriceGuardBinance_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.factory, eth_wallet_1.Utils.toString(params.maxValue), eth_wallet_1.Utils.toString(params.deviation), params.returnAmmPrice]);
    }
    async WETH() {
        let result = await this.call('WETH');
        return result;
    }
    async _WBNB() {
        let result = await this.call('_WBNB');
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
    async decimals_1(param1) {
        let result = await this.call('decimals', [param1]);
        return new eth_wallet_1.BigNumber(result);
    }
    async factory() {
        let result = await this.call('factory');
        return result;
    }
    async getLatestPrice(params) {
        let result = await this.call('getLatestPrice', [params.from, params.to, eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getPriceInfo(params) {
        let result = await this.call('getPriceInfo', [params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount)]);
        return {
            chainlinkPrice: new eth_wallet_1.BigNumber(result.chainlinkPrice),
            ammPrice: new eth_wallet_1.BigNumber(result.ammPrice),
            usdAmount: new eth_wallet_1.BigNumber(result.usdAmount)
        };
    }
    async getRatio(params) {
        let result = await this.call('getRatio', [params.from, params.to, eth_wallet_1.Utils.toString(params.fromAmount), eth_wallet_1.Utils.toString(params.toAmount), eth_wallet_1.Utils.stringToBytes(params.payload)]);
        return {
            numerator: new eth_wallet_1.BigNumber(result.numerator),
            denominator: new eth_wallet_1.BigNumber(result.denominator)
        };
    }
    async high() {
        let result = await this.call('high');
        return new eth_wallet_1.BigNumber(result);
    }
    async isSupported(params) {
        let result = await this.call('isSupported', [params.from, params.to]);
        return result;
    }
    async low() {
        let result = await this.call('low');
        return new eth_wallet_1.BigNumber(result);
    }
    async maxValue() {
        let result = await this.call('maxValue');
        return new eth_wallet_1.BigNumber(result);
    }
    async priceFeedAddresses(param1) {
        let result = await this.call('priceFeedAddresses', [param1]);
        return result;
    }
    async returnAmmPrice() {
        let result = await this.call('returnAmmPrice');
        return result;
    }
    async wethDecimals() {
        let result = await this.call('wethDecimals');
        return new eth_wallet_1.BigNumber(result);
    }
    async wethPriceFeed() {
        let result = await this.call('wethPriceFeed');
        return result;
    }
    assign() {
    }
}
exports.OSWAP_OracleChainlinkPriceGuardBinance = OSWAP_OracleChainlinkPriceGuardBinance;
