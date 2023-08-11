/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPools, IPoolsInterface } from "../../Interfaces.sol/IPools";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lptoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gauge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stashVersion",
        type: "uint256",
      },
    ],
    name: "addPool",
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
        name: "_lptoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gauge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stashVersion",
        type: "uint256",
      },
    ],
    name: "forceAddPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "gaugeMap",
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    name: "poolLength",
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
        name: "_poolM",
        type: "address",
      },
    ],
    name: "setPoolManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "shutdownPool",
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

export class IPools__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolsInterface {
    return new utils.Interface(_abi) as IPoolsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPools {
    return new Contract(address, _abi, signerOrProvider) as IPools;
  }
}
