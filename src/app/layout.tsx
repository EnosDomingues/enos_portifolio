import { ReactNode } from 'react'
import {
  Inter,
  Nothing_You_Could_Do as NothingYouCouldDo,
} from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const nothingYouCouldDo = NothingYouCouldDo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nothing-you-could-do',
  display: 'swap',
})

export const metadata = {
  title: 'Enos Domingues | Portifolio',
  description: 'Hey, welcome to my portifolio. 👋',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${nothingYouCouldDo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
