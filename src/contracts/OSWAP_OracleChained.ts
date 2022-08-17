import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleChained.json";

export interface IDeployParams {from:string[];to:string[];count:(number|BigNumber)[];paths:string[];oracles:string[]}
export interface IGetLatestPriceParams {from:string;to:string;payload:string}
export interface IGetRatioParams {from:string;to:string;param3:number|BigNumber;param4:number|BigNumber;payload:string}
export interface IIsSupportedParams {from:string;to:string}
export interface IOraclesStoreParams {param1:string;param2:string;param3:number|BigNumber}
export interface IPathsStoreParams {param1:string;param2:string;param3:number|BigNumber}
export class OSWAP_OracleChained extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.from,params.to,Utils.toString(params.count),params.paths,params.oracles]);
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
    oraclesStore: {
        (params: IOraclesStoreParams): Promise<string>;
    }
    pathsStore: {
        (params: IPathsStoreParams): Promise<string>;
    }
    priceFeedAddresses: {
        (param1:string): Promise<string>;
    }
    private assign(){
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let getLatestPriceParams = (params: IGetLatestPriceParams) => [params.from,params.to,Utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params: IGetLatestPriceParams): Promise<BigNumber> => {
            let result = await this.call('getLatestPrice',getLatestPriceParams(params));
            return new BigNumber(result);
        }
        this.getLatestPrice = getLatestPrice_call
        let getRatioParams = (params: IGetRatioParams) => [params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),Utils.stringToBytes(params.payload)];
        let getRatio_call = async (params: IGetRatioParams): Promise<{numerator:BigNumber,denominator:BigNumber}> => {
            let result = await this.call('getRatio',getRatioParams(params));
            return {
                numerator: new BigNumber(result.numerator),
                denominator: new BigNumber(result.denominator)
            };
        }
        this.getRatio = getRatio_call
        let isSupportedParams = (params: IIsSupportedParams) => [params.from,params.to];
        let isSupported_call = async (params: IIsSupportedParams): Promise<boolean> => {
            let result = await this.call('isSupported',isSupportedParams(params));
            return result;
        }
        this.isSupported = isSupported_call
        let oraclesStoreParams = (params: IOraclesStoreParams) => [params.param1,params.param2,Utils.toString(params.param3)];
        let oraclesStore_call = async (params: IOraclesStoreParams): Promise<string> => {
            let result = await this.call('oraclesStore',oraclesStoreParams(params));
            return result;
        }
        this.oraclesStore = oraclesStore_call
        let pathsStoreParams = (params: IPathsStoreParams) => [params.param1,params.param2,Utils.toString(params.param3)];
        let pathsStore_call = async (params: IPathsStoreParams): Promise<string> => {
            let result = await this.call('pathsStore',pathsStoreParams(params));
            return result;
        }
        this.pathsStore = pathsStore_call
        let priceFeedAddresses_call = async (param1:string): Promise<string> => {
            let result = await this.call('priceFeedAddresses',[param1]);
            return result;
        }
        this.priceFeedAddresses = priceFeedAddresses_call
    }
}