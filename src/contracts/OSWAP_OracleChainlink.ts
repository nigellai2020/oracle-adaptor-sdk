import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleChainlink.json";

export interface IGetLatestPriceParams {from:string;to:string;payload:string}
export interface IGetRatioParams {from:string;to:string;param3:number|BigNumber;param4:number|BigNumber;param5:string}
export interface IIsSupportedParams {from:string;to:string}
export class OSWAP_OracleChainlink extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    WETH: {
        (): Promise<string>;
    }
    _WETH: {
        (): Promise<string>;
    }
    chainlinkDeicmals: {
        (): Promise<BigNumber>;
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
    priceFeedAddresses: {
        (param1:string): Promise<string>;
    }
    private assign(){
        let WETH_call = async (): Promise<string> => {
            let result = await this.call('WETH');
            return result;
        }
        this.WETH = WETH_call
        let _WETH_call = async (): Promise<string> => {
            let result = await this.call('_WETH');
            return result;
        }
        this._WETH = _WETH_call
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
        let getLatestPriceParams = (params: IGetLatestPriceParams) => [params.from,params.to,Utils.stringToBytes(params.payload)];
        let getLatestPrice_call = async (params: IGetLatestPriceParams): Promise<BigNumber> => {
            let result = await this.call('getLatestPrice',getLatestPriceParams(params));
            return new BigNumber(result);
        }
        this.getLatestPrice = getLatestPrice_call
        let getRatioParams = (params: IGetRatioParams) => [params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),Utils.stringToBytes(params.param5)];
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
        let priceFeedAddresses_call = async (param1:string): Promise<string> => {
            let result = await this.call('priceFeedAddresses',[param1]);
            return result;
        }
        this.priceFeedAddresses = priceFeedAddresses_call
    }
}