import { Wallet, Contract, BigNumber } from "@ijstech/eth-wallet";
export declare class OSWAP_OracleChainlinkFiatGeneric extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        tokens: string[];
        pricefeeds: string[];
    }): Promise<string>;
    WETH(): Promise<string>;
    chainlinkDeicmals(): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    getLatestPrice(params: {
        from: string;
        to: string;
        payload: string;
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
        from: string;
        to: string;
    }): Promise<boolean>;
    priceFeedAddresses(param1: string): Promise<string>;
}
