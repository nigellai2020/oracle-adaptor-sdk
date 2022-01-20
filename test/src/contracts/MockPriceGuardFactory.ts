import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockPriceGuardFactory.json");

export class MockPriceGuardFactory extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    async getPair(params:{param1:string,param2:string}): Promise<string>{
        let result = await this.methods('getPair',params.param1,params.param2);
        return result;
    }
    async minLotSize(param1:string): Promise<BigNumber>{
        let result = await this.methods('minLotSize',param1);
        return new BigNumber(result);
    }
    async set(params:{token0:string,token1:string,pair:string}): Promise<TransactionReceipt>{
        let result = await this.methods('set',params.token0,params.token1,params.pair);
        return result;
    }
}