import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockERC20.json");

export class MockERC20 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{symbol:string,name:string,initialSupply:number|BigNumber,cap:number|BigNumber,decimals:number|BigNumber}): Promise<string>{
        return this._deploy(params.symbol,params.name,Utils.toString(params.initialSupply),Utils.toString(params.cap),Utils.toString(params.decimals));
    }
    parseApprovalEvent(receipt: TransactionReceipt): MockERC20.ApprovalEvent[]{
        let events = this.parseEvents(receipt, "Approval");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                owner: result.owner,
                spender: result.spender,
                value: new BigNumber(result.value)
            };
        });
    }
    parseAuthEvent(receipt: TransactionReceipt): MockERC20.AuthEvent[]{
        let events = this.parseEvents(receipt, "Auth");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                account: result.account,
                auth: new BigNumber(result.auth)
            };
        });
    }
    parseTransferEvent(receipt: TransactionReceipt): MockERC20.TransferEvent[]{
        let events = this.parseEvents(receipt, "Transfer");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                from: result.from,
                to: result.to,
                value: new BigNumber(result.value)
            };
        });
    }
    async allowance(params:{param1:string,param2:string}): Promise<BigNumber>{
        let result = await this.methods('allowance',params.param1,params.param2);
        return new BigNumber(result);
    }
    async approve(params:{spender:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.spender,Utils.toString(params.value));
        return result;
    }
    async balanceOf(param1:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',param1);
        return new BigNumber(result);
    }
    async burn(params:{account:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('burn',params.account,Utils.toString(params.value));
        return result;
    }
    async cap(): Promise<BigNumber>{
        let result = await this.methods('cap');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async decreaseAllowance(params:{spender:string,subtractedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('decreaseAllowance',params.spender,Utils.toString(params.subtractedValue));
        return result;
    }
    async deny(account:string): Promise<TransactionReceipt>{
        let result = await this.methods('deny',account);
        return result;
    }
    async increaseAllowance(params:{spender:string,addedValue:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('increaseAllowance',params.spender,Utils.toString(params.addedValue));
        return result;
    }
    async mint(params:{account:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('mint',params.account,Utils.toString(params.value));
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async owners(param1:string): Promise<BigNumber>{
        let result = await this.methods('owners',param1);
        return new BigNumber(result);
    }
    async rely(account:string): Promise<TransactionReceipt>{
        let result = await this.methods('rely',account);
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
    async transfer(params:{to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transfer',params.to,Utils.toString(params.value));
        return result;
    }
    async transferFrom(params:{from:string,to:string,value:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.from,params.to,Utils.toString(params.value));
        return result;
    }
}
export module MockERC20{
    export interface ApprovalEvent {_eventName:string,_address:string,_transactionHash:string,owner:string,spender:string,value:BigNumber}
    export interface AuthEvent {_eventName:string,_address:string,_transactionHash:string,account:string,auth:BigNumber}
    export interface TransferEvent {_eventName:string,_address:string,_transactionHash:string,from:string,to:string,value:BigNumber}
}