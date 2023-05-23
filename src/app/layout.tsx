import { ReactNode } from 'react'
import { Inter, Vujahday_Script as Vujahday } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const vujahdayScript = Vujahday({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vujahday',
  display: 'swap',
})

export const metadata = {
  title: 'Enos Domingues | Portifolio',
  description: 'Hey, welcome to my portifolio. 👋',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${vujahdayScript.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
