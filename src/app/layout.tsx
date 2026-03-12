import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hologram — Outage Proof Cellular Connectivity',
  description: 'The only IoT connectivity platform that stops outages before they happen.',
  icons: {
    icon: '/logos/logo_mark_lime.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00040f',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Script
          src="https://js.navattic.com/embeds.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
