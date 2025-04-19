import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ARCH-MD',
  description: 'Created ammaricano',
  generator: 'ammaricano.my.id',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
