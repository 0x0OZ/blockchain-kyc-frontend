'use client'

import { BaseError } from 'viem'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { kycContractConfig } from './contracts'
import { stringify } from '../utils/stringify'
import { GetUserAddress, GetUserName } from './KycSteps';

export function RequestKycVRFY() {
  const { write, data, error, isLoading, isError } = useContractWrite({
    ...kycContractConfig,
    functionName: 'requestKYC',
  })
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  return (
    <>
      <h3>Request KYC</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const userHandle: string = await GetUserName();
          console.log(`userHandle: ${userHandle}`)
          if (!userHandle) {
            alert("Please Authorize you account first");
            return;
          }

          write({
            args: [userHandle],
            value: BigInt(1000000000000000000),
          })
        }}
      >

        <button disabled={isLoading} type="submit">
          Request KYC Verification
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )


}