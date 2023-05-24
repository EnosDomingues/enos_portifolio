import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between h-8">
      <Image src={portifolioLogo} alt="" />
      <nav className="flex text-lg gap-10 uppercase">
        <a
          href="#about"
          className="group flex flex-col items-center justify-center"
        >
          About me
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#projects"
          className="group flex flex-col items-center justify-center"
        >
          Projects
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#skills"
          className="group flex flex-col items-center justify-center"
        >
          Skills
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#contact"
          className="group flex flex-col items-center justify-center"
        >
          Contact
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
      </nav>
    </header>
  )
}
