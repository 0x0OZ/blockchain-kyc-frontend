'use client'

import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { kycContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function KyCVerify() {
  const { write, data, error, isLoading, isError } = useContractWrite({
    ...kycContractConfig,
    functionName: 'verifyKYC',
  })

  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  return (
    <>
      <h3>Before verifying wait around 12 seconds after the previous transaction is confirmed, you can drink some coffee in that time</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          write({})
        }}
      >

        <button disabled={isLoading} type="submit" className="text-neutral-200 bg-zinc-700	p-2 rounded-md">
          Verify KYC
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <div>Transaction Hash: {data?.hash}</div>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )

}