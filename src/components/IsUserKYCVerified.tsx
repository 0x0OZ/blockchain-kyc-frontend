'use client'

import { BaseError } from 'viem'
import { kycContractConfig } from './contracts'
import { useState } from 'react'
import { type Address, useContractRead } from 'wagmi'

export function IsUserKYCVerified() {

  const [address, setAddress] = useState<Address>(
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  )
  const { data, error, isLoading, isSuccess } = useContractRead({
    ...kycContractConfig,
    functionName: 'isKYCVerified',
    args: [address],
    enabled: Boolean(address),
  })

  const [value, setValue] = useState<string>(address)
  return (
    <div className='p-4'>
      <p>
        Check if a wallet s KYCVerified:{' '}
        <span className={isSuccess && data?.toString() === 'true' ? 'text-green-500' : 'text-red-500'}>
          {isSuccess && data?.toString()}
        </span>
      </p>
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="wallet address"
        style={{ marginLeft: 4 }}
        value={value}
        className='bg-gray-800 border-b-5 border-violet-50  border-2 text-neutral-200 p-2 m-2'
      />
      <button className="text-neutral-200 bg-zinc-700	p-2 rounded-md" onClick={() => setAddress(value as Address)} >
        {isLoading ? 'fetching...' : 'fetch'}
      </button>
      {error && <div>ERROR: {(error as BaseError).shortMessage}</div>}
    </div>
  )
}

