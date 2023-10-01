import Image from 'next/image'
export default function Header() {
    return (
      <header className="flex flex-row justify-between items-center p-4 bg-neutral-900">
        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-row items-center space-x-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <h2>Blockchain KYC</h2>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <a href="" className="text-white hover:text-gray-400">Github</a>
          <a href="" className="text-white hover:text-gray-400">Twitter</a>
          <a href="" className="text-white hover:text-gray-400">Discord</a>
        </div>
      </header>
    )
  }