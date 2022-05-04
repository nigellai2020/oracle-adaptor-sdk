export default {
"abi":[
{"inputs":[{"internalType":"address[]","name":"_from","type":"address[]"},{"internalType":"address[]","name":"_to","type":"address[]"},{"internalType":"uint256[]","name":"_count","type":"uint256[]"},{"internalType":"address[]","name":"_paths","type":"address[]"},{"internalType":"address[]","name":"_oracles","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getRatio","outputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"isSupported","outputs":[{"internalType":"bool","name":"supported","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"oraclesStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"pathsStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"priceFeedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60806040523480156200001157600080fd5b506040516200138038038062001380833981810160405260a08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b50505050905001604052602001805160405193929190846401000000008211156200017257600080fd5b9083019060208201858111156200018857600080fd5b8251866020820283011164010000000082111715620001a657600080fd5b82525081516020918201928201910280838360005b83811015620001d5578181015183820152602001620001bb565b5050505090500160405260200180516040519392919084640100000000821115620001ff57600080fd5b9083019060208201858111156200021557600080fd5b82518660208202830111640100000000821117156200023357600080fd5b82525081516020918201928201910280838360005b838110156200026257818101518382015260200162000248565b50505050905001604052602001805160405193929190846401000000008211156200028c57600080fd5b908301906020820185811115620002a257600080fd5b8251866020820283011164010000000082111715620002c057600080fd5b82525081516020918201928201910280838360005b83811015620002ef578181015183820152602001620002d5565b5050505090500160405250505060008090508451865114801562000314575083518551145b62000366576040805162461bcd60e51b815260206004820152601660248201527f4172726179206c656e677468206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b60005b8451811015620003ac57620003a18582815181106200038457fe5b6020026020010151836200059860201b620008171790919060201c565b915060010162000369565b50825181148015620003d857508151620003d68451836200059860201b620008171790919060201c565b145b6200042a576040805162461bcd60e51b815260206004820152601660248201527f4172726179206c656e677468206e6f74206d6174636800000000000000000000604482015290519081900360640190fd5b6000805b87518110156200058a5760008682815181106200044757fe5b602002602001015190506060816001600160401b03811180156200046a57600080fd5b5060405190808252806020026020018201604052801562000495578160200160208202803683370190505b5090506060826001016001600160401b0381118015620004b457600080fd5b50604051908082528060200260200182016040528015620004df578160200160208202803683370190505b50905060005b838110156200057957888681518110620004fb57fe5b60200260200101518382815181106200051057fe5b60200260200101906001600160a01b031690816001600160a01b03168152505087858701815181106200053f57fe5b60200260200101518282815181106200055457fe5b6001600160a01b039092166020928302919091019091015260019586019501620004e5565b5050600190920191506200042e9050565b5050505050505050620005fa565b600082820183811015620005f3576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610d76806200060a6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806375aa41741161005b57806375aa4174146101b457806388462c8d146101e7578063d9da4fe614610236578063f3a16d02146102f15761007d565b806306e5415014610082578063313ce567146100ee578063495e43481461010c575b600080fd5b6100c56004803603606081101561009857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610334565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100f6610383565b6040805160ff9092168252519081900360200190f35b6101a26004803603606081101561012257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561016357600080fd5b82018360208201111561017557600080fd5b8035906020019184600183028401116401000000008311171561019757600080fd5b509092509050610388565b60408051918252519081900360200190f35b6100c5600480360360208110156101ca57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610717565b610222600480360360408110156101fd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661073f565b604080519115158252519081900360200190f35b6102d8600480360360a081101561024c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460018302840111640100000000831117156102cd57600080fd5b5090925090506107e4565b6040805192835260208301919091528051918290030190f35b6100c56004803603606081101561030757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107f2565b6002602052826000526040600020602052816000526040600020818154811061035957fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16925083915050565b601290565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600260209081526040808320938716835292815282822080548451818402810184019095528085529293606093909283018282801561041a57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103ef575b50505073ffffffffffffffffffffffffffffffffffffffff808a166000908152600360209081526040808320938c16835292815290829020805483518184028101840190945280845295965060609592945092508301828280156104b457602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610489575b5050505050905060008090506000808483815181106104cf57fe5b602002602001015190508383815181106104e557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663495e43488b838b8b6040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b1580156105d157600080fd5b505afa1580156105e5573d6000803e3d6000fd5b505050506040513d60208110156105fb57600080fd5b5051845190965060009085908590811061061157fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561065e57600080fd5b505afa158015610672573d6000803e3d6000fd5b505050506040513d602081101561068857600080fd5b50516001945090505b85518410156106e5578192508584815181106106a957fe5b602002602001015191506106d587828787815181106106c457fe5b602002602001015186868e8e610892565b9097506001909401939050610691565b61070787828787815181106106f657fe5b6020026020010151858e8e8e610892565b509b9a5050505050505050505050565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff808316600090815260036020908152604080832093851683529281528282208054845181840281018401909552808552929360609390928301828280156107d157602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116107a6575b5050925115159450505050505b92915050565b600080965096945050505050565b6003602052826000526040600020602052816000526040600020818154811061035957fe5b60008282018381101561088b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008060008773ffffffffffffffffffffffffffffffffffffffff1663495e4348888888886040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b15801561097c57600080fd5b505afa158015610990573d6000803e3d6000fd5b505050506040513d60208110156109a657600080fd5b5051604080517f313ce567000000000000000000000000000000000000000000000000000000008152905191925060009173ffffffffffffffffffffffffffffffffffffffff8b169163313ce567916004808301926020929190829003018186803b158015610a1457600080fd5b505afa158015610a28573d6000803e3d6000fd5b505050506040513d6020811015610a3e57600080fd5b50519050610a528b8363ffffffff610af816565b9350610a6a60ff8b811690831663ffffffff61081716565b60121115610ab557610aae610a9e60ff80841690610a92906012908f1663ffffffff610b6b16565b9063ffffffff610b6b16565b8590600a0a63ffffffff610af816565b9350610ae6565b610ae3610ad36012610a9260ff8e811690861663ffffffff61081716565b8590600a0a63ffffffff610bad16565b93505b60129250505097509795505050505050565b600082610b07575060006107de565b82820282848281610b1457fe5b041461088b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610d206021913960400191505060405180910390fd5b600061088b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610bef565b600061088b83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610ca0565b60008184841115610c98576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c5d578181015183820152602001610c45565b50505050905090810190601f168015610c8a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183610d09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201818152835160248401528351909283926044909101919085019080838360008315610c5d578181015183820152602001610c45565b506000838581610d1557fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220736b75e241c4e1f0beb6cc57ea056c5a5a08a3b0b5fc554832863860a30506ec64736f6c634300060b0033"
}