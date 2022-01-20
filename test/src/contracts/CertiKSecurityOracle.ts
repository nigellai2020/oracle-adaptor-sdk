import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/CertiKSecurityOracle.json");

export class CertiKSecurityOracle extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseBatchResultUpdateEvent(receipt: TransactionReceipt): CertiKSecurityOracle.BatchResultUpdateEvent[]{
        let events = this.parseEvents(receipt, "BatchResultUpdate");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                length: new BigNumber(result.length)
            };
        });
    }
    parseDefaultScoreChangedEvent(receipt: TransactionReceipt): CertiKSecurityOracle.DefaultScoreChangedEvent[]{
        let events = this.parseEvents(receipt, "DefaultScoreChanged");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                score: new BigNumber(result.score)
            };
        });
    }
    parseInitEvent(receipt: TransactionReceipt): CertiKSecurityOracle.InitEvent[]{
        let events = this.parseEvents(receipt, "Init");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                defaultScore: new BigNumber(result.defaultScore)
            };
        });
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): CertiKSecurityOracle.OwnershipTransferredEvent[]{
        let events = this.parseEvents(receipt, "OwnershipTransferred");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                previousOwner: result.previousOwner,
                newOwner: result.newOwner
            };
        });
    }
    parseResultUpdateEvent(receipt: TransactionReceipt): CertiKSecurityOracle.ResultUpdateEvent[]{
        let events = this.parseEvents(receipt, "ResultUpdate");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                target: result.target,
                functionSignature: result.functionSignature,
                score: new BigNumber(result.score),
                expiration: new BigNumber(result.expiration)
            };
        });
    }
    async batchPushResult(params:{contractAddresses:string[],functionSignatures:string[],scores:number[]|BigNumber[],expirations:number[]|BigNumber[]}): Promise<TransactionReceipt>{
        let result = await this.methods('batchPushResult',params.contractAddresses,params.functionSignatures,Utils.toString(params.scores),Utils.toString(params.expirations));
        return result;
    }
    async defaultScore(): Promise<BigNumber>{
        let result = await this.methods('defaultScore');
        return new BigNumber(result);
    }
    async getSecurityScore(contractAddress:string): Promise<BigNumber>{
        let result = await this.methods('getSecurityScore',contractAddress);
        return new BigNumber(result);
    }
    async getSecurityScore_1(params:{contractAddress:string,functionSignature:string}): Promise<BigNumber>{
        let result = await this.methods('getSecurityScore',params.contractAddress,params.functionSignature);
        return new BigNumber(result);
    }
    async getSecurityScoreBytes4(params:{contractAddress:string,functionSignature:string}): Promise<BigNumber>{
        let result = await this.methods('getSecurityScoreBytes4',params.contractAddress,params.functionSignature);
        return new BigNumber(result);
    }
    async getSecurityScores(params:{addresses:string[],functionSignatures:string[]}): Promise<BigNumber[]>{
        let result = await this.methods('getSecurityScores',params.addresses,params.functionSignatures);
        return result;
    }
    async initialize(): Promise<TransactionReceipt>{
        let result = await this.methods('initialize');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async pushResult(params:{contractAddress:string,functionSignature:string,score:number|BigNumber,expiration:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('pushResult',params.contractAddress,params.functionSignature,Utils.toString(params.score),Utils.toString(params.expiration));
        return result;
    }
    async renounceOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('renounceOwnership');
        return result;
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
    async updateDefaultScore(score:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('updateDefaultScore',Utils.toString(score));
        return result;
    }
}
export module CertiKSecurityOracle{
    export interface BatchResultUpdateEvent {_eventName:string,_address:string,_transactionHash:string,length:BigNumber}
    export interface DefaultScoreChangedEvent {_eventName:string,_address:string,_transactionHash:string,score:BigNumber}
    export interface InitEvent {_eventName:string,_address:string,_transactionHash:string,defaultScore:BigNumber}
    export interface OwnershipTransferredEvent {_eventName:string,_address:string,_transactionHash:string,previousOwner:string,newOwner:string}
    export interface ResultUpdateEvent {_eventName:string,_address:string,_transactionHash:string,target:string,functionSignature:string,score:BigNumber,expiration:BigNumber}
}