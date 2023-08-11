/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AdapterTestHelper,
  AdapterTestHelperInterface,
} from "../AdapterTestHelper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "AddCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "blacklistHelper",
        type: "address",
      },
    ],
    name: "BlacklistHelperSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "CloseCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DecreaseBorrowedAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "ExecuteOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "IncreaseBorrowedAmount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "IncurLossOnLiquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingFunds",
        type: "uint256",
      },
    ],
    name: "LiquidateCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainingFunds",
        type: "uint256",
      },
    ],
    name: "LiquidateExpiredCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MultiCallFinished",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "MultiCallStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newConfigurator",
        type: "address",
      },
    ],
    name: "NewConfigurator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "referralCode",
        type: "uint16",
      },
    ],
    name: "OpenCreditAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferAccount",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "TransferAccountAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UnderlyingSentToBlacklistHelper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "addMockPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cft",
    outputs: [
      {
        internalType: "contract CreditFacadeTestSuite",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditConfigurator",
    outputs: [
      {
        internalType: "contract CreditConfigurator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditFacade",
    outputs: [
      {
        internalType: "contract CreditFacade",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "creditManager",
    outputs: [
      {
        internalType: "contract ICreditManagerV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "failed",
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
    name: "underlying",
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
] as const;

const _bytecode =
  "0x60806040526000805460ff19166001179055600980546001600160a01b031916737109709ecfa91a80626ff3989d68f67f5b1dd12d17905534801561004357600080fd5b50610db6806100536000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c12c21c01161005b578063c12c21c014610124578063df51443314610144578063f9aa028a14610164578063fa7626d41461018457600080fd5b80632f7a18811461008d5780636f307dc3146100d75780639dd55b45146100f7578063ba414fa61461010c575b600080fd5b600b546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b600e546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b61010a61010536600461059a565b610191565b005b610114610408565b60405190151581526020016100ce565b600a546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b600d546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b600c546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b6000546101149060ff1681565b60008160086040516101a290610568565b91825260ff166020820152604001604051809103906000f0801580156101cc573d6000803e3d6000fd5b506009546040517f06447d560000000000000000000000000000000000000000000000000000000081527370997970c51812dc3a010c7d01b50e0d17dc79c8600482015291925073ffffffffffffffffffffffffffffffffffffffff16906306447d5690602401600060405180830381600087803b15801561024d57600080fd5b505af1158015610261573d6000803e3d6000fd5b50505050600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632630c12f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f691906105c6565b6040517fe8a97a3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301528381166024830152919091169063e8a97a3e90604401600060405180830381600087803b15801561036957600080fd5b505af115801561037d573d6000803e3d6000fd5b50505050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103eb57600080fd5b505af11580156103ff573d6000803e3d6000fd5b50505050505050565b60008054610100900460ff16156104285750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156105635760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c65640000000000000000000000000000000000000000000000000000828401528251808303840181526060830190935260009290916104cd917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800161061a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261050591610656565b6000604051808303816000865af19150503d8060008114610542576040519150601f19603f3d011682016040523d82523d6000602084013e610547565b606091505b509150508080602001905181019061055f9190610662565b9150505b919050565b6106fc8061068583390190565b73ffffffffffffffffffffffffffffffffffffffff8116811461059757600080fd5b50565b600080604083850312156105ad57600080fd5b82356105b881610575565b946020939093013593505050565b6000602082840312156105d857600080fd5b81516105e381610575565b9392505050565b6000815160005b8181101561060b57602081850181015186830152016105f1565b50600093019283525090919050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600061064e60048301846105ea565b949350505050565b60006105e382846105ea565b60006020828403121561067457600080fd5b815180151581146105e357600080fdfe60a060405234801561001057600080fd5b506040516106fc3803806106fc83398101604081905261002f9161007f565b600082905560ff81166080526001805460506001600160501b031991821681178355600480549092161790556100669042906100b5565b6002556100744260016100b5565b600355506100dc9050565b6000806040838503121561009257600080fd5b82519150602083015160ff811681146100aa57600080fd5b809150509250929050565b808201808211156100d657634e487b7160e01b600052601160045260246000fd5b92915050565b6080516106066100f6600039600060d301526106066000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80639a6fc8f511610081578063d62ada111161005b578063d62ada11146102dc578063f7a30806146102f4578063feaf968c1461030757600080fd5b80639a6fc8f5146101cd578063bd18ad531461023a578063cd653afc1461024d57600080fd5b806354fd4d50116100b257806354fd4d501461012d57806367e8d83d1461013c5780637284e4161461018e57600080fd5b8063313ce567146100ce5780633fd0875f1461010c575b600080fd5b6100f57f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020015b60405180910390f35b6004546a0100000000000000000000900460ff166040516101039190610440565b60405160018152602001610103565b61018c61014a366004610481565b600480549115156c01000000000000000000000000027fffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffff909216919091179055565b005b604080518082018252600c81527f7072696365206f7261636c6500000000000000000000000000000000000000006020820152905161010391906104aa565b6102036101db366004610535565b60015460005460025460035460045469ffffffffffffffffffff948516941691939590929450565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610103565b61018c610248366004610550565b61030f565b61018c61025b366004610571565b6001805469ffffffffffffffffffff9586167fffffffffffffffffffffffffffffffffffffffffffff0000000000000000000090911617905560029290925560035560048054919092167fffffffffffffffffffffffffffffffffffffffff00ff00000000000000000000909116176b020000000000000000000000179055565b6102e461035f565b6040519015158152602001610103565b61018c6103023660046105b7565b600055565b610203610385565b600480548291907fffffffffffffffffffffffffffffffffffffffff00ffffffffffffffffffffff166b01000000000000000000000083600281111561035757610357610411565b021790555050565b600454600090610380906b010000000000000000000000900460ff166103d6565b905090565b60008060008060006004600c9054906101000a900460ff16156103a757600080fd5b505060015460005460025460035460045469ffffffffffffffffffff9485169893975091955093509190911690565b600060028260028111156103ec576103ec610411565b036103f657600080fd5b600182600281111561040a5761040a610411565b1492915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60208101600e831061047b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60006020828403121561049357600080fd5b813580151581146104a357600080fd5b9392505050565b600060208083528351808285015260005b818110156104d7578581018301518582016040015282016104bb565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803569ffffffffffffffffffff8116811461053057600080fd5b919050565b60006020828403121561054757600080fd5b6104a382610516565b60006020828403121561056257600080fd5b8135600381106104a357600080fd5b6000806000806080858703121561058757600080fd5b61059085610516565b935060208501359250604085013591506105ac60608601610516565b905092959194509250565b6000602082840312156105c957600080fd5b503591905056fea2646970667358221220c8f71d7bcde51cd2b6b6d2fa733e1aeed8ea2fc115498d63b611832f3cda879364736f6c63430008110033a26469706673582212205861f39411c545621b91662bba5bbf012e4a9276d1865423134625671d58990764736f6c63430008110033";

type AdapterTestHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdapterTestHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AdapterTestHelper__factory extends ContractFactory {
  constructor(...args: AdapterTestHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AdapterTestHelper";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdapterTestHelper> {
    return super.deploy(overrides || {}) as Promise<AdapterTestHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AdapterTestHelper {
    return super.attach(address) as AdapterTestHelper;
  }
  override connect(signer: Signer): AdapterTestHelper__factory {
    return super.connect(signer) as AdapterTestHelper__factory;
  }
  static readonly contractName: "AdapterTestHelper";

  public readonly contractName: "AdapterTestHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdapterTestHelperInterface {
    return new utils.Interface(_abi) as AdapterTestHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdapterTestHelper {
    return new Contract(address, _abi, signerOrProvider) as AdapterTestHelper;
  }
}
