import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/contracts/OSWAP_OracleSigned.json");

export class OSWAP_OracleSigned extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(signer:string): Promise<string>{
        return this._deploy(signer);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.methods('getLatestPrice',params.from,params.to,params.payload);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,param3:number|BigNumber,param4:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.methods('getRatio',params.from,params.to,Utils.toString(params.param3),Utils.toString(params.param4),params.payload);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{param1:string,param2:string}): Promise<boolean>{
        let result = await this.methods('isSupported',params.param1,params.param2);
        return result;
    }
    async sequenceNumber(): Promise<BigNumber>{
        let result = await this.methods('sequenceNumber');
        return new BigNumber(result);
    }
    async signer(): Promise<string>{
        let result = await this.methods('signer');
        return result;
    }
    async updateSequenceNumber(params:{from:string,to:string,payload:string}): Promise<TransactionReceipt>{
        let result = await this.methods('updateSequenceNumber',params.from,params.to,params.payload);
        return result;
    }
}