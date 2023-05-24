import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center md:px-24 bg-white md:py-16 z-10 justify-between h-8 md:fixed md:top-0 md:left-0 w-full">
      <a href="#hero">
        <Image
          src={portifolioLogo}
          alt=""
          className="md:w-6 md:h-6 lg:w-8 lg:h-8 w-4 h-4"
        />
      </a>
      <nav className="md:flex text-lg gap-10 uppercase hidden">
        <a
          href="#about"
          className="group flex flex-col items-center justify-center md:text-sm lg:text-base"
        >
          About me
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#projects"
          className="group flex flex-col items-center justify-center md:text-sm lg:text-base"
        >
          Projects
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#skills"
          className="group flex flex-col items-center justify-center md:text-sm lg:text-base"
        >
          Skills
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#contact"
          className="group flex flex-col items-center justify-center md:text-sm lg:text-base"
        >
          Contact
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
      </nav>
    </header>
  )
}
