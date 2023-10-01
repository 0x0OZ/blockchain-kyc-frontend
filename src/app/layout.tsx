import { Providers } from './providers'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'blockchain-kyc',
  description: 'KYC for everyone  ',
}
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
