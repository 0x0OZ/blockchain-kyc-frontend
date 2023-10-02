'use client';
import KycList from "./KycList"
import { Connected, NotConnected } from './Connected'
import { ConnectKitButton } from './ConnectKitButton'
import {RequestKycVRFY} from './RequestKycVRFY'
import {KyCVerify} from './KycVerify'

// currently vulnerable to CSRF, mitigated probably?
function SubmitAccountAddress() {
    let addressInput = document.getElementById('userAddress') as HTMLInputElement;
    if (!addressInput) {
        alert('ERROR: No Address Given')
        return
    }
    let address = addressInput.value
    if (address.length != 42 || address.slice(0, 2) != '0x') {
        alert('ERROR: Address must be 42 character and starts with 0x')
        return
    }
    fetch('/kyc/submitAddress', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ crypto_address: address }),
    })
    alert('Address Submitted')
}

export async function GetUserName() {
    const response = await fetch('/kyc/getUsername')
    const data = await response.text()
    return data
}

export function KycSteps() {
    return (
        <div className="flex flex-col items-center justify-center m-2">
            <h2 className='text-xl text-white'>Lets prove your Identity</h2>
            <p>First choose one of the following verification methods</p>
            <KycList />
            <hr className="border-white w-full" />
            <p>After completing Account Authentication Type your Address That you want to verify</p>
            <input id="userAddress" className="bg-gray-800 border-b-5 border-violet-50  border-2 text-neutral-200 p-2 m-2" type='text' placeholder="0x..." />
            <button className="text-neutral-200 bg-zinc-700	p-2 rounded-md" onClick={SubmitAccountAddress} >Submit</button>
            <hr className="border-white w-full" />
            <NotConnected>
                <p id="connectWalletText">Now connect your wallet</p>
            </ NotConnected>
            <ConnectKitButton />
            <Connected>
                <p>We are two Steps far from proofing your identity</p>
                <p>Now Request KYC Verification so the onchain oracles can store the proof.</p>
                <RequestKycVRFY />
                <KyCVerify />
            </Connected>

        </div>
    )
}