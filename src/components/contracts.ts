import { erc20ABI } from 'wagmi'

export const kycContractConfig = {
  address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  abi: [{ "inputs": [{ "internalType": "string", "name": "_platformName", "type": "string" }, { "internalType": "string", "name": "_platformBaseUrl", "type": "string" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "InvalidSignature", "type": "error" }, { "inputs": [], "name": "KYCCancelationNotRequestFound", "type": "error" }, { "inputs": [], "name": "KYCRemovalRequestTimeNotPassed", "type": "error" }, { "inputs": [], "name": "UserKYCAlreadyRequested", "type": "error" }, { "inputs": [], "name": "UserKYCAlreadyVerified", "type": "error" }, { "inputs": [], "name": "UserKYCNotRequested", "type": "error" }, { "inputs": [], "name": "UserNotKYCVerified", "type": "error" }, { "inputs": [], "name": "userKYCNotVerified", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCCancelationRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCValidationRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCVerified", "type": "event" }, { "inputs": [], "name": "KYC_REMOVAL_PENDING_TIME", "outputs": [{ "internalType": "uint160", "name": "", "type": "uint160" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MPRHEUS_ORACLE", "outputs": [{ "internalType": "contract Morpheus", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "getKYCRequest", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "string", "name": "userHandle", "type": "string" }], "name": "getSignature", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "getUserKYC", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint160", "name": "", "type": "uint160" }, { "internalType": "uint160", "name": "", "type": "uint160" }, { "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "isKYCRemovalRequested", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "isKYCRequested", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "isKYCVerified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "platformBaseUrl", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "platformName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "removeKYC", "outputs": [{ "internalType": "uint160", "name": "", "type": "uint160" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "removeKYCRequest", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "userHandle", "type": "string" }], "name": "requestKYC", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "requestKYCRemoval", "outputs": [{ "internalType": "uint160", "name": "", "type": "uint160" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "userHandle", "type": "string" }], "name": "validateSignature", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "verifyKYC", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]
} as const
export const kycFactoryContractConfig = {
  address: '',
  abi: []
} as const

export const morhpeusContractConfig = {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi:[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "signers",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "signerThreshold",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "payout",
          "type": "address"
        }
      ],
      "name": "contractSetup",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "endpoint",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "endpointp",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feedId",
          "type": "uint256"
        }
      ],
      "name": "feedRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "feedSigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "feedSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feedId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "supportvalue",
          "type": "uint256"
        }
      ],
      "name": "feedSupported",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "payout",
          "type": "address"
        }
      ],
      "name": "newPayoutAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "uintValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "addressValue",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oracleType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        }
      ],
      "name": "newProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "newSigner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "newThreshold",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "proposalSigned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "routerFeeTaken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "signerRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newPass",
          "type": "uint256"
        }
      ],
      "name": "subscriptionPassPriceUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        }
      ],
      "name": "buyPass",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "uintValue",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "addressValue",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "proposalType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "feedId",
          "type": "uint256"
        }
      ],
      "name": "createProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factoryContract",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "feedSupport",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "feedID",
          "type": "uint256"
        }
      ],
      "name": "getFeed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFeedLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "feedIDs",
          "type": "uint256[]"
        }
      ],
      "name": "getFeeds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "signers_",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "signerThreshold_",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "payoutAddress_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subscriptionPassPrice_",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "factoryContract_",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "payoutAddress",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "proposalList",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "uintValue",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "addressValue",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "proposer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "proposalType",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "proposalFeedId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "proposalActive",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "APIendpoint",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "APIendpointPath",
          "type": "string[]"
        },
        {
          "internalType": "uint256[]",
          "name": "decimals",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "bounties",
          "type": "uint256[]"
        }
      ],
      "name": "requestFeeds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "feeds",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "signProposal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "signerLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "signerThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "signers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "feedIDs",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "string[]",
          "name": "vals",
          "type": "string[]"
        }
      ],
      "name": "submitFeed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "subscriptionPassPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "feedIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "supportFeeds",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawFunds",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
} as const

export const wagmiContractConfig = {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'approved',
          type: 'address',
        },
        {
          indexed: true,
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          name: 'operator',
          type: 'address',
        },
        {
          indexed: false,
          name: 'approved',
          type: 'bool',
        },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address',
        },
        { indexed: true, name: 'to', type: 'address' },
        {
          indexed: true,
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'getApproved',
      outputs: [{ name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'operator', type: 'address' },
      ],
      name: 'isApprovedForAll',
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
        { name: '_data', type: 'bytes' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { name: 'operator', type: 'address' },
        { name: 'approved', type: 'bool' },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ name: '', type: 'string' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
} as const

export const usdcContractConfig = {
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: erc20ABI,
} as const