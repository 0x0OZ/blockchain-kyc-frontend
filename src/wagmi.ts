import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

const walletConnectProjectId = '1cd6c1e5-2c62-4534-9078-d88578788a7a'

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'My wagmi + ConnectKit App',
    walletConnectProjectId,
  })
)
