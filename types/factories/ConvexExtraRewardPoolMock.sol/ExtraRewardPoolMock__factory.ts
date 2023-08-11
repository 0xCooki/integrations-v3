/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ExtraRewardPoolMock,
  ExtraRewardPoolMockInterface,
} from "../../ConvexExtraRewardPoolMock.sol/ExtraRewardPoolMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "deposit_",
        type: "address",
      },
      {
        internalType: "address",
        name: "reward_",
        type: "address",
      },
      {
        internalType: "address",
        name: "op_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposits",
    outputs: [
      {
        internalType: "contract IDeposit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "donate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "historicalRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newRewardRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "queueNewRewards",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "queuedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerTokenStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600180546001600160a01b031916737109709ecfa91a80626ff3989d68f67f5b1dd12d17905560006004819055600581905560088190556009819055600a819055600d819055600e5534801561005957600080fd5b50604051610fb4380380610fb4833981016040819052610078916100d6565b600080546001600160a01b039485166001600160a01b031991821617909155600280549385169382169390931790925560038054919093169116179055610119565b80516001600160a01b03811681146100d157600080fd5b919050565b6000806000606084860312156100eb57600080fd5b6100f4846100ba565b9250610102602085016100ba565b9150610110604085016100ba565b90509250925092565b610e8c806101286000396000f3fe608060405234801561001057600080fd5b50600436106101a25760003560e01c80637b0a47ee116100ee578063c8f33c9111610097578063ebe2b12b11610071578063ebe2b12b14610345578063f14faf6f14610285578063f3fef3a314610305578063f7c618c11461034e57600080fd5b8063c8f33c911461032b578063cd3daf9d14610334578063df136d651461033c57600080fd5b80639b7ccf4c116100c85780639b7ccf4c146102f0578063adc9772e14610305578063c00007b01461031857600080fd5b80637b0a47ee146102be5780638b876347146102c7578063901a7d53146102e757600080fd5b80633d18b9121161015057806363d38c3b1161012a57806363d38c3b146102995780636c8bcee8146102a257806370a08231146102ab57600080fd5b80633d18b9121461024d578063570ca73514610265578063590a41f51461028557600080fd5b806318160ddd1161018157806318160ddd146101f7578063262d3d6d146101ff578063323a5e0b1461020857600080fd5b80628cc262146101a75780630700037d146101cd5780630fb5a6b4146101ed575b600080fd5b6101ba6101b5366004610c64565b61036e565b6040519081526020015b60405180910390f35b6101ba6101db366004610c64565b600c6020526000908152604090205481565b6101ba62093a8081565b6101ba6103ea565b6101ba600a5481565b6000546102289073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101c4565b610255610481565b60405190151581526020016101c4565b6003546102289073ffffffffffffffffffffffffffffffffffffffff1681565b610255610293366004610c81565b50600190565b6101ba60085481565b6101ba61033e81565b6101ba6102b9366004610c64565b610494565b6101ba60055481565b6101ba6102d5366004610c64565b600b6020526000908152604090205481565b6101ba60095481565b6103036102fe366004610c81565b610529565b005b610255610313366004610c9a565b61072c565b610255610326366004610c64565b6107af565b6101ba60065481565b6007546101ba565b6101ba60075481565b6101ba60045481565b6002546102289073ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600c6020908152604080832054600b9092528220546103e491906103de90670de0b6b3a7640000906103d8906103c9906103c360075490565b90610859565b6103d288610494565b9061086c565b90610878565b90610884565b92915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610458573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047c9190610cc6565b905090565b600061048c336107af565b506001905090565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152909116906370a0823190602401602060405180830381865afa158015610505573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e49190610cc6565b600154600254604080517f07546172000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9384169363ca669fa793169163075461729160048083019260209291908290030181865afa1580156105a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c79190610cdf565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b50506002546040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810185905273ffffffffffffffffffffffffffffffffffffffff90911692506340c10f1991506044016020604051808303816000875af11580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e09190610cfc565b506106e96103ea565b15610729576106f66103ea565b61070882670de0b6b3a7640000610d4d565b6107129190610d64565b600760008282546107239190610d9f565b90915550505b50565b60008273ffffffffffffffffffffffffffffffffffffffff81161561078d576107548161036e565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020908152604080832093909355600754600b909152919020555b6001600e60008282546107a09190610d9f565b90915550600195945050505050565b60008173ffffffffffffffffffffffffffffffffffffffff811615610810576107d78161036e565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020908152604080832093909355600754600b909152919020555b600061081b8461036e565b9050801561078d5773ffffffffffffffffffffffffffffffffffffffff8085166000908152600c602052604081205560025461078d91168583610890565b60006108658284610db2565b9392505050565b60006108658284610d4d565b60006108658284610d64565b60006108658284610d9f565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261091d908490610922565b505050565b6000610984826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a339092919063ffffffff16565b80519091501561091d57808060200190518101906109a29190610cfc565b61091d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6060610a428484600085610a4a565b949350505050565b606082471015610adc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a2a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610b059190610de9565b60006040518083038185875af1925050503d8060008114610b42576040519150601f19603f3d011682016040523d82523d6000602084013e610b47565b606091505b5091509150610b5887838387610b63565b979650505050505050565b60608315610bf9578251600003610bf25773ffffffffffffffffffffffffffffffffffffffff85163b610bf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a2a565b5081610a42565b610a428383815115610c0e5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a9190610e05565b73ffffffffffffffffffffffffffffffffffffffff8116811461072957600080fd5b600060208284031215610c7657600080fd5b813561086581610c42565b600060208284031215610c9357600080fd5b5035919050565b60008060408385031215610cad57600080fd5b8235610cb881610c42565b946020939093013593505050565b600060208284031215610cd857600080fd5b5051919050565b600060208284031215610cf157600080fd5b815161086581610c42565b600060208284031215610d0e57600080fd5b8151801515811461086557600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176103e4576103e4610d1e565b600082610d9a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b808201808211156103e4576103e4610d1e565b818103818111156103e4576103e4610d1e565b60005b83811015610de0578181015183820152602001610dc8565b50506000910152565b60008251610dfb818460208701610dc5565b9190910192915050565b6020815260008251806020840152610e24816040850160208701610dc5565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220c796e316438422e042afda369131ee7b38db5d4476bb4fa27574f0fb19cbefd964736f6c63430008110033";

type ExtraRewardPoolMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExtraRewardPoolMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExtraRewardPoolMock__factory extends ContractFactory {
  constructor(...args: ExtraRewardPoolMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExtraRewardPoolMock";
  }

  override deploy(
    deposit_: PromiseOrValue<string>,
    reward_: PromiseOrValue<string>,
    op_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExtraRewardPoolMock> {
    return super.deploy(
      deposit_,
      reward_,
      op_,
      overrides || {}
    ) as Promise<ExtraRewardPoolMock>;
  }
  override getDeployTransaction(
    deposit_: PromiseOrValue<string>,
    reward_: PromiseOrValue<string>,
    op_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(deposit_, reward_, op_, overrides || {});
  }
  override attach(address: string): ExtraRewardPoolMock {
    return super.attach(address) as ExtraRewardPoolMock;
  }
  override connect(signer: Signer): ExtraRewardPoolMock__factory {
    return super.connect(signer) as ExtraRewardPoolMock__factory;
  }
  static readonly contractName: "ExtraRewardPoolMock";

  public readonly contractName: "ExtraRewardPoolMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExtraRewardPoolMockInterface {
    return new utils.Interface(_abi) as ExtraRewardPoolMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExtraRewardPoolMock {
    return new Contract(address, _abi, signerOrProvider) as ExtraRewardPoolMock;
  }
}
