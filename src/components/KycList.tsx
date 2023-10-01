export default function KycList() {
    return (
        <ul className='list-disc'>
            <GenerateKycItem ItemName='Github' />
            <GenerateKycItem ItemName='Soon...' />
            <GenerateKycItem ItemName='Soon...' />
        </ul>
    )
}
function GenerateKycItem({ ItemName }: any) {
    return (
        <li className='text-blue-600 visited:text-purple-600'>
            <a href={`/auth/${ItemName.toLowerCase()}`}>{ItemName}</a>
        </li>
    )
}