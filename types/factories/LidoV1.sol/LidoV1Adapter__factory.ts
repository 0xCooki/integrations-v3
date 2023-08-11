/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LidoV1Adapter,
  LidoV1AdapterInterface,
} from "../../LidoV1.sol/LidoV1Adapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_creditManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lidoGateway",
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
    name: "CreditFacadeOnlyException",
    type: "error",
  },
  {
    inputs: [],
    name: "LimitIsOverException",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotAllowedException",
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
        indexed: false,
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "NewLimit",
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
    inputs: [],
    name: "_gearboxAdapterType",
    outputs: [
      {
        internalType: "enum AdapterType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_gearboxAdapterVersion",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addressProvider",
    outputs: [
      {
        internalType: "contract IAddressProvider",
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
    name: "limit",
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
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stETH",
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
    name: "stETHTokenMask",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "submit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "submitAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetContract",
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
    name: "treasury",
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
    name: "weth",
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
    name: "wethTokenMask",
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
  "0x6101a06040523480156200001257600080fd5b50604051620015d6380380620015d683398101604081905262000035916200042a565b81816001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b0382166080819052604080516316f0115b60e01b815290516316f0115b916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e5919062000469565b6001600160a01b0316632954018c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000123573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000149919062000469565b6001600160a01b0390811660a081905290821660c05260408051630873769560e01b815290516308737695916004808201926020929091908290030181865afa1580156200019b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c1919062000469565b6001600160a01b031660e0816001600160a01b0316815250505050806001600160a01b031663c1fe3e486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200021b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000241919062000469565b6001600160a01b03166101008190526200025b9062000376565b610160818152505060a0516001600160a01b0316634c252f916040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002a4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ca919062000469565b6001600160a01b0316610120819052620002e49062000376565b610140818152505060a0516001600160a01b03166326c74fc36040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200032d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000353919062000469565b6001600160a01b031661018052505069043c33c1937564800000600055620004aa565b608051604051630f67c5bd60e41b81526001600160a01b038381166004830152600092169063f67c5bd090602401602060405180830381865afa158015620003c2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003e8919062000490565b9050806000036200040c5760405163700ca0af60e01b815260040160405180910390fd5b919050565b6001600160a01b03811681146200042757600080fd5b50565b600080604083850312156200043e57600080fd5b82516200044b8162000411565b60208401519092506200045e8162000411565b809150509250929050565b6000602082840312156200047c57600080fd5b8151620004898162000411565b9392505050565b600060208284031215620004a357600080fd5b5051919050565b60805160a05160c05160e051610100516101205161014051610160516101805161104b6200058b600039600081816101c901526107d401526000818161020b01526108ac01526000818161019401526108d901526000818161016d015281816104da0152818161076e0152610881015260006102b001526000818161023b01526103280152600081816102620152818161098c0152610a4201526000610114015260008181610289015281816105e301528181610679015281816108ff015281816109fe01528181610b3d01528181610c140152610cc2015261104b6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80637c7e8e9011610097578063c12c21c011610066578063c12c21c014610284578063c1fe3e48146102ab578063ce30bbdb146102d2578063ea99c2a6146102e757600080fd5b80637c7e8e9014610206578063a4d66daf1461022d578063a50cf2c814610236578063bd90df701461025d57600080fd5b80633fc8cef3116100d35780633fc8cef3146101685780635214ab801461018f57806361d027b3146101c457806378aa73a4146101eb57600080fd5b806327ea6f2b146100fa5780632954018c1461010f57806330bebac914610160575b600080fd5b61010d610108366004610d60565b6102fa565b005b6101367f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61010d610419565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6101b67f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610157565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6101f3600281565b60405161ffff9091168152602001610157565b6101b67f000000000000000000000000000000000000000000000000000000000000000081565b6101b660005481565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6101367f000000000000000000000000000000000000000000000000000000000000000081565b6102da600d81565b6040516101579190610d79565b61010d6102f5366004610d60565b610565565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610384573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a89190610dba565b6103de576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008190556040518181527fe1e1c8251499b303aefb01cf84a5ce22a95911c20ce2f3f5ae670441a6353d829060200160405180910390a150565b6104216105df565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610485576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061048f610675565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610521573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105459190610de3565b905060018111610553575050565b610561600182036001610724565b5050565b61056d6105df565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105d1576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105dc816000610724565b50565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632f7a18816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561064c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106709190610e25565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b7046106bb6105df565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa15801561064c573d6000803e3d6000fd5b600054821115610760576040517f2bfcdce800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805483900390556107b37f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6108fd565b6040516024810183905273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016604482015261087b90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff532e86a000000000000000000000000000000000000000000000000000000001790526109fa565b506108a77f000000000000000000000000000000000000000000000000000000000000000060016108fd565b6105617f0000000000000000000000000000000000000000000000000000000000000000826108d7576000610aeb565b7f0000000000000000000000000000000000000000000000000000000000000000610aeb565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166346fb371d6109416105df565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000082166024820152908516604482015260648101849052608401600060405180830381600087803b1580156109de57600080fd5b505af11580156109f2573d6000803e3d6000fd5b505050505050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636ce4074a610a406105df565b7f0000000000000000000000000000000000000000000000000000000000000000856040518463ffffffff1660e01b8152600401610a8093929190610e64565b6000604051808303816000875af1158015610a9f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610ae59190810190610f0c565b92915050565b6000610af5610675565b9050828218600060015b8281116109f25782811615610d31576040517fe75538c7000000000000000000000000000000000000000000000000000000008152600481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e75538c7906024016040805180830381865afa158015610b98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbc9190610fd7565b50915085811615610c75576040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015283811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b50505050610d31565b6040517f0d8f9cee00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015283811660248301527f00000000000000000000000000000000000000000000000000000000000000001690630d8f9cee906044016020604051808303816000875af1158015610d0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2f9190610dba565b505b7f800000000000000000000000000000000000000000000000000000000000000081146109f25760011b610aff565b600060208284031215610d7257600080fd5b5035919050565b6020810160158310610db4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208284031215610dcc57600080fd5b81518015158114610ddc57600080fd5b9392505050565b600060208284031215610df557600080fd5b5051919050565b805173ffffffffffffffffffffffffffffffffffffffff81168114610e2057600080fd5b919050565b600060208284031215610e3757600080fd5b610ddc82610dfc565b60005b83811015610e5b578181015183820152602001610e43565b50506000910152565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301528251806060840152610ea9816080850160208701610e40565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215610f1e57600080fd5b815167ffffffffffffffff80821115610f3657600080fd5b818401915084601f830112610f4a57600080fd5b815181811115610f5c57610f5c610edd565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610fa257610fa2610edd565b81604052828152876020848701011115610fbb57600080fd5b610fcc836020830160208801610e40565b979650505050505050565b60008060408385031215610fea57600080fd5b610ff383610dfc565b9150602083015161ffff8116811461100a57600080fd5b80915050925092905056fea2646970667358221220acb26066fb465183e4f522000a60d09c34d9c4f84f50c32c8379426baab7e16f64736f6c63430008110033";

type LidoV1AdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LidoV1AdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LidoV1Adapter__factory extends ContractFactory {
  constructor(...args: LidoV1AdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LidoV1Adapter";
  }

  override deploy(
    _creditManager: PromiseOrValue<string>,
    _lidoGateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LidoV1Adapter> {
    return super.deploy(
      _creditManager,
      _lidoGateway,
      overrides || {}
    ) as Promise<LidoV1Adapter>;
  }
  override getDeployTransaction(
    _creditManager: PromiseOrValue<string>,
    _lidoGateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _lidoGateway,
      overrides || {}
    );
  }
  override attach(address: string): LidoV1Adapter {
    return super.attach(address) as LidoV1Adapter;
  }
  override connect(signer: Signer): LidoV1Adapter__factory {
    return super.connect(signer) as LidoV1Adapter__factory;
  }
  static readonly contractName: "LidoV1Adapter";

  public readonly contractName: "LidoV1Adapter";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LidoV1AdapterInterface {
    return new utils.Interface(_abi) as LidoV1AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LidoV1Adapter {
    return new Contract(address, _abi, signerOrProvider) as LidoV1Adapter;
  }
}
