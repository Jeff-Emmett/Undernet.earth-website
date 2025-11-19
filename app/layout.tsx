import type { Metadata } from 'next'
import { Crimson_Pro, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const crimsonPro = Crimson_Pro({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'undernet.earth | METACELIUM Network',
  description: 'Connecting the ethereal noosphere to grounded emergent movements of localized resilience. Building underground, staying incoherent, adapting faster than capture.',
  keywords: ['soilpunk', 'mycopunk', 'lichenpunk', 'data sovereignty', 'fog computing', 'local infrastructure', 'metacelium', 'noosphere'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${crimsonPro.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
