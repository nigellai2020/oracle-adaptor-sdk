import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleConstantLimited extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        token0: string[];
        token1: string[];
        price0: (number | BigNumber)[];
        price1: (number | BigNumber)[];
        limit0: (number | BigNumber)[];
        limit1: (number | BigNumber)[];
    }): Promise<string>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        param3: string;
    }): Promise<BigNumber>;
    getRatio(params: {
        from: string;
        to: string;
        fromAmount: number | BigNumber;
        toAmount: number | BigNumber;
        payload: string;
    }): Promise<{
        numerator: BigNumber;
        denominator: BigNumber;
    }>;
    isSupported(params: {
        param1: string;
        param2: string;
    }): Promise<boolean>;
    limits(params: {
        param1: string;
        param2: string;
        param3: boolean;
    }): Promise<BigNumber>;
    prices(params: {
        param1: string;
        param2: string;
    }): Promise<BigNumber>;
}
