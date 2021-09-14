const axios = require('axios');
const fs = require('fs');
const path = require('path');
const solcWrapper = require("solc/wrapper");
const mkdirp = require("mkdirp");

const cacheDir = "solcjs";

/*
https://solc-bin.ethereum.org/bin/list.json
https://ethereum.github.io/solc-bin/bin/list.json
*/

function recursiveAdd(root, srcPath, sources, exclude) {
  var currPath = path.join(root, srcPath);
  // signle file
  if (fs.statSync(currPath).isFile()) {
    sources[currPath] = { content: fs.readFileSync(currPath, "utf8") };
    return sources;
  }
  var files = fs.readdirSync(currPath);
  var stats = files.map(e=>fs.statSync(path.resolve(currPath, e)))

  for (var i = 0 ; i < files.length ; i++) {
    if (files[i].endsWith(".sol") && stats[i].isFile()) {
      if (sources[files[i]]){
        console.log(files[i] + " already exists");
      } else {
        var newpath = path.join(root, srcPath, files[i]).replace(/\\/g,"/").replace(/^([A-Za-z]):/,"/$1");
console.log(newpath);
        if ((!exclude || !exclude.includes(newpath)))
          sources[newpath] = { content: fs.readFileSync(path.resolve(currPath, files[i]), "utf8") };
        else 
          console.log("skipped");
      }
    }
  }
  for (var i = 0 ; i < files.length ; i++) {
     if (stats[i].isDirectory()) {
       recursiveAdd(root, path.join(srcPath, files[i]), sources, exclude);
     }
  }
  return sources;
}
function buildInput(source, optimizeRun, exclude) {
  var input = {
    language: "Solidity",
    sources: {},
    settings:
    {
      // remappings: [ ":g=./contracts" ],
      optimizer: {
        enabled: true,
        runs: optimizeRun || 999999
      },
      // evmVersion: "istanbul",//"constantinople",//"byzantium",
      outputSelection: {
        "*": {
          "*": [ "abi", "evm","evm.bytecode","evm.bytecode.object" ]
        }
      }
    },
  };
  recursiveAdd(source, "", input.sources, exclude);
  return input;
}
function getCache(version) {
  var solcjsPath = path.resolve(__dirname, cacheDir);
  var files = fs.readdirSync(solcjsPath);
  files = files.filter(e=>new RegExp(`soljson-v${version}\\+commit.[0-9a-f]{8}.js`).test(e));
  return (files && files.length==1) ? (path.resolve(solcjsPath, files[0])) : null;
}
async function getSolc(version) {
  try{
    let list = await axios.get("https://solc-bin.ethereum.org/bin/list.json");
    list = list.data;
    if (list) {
      var file = list.releases[version];
      if (file) {
        var build = list.builds.filter(e=>e.path==file);
        if (build && build.length == 1) {
          var filename = build[0].path;
          console.log(filename);
          var solcjs = await axios.get("https://solc-bin.ethereum.org/bin/" + filename);
          solcjs = solcjs.data;
          var solcjsPath = path.resolve(__dirname, cacheDir, filename);
          fs.writeFileSync(solcjsPath, solcjs);
          return solcjsPath;
        }
      }
    }
  }catch(e){console.log(e)}
}
function findImports(path){
  console.log("importing: " + path);

  if (path.startsWith("@")) {
    let target = "node_modules/" + path;
    console.log("target localtion " + target);
    if (fs.existsSync(target)) {
      return {
        contents:
          fs.readFileSync(target, "utf8")
      }
    }
  }

  for (var i in libMap) {
    if (path.startsWith(i)) {
      let _sourceDir = sourceDir;
      if (_sourceDir.endsWith(".sol")) {
        _sourceDir = _sourceDir.replace(/[a-zA-Z0-9_-]+\.sol$/,"");
      }
      let targetList = libMap[i];
      if (!Array.isArray(targetList)) targetList = [targetList];
      for (let j = 0 ; j < targetList.length ; j++){
        let target = path.replace(i, _sourceDir + targetList[j]);
        console.log("target localtion " + target);
        if (fs.existsSync(target)) {
          return {
            contents:
              fs.readFileSync(target, "utf8")
          }
        }
      }
    }
  }
  console.log("import not found");
}
function prettyPrint1(s){
  let i = 0;
  return s.split('').map(e=>{
    if (e=='[') i++; else if (e==']') i--;
    return i==0?e=="{"?"{\n  ":e==","?",\n  ":e=="}"?"\n}":e:e;
  }).join('');
}
async function run(version, _sourceDir, outputDir, _libMap, customSettings) {
  await mkdirp("build");
  await mkdirp("tools/solcjs");
  try{
  libMap = _libMap || "{}";
  console.log("libMap " + libMap);
  libMap = JSON.parse(libMap);
  customSettings = customSettings || "{}";
  customSettings = JSON.parse(customSettings);
  sourceDir = _sourceDir
  var solcjsPath = getCache(version);
  if (!solcjsPath) {
    solcjsPath = await getSolc(version);
  }
  if (!solcjsPath) {
    return null;
  }
  var solc = solcWrapper(require(solcjsPath));

  var abi =  fs.existsSync(outputDir + "/abis.json") ? JSON.parse(fs.readFileSync(outputDir + "/abis.json", "utf8").trim() || "{}") : {};
  var bytecode = fs.existsSync(outputDir + "/bytecodes.json") ? JSON.parse(fs.readFileSync(outputDir + "/bytecodes.json", "utf8").trim() || "{}") : {};

  // main
  console.log("input:");
  // sourceDir = path.resolve(sourceDir); // comment this line for hardhat, enable it for truffle
  var exclude = customSettings && Object.keys(customSettings);
  var input = buildInput(sourceDir, null, exclude);

  var output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));
  console.log("output:")
  if (output.contracts) {
    for (var i in output.contracts) {
      for (var j in output.contracts[i]) {
        if (abi[j]) {
          console.log("Replacing " + j);
        }
        console.log(j)
        abi[j] = output.contracts[i][j].abi;
        bytecode[j] = output.contracts[i][j].evm && output.contracts[i][j].evm.bytecode && output.contracts[i][j].evm.bytecode.object;
      }
    }
  }
  if (output.errors) {
    output.errors/*.filter(e=>e.severity!='warning')*/.forEach(e=>console.log(e.formattedMessage));
  }

  // customs
  console.log("custom:");
  console.log("input:");
  if (customSettings) {
    for (let s in customSettings) {
      input = buildInput(s, customSettings[s], exclude.filter(e=>e!=s));

      output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));

      console.log("output:")
      if (output.contracts) {
        for (var j in output.contracts[s]) {
          if (abi[j]) {
            console.log("Replacing " + j);
          }
          console.log(j)
          abi[j] = output.contracts[s][j].abi;
          bytecode[j] = output.contracts[s][j].evm && output.contracts[s][j].evm.bytecode && output.contracts[s][j].evm.bytecode.object;
        }
      }
      if (output.errors) {
        output.errors/*.filter(e=>e.severity!='warning')*/.forEach(e=>console.log(e.formattedMessage));
      }
    }
  }

  fs.writeFileSync(outputDir + "/abis.json", prettyPrint1(JSON.stringify(abi)), "utf8");
  fs.writeFileSync(outputDir + "/bytecodes.json", JSON.stringify(bytecode, null, "  "), "utf8");

  }catch(e) {console.log(e)}
}


if (process.argv.length < 4) {
  return console.log("Usage: node compileV2.js <version> <src_dir> <out_dir> [<lib_map> [<custom_settings>]]  e.g.: node tools/compileV2.js 0.6.11 contracts build \"{\\\"\\\":\\\"/../\\\"}\" \"{\\\"contracts/oracle/OSWAP_OraclePair.sol\\\":45000,\\\"contracts/oracle/OSWAP_OraclePairCreator.sol\\\":45000}\"")
}
// node compile <version> <src_dir> <out_dir> <lib_map>
// node tools/compile.js 0.6.11 contracts build "{\"\":\"/../\"}" "{\"contracts/restricted/OAXDEX_RestrictedPairCreator.sol\":45000}"
// node tools/compileV2.js 0.6.11 contracts build "{\"\":\"/../\"}" "{\"contracts/oracle/OSWAP_OraclePair.sol\":45000,\"contracts/oracle/OSWAP_OraclePairCreator.sol\":45000}"
run(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
