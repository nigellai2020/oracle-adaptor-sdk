export default {
"abi":[
{"inputs":[{"internalType":"address[]","name":"token0","type":"address[]"},{"internalType":"address[]","name":"token1","type":"address[]"},{"internalType":"uint256[]","name":"price0","type":"uint256[]"},{"internalType":"uint256[]","name":"price1","type":"uint256[]"},{"internalType":"uint256[]","name":"limit0","type":"uint256[]"},{"internalType":"uint256[]","name":"limit1","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"fromAmount","type":"uint256"},{"internalType":"uint256","name":"toAmount","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getRatio","outputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"limits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"prices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60806040523480156200001157600080fd5b506040516200126938038062001269833981810160405260c08110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b50505050905001604052602001805160405193929190846401000000008211156200017257600080fd5b9083019060208201858111156200018857600080fd5b8251866020820283011164010000000082111715620001a657600080fd5b82525081516020918201928201910280838360005b83811015620001d5578181015183820152602001620001bb565b5050505090500160405260200180516040519392919084640100000000821115620001ff57600080fd5b9083019060208201858111156200021557600080fd5b82518660208202830111640100000000821117156200023357600080fd5b82525081516020918201928201910280838360005b838110156200026257818101518382015260200162000248565b50505050905001604052602001805160405193929190846401000000008211156200028c57600080fd5b908301906020820185811115620002a257600080fd5b8251866020820283011164010000000082111715620002c057600080fd5b82525081516020918201928201910280838360005b83811015620002ef578181015183820152602001620002d5565b50505050905001604052602001805160405193929190846401000000008211156200031957600080fd5b9083019060208201858111156200032f57600080fd5b82518660208202830111640100000000821117156200034d57600080fd5b82525081516020918201928201910280838360005b838110156200037c57818101518382015260200162000362565b5050505090500160405250505085858585600084519050835181148015620003a5575082518451145b8015620003b3575081518351145b62000405576040805162461bcd60e51b815260206004820152601d60248201527f4f535741503a204172726179206c656e677468206e6f74206d61746368000000604482015290519081900360640190fd5b60005b81811015620006ae5760008682815181106200042057fe5b6020026020010151905060008683815181106200043957fe5b6020026020010151905060008684815181106200045257fe5b6020026020010151905060008685815181106200046b57fe5b6020026020010151905060006001600160a01b0316846001600160a01b03161415620004de576040805162461bcd60e51b815260206004820152601f60248201527f4f535741503a2063616e6e6f742068617665207a65726f206164647265737300604482015290519081900360640190fd5b6001600160a01b0383166200053a576040805162461bcd60e51b815260206004820152601f60248201527f4f535741503a2063616e6e6f742068617665207a65726f206164647265737300604482015290519081900360640190fd5b826001600160a01b0316846001600160a01b031614156200058d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806200123a602f913960400191505060405180910390fd5b81620005e0576040805162461bcd60e51b815260206004820152601d60248201527f4f535741503a2063616e6e6f742068617665207a65726f207072696365000000604482015290519081900360640190fd5b8062000633576040805162461bcd60e51b815260206004820152601d60248201527f4f535741503a2063616e6e6f742068617665207a65726f207072696365000000604482015290519081900360640190fd5b6001600160a01b0393841660008181526020818152604080832096909716808352958152868220949094558084528581208282528452858120929092556001808452858320948352938352848220805460ff199081168617909155848452858320918352925292909220805490921681179091550162000408565b505050505050600086519050855181148015620006cc575084518651145b8015620006da575083518551145b8015620006e8575082518451145b8015620006f6575081518351145b62000748576040805162461bcd60e51b815260206004820152601d60248201527f4f535741503a204172726179206c656e677468206e6f74206d61746368000000604482015290519081900360640190fd5b60005b81811015620009335760008882815181106200076357fe5b6020026020010151905060008883815181106200077c57fe5b6020026020010151905060008884815181106200079557fe5b602002602001015190506000888581518110620007ae57fe5b60200260200101519050878581518110620007c557fe5b6020908102919091018101516001600160a01b0380871660009081526002845260408082209288168252918452818120600182529093529091205587516200085590670de0b6b3a764000090620008419085908c908a9081106200082557fe5b60200260200101516200094160201b6200057b1790919060201c565b620009a860201b620005f71790919060201c565b6001600160a01b03808616600090815260026020908152604080832093881683529281528282208280529052205586518790869081106200089257fe5b6020908102919091018101516001600160a01b038086166000908152600284526040808220928916825291845281812060018252909352909120558651620008f290670de0b6b3a764000090620008419084908b908a9081106200082557fe5b6001600160a01b039384166000908152600260209081526040808320979096168252958652848120818052909552929093209190915550506001016200074b565b505050505050505062000a99565b6000826200095257506000620009a2565b828202828482816200096057fe5b04146200099f5760405162461bcd60e51b8152600401808060200182810382526021815260200180620012196021913960400191505060405180910390fd5b90505b92915050565b60006200099f83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250620009f260201b60201c565b6000818362000a825760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562000a4657818101518382015260200162000a2c565b50505050905090810190601f16801562000a745780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858162000a8f57fe5b0495945050505050565b6107708062000aa96000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c806388462c8d1161005057806388462c8d146101785780638d670b71146101c7578063d9da4fe61461020c57610072565b80631f31240414610077578063313ce567146100c4578063495e4348146100e2575b600080fd5b6100b26004803603604081101561008d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166102c7565b60408051918252519081900360200190f35b6100cc6102e1565b6040805160ff9092168252519081900360200190f35b6100b2600480360360608110156100f857600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561013957600080fd5b82018360208201111561014b57600080fd5b8035906020019184600183028401116401000000008311171561016d57600080fd5b5090925090506102e6565b6101b36004803603604081101561018e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610413565b604080519115158252519081900360200190f35b6100b2600480360360608110156101dd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001351515610433565b6102ae600480360360a081101561022257600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561026f57600080fd5b82018360208201111561028157600080fd5b803590602001918460018302840111640100000000831117156102a357600080fd5b509092509050610456565b6040805192835260208301919091528051918290030190f35b600060208181529281526040808220909352908152205481565b601290565b60008373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141561036d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806106f16029913960400191505060405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff808516600090815260208181526040808320938716835292905220548061040b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a2070726963652066656564206e6f7420666f756e640000000000604482015290519081900360640190fd5b949350505050565b600160209081526000928352604080842090915290825290205460ff1681565b600260209081526000938452604080852082529284528284209052825290205481565b600080851580156104a0575073ffffffffffffffffffffffffffffffffffffffff8089166000908152600260209081526040808320938b1683529281528282208280529052205485105b806104ee5750841580156104ee575073ffffffffffffffffffffffffffffffffffffffff8089166000908152600260209081526040808320938b168352928152828220600183529052205486105b61055957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4f535741503a204f766572204c696d6974000000000000000000000000000000604482015290519081900360640190fd5b610565888886866102e6565b98670de0b6b3a764000098509650505050505050565b60008261058a575060006105f1565b8282028284828161059757fe5b04146105ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061071a6021913960400191505060405180910390fd5b90505b92915050565b60006105ee83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836106da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561069f578181015183820152602001610687565b50505050905090810190601f1680156106cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816106e657fe5b049594505050505056fe4f535741503a2066726f6d20616e6420746f2061646472657373657320617265207468652073616d65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122045e2478de3bd70bf010555e698b86592d13b2b1649593c632def3f8f9ae2f79864736f6c634300060b0033536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f535741503a2066726f6d20616e6420746f206164647265737365732063616e6e6f74206265207468652073616d65"
}