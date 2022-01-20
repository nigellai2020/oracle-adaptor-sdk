import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleChained extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        from: string[];
        to: string[];
        count: number[] | BigNumber[];
        paths: string[];
        oracles: string[];
    }): Promise<string>;
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
        from: string;
        to: string;
    }): Promise<boolean>;
    oraclesStore(params: {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }): Promise<string>;
    pathsStore(params: {
        param1: string;
        param2: string;
        param3: number | BigNumber;
    }): Promise<string>;
    priceFeedAddresses(param1: string): Promise<string>;
}
