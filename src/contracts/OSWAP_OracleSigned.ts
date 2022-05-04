import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleSigned.json";

export class OSWAP_OracleSigned extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(signer:string): Promise<string>{
        return this._deploy(signer);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.from,params.to,params.payload]);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.payload]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.param1,params.param2]);
        return result;
    }
    async sequenceNumber(): Promise<BigNumber>{
        let result = await this.call('sequenceNumber');
        return new BigNumber(result);
    }
    async signer(): Promise<string>{
        let result = await this.call('signer');
        return result;
    }
    async updateSequenceNumber_send(params:{from:string,to:string,payload:string}): Promise<TransactionReceipt>{
        let result = await this.send('updateSequenceNumber',[params.from,params.to,params.payload]);
        return result;
    }
    async updateSequenceNumber_call(params:{from:string,to:string,payload:string}): Promise<void>{
        let result = await this.call('updateSequenceNumber',[params.from,params.to,params.payload]);
        return;
    }
    updateSequenceNumber: {
        (params:{from:string,to:string,payload:string}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,payload:string}) => Promise<void>;
    }
    private assign(){
        this.updateSequenceNumber = Object.assign(this.updateSequenceNumber_send, {call:this.updateSequenceNumber_call});
    }
}