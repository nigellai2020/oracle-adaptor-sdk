import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleConstantLimited.json";

export interface IDeployParams {token0:string[];token1:string[];price0:(number|BigNumber)[];price1:(number|BigNumber)[];limit0:(number|BigNumber)[];limit1:(number|BigNumber)[]}
export interface IGetLatestPriceParams {from:string;to:string;param3:string}
export interface IGetRatioParams {from:string;to:string;fromAmount:number|BigNumber;toAmount:number|BigNumber;payload:string}
export interface IIsSupportedParams {param1:string;param2:string}
export interface ILimitsParams {param1:string;param2:string;param3:boolean}
export interface IPricesParams {param1:string;param2:string}
export class OSWAP_OracleConstantLimited extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.token0,params.token1,Utils.toString(params.price0),Utils.toString(params.price1),Utils.toString(params.limit0),Utils.toString(params.limit1)]);
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    getLatestPrice: {
        (params: IGetLatestPriceParams): Promise<BigNumber>;
    }
    getRatio: {
        (params: IGetRatioParams): Promise<{numerator:BigNumber,denominator:BigNumber}>;
    }
    isSupported: {
        (params: IIsSupportedParams): Promise<boolean>;
    }
    limits: {
        (params: ILimitsParams): Promise<BigNumber>;
    }
    prices: {
        (params: IPricesParams): Promise<BigNumber>;
    }
    private assign(){
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let getLatestPriceParams = (params: IGetLatestPriceParams) => [params.from,params.to,Utils.stringToBytes(params.param3)];
        let getLatestPrice_call = async (params: IGetLatestPriceParams): Promise<BigNumber> => {
            let result = await this.call('getLatestPrice',getLatestPriceParams(params));
            return new BigNumber(result);
        }
        this.getLatestPrice = getLatestPrice_call
        let getRatioParams = (params: IGetRatioParams) => [params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),Utils.stringToBytes(params.payload)];
        let getRatio_call = async (params: IGetRatioParams): Promise<{numerator:BigNumber,denominator:BigNumber}> => {
            let result = await this.call('getRatio',getRatioParams(params));
            return {
                numerator: new BigNumber(result.numerator),
                denominator: new BigNumber(result.denominator)
            };
        }
        this.getRatio = getRatio_call
        let isSupportedParams = (params: IIsSupportedParams) => [params.param1,params.param2];
        let isSupported_call = async (params: IIsSupportedParams): Promise<boolean> => {
            let result = await this.call('isSupported',isSupportedParams(params));
            return result;
        }
        this.isSupported = isSupported_call
        let limitsParams = (params: ILimitsParams) => [params.param1,params.param2,params.param3];
        let limits_call = async (params: ILimitsParams): Promise<BigNumber> => {
            let result = await this.call('limits',limitsParams(params));
            return new BigNumber(result);
        }
        this.limits = limits_call
        let pricesParams = (params: IPricesParams) => [params.param1,params.param2];
        let prices_call = async (params: IPricesParams): Promise<BigNumber> => {
            let result = await this.call('prices',pricesParams(params));
            return new BigNumber(result);
        }
        this.prices = prices_call
    }
}