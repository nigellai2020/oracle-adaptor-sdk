import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./OSWAP_OracleChainlinkLimited.json";

export class OSWAP_OracleChainlinkLimited extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(factory:string): Promise<string>{
        return this.__deploy([factory]);
    }
    async WETH(): Promise<string>{
        let result = await this.call('WETH');
        return result;
    }
    async _WETH(): Promise<string>{
        let result = await this.call('_WETH');
        return result;
    }
    async chainlinkDeicmals(): Promise<BigNumber>{
        let result = await this.call('chainlinkDeicmals');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.call('decimals');
        return new BigNumber(result);
    }
    async factory(): Promise<string>{
        let result = await this.call('factory');
        return result;
    }
    async getLatestPrice(params:{from:string,to:string,payload:string}): Promise<BigNumber>{
        let result = await this.call('getLatestPrice',[params.from,params.to,Utils.stringToBytes(params.payload)]);
        return new BigNumber(result);
    }
    async getRatio(params:{from:string,to:string,fromAmount:number|BigNumber,toAmount:number|BigNumber,payload:string}): Promise<{numerator:BigNumber,denominator:BigNumber}>{
        let result = await this.call('getRatio',[params.from,params.to,Utils.toString(params.fromAmount),Utils.toString(params.toAmount),Utils.stringToBytes(params.payload)]);
        return {
            numerator: new BigNumber(result.numerator),
            denominator: new BigNumber(result.denominator)
        };
    }
    async isSupported(params:{from:string,to:string}): Promise<boolean>{
        let result = await this.call('isSupported',[params.from,params.to]);
        return result;
    }
    async priceFeedAddresses(param1:string): Promise<string>{
        let result = await this.call('priceFeedAddresses',[param1]);
        return result;
    }
    private assign(){
    }
}