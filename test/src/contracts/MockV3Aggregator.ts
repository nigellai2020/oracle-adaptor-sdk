import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockV3Aggregator.json");

export class MockV3Aggregator extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{description:string,decimals:number|BigNumber,initialAnswer:number|BigNumber}): Promise<string>{
        return this._deploy(params.description,Utils.toString(params.decimals),Utils.toString(params.initialAnswer));
    }
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): MockV3Aggregator.AnswerUpdatedEvent[]{
        let events = this.parseEvents(receipt, "AnswerUpdated");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                current: new BigNumber(result.current),
                roundId: new BigNumber(result.roundId),
                updatedAt: new BigNumber(result.updatedAt)
            };
        });
    }
    parseNewRoundEvent(receipt: TransactionReceipt): MockV3Aggregator.NewRoundEvent[]{
        let events = this.parseEvents(receipt, "NewRound");
        return events.map(result => {
            return {
                _eventName: result._eventName,
                _address: result._address,
                _transactionHash: result._transactionHash,
                roundId: new BigNumber(result.roundId),
                startedBy: result.startedBy,
                startedAt: new BigNumber(result.startedAt)
            };
        });
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async description(): Promise<string>{
        let result = await this.methods('description');
        return result;
    }
    async getAnswer(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('getAnswer',Utils.toString(param1));
        return new BigNumber(result);
    }
    async getRoundData(roundId:number|BigNumber): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>{
        let result = await this.methods('getRoundData',Utils.toString(roundId));
        return {
            roundId: new BigNumber(result.roundId),
            answer: new BigNumber(result.answer),
            startedAt: new BigNumber(result.startedAt),
            updatedAt: new BigNumber(result.updatedAt),
            answeredInRound: new BigNumber(result.answeredInRound)
        };
    }
    async getTimestamp(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('getTimestamp',Utils.toString(param1));
        return new BigNumber(result);
    }
    async latestAnswer(): Promise<BigNumber>{
        let result = await this.methods('latestAnswer');
        return new BigNumber(result);
    }
    async latestRound(): Promise<BigNumber>{
        let result = await this.methods('latestRound');
        return new BigNumber(result);
    }
    async latestRoundData(): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>{
        let result = await this.methods('latestRoundData');
        return {
            roundId: new BigNumber(result.roundId),
            answer: new BigNumber(result.answer),
            startedAt: new BigNumber(result.startedAt),
            updatedAt: new BigNumber(result.updatedAt),
            answeredInRound: new BigNumber(result.answeredInRound)
        };
    }
    async latestTimestamp(): Promise<BigNumber>{
        let result = await this.methods('latestTimestamp');
        return new BigNumber(result);
    }
    async updateAnswer(answer:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('updateAnswer',Utils.toString(answer));
        return result;
    }
    async updateRoundData(params:{roundId:number|BigNumber,answer:number|BigNumber,timestamp:number|BigNumber,startedAt:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('updateRoundData',Utils.toString(params.roundId),Utils.toString(params.answer),Utils.toString(params.timestamp),Utils.toString(params.startedAt));
        return result;
    }
    async version(): Promise<BigNumber>{
        let result = await this.methods('version');
        return new BigNumber(result);
    }
}
export module MockV3Aggregator{
    export interface AnswerUpdatedEvent {_eventName:string,_address:string,_transactionHash:string,current:BigNumber,roundId:BigNumber,updatedAt:BigNumber}
    export interface NewRoundEvent {_eventName:string,_address:string,_transactionHash:string,roundId:BigNumber,startedBy:string,startedAt:BigNumber}
}