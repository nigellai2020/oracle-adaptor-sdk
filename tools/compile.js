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

function recursiveAdd(root, srcPath, sources) {
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
console.log(path.join(root, srcPath, files[i]).replace(/\\/g,"/").replace(/^([A-Za-z]):/,"/$1"));
        sources[path.join(root, srcPath, files[i]).replace(/\\/g,"/").replace(/^([A-Za-z]):/,"/$1")] = { content: fs.readFileSync(path.resolve(currPath, files[i]), "utf8") };
      }
    }
  }
  for (var i = 0 ; i < files.length ; i++) {
     if (stats[i].isDirectory()) {
       recursiveAdd(root, path.join(srcPath, files[i]), sources);
     }
  }
  return sources;
}
function buildInput(source) {
  var input = {
    language: "Solidity",
    sources: {},
    settings:
    {
      // remappings: [ ":g=./contracts" ],
      optimizer: {
        enabled: true,
        runs: 999999
      },
      // evmVersion: "istanbul",//"constantinople",//"byzantium",
      outputSelection: {
        "*": {
          "*": [ "abi", "evm","evm.bytecode","evm.bytecode.object" ]
        }
      }
    },
  };
  recursiveAdd(source, "", input.sources);
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
async function run(version, _sourceDir, outputDir, _libMap) {
  await mkdirp("build");
  await mkdirp("tools/solcjs");
  try{
  libMap = _libMap || "{}";
  console.log("libMap " + libMap);
  libMap = JSON.parse(libMap);
  sourceDir = _sourceDir
  var solcjsPath = getCache(version);
  if (!solcjsPath) {
    solcjsPath = await getSolc(version);
  }
  if (!solcjsPath) {
    return null;
  }
  var solc = solcWrapper(require(solcjsPath));
  console.log("input:");
  // sourceDir = path.resolve(sourceDir); // comment this line for hardhat, enable it for truffle
  var input = buildInput(sourceDir);
  var output = JSON.parse(solc.compile(JSON.stringify(input), { import: findImports }));
  var abi =  fs.existsSync(outputDir + "/abis.json") ? JSON.parse(fs.readFileSync(outputDir + "/abis.json", "utf8").trim() || "{}") : {};
  var bytecode = fs.existsSync(outputDir + "/bytecodes.json") ? JSON.parse(fs.readFileSync(outputDir + "/bytecodes.json", "utf8").trim() || "{}") : {};
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
    function prettyPrint1(s){
      let i = 0;
      return s.split('').map(e=>{
        if (e=='[') i++; else if (e==']') i--;
        return i==0?e=="{"?"{\n  ":e==","?",\n  ":e=="}"?"\n}":e:e;
      }).join('');
    }
    fs.writeFileSync(outputDir + "/abis.json", prettyPrint1(JSON.stringify(abi)), "utf8");
    fs.writeFileSync(outputDir + "/bytecodes.json", JSON.stringify(bytecode, null, "  "), "utf8");
  }
  if (output.errors) {
    output.errors/*.filter(e=>e.severity!='warning')*/.forEach(e=>console.log(e.formattedMessage));
  }
  }catch(e) {console.log(e)}
}


if (process.argv.length < 4) {
  return console.log("Usage: node compile.js <version> <src_dir> <out_dir> [<lib_map>]\ne.g.: node tools\\compile.js 0.6.11 contracts build")
}
// node compile <version> <src_dir> <out_dir> <lib_map>
run(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
