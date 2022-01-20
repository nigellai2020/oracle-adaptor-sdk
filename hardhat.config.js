"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-waffle");
var config = {
    solidity: {
        version: "0.6.11",
        settings: {
            optimizer: {
                enabled: true,
                runs: 999999,
            }
        }
    },
    paths: {
        sources: "./contracts-test"
    }
};
exports.default = config;
