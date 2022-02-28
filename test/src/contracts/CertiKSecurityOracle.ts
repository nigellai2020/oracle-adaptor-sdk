import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/CertiKSecurityOracle.json");

export class CertiKSecurityOracle extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseBatchResultUpdateEvent(receipt: TransactionReceipt): CertiKSecurityOracle.BatchResultUpdateEvent[]{
        return this.parseEvents(receipt, "BatchResultUpdate").map(e=>this.decodeBatchResultUpdateEvent(e));
    }
    decodeBatchResultUpdateEvent(event: Event): CertiKSecurityOracle.BatchResultUpdateEvent{
        let result = event.data;
        return {
            length: new BigNumber(result.length),
            _event: event
        };
    }
    parseDefaultScoreChangedEvent(receipt: TransactionReceipt): CertiKSecurityOracle.DefaultScoreChangedEvent[]{
        return this.parseEvents(receipt, "DefaultScoreChanged").map(e=>this.decodeDefaultScoreChangedEvent(e));
    }
    decodeDefaultScoreChangedEvent(event: Event): CertiKSecurityOracle.DefaultScoreChangedEvent{
        let result = event.data;
        return {
            score: new BigNumber(result.score),
            _event: event
        };
    }
    parseInitEvent(receipt: TransactionReceipt): CertiKSecurityOracle.InitEvent[]{
        return this.parseEvents(receipt, "Init").map(e=>this.decodeInitEvent(e));
    }
    decodeInitEvent(event: Event): CertiKSecurityOracle.InitEvent{
        let result = event.data;
        return {
            defaultScore: new BigNumber(result.defaultScore),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): CertiKSecurityOracle.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): CertiKSecurityOracle.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseResultUpdateEvent(receipt: TransactionReceipt): CertiKSecurityOracle.ResultUpdateEvent[]{
        return this.parseEvents(receipt, "ResultUpdate").map(e=>this.decodeResultUpdateEvent(e));
    }
    decodeResultUpdateEvent(event: Event): CertiKSecurityOracle.ResultUpdateEvent{
        let result = event.data;
        return {
            target: result.target,
            functionSignature: result.functionSignature,
            score: new BigNumber(result.score),
            expiration: new BigNumber(result.expiration),
            _event: event
        };
    }
    async batchPushResult(params:{contractAddresses:string[],functionSignatures:string[],scores:(number|BigNumber)[],expirations:(number|BigNumber)[]}): Promise<TransactionReceipt>{
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
    export interface BatchResultUpdateEvent {length:BigNumber,_event:Event}
    export interface DefaultScoreChangedEvent {score:BigNumber,_event:Event}
    export interface InitEvent {defaultScore:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface ResultUpdateEvent {target:string,functionSignature:string,score:BigNumber,expiration:BigNumber,_event:Event}
}