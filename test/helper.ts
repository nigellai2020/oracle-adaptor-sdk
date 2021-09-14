import { ethers, waffle } from "hardhat";
import {BigNumber, BigNumberish, Contract, ContractFactory} from "ethers";
import {expect, use} from "chai";

export function toWei(value: string, unit?: any): BigNumber {
    return ethers.utils.parseUnits(value, unit);
}
export function toWeiInv(n: string, unit?: any) {
    // return BigNumber.from("10").pow("18").div(n.toString());
    return BigNumber.from("10").pow(unit ? unit*2 : "36").div(ethers.utils.parseUnits(n, unit));
}
export function fromWei(v: BigNumberish): string {
    return ethers.utils.formatEther(v);
}
export function compare(o1: any, o2: any) {
    for (let k in o2) {
        if (Array.isArray(o1[k]))
            expect(o1[k]).to.deep.equal(o2[k]);
        else
            expect(o1[k]).to.equal(o2[k]);
    }
}
export function print(...args: any[]): void {
    for (let i = 0 ; i < args.length ; i++) {
        _print(args[i]);
    }
}
function _print(o:any): void {
    if (o._isBigNumber) {
        console.log(o.gt(10000000)?fromWei(o):o.toString());
    } else if (typeof o === "object") {
        for (let k in o) {
            if (o[k]._isBigNumber) {
                console.log(k, o[k].gt(10000000)?fromWei(o[k]):o[k].toString());
            } else if (Array.isArray(o[k])) {
                console.log(k, o[k].map((e:any) => e._isBigNumber ? (e.gt(1000000)?fromWei(e):e.toString()) : e));
            } else {
                console.log(k, o[k]);
            }
        }
    } else {
        console.log(o);
    }
}