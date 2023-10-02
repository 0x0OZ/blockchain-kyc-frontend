import { KycSteps } from "../components/KycSteps"
import Header from "../components/Header"
import LeftSide from "../components/LeftSide"

export default function Page() {
  return (
    <>
      <Header />
      <div className="">
        <div className="flex flex-row flex-1 ">
          <LeftSide />
          <div className="text-indigo-300 flex antialiased flex-col items-center leading-relaxed w-full h-screen p-20 pt-6 ">

            <h1 className="text-2xl text-white">KYC?</h1>
            <p>
              The is a solution for Pseudonymity in blockchains, Where no Pseudonymous could scam you anymore.
            </p>
            <p>
              You can finally be sure about the identity of pseudonymous client without having to speculate that he is not Laying.
            </p>
            <hr className="w-full p-3" />
            <p>
              <span className="text-yellow-300">Note</span>: the KYC process is a multi-step process (three step) to reduce the impact of any possible flows In the system.
            </p>
            <p>
              <span className="text-red-500">Important</span>: You must follow the order of the steps here, Otherwise you cant connect your social account with your crypto wallet.
            </p>
            <hr className="w-full p-3" />
            <h2 className="text-xl text-white">How does it work?</h2>
            <div className="flex flex-col w-full h-full p-10 bg-neutral-900 rounded-lg shadow-lg">

              <p>
                First You or Anyone who wants to proof his identity to other parties request a KYC verification through one of the currently supported social media platforms. New platforms can be added at Anytime.
              </p>
              <br />
              <p>

                After Authenticating you through the social media platform to proof ownership of the account, The server will store your username for the onchain Oracles to query them
              </p>
              <br />
              <p>
                Now you will request a KYC verification for your social account through the smart contracts, which will trigger the oracle contracts to request our API for the account ownership proof to prevent anyone from pretending to be you.
              </p>
              <br />
              We are finally there, in the last step you will again interact with the contracts after waiting the oracles to do their work.. But this time you will do a Verification instead of request which will immeditally connect your social account with your crypto wallet.
            </div>
            <hr className="w-full p-3" />
            <div>
              <KycSteps />
            </div>
          </div >
        </div>
      </div>
    </>
  )
}

