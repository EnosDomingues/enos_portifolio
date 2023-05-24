import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between h-8">
      <Image
        src={portifolioLogo}
        alt=""
        className="md:w-6 md:h-6 lg:w-8 lg:h-8 w-4 h-4"
      />
      <nav className="md:flex text-lg gap-10 uppercase hidden">
        <a
          href="#about"
          className="group flex flex-col items-center justify-center md:text-sm"
        >
          About me
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#projects"
          className="group flex flex-col items-center justify-center md:text-sm"
        >
          Projects
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#skills"
          className="group flex flex-col items-center justify-center md:text-sm"
        >
          Skills
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
        <a
          href="#contact"
          className="group flex flex-col items-center justify-center md:text-sm"
        >
          Contact
          <div className="w-0 h-px bg-black group-hover:w-full transition-all"></div>
        </a>
      </nav>
    </header>
  )
}
