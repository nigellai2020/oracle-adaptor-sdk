import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/MockChainlink.json");

export class MockChainlink extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{decimals:number|BigNumber,description:string,version:number|BigNumber}): Promise<string>{
        return this._deploy(Utils.toString(params.decimals),params.description,Utils.toString(params.version));
    }
    async answer(): Promise<BigNumber>{
        let result = await this.methods('answer');
        return new BigNumber(result);
    }
    async answeredInRound(): Promise<BigNumber>{
        let result = await this.methods('answeredInRound');
        return new BigNumber(result);
    }
    async decimals(): Promise<BigNumber>{
        let result = await this.methods('decimals');
        return new BigNumber(result);
    }
    async description(): Promise<string>{
        let result = await this.methods('description');
        return result;
    }
    async getRoundData(roundId:number|BigNumber): Promise<{_roundId:BigNumber,_answer:BigNumber,_startedAt:BigNumber,_updatedAt:BigNumber,_answeredInRound:BigNumber}>{
        let result = await this.methods('getRoundData',Utils.toString(roundId));
        return {
            _roundId: new BigNumber(result._roundId),
            _answer: new BigNumber(result._answer),
            _startedAt: new BigNumber(result._startedAt),
            _updatedAt: new BigNumber(result._updatedAt),
            _answeredInRound: new BigNumber(result._answeredInRound)
        };
    }
    async latestRoundData(): Promise<{_roundId:BigNumber,_answer:BigNumber,_startedAt:BigNumber,_updatedAt:BigNumber,_answeredInRound:BigNumber}>{
        let result = await this.methods('latestRoundData');
        return {
            _roundId: new BigNumber(result._roundId),
            _answer: new BigNumber(result._answer),
            _startedAt: new BigNumber(result._startedAt),
            _updatedAt: new BigNumber(result._updatedAt),
            _answeredInRound: new BigNumber(result._answeredInRound)
        };
    }
    async roundId(): Promise<BigNumber>{
        let result = await this.methods('roundId');
        return new BigNumber(result);
    }
    async setRoundData(params:{roundId:number|BigNumber,answer:number|BigNumber,startedAt:number|BigNumber,updatedAt:number|BigNumber,answeredInRound:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setRoundData',Utils.toString(params.roundId),Utils.toString(params.answer),Utils.toString(params.startedAt),Utils.toString(params.updatedAt),Utils.toString(params.answeredInRound));
        return result;
    }
    async startedAt(): Promise<BigNumber>{
        let result = await this.methods('startedAt');
        return new BigNumber(result);
    }
    async updatedAt(): Promise<BigNumber>{
        let result = await this.methods('updatedAt');
        return new BigNumber(result);
    }
    async version(): Promise<BigNumber>{
        let result = await this.methods('version');
        return new BigNumber(result);
    }
}