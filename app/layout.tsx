import type { Metadata } from 'next'
import { Crimson_Pro, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MycelialCursor } from '@/components/mycelial-cursor'
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
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🕸️</text></svg>',
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
        <MycelialCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
