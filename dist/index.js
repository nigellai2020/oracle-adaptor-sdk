define(@openswapdex/oracle-adaptor-sdk, (require, exports)=>{
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// bin/contracts/OSWAP_OracleChained.json
var require_OSWAP_OracleChained = __commonJS({
  "bin/contracts/OSWAP_OracleChained.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address[]", name: "_from", type: "address[]" }, { internalType: "address[]", name: "_to", type: "address[]" }, { internalType: "uint256[]", name: "_count", type: "uint256[]" }, { internalType: "address[]", name: "_paths", type: "address[]" }, { internalType: "address[]", name: "_oracles", type: "address[]" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "oraclesStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "pathsStore", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlink.json
var require_OSWAP_OracleChainlink = __commonJS({
  "bin/contracts/OSWAP_OracleChainlink.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "_WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkBinance.json
var require_OSWAP_OracleChainlinkBinance = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkBinance.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "_WBNB", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkFiat.json
var require_OSWAP_OracleChainlinkFiat = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkFiat.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkFiatBinance.json
var require_OSWAP_OracleChainlinkFiatBinance = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkFiatBinance.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkLimited.json
var require_OSWAP_OracleChainlinkLimited = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkLimited.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "factory", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "_WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkPriceGuardBinance.json
var require_OSWAP_OracleChainlinkPriceGuardBinance = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkPriceGuardBinance.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "uint256", name: "_maxValue", type: "uint256" }, { internalType: "uint256", name: "_deviation", type: "uint256" }, { internalType: "bool", name: "_useAmmPrice", type: "bool" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "_WBNB", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }], name: "getPriceInfo", outputs: [{ internalType: "uint256", name: "chainlinkPrice", type: "uint256" }, { internalType: "uint256", name: "ammPrice", type: "uint256" }, { internalType: "uint256", name: "usdAmount", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "high", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "low", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "maxValue", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "useAmmPrice", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "wethDecimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "wethPriceFeed", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleChainlinkPriceGuardFiatBinance.json
var require_OSWAP_OracleChainlinkPriceGuardFiatBinance = __commonJS({
  "bin/contracts/OSWAP_OracleChainlinkPriceGuardFiatBinance.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_factory", type: "address" }, { internalType: "uint256", name: "_maxValue", type: "uint256" }, { internalType: "uint256", name: "_deviation", type: "uint256" }, { internalType: "bool", name: "_returnAmmPrice", type: "bool" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "chainlinkDeicmals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }], name: "getPriceInfo", outputs: [{ internalType: "uint256", name: "chainlinkPrice", type: "uint256" }, { internalType: "uint256", name: "ammPrice", type: "uint256" }, { internalType: "uint256", name: "usdAmount", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "high", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "low", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "maxValue", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "priceFeedAddresses", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "useAmmPrice", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "wethDecimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [], name: "wethPriceFeed", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleConstant.json
var require_OSWAP_OracleConstant = __commonJS({
  "bin/contracts/OSWAP_OracleConstant.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address[]", name: "token0", type: "address[]" }, { internalType: "address[]", name: "token1", type: "address[]" }, { internalType: "uint256[]", name: "price0", type: "uint256[]" }, { internalType: "uint256[]", name: "price1", type: "uint256[]" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "prices", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleConstantLimited.json
var require_OSWAP_OracleConstantLimited = __commonJS({
  "bin/contracts/OSWAP_OracleConstantLimited.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address[]", name: "token0", type: "address[]" }, { internalType: "address[]", name: "token1", type: "address[]" }, { internalType: "uint256[]", name: "price0", type: "uint256[]" }, { internalType: "uint256[]", name: "price1", type: "uint256[]" }, { internalType: "uint256[]", name: "limit0", type: "uint256[]" }, { internalType: "uint256[]", name: "limit1", type: "uint256[]" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "fromAmount", type: "uint256" }, { internalType: "uint256", name: "toAmount", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "bool", name: "", type: "bool" }], name: "limits", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "prices", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleSetYourOwnPrice.json
var require_OSWAP_OracleSetYourOwnPrice = __commonJS({
  "bin/contracts/OSWAP_OracleSetYourOwnPrice.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleSigned.json
var require_OSWAP_OracleSigned = __commonJS({
  "bin/contracts/OSWAP_OracleSigned.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "address", name: "_signer", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "sequenceNumber", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "signer", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "bytes", name: "payload", type: "bytes" }], name: "updateSequenceNumber", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/contracts/OSWAP_OracleUnity.json
var require_OSWAP_OracleUnity = __commonJS({
  "bin/contracts/OSWAP_OracleUnity.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getLatestPrice", outputs: [{ internalType: "uint256", name: "price", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "uint256", name: "", type: "uint256" }, { internalType: "bytes", name: "", type: "bytes" }], name: "getRatio", outputs: [{ internalType: "uint256", name: "numerator", type: "uint256" }, { internalType: "uint256", name: "denominator", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }, { internalType: "address", name: "", type: "address" }], name: "isSupported", outputs: [{ internalType: "bool", name: "supported", type: "bool" }], stateMutability: "view", type: "function" }] };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  OSWAP_OracleChained: () => OSWAP_OracleChained,
  OSWAP_OracleChainlink: () => OSWAP_OracleChainlink,
  OSWAP_OracleChainlinkBinance: () => OSWAP_OracleChainlinkBinance,
  OSWAP_OracleChainlinkFiat: () => OSWAP_OracleChainlinkFiat,
  OSWAP_OracleChainlinkFiatBinance: () => OSWAP_OracleChainlinkFiatBinance,
  OSWAP_OracleChainlinkLimited: () => OSWAP_OracleChainlinkLimited,
  OSWAP_OracleChainlinkPriceGuardBinance: () => OSWAP_OracleChainlinkPriceGuardBinance,
  OSWAP_OracleChainlinkPriceGuardFiatBinance: () => OSWAP_OracleChainlinkPriceGuardFiatBinance,
  OSWAP_OracleConstant: () => OSWAP_OracleConstant,
  OSWAP_OracleConstantLimited: () => OSWAP_OracleConstantLimited,
  OSWAP_OracleSetYourOwnPrice: () => OSWAP_OracleSetYourOwnPrice,
  OSWAP_OracleSigned: () => OSWAP_OracleSigned,
  OSWAP_OracleUnity: () => OSWAP_OracleUnity
});

// src/contracts/OSWAP_OracleChained.ts
var import_eth_wallet = require("@ijstech/eth-wallet");
var Bin = require_OSWAP_OracleChained();
var OSWAP_OracleChained = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin.abi, Bin.bytecode);
  }
  deploy(params) {
    return this._deploy(params.from, params.to, import_eth_wallet.Utils.toString(params.count), params.paths, params.oracles);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet.Utils.toString(params.param3), import_eth_wallet.Utils.toString(params.param4), params.payload);
    return {
      numerator: new import_eth_wallet.BigNumber(result.numerator),
      denominator: new import_eth_wallet.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async oraclesStore(params) {
    let result = await this.methods("oraclesStore", params.param1, params.param2, import_eth_wallet.Utils.toString(params.param3));
    return result;
  }
  async pathsStore(params) {
    let result = await this.methods("pathsStore", params.param1, params.param2, import_eth_wallet.Utils.toString(params.param3));
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlink.ts
var import_eth_wallet2 = require("@ijstech/eth-wallet");
var Bin2 = require_OSWAP_OracleChainlink();
var OSWAP_OracleChainlink = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin2.abi, Bin2.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async _WETH() {
    let result = await this.methods("_WETH");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet2.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet2.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet2.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet2.Utils.toString(params.param3), import_eth_wallet2.Utils.toString(params.param4), params.param5);
    return {
      numerator: new import_eth_wallet2.BigNumber(result.numerator),
      denominator: new import_eth_wallet2.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkBinance.ts
var import_eth_wallet3 = require("@ijstech/eth-wallet");
var Bin3 = require_OSWAP_OracleChainlinkBinance();
var OSWAP_OracleChainlinkBinance = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin3.abi, Bin3.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async _WBNB() {
    let result = await this.methods("_WBNB");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet3.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet3.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet3.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet3.Utils.toString(params.param3), import_eth_wallet3.Utils.toString(params.param4), params.param5);
    return {
      numerator: new import_eth_wallet3.BigNumber(result.numerator),
      denominator: new import_eth_wallet3.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkFiat.ts
var import_eth_wallet4 = require("@ijstech/eth-wallet");
var Bin4 = require_OSWAP_OracleChainlinkFiat();
var OSWAP_OracleChainlinkFiat = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin4.abi, Bin4.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet4.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet4.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet4.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet4.Utils.toString(params.param3), import_eth_wallet4.Utils.toString(params.param4), params.param5);
    return {
      numerator: new import_eth_wallet4.BigNumber(result.numerator),
      denominator: new import_eth_wallet4.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkFiatBinance.ts
var import_eth_wallet5 = require("@ijstech/eth-wallet");
var Bin5 = require_OSWAP_OracleChainlinkFiatBinance();
var OSWAP_OracleChainlinkFiatBinance = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin5.abi, Bin5.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet5.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet5.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet5.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet5.Utils.toString(params.fromAmount), import_eth_wallet5.Utils.toString(params.toAmount), params.payload);
    return {
      numerator: new import_eth_wallet5.BigNumber(result.numerator),
      denominator: new import_eth_wallet5.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkLimited.ts
var import_eth_wallet6 = require("@ijstech/eth-wallet");
var Bin6 = require_OSWAP_OracleChainlinkLimited();
var OSWAP_OracleChainlinkLimited = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin6.abi, Bin6.bytecode);
  }
  deploy(factory) {
    return this._deploy(factory);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async _WETH() {
    let result = await this.methods("_WETH");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet6.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet6.BigNumber(result);
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet6.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet6.Utils.toString(params.fromAmount), import_eth_wallet6.Utils.toString(params.toAmount), params.payload);
    return {
      numerator: new import_eth_wallet6.BigNumber(result.numerator),
      denominator: new import_eth_wallet6.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkPriceGuardBinance.ts
var import_eth_wallet7 = require("@ijstech/eth-wallet");
var Bin7 = require_OSWAP_OracleChainlinkPriceGuardBinance();
var OSWAP_OracleChainlinkPriceGuardBinance = class extends import_eth_wallet7.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin7.abi, Bin7.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, import_eth_wallet7.Utils.toString(params.maxValue), import_eth_wallet7.Utils.toString(params.deviation), params.useAmmPrice);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async _WBNB() {
    let result = await this.methods("_WBNB");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet7.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet7.BigNumber(result);
  }
  async decimals_1(param1) {
    let result = await this.methods("decimals", param1);
    return new import_eth_wallet7.BigNumber(result);
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet7.BigNumber(result);
  }
  async getPriceInfo(params) {
    let result = await this.methods("getPriceInfo", params.from, params.to, import_eth_wallet7.Utils.toString(params.fromAmount), import_eth_wallet7.Utils.toString(params.toAmount));
    return {
      chainlinkPrice: new import_eth_wallet7.BigNumber(result.chainlinkPrice),
      ammPrice: new import_eth_wallet7.BigNumber(result.ammPrice),
      usdAmount: new import_eth_wallet7.BigNumber(result.usdAmount)
    };
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet7.Utils.toString(params.fromAmount), import_eth_wallet7.Utils.toString(params.toAmount), params.payload);
    return {
      numerator: new import_eth_wallet7.BigNumber(result.numerator),
      denominator: new import_eth_wallet7.BigNumber(result.denominator)
    };
  }
  async high() {
    let result = await this.methods("high");
    return new import_eth_wallet7.BigNumber(result);
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async low() {
    let result = await this.methods("low");
    return new import_eth_wallet7.BigNumber(result);
  }
  async maxValue() {
    let result = await this.methods("maxValue");
    return new import_eth_wallet7.BigNumber(result);
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
  async useAmmPrice() {
    let result = await this.methods("useAmmPrice");
    return result;
  }
  async wethDecimals() {
    let result = await this.methods("wethDecimals");
    return new import_eth_wallet7.BigNumber(result);
  }
  async wethPriceFeed() {
    let result = await this.methods("wethPriceFeed");
    return result;
  }
};

// src/contracts/OSWAP_OracleChainlinkPriceGuardFiatBinance.ts
var import_eth_wallet8 = require("@ijstech/eth-wallet");
var Bin8 = require_OSWAP_OracleChainlinkPriceGuardFiatBinance();
var OSWAP_OracleChainlinkPriceGuardFiatBinance = class extends import_eth_wallet8.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin8.abi, Bin8.bytecode);
  }
  deploy(params) {
    return this._deploy(params.factory, import_eth_wallet8.Utils.toString(params.maxValue), import_eth_wallet8.Utils.toString(params.deviation), params.returnAmmPrice);
  }
  async WETH() {
    let result = await this.methods("WETH");
    return result;
  }
  async chainlinkDeicmals() {
    let result = await this.methods("chainlinkDeicmals");
    return new import_eth_wallet8.BigNumber(result);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet8.BigNumber(result);
  }
  async decimals_1(param1) {
    let result = await this.methods("decimals", param1);
    return new import_eth_wallet8.BigNumber(result);
  }
  async factory() {
    let result = await this.methods("factory");
    return result;
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet8.BigNumber(result);
  }
  async getPriceInfo(params) {
    let result = await this.methods("getPriceInfo", params.from, params.to, import_eth_wallet8.Utils.toString(params.fromAmount), import_eth_wallet8.Utils.toString(params.toAmount));
    return {
      chainlinkPrice: new import_eth_wallet8.BigNumber(result.chainlinkPrice),
      ammPrice: new import_eth_wallet8.BigNumber(result.ammPrice),
      usdAmount: new import_eth_wallet8.BigNumber(result.usdAmount)
    };
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet8.Utils.toString(params.fromAmount), import_eth_wallet8.Utils.toString(params.toAmount), params.payload);
    return {
      numerator: new import_eth_wallet8.BigNumber(result.numerator),
      denominator: new import_eth_wallet8.BigNumber(result.denominator)
    };
  }
  async high() {
    let result = await this.methods("high");
    return new import_eth_wallet8.BigNumber(result);
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.from, params.to);
    return result;
  }
  async low() {
    let result = await this.methods("low");
    return new import_eth_wallet8.BigNumber(result);
  }
  async maxValue() {
    let result = await this.methods("maxValue");
    return new import_eth_wallet8.BigNumber(result);
  }
  async priceFeedAddresses(param1) {
    let result = await this.methods("priceFeedAddresses", param1);
    return result;
  }
  async useAmmPrice() {
    let result = await this.methods("useAmmPrice");
    return result;
  }
  async wethDecimals() {
    let result = await this.methods("wethDecimals");
    return new import_eth_wallet8.BigNumber(result);
  }
  async wethPriceFeed() {
    let result = await this.methods("wethPriceFeed");
    return result;
  }
};

// src/contracts/OSWAP_OracleConstant.ts
var import_eth_wallet9 = require("@ijstech/eth-wallet");
var Bin9 = require_OSWAP_OracleConstant();
var OSWAP_OracleConstant = class extends import_eth_wallet9.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin9.abi, Bin9.bytecode);
  }
  deploy(params) {
    return this._deploy(params.token0, params.token1, import_eth_wallet9.Utils.toString(params.price0), import_eth_wallet9.Utils.toString(params.price1));
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet9.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.param3);
    return new import_eth_wallet9.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet9.Utils.toString(params.param3), import_eth_wallet9.Utils.toString(params.param4), params.payload);
    return {
      numerator: new import_eth_wallet9.BigNumber(result.numerator),
      denominator: new import_eth_wallet9.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
  async prices(params) {
    let result = await this.methods("prices", params.param1, params.param2);
    return new import_eth_wallet9.BigNumber(result);
  }
};

// src/contracts/OSWAP_OracleConstantLimited.ts
var import_eth_wallet10 = require("@ijstech/eth-wallet");
var Bin10 = require_OSWAP_OracleConstantLimited();
var OSWAP_OracleConstantLimited = class extends import_eth_wallet10.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin10.abi, Bin10.bytecode);
  }
  deploy(params) {
    return this._deploy(params.token0, params.token1, import_eth_wallet10.Utils.toString(params.price0), import_eth_wallet10.Utils.toString(params.price1), import_eth_wallet10.Utils.toString(params.limit0), import_eth_wallet10.Utils.toString(params.limit1));
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet10.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.param3);
    return new import_eth_wallet10.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet10.Utils.toString(params.fromAmount), import_eth_wallet10.Utils.toString(params.toAmount), params.payload);
    return {
      numerator: new import_eth_wallet10.BigNumber(result.numerator),
      denominator: new import_eth_wallet10.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
  async limits(params) {
    let result = await this.methods("limits", params.param1, params.param2, params.param3);
    return new import_eth_wallet10.BigNumber(result);
  }
  async prices(params) {
    let result = await this.methods("prices", params.param1, params.param2);
    return new import_eth_wallet10.BigNumber(result);
  }
};

// src/contracts/OSWAP_OracleSetYourOwnPrice.ts
var import_eth_wallet11 = require("@ijstech/eth-wallet");
var Bin11 = require_OSWAP_OracleSetYourOwnPrice();
var OSWAP_OracleSetYourOwnPrice = class extends import_eth_wallet11.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin11.abi, Bin11.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet11.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.param1, params.param2, params.payload);
    return new import_eth_wallet11.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet11.Utils.toString(params.param3), import_eth_wallet11.Utils.toString(params.param4), params.payload);
    return {
      numerator: new import_eth_wallet11.BigNumber(result.numerator),
      denominator: new import_eth_wallet11.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
};

// src/contracts/OSWAP_OracleSigned.ts
var import_eth_wallet12 = require("@ijstech/eth-wallet");
var Bin12 = require_OSWAP_OracleSigned();
var OSWAP_OracleSigned = class extends import_eth_wallet12.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin12.abi, Bin12.bytecode);
  }
  deploy(signer) {
    return this._deploy(signer);
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet12.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.from, params.to, params.payload);
    return new import_eth_wallet12.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.from, params.to, import_eth_wallet12.Utils.toString(params.param3), import_eth_wallet12.Utils.toString(params.param4), params.payload);
    return {
      numerator: new import_eth_wallet12.BigNumber(result.numerator),
      denominator: new import_eth_wallet12.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
  async sequenceNumber() {
    let result = await this.methods("sequenceNumber");
    return new import_eth_wallet12.BigNumber(result);
  }
  async signer() {
    let result = await this.methods("signer");
    return result;
  }
  async updateSequenceNumber(params) {
    let result = await this.methods("updateSequenceNumber", params.from, params.to, params.payload);
    return result;
  }
};

// src/contracts/OSWAP_OracleUnity.ts
var import_eth_wallet13 = require("@ijstech/eth-wallet");
var Bin13 = require_OSWAP_OracleUnity();
var OSWAP_OracleUnity = class extends import_eth_wallet13.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin13.abi, Bin13.bytecode);
  }
  deploy() {
    return this._deploy();
  }
  async decimals() {
    let result = await this.methods("decimals");
    return new import_eth_wallet13.BigNumber(result);
  }
  async getLatestPrice(params) {
    let result = await this.methods("getLatestPrice", params.param1, params.param2, params.param3);
    return new import_eth_wallet13.BigNumber(result);
  }
  async getRatio(params) {
    let result = await this.methods("getRatio", params.param1, params.param2, import_eth_wallet13.Utils.toString(params.param3), import_eth_wallet13.Utils.toString(params.param4), params.param5);
    return {
      numerator: new import_eth_wallet13.BigNumber(result.numerator),
      denominator: new import_eth_wallet13.BigNumber(result.denominator)
    };
  }
  async isSupported(params) {
    let result = await this.methods("isSupported", params.param1, params.param2);
    return result;
  }
};
module.exports = __toCommonJS(src_exports);

})