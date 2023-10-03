import { getDefaultConfig } from 'connectkit'
import { createConfig, configureChains } from 'wagmi'
import {
  // avalanche,
  // celo,
  // cronos,
  // fantom,
  // polygon,
  // bsc,
  // metis,
  // harmonyOne,
  optimism,
  mainnet,
  sepolia,
  // optimismGoerli
} from "wagmi/chains";
const walletConnectProjectId: string = process.env.WALLET_CONNECT_PROJECT_ID || '';
import { publicProvider } from "wagmi/providers/public";

// LOCAL NETWORK 
import { Chain } from 'wagmi'

export const localhost = {
  id: 31337,
  name: 'localhost',
  network: 'localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'ETHER',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://192.2.1.3:8545'] },
    default: { http: ['http://192.2.1.3:8545'] },
  },
  blockExplorers: {
    etherscan: { name: '', url: '' },
    default: { name: '', url: '' },
  },
  contracts: {

  },
} as const satisfies Chain


const { chains } = configureChains(
  [sepolia, localhost, mainnet, optimism],
  [publicProvider()]
);

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "Blockchain-Kyc",
    appDescription: "non-governmental kyc for crypto addresses",
    appUrl: "/",
    appIcon: "https://m.economictimes.com/thumb/msid-70878368,width-1200,height-900,resizemode-4,imgsize-60059/kyc-getty.jpg",
    chains,
    walletConnectProjectId,
  })
);