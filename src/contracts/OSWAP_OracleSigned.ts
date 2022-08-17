import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleSigned.json";

export interface IGetLatestPriceParams {from:string;to:string;payload:string}
export interface IGetRatioParams {from:string;to:string;param3:number|BigNumber;param4:number|BigNumber;payload:string}
export interface IIsSupportedParams {param1:string;param2:string}
export interface IUpdateSequenceNumberParams {from:string;to:string;payload:string}
export class OSWAP_OracleSigned extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(signer:string): Promise<string>{
        return this.__deploy([signer]);
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
    sequenceNumber: {
        (): Promise<BigNumber>;
    }
    signer: {
        (): Promise<string>;
    }
    updateSequenceNumber: {
        (params: IUpdateSequenceNumberParams): Promise<TransactionReceipt>;
        call: (params: IUpdateSequenceNumberParams) => Promise<void>;
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
        let isSupportedParams = (params: IIsSupportedParams) => [params.param1,params.param2];
        let isSupported_call = async (params: IIsSupportedParams): Promise<boolean> => {
            let result = await this.call('isSupported',isSupportedParams(params));
            return result;
        }
        this.isSupported = isSupported_call
        let sequenceNumber_call = async (): Promise<BigNumber> => {
            let result = await this.call('sequenceNumber');
            return new BigNumber(result);
        }
        this.sequenceNumber = sequenceNumber_call
        let signer_call = async (): Promise<string> => {
            let result = await this.call('signer');
            return result;
        }
        this.signer = signer_call
        let updateSequenceNumberParams = (params: IUpdateSequenceNumberParams) => [params.from,params.to,Utils.stringToBytes(params.payload)];
        let updateSequenceNumber_send = async (params: IUpdateSequenceNumberParams): Promise<TransactionReceipt> => {
            let result = await this.send('updateSequenceNumber',updateSequenceNumberParams(params));
            return result;
        }
        let updateSequenceNumber_call = async (params: IUpdateSequenceNumberParams): Promise<void> => {
            let result = await this.call('updateSequenceNumber',updateSequenceNumberParams(params));
            return;
        }
        this.updateSequenceNumber = Object.assign(updateSequenceNumber_send, {
            call:updateSequenceNumber_call
        });
    }
}