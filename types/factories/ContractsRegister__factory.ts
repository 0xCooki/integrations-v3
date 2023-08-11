/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ContractsRegister,
  ContractsRegisterInterface,
} from "../ContractsRegister";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotConfiguratorException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotUnPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "NewCreditManagerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "NewPoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "_acl",
    outputs: [
      {
        internalType: "contract IACL",
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
        name: "newCreditManager",
        type: "address",
      },
    ],
    name: "addCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "creditManagers",
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
    name: "getCreditManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreditManagersCount",
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
    name: "getPools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolsCount",
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
    name: "isCreditManager",
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
        name: "",
        type: "address",
      },
    ],
    name: "isPool",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f59380380610f5983398101604081905261002f916100d7565b6000805460ff19169055806001600160a01b03811661006157604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa15801561009f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c391906100d7565b6001600160a01b0316608052506101079050565b6000602082840312156100e957600080fd5b81516001600160a01b038116811461010057600080fd5b9392505050565b608051610e1b61013e600039600081816101e2015281816102b20152818161040f0152818161057801526108510152610e1b6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638456cb5911610097578063b4ac686011610066578063b4ac686014610217578063c29277cd1461021f578063d914cd4b14610227578063e26b2f631461023a57600080fd5b80638456cb59146101cd57806394144856146101d5578063a50cf2c8146101dd578063ac4afa381461020457600080fd5b80635b16ebb7116100d35780635b16ebb7146101575780635c975abb1461018a578063673a2a1f146101955780636fbc6f6b146101aa57600080fd5b80631e16e4fc146100fa5780633f4ba83a1461013757806354fd4d5014610141575b600080fd5b61010d610108366004610ca7565b61024d565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61013f610284565b005b610149600181565b60405190815260200161012e565b61017a610165366004610cc0565b60026020526000908152604090205460ff1681565b604051901515815260200161012e565b60005460ff1661017a565b61019d610372565b60405161012e9190610cfd565b61017a6101b8366004610cc0565b60046020526000908152604090205460ff1681565b61013f6103e1565b61019d6104cd565b61010d7f000000000000000000000000000000000000000000000000000000000000000081565b61010d610212366004610ca7565b61053a565b600154610149565b600354610149565b61013f610235366004610cc0565b61054a565b61013f610248366004610cc0565b610823565b6003818154811061025d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa15801561030e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103329190610d57565b610368576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610370610af6565b565b606060018054806020026020016040519081016040528092919081815260200182805480156103d757602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103ac575b5050505050905090565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa15801561046b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048f9190610d57565b6104c5576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610370610b73565b606060038054806020026020016040519081016040528092919081815260200182805480156103d75760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103ac575050505050905090565b6001818154811061025d57600080fd5b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa1580156105d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f89190610d57565b61062e576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051808201909152600281527f5a30000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff82166106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09190610d79565b60405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff8116600090815260026020908152604091829020548251808401909352600383527f43523100000000000000000000000000000000000000000000000000000000009183019190915260ff1615610753576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09190610d79565b506001805480820182557fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915560008181526002602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016909417909355915190917ff816b5143086c89d103a0683286be86c2b741e83ebfa75135aae606e2f5c6e5391a250565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa1580156108ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d19190610d57565b610907576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051808201909152600281527f5a30000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8216610989576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09190610d79565b5073ffffffffffffffffffffffffffffffffffffffff8116600090815260046020908152604091829020548251808401909352600383527f43523200000000000000000000000000000000000000000000000000000000009183019190915260ff1615610a23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09190610d79565b506003805460018082019092557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915560008181526004602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016909417909355915190917f58ad3cfc4b6552a53c8c4128ae9b080e14b4378a159280643a62c6f709cee24f91a250565b610afe610bce565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b610b7b610c3a565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610b493390565b60005460ff16610370576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016106b0565b60005460ff1615610370576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016106b0565b600060208284031215610cb957600080fd5b5035919050565b600060208284031215610cd257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cf657600080fd5b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015610d4b57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610d19565b50909695505050505050565b600060208284031215610d6957600080fd5b81518015158114610cf657600080fd5b600060208083528351808285015260005b81811015610da657858101830151858201604001528201610d8a565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fea2646970667358221220a2655ae53fba1eb7247ddcfc76525e4cae5512fbd358c29d8232031a29457cd564736f6c63430008110033";

type ContractsRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractsRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractsRegister__factory extends ContractFactory {
  constructor(...args: ContractsRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ContractsRegister";
  }

  override deploy(
    addressProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractsRegister> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<ContractsRegister>;
  }
  override getDeployTransaction(
    addressProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  override attach(address: string): ContractsRegister {
    return super.attach(address) as ContractsRegister;
  }
  override connect(signer: Signer): ContractsRegister__factory {
    return super.connect(signer) as ContractsRegister__factory;
  }
  static readonly contractName: "ContractsRegister";

  public readonly contractName: "ContractsRegister";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractsRegisterInterface {
    return new utils.Interface(_abi) as ContractsRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractsRegister {
    return new Contract(address, _abi, signerOrProvider) as ContractsRegister;
  }
}
