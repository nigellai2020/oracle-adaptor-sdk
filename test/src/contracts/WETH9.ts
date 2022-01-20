import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/WETH9.json");

export class WETH9 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[]{
        let events = this.parseEvents(receipt, "Approval");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                src: result.src,
                guy: result.guy,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[]{
        let events = this.parseEvents(receipt, "Deposit");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                dst: result.dst,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[]{
        let events = this.parseEvents(receipt, "Transfer");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                src: result.src,
                dst: result.dst,
                wad: new BigNumber(result.wad)
            };
        });
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[]{
        let events = this.parseEvents(receipt, "Withdrawal");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                src: result.src,
                wad: new BigNumber(result.wad)
            };
        });
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('allowance',params.param1,params.param2);
        return new BigNumber(result);
    }
    async approve(params:{guy:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.guy,Utils.toString(params.wad));
        return result;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',param1);
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async deposit(_value:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('deposit',_value);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.methods('symbol');
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.methods('totalSupply');
        return new BigNumber(result);
    }
    async transfer(params:{dst:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transfer',params.dst,Utils.toString(params.wad));
        return result;
    }
    async transferFrom(params:{src:string,dst:string,wad:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.src,params.dst,Utils.toString(params.wad));
        return result;
    }
    async withdraw(wad:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('withdraw',Utils.toString(wad));
        return result;
    }
}
export module WETH9{
    export interface ApprovalEvent {_eventName:string,_address:string,_transactionHash:string,src:string,guy:string,wad:BigNumber}
    export interface DepositEvent {_eventName:string,_address:string,_transactionHash:string,dst:string,wad:BigNumber}
    export interface TransferEvent {_eventName:string,_address:string,_transactionHash:string,src:string,dst:string,wad:BigNumber}
    export interface WithdrawalEvent {_eventName:string,_address:string,_transactionHash:string,src:string,wad:BigNumber}
}