import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/sidebar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind Next',
  description: 'Course of Tailwind by Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
