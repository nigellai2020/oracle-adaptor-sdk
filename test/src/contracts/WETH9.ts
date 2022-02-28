import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/WETH9.json");

export class WETH9 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): WETH9.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): WETH9.ApprovalEvent{
        let result = event.data;
        return {
            src: result.src,
            guy: result.guy,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseDepositEvent(receipt: TransactionReceipt): WETH9.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): WETH9.DepositEvent{
        let result = event.data;
        return {
            dst: result.dst,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): WETH9.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): WETH9.TransferEvent{
        let result = event.data;
        return {
            src: result.src,
            dst: result.dst,
            wad: new BigNumber(result.wad),
            _event: event
        };
    }
    parseWithdrawalEvent(receipt: TransactionReceipt): WETH9.WithdrawalEvent[]{
        return this.parseEvents(receipt, "Withdrawal").map(e=>this.decodeWithdrawalEvent(e));
    }
    decodeWithdrawalEvent(event: Event): WETH9.WithdrawalEvent{
        let result = event.data;
        return {
            src: result.src,
            wad: new BigNumber(result.wad),
            _event: event
        };
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
    export interface ApprovalEvent {src:string,guy:string,wad:BigNumber,_event:Event}
    export interface DepositEvent {dst:string,wad:BigNumber,_event:Event}
    export interface TransferEvent {src:string,dst:string,wad:BigNumber,_event:Event}
    export interface WithdrawalEvent {src:string,wad:BigNumber,_event:Event}
}