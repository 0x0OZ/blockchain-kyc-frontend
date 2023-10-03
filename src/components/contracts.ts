export const kycContractConfig = {
  address: '0xAEBcB5E1C6Ec8Ceb2D784e0b44C2B5B8a37fc57A',
  abi: [{ "inputs": [], "name": "InvalidInitialization", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "sig1", "type": "bytes32" }, { "internalType": "bytes32", "name": "sig2", "type": "bytes32" }], "name": "InvalidSignature", "type": "error" }, { "inputs": [], "name": "UserKYCAlreadyRequested", "type": "error" }, { "inputs": [], "name": "UserKYCAlreadyVerified", "type": "error" }, { "inputs": [], "name": "UserKYCNotRequested", "type": "error" }, { "inputs": [], "name": "userKYCNotVerified", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint64", "name": "version", "type": "uint64" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCVerificationCanceled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "string", "name": "userHandle", "type": "string" }, { "indexed": false, "internalType": "uint160", "name": "issuanceTime", "type": "uint160" }], "name": "UserKYCVerified", "type": "event" }, { "inputs": [], "name": "DEFAULT_BOUNTY", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "KYC_REMOVAL_PENDING_TIME", "outputs": [{ "internalType": "uint160", "name": "", "type": "uint160" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MORPHEUS_ORACLE", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getFeedId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "getKYCRequest", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "getUserHandle", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "getUserKYC", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint160", "name": "", "type": "uint160" }, { "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_APIEndPoint", "type": "string" }, { "internalType": "string", "name": "_platformName", "type": "string" }, { "internalType": "string", "name": "_platformBaseUrl", "type": "string" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "isKYCRequested", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isKYCVerified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "userAddress", "type": "address" }], "name": "isKYCVerified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "platformBaseUrl", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "platformName", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "removeKYCRequest", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "userHandle", "type": "string" }], "name": "requestKYC", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "feedId", "type": "uint256" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "supportFeed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "feedIds", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }], "name": "supportFeeds", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "verifyKYC", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]
} as const
export const kycFactoryContractConfig = {
  address: '',
  abi: []
} as const

export const morhpeusContractConfig = {
  address: '0x724115f027e1931C45d82c82BAcFa1C965CA5405',
  abi: [
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

