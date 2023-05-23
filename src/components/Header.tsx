import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between h-8">
      <Image src={portifolioLogo} alt="" />
      <nav className="flex text-lg gap-10 uppercase">
        <a href="">About me</a>
        <a href="">Projects</a>
        <a href="">Skills</a>
        <a href="">Contact</a>
      </nav>
    </header>
  )
}
