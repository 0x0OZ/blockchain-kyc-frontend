'use client'

import { useState } from 'react'
import type { Log } from 'viem'
import { useContractEvent } from 'wagmi'
import { morhpeusContractConfig } from './contracts'
// import { stringify } from '../utils/stringify'

export function WatchOracleEvent() {
  const [feedLost, setFeedLogs] = useState<Log[]>([])
  useContractEvent({
    ...morhpeusContractConfig,
    eventName: 'feedSubmitted',
    address: [morhpeusContractConfig.address],
    listener: (logs) => setFeedLogs((x) => [...x, ...logs]),
  })

  return null
}

