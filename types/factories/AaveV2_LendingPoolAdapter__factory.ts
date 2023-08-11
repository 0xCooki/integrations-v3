/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AaveV2_LendingPoolAdapter,
  AaveV2_LendingPoolAdapterInterface,
} from "../AaveV2_LendingPoolAdapter";

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
        name: "_lendingPool",
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
    name: "TokenNotAllowedException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "depositAll",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001706380380620017068339810160408190526200003591620001f1565b81816001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b0382166080819052604080516316f0115b60e01b815290516316f0115b916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e5919062000230565b6001600160a01b0316632954018c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000123573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000149919062000230565b6001600160a01b0390811660a081905290821660c05260408051630873769560e01b815290516308737695916004808201926020929091908290030181865afa1580156200019b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c1919062000230565b6001600160a01b031660e052506200025792505050565b6001600160a01b0381168114620001ee57600080fd5b50565b600080604083850312156200020557600080fd5b82516200021281620001d8565b60208401519092506200022581620001d8565b809150509250929050565b6000602082840312156200024357600080fd5b81516200025081620001d8565b9392505050565b60805160a05160c05160e051611430620002d6600039600061015c015260008181610183015281816109b601528181610c460152610cf40152600060c80152600081816101aa0152818161052a015281816105c001528181610ae401528181610bb901528181610cb001528181610d9f0152610e7a01526114306000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063bd90df7011610076578063ce30bbdb1161005b578063ce30bbdb146101cc578063e8eda9df146101e1578063fa09e630146101f457600080fd5b8063bd90df701461017e578063c12c21c0146101a557600080fd5b806378aa73a4116100a757806378aa73a4146101295780639f0d5f2714610144578063a50cf2c81461015757600080fd5b80632954018c146100c357806369328dec14610114575b600080fd5b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610127610122366004610f60565b610207565b005b610131600181565b60405161ffff909116815260200161010b565b610127610152366004610fa2565b6102c6565b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b6101d4601181565b60405161010b9190610fc6565b6101276101ef366004611007565b610414565b610127610202366004610fa2565b6104a0565b61020f610526565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610273576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061027d6105bc565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83036102b5576102b0818561066b565b6102c0565b6102c081858561080b565b50505050565b6102ce610526565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610332576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061033c6105bc565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000918416906370a0823190602401602060405180830381865afa1580156103ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d29190611061565b9050600181116103e157505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016102c083858360016108ad565b50565b61041c610526565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610480576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061048a6105bc565b905061049981868660006108ad565b5050505050565b6104a8610526565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461050c576040517fd8026b2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006105166105bc565b9050610522818361066b565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632f7a18816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b79190611085565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704610602610526565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa158015610593573d6000803e3d6000fd5b60006106768261096e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918316906370a0823190602401602060405180830381865afa1580156106e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070c9190611061565b90506001811161071c5750505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810161080383856107fc88828660405173ffffffffffffffffffffffffffffffffffffffff80841660248301526044820183905284166064820152606090608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f69328dec00000000000000000000000000000000000000000000000000000000179052949350505050565b6001610a2e565b505050505050565b6102c06108178361096e565b6040805173ffffffffffffffffffffffffffffffffffffffff86811660248301526044820186905287166064808301919091528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f69328dec0000000000000000000000000000000000000000000000000000000017905284906000610a2e565b610499836108ba8561096e565b60405173ffffffffffffffffffffffffffffffffffffffff808816602483015260448201879052881660648201526000608482015260a401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe8eda9df0000000000000000000000000000000000000000000000000000000017905284610a4f565b6040517f35ea6a7500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906335ea6a759060240161018060405180830381865afa158015610a00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a249190611183565b60e0015192915050565b6060610a3985610a9c565b50610a4685858585610b92565b95945050505050565b6060610a7b857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bb7565b610a8785858585610b92565b9050610a94856001610bb7565b949350505050565b6040517ff67c5bd000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063f67c5bd090602401602060405180830381865afa158015610b2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b519190611061565b905080600003610b8d576040517f700ca0af00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6060610b9d83610cac565b90508115610bae57610bae85610d9d565b610a9484610e78565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166346fb371d610bfb610526565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000082166024820152908516604482015260648101849052608401600060405180830381600087803b158015610c9857600080fd5b505af1158015610803573d6000803e3d6000fd5b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636ce4074a610cf2610526565b7f0000000000000000000000000000000000000000000000000000000000000000856040518463ffffffff1660e01b8152600401610d3293929190611294565b6000604051808303816000875af1158015610d51573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d97919081019061130d565b92915050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630d8f9cee610de16105bc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff918216600482015290841660248201526044016020604051808303816000875af1158015610e54573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052291906113d8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166351e3f160610ebc6105bc565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff91821660048201529084166024820152604401600060405180830381600087803b158015610f2a57600080fd5b505af1158015610499573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461041157600080fd5b600080600060608486031215610f7557600080fd5b8335610f8081610f3e565b9250602084013591506040840135610f9781610f3e565b809150509250925092565b600060208284031215610fb457600080fd5b8135610fbf81610f3e565b9392505050565b6020810160158310611001577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6000806000806080858703121561101d57600080fd5b843561102881610f3e565b935060208501359250604085013561103f81610f3e565b9150606085013561ffff8116811461105657600080fd5b939692955090935050565b60006020828403121561107357600080fd5b5051919050565b8051610b8d81610f3e565b60006020828403121561109757600080fd5b8151610fbf81610f3e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610180810167ffffffffffffffff811182821017156110f5576110f56110a2565b60405290565b60006020828403121561110d57600080fd5b6040516020810181811067ffffffffffffffff82111715611130576111306110a2565b6040529151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610b8d57600080fd5b805164ffffffffff81168114610b8d57600080fd5b805160ff81168114610b8d57600080fd5b6000610180828403121561119657600080fd5b61119e6110d1565b6111a884846110fb565b81526111b66020840161113d565b60208201526111c76040840161113d565b60408201526111d86060840161113d565b60608201526111e96080840161113d565b60808201526111fa60a0840161113d565b60a082015261120b60c0840161115d565b60c082015261121c60e0840161107a565b60e082015261010061122f81850161107a565b9082015261012061124184820161107a565b9082015261014061125384820161107a565b90820152610160611265848201611172565b908201529392505050565b60005b8381101561128b578181015183820152602001611273565b50506000910152565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015282518060608401526112d9816080850160208701611270565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b60006020828403121561131f57600080fd5b815167ffffffffffffffff8082111561133757600080fd5b818401915084601f83011261134b57600080fd5b81518181111561135d5761135d6110a2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156113a3576113a36110a2565b816040528281528760208487010111156113bc57600080fd5b6113cd836020830160208801611270565b979650505050505050565b6000602082840312156113ea57600080fd5b81518015158114610fbf57600080fdfea2646970667358221220ed5f9ec40eb1620e3bdd9338eb24d984bf8f2e0edd538938305a72bc280b671b64736f6c63430008110033";

type AaveV2_LendingPoolAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveV2_LendingPoolAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveV2_LendingPoolAdapter__factory extends ContractFactory {
  constructor(...args: AaveV2_LendingPoolAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AaveV2_LendingPoolAdapter";
  }

  override deploy(
    _creditManager: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveV2_LendingPoolAdapter> {
    return super.deploy(
      _creditManager,
      _lendingPool,
      overrides || {}
    ) as Promise<AaveV2_LendingPoolAdapter>;
  }
  override getDeployTransaction(
    _creditManager: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _creditManager,
      _lendingPool,
      overrides || {}
    );
  }
  override attach(address: string): AaveV2_LendingPoolAdapter {
    return super.attach(address) as AaveV2_LendingPoolAdapter;
  }
  override connect(signer: Signer): AaveV2_LendingPoolAdapter__factory {
    return super.connect(signer) as AaveV2_LendingPoolAdapter__factory;
  }
  static readonly contractName: "AaveV2_LendingPoolAdapter";

  public readonly contractName: "AaveV2_LendingPoolAdapter";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveV2_LendingPoolAdapterInterface {
    return new utils.Interface(_abi) as AaveV2_LendingPoolAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveV2_LendingPoolAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveV2_LendingPoolAdapter;
  }
}
