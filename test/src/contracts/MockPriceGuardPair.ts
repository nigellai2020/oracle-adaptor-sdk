import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockPriceGuardPair.json");

export class MockPriceGuardPair extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{token0:string,token1:string}): Promise<string>{
        return this._deploy(params.token0,params.token1);
    }
    async __reserve0(): Promise<BigNumber>{
        let result = await this.methods('__reserve0');
        return new BigNumber(result);
    }
    async __reserve1(): Promise<BigNumber>{
        let result = await this.methods('__reserve1');
        return new BigNumber(result);
    }
    async getReserves(): Promise<{reserve0:BigNumber,reserve1:BigNumber,blockTimestampLast:BigNumber}>{
        let result = await this.methods('getReserves');
        return {
            reserve0: new BigNumber(result.reserve0),
            reserve1: new BigNumber(result.reserve1),
            blockTimestampLast: new BigNumber(result.blockTimestampLast)
        };
    }
    async setReserves(params:{reserve0:number|BigNumber,reserve1:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setReserves',Utils.toString(params.reserve0),Utils.toString(params.reserve1));
        return result;
    }
    async token0(): Promise<string>{
        let result = await this.methods('token0');
        return result;
    }
    async token1(): Promise<string>{
        let result = await this.methods('token1');
        return result;
    }
}