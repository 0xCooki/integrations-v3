/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  CurveLP2PriceFeed,
  CurveLP2PriceFeedInterface,
} from "../CurveLP2PriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed2",
        type: "address",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
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
    name: "CallerNotControllerException",
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
    name: "ChainPriceStaleException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceOracleNotExistsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueOutOfRangeException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPriceException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "NewController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lowerBound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "NewLimiterParams",
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
    inputs: [],
    name: "controller",
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
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalsDivider",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delta",
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
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "externalController",
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
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowerBound",
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
    inputs: [],
    name: "priceFeed1",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed2",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeedType",
    outputs: [
      {
        internalType: "enum PriceFeedType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newController",
        type: "address",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lowerBound",
        type: "uint256",
      },
    ],
    name: "setLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPriceCheck",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upperBound",
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
  "0x6101406040526000805460ff60b01b1916600160b01b1790553480156200002557600080fd5b5060405162001d1b38038062001d1b8339810160408190526200004891620004a2565b6000805460ff191690558484828260c882826001600160a01b0381166200008257604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000c1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e79190620005c2565b6001600160a01b03166080816001600160a01b031681525050806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200013f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001659190620005c2565b6001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c99190620005c2565b600080546001600160a01b039290921661010002610100600160a81b0319909216919091179055506002620001ff828262000676565b505060a052506001600160a01b0382166200022d57604051635919af9760e11b815260040160405180910390fd5b6001600160a01b03821660c0819052670de0b6b3a764000060e05260408051630176f71760e71b815290516000929163bb7b8b809160048083019260209291908290030181865afa15801562000287573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ad919062000742565b9050620002ba8162000319565b505050506001600160a01b0383161580620002dc57506001600160a01b038216155b15620002fb57604051635919af9760e11b815260040160405180910390fd5b506001600160a01b0391821661010052166101205250620007c59050565b8015806200033a575062000338816200033281620003a6565b620003da565b155b1562000359576040516309aadd6f60e41b815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de2816200038b81620003a6565b6040805192835260208301919091520160405180910390a150565b60a05160009061271090620003bc908262000772565b620003c8908462000788565b620003d49190620007a2565b92915050565b60008060c0516001600160a01b031663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200041e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000444919062000742565b9050838110806200045457508281115b1562000465576000915050620003d4565b5060019392505050565b80516001600160a01b03811681146200048757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a08688031215620004bb57600080fd5b620004c6866200046f565b94506020620004d78188016200046f565b9450620004e7604088016200046f565b9350620004f7606088016200046f565b60808801519093506001600160401b03808211156200051557600080fd5b818901915089601f8301126200052a57600080fd5b8151818111156200053f576200053f6200048c565b604051601f8201601f19908116603f011681019083821181831017156200056a576200056a6200048c565b816040528281528c868487010111156200058357600080fd5b600093505b82841015620005a7578484018601518185018701529285019262000588565b60008684830101528096505050505050509295509295909350565b600060208284031215620005d557600080fd5b620005e0826200046f565b9392505050565b600181811c90821680620005fc57607f821691505b6020821081036200061d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200067157600081815260208120601f850160051c810160208610156200064c5750805b601f850160051c820191505b818110156200066d5782815560010162000658565b5050505b505050565b81516001600160401b038111156200069257620006926200048c565b620006aa81620006a38454620005e7565b8462000623565b602080601f831160018114620006e25760008415620006c95750858301515b600019600386901b1c1916600185901b1785556200066d565b600085815260208120601f198616915b828110156200071357888601518255948401946001909101908401620006f2565b5085821015620007325787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200075557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115620003d457620003d46200075c565b8082028115828204841417620003d457620003d46200075c565b600082620007c057634e487b7160e01b600052601260045260246000fd5b500490565b60805160a05160c05160e05161010051610120516114b962000862600039600081816103af0152610b220152600081816103650152610a7301526000818161033e0152610c7d0152600081816101c601528181610be1015261106001526000818161018c0152610da10152600081816103170152818161042c015281816105a8015281816106940152818161078f01526109a701526114b96000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80639a6fc8f5116100d8578063b09ad8a01161008c578063e5693f4111610066578063e5693f41146103aa578063f77c4791146103d1578063feaf968c146103f657600080fd5b8063b09ad8a014610387578063bc489a651461038f578063d62ada11146103a257600080fd5b8063a50cf2c8116100bd578063a50cf2c814610312578063a834559e14610339578063ab0ca0e11461036057600080fd5b80639a6fc8f5146102bf578063a384d6ff1461030957600080fd5b80633fd0875f1161013a5780637284e416116101145780637284e4161461028f5780638456cb59146102a457806392eefe9b146102ac57600080fd5b80633fd0875f1461026757806354fd4d501461027c5780635c975abb1461028457600080fd5b806325e223701161016b57806325e223701461020d578063313ce567146102435780633f4ba83a1461025d57600080fd5b806312b495a814610187578063218751b2146101c1575b600080fd5b6101ae7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6101e87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b8565b600054610233907501000000000000000000000000000000000000000000900460ff1681565b60405190151581526020016101b8565b61024b600881565b60405160ff90911681526020016101b8565b6102656103fe565b005b61026f600281565b6040516101b89190611115565b6101ae600181565b60005460ff16610233565b6102976104ec565b6040516101b89190611156565b61026561057a565b6102656102ba3660046111c2565b610666565b6102d26102cd366004611217565b6108ae565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a0016101b8565b6101ae60015481565b6101e87f000000000000000000000000000000000000000000000000000000000000000081565b6101ae7f000000000000000000000000000000000000000000000000000000000000000081565b6101e87f000000000000000000000000000000000000000000000000000000000000000081565b6101ae6108e8565b61026561039d366004611234565b6108fa565b610233600181565b6101e87f000000000000000000000000000000000000000000000000000000000000000081565b6000546101e890610100900473ffffffffffffffffffffffffffffffffffffffff1681565b6102d2610a69565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac919061124d565b6104e2576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ea610cbf565b565b600280546104f99061126f565b80601f01602080910402602001604051908101604052809291908181526020018280546105259061126f565b80156105725780601f1061054757610100808354040283529160200191610572565b820191906000526020600020905b81548152906001019060200180831161055557829003601f168201915b505050505081565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa158015610604573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610628919061124d565b61065e576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ea610d3c565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa1580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610714919061124d565b61074a576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f5f259aba00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f00000000000000000000000000000000000000000000000000000000000000001690635f259aba90602401602060405180830381865afa1580156107d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fa919061124d565b600080547fffffffffffffffffffff000000000000000000000000000000000000000000ff1691157501000000000000000000000000000000000000000000027fffffffffffffffffffffff0000000000000000000000000000000000000000ff169190911761010073ffffffffffffffffffffffffffffffffffffffff841690810291909117825560405190917fe253457d9ad994ca9682fc3bbc38c890dca73a2d5ecee3809e548bac8b00d7c691a250565b60008060008060006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108f5600154610d97565b905090565b6000547501000000000000000000000000000000000000000000900460ff161561097957600054610100900473ffffffffffffffffffffffffffffffffffffffff163314610974576040517f0129bb9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5d565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a27919061124d565b610a5d576040517f0129bb9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a6681610de0565b50565b60008060008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610adc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0091906112c2565b939850919650945092509050610b1885858484610e7e565b60008060008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610b8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610baf91906112c2565b94509450945094509450610bc585858484610e7e565b88841215610bdd578499508398508297508196508095505b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6e919061131a565b9050610c7981610f19565b90507f0000000000000000000000000000000000000000000000000000000000000000610ca6828c611362565b610cb091906113dd565b99505050505050509091929394565b610cc7610f7d565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b610d44610fee565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d123390565b6000612710610dc67f000000000000000000000000000000000000000000000000000000000000000082611445565b610dd09084611458565b610dda919061146f565b92915050565b801580610dfc5750610dfa81610df583610d97565b61105b565b155b15610e33576040517f9aadd6f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de281610e6381610d97565b6040805192835260208301919091520160405180910390a150565b60008313610eb8576040517f56e05d2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8369ffffffffffffffffffff168169ffffffffffffffffffff161080610edc575081155b15610f13576040517fb1cf675500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60015460009080831015610f59576040517f6477ba0800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610f6482610d97565b9050808411610f735783610f75565b805b949350505050565b60005460ff166104ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b60005460ff16156104ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610fe5565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ed919061131a565b9050838110806110fc57508281115b1561110b576000915050610dda565b5060019392505050565b60208101600e8310611150577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208083528351808285015260005b8181101561118357858101830151858201604001528201611167565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b6000602082840312156111d457600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146111f857600080fd5b9392505050565b69ffffffffffffffffffff81168114610a6657600080fd5b60006020828403121561122957600080fd5b81356111f8816111ff565b60006020828403121561124657600080fd5b5035919050565b60006020828403121561125f57600080fd5b815180151581146111f857600080fd5b600181811c9082168061128357607f821691505b6020821081036112bc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080600080600060a086880312156112da57600080fd5b85516112e5816111ff565b80955050602086015193506040860151925060608601519150608086015161130c816111ff565b809150509295509295909350565b60006020828403121561132c57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808202600082127f80000000000000000000000000000000000000000000000000000000000000008414161561139a5761139a611333565b8181058314821517610dda57610dda611333565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826113ec576113ec6113ae565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f80000000000000000000000000000000000000000000000000000000000000008314161561144057611440611333565b500590565b80820180821115610dda57610dda611333565b8082028115828204841417610dda57610dda611333565b60008261147e5761147e6113ae565b50049056fea2646970667358221220bd418781fc75eb25750e4d9e8fe17b90b8980f6d3633a685f636ff6c3c19432b64736f6c63430008110033";

type CurveLP2PriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveLP2PriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveLP2PriceFeed__factory extends ContractFactory {
  constructor(...args: CurveLP2PriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveLP2PriceFeed";
  }

  override deploy(
    addressProvider: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _priceFeed1: PromiseOrValue<string>,
    _priceFeed2: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveLP2PriceFeed> {
    return super.deploy(
      addressProvider,
      _curvePool,
      _priceFeed1,
      _priceFeed2,
      _description,
      overrides || {}
    ) as Promise<CurveLP2PriceFeed>;
  }
  override getDeployTransaction(
    addressProvider: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _priceFeed1: PromiseOrValue<string>,
    _priceFeed2: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressProvider,
      _curvePool,
      _priceFeed1,
      _priceFeed2,
      _description,
      overrides || {}
    );
  }
  override attach(address: string): CurveLP2PriceFeed {
    return super.attach(address) as CurveLP2PriceFeed;
  }
  override connect(signer: Signer): CurveLP2PriceFeed__factory {
    return super.connect(signer) as CurveLP2PriceFeed__factory;
  }
  static readonly contractName: "CurveLP2PriceFeed";

  public readonly contractName: "CurveLP2PriceFeed";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveLP2PriceFeedInterface {
    return new utils.Interface(_abi) as CurveLP2PriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveLP2PriceFeed {
    return new Contract(address, _abi, signerOrProvider) as CurveLP2PriceFeed;
  }
}
