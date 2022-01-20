import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleSigned extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(signer: string): Promise<string>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        payload: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        param3: number | BigNumber;
        param4: number | BigNumber;
        payload: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    sequenceNumber(): Promise<BigNumber>;
    signer(): Promise<string>;
    updateSequenceNumber(params: {
        from: string;
        to: string;
        payload: string;
    }): Promise<TransactionReceipt>;
}
