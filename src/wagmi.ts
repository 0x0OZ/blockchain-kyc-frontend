import { getDefaultConfig } from 'connectkit'
import { createConfig, configureChains } from 'wagmi'
import {
  avalanche,
  celo,
  cronos,
  fantom,
  polygon,
  bsc,
  metis,
  harmonyOne,
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
// End of LOCAL NETWORK CONF

const { chains } = configureChains(
  [avalanche, celo, cronos, fantom, polygon, bsc, metis, harmonyOne, localhost],
  [publicProvider()]
);

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "Blockchain-Kyc",
    appDescription: "non-governmental kyc for crypto addresses",
    appUrl: "https://cryptolink.app",
    appIcon: "https://cryptolink.tech/images/cryptolink-logo2.png",
    chains,
    walletConnectProjectId,
  })
);