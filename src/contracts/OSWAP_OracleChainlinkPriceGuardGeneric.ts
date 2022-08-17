import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleChainlinkPriceGuardGeneric.json";

export interface IDeployParams {weth:string;wethPriceFeed:string;tokens:string[];pricefeeds:string[];factory:string;maxValue:number|BigNumber;deviation:number|BigNumber;returnAmmPrice:boolean}
export interface IGetLatestPriceParams {from:string;to:string;payload:string}
export interface IGetPriceInfoParams {from:string;to:string;fromAmount:number|BigNumber;toAmount:number|BigNumber}
export interface IGetRatioParams {from:string;to:string;fromAmount:number|BigNumber;toAmount:number|BigNumber;payload:string}
export interface IIsSupportedParams {from:string;to:string}
export class OSWAP_OracleChainlinkPriceGuardGeneric extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.weth,params.wethPriceFeed,params.tokens,params.pricefeeds,params.factory,Utils.toString(params.maxValue),Utils.toString(params.deviation),params.returnAmmPrice]);
    }
    WETH: {
        (): Promise<string>;
    }
    chainlinkDeicmals: {
        (): Promise<BigNumber>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    decimals_1: {
        (param1:string): Promise<BigNumber>;
    }
    factory: {
        (): Promise<string>;
    }
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    }
    getPriceInfo: {
        (params: IGetPriceInfoParams): Promise<{chainlinkPrice:BigNumber,ammPrice:BigNumber,usdAmount:BigNumber}>;
    }
    getRatio: {
        (params: IGetRatioParams): Promise<{numerator:BigNumber,denominator:BigNumber}>;
    }
    high: {
        (): Promise<BigNumber>;
    }
    isSupported: {
        (params: IIsSupportedParams): Promise<boolean>;
    }
    low: {
        (): Promise<BigNumber>;
    }
    maxValue: {
        (): Promise<BigNumber>;
    }
    priceFeedAddresses: {
        (param1:string): Promise<string>;
    }
    returnAmmPrice: {
        (): Promise<boolean>;
    }
    wethDecimals: {
        (): Promise<BigNumber>;
    }
    wethPriceFeed: {
        (): Promise<string>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let chainlinkDeicmals_call = async (): Promise<BigNumber> => {
            let result = await this.call('chainlinkDeicmals');
            return new BigNumber(result);
        }
        this.chainlinkDeicmals = chainlinkDeicmals_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let decimals_1_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('decimals',[param1]);
            return new BigNumber(result);
        }
        this.decimals_1 = decimals_1_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getLatestPriceParams = (params: IGetLatestPriceParams) => [params.from,params.to,Utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params: IGetLatestPriceParams): Promise<BigNumber> => {
            let result = await this.call('getLatestPrice',getLatestPriceParams(params));
            return new BigNumber(result);
        }
        this.getLatestPrice = getLatestPrice_call
        let getPriceInfoParams = (params: IGetPriceInfoParams) => [params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount)];
        let getPriceInfo_call = async (params: IGetPriceInfoParams): Promise<{chainlinkPrice:BigNumber,ammPrice:BigNumber,usdAmount:BigNumber}> => {
            let result = await this.call('getPriceInfo',getPriceInfoParams(params));
            return {
                chainlinkPrice: new BigNumber(result.chainlinkPrice),
                ammPrice: new BigNumber(result.ammPrice),
                usdAmount: new BigNumber(result.usdAmount)
            };
        }
        this.getPriceInfo = getPriceInfo_call
        let getRatioParams = (params: IGetRatioParams) => [params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),Utils.stringToBytes(params.payload)];
        let getRatio_call = async (params: IGetRatioParams): Promise<{numerator:BigNumber,denominator:BigNumber}> => {
            let result = await this.call('getRatio',getRatioParams(params));
            return {
                numerator: new BigNumber(result.numerator),
                denominator: new BigNumber(result.denominator)
            };
        }
        this.getRatio = getRatio_call
        let high_call = async (): Promise<BigNumber> => {
            let result = await this.call('high');
            return new BigNumber(result);
        }
        this.high = high_call
        let isSupportedParams = (params: IIsSupportedParams) => [params.from,params.to];
        let isSupported_call = async (params: IIsSupportedParams): Promise<boolean> => {
            let result = await this.call('isSupported',isSupportedParams(params));
            return result;
        }
        this.isSupported = isSupported_call
        let low_call = async (): Promise<BigNumber> => {
            let result = await this.call('low');
            return new BigNumber(result);
        }
        this.low = low_call
        let maxValue_call = async (): Promise<BigNumber> => {
            let result = await this.call('maxValue');
            return new BigNumber(result);
        }
        this.maxValue = maxValue_call
        let priceFeedAddresses_call = async (param1:string): Promise<string> => {
            let result = await this.call('priceFeedAddresses',[param1]);
            return result;
        }
        this.priceFeedAddresses = priceFeedAddresses_call
        let returnAmmPrice_call = async (): Promise<boolean> => {
            let result = await this.call('returnAmmPrice');
            return result;
        }
        this.returnAmmPrice = returnAmmPrice_call
        let wethDecimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('wethDecimals');
            return new BigNumber(result);
        }
        this.wethDecimals = wethDecimals_call
        let wethPriceFeed_call = async (): Promise<string> => {
            let result = await this.call('wethPriceFeed');
            return result;
        }
        this.wethPriceFeed = wethPriceFeed_call
    }
}