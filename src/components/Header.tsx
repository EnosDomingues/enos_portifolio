import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center tablet-md:px-24 bg-white tablet-md:py-16 z-10 justify-between h-8 tablet-md:fixed tablet-md:top-0 tablet-md:left-0 w-full">
      <a href="#">
        <Image
          src={portifolioLogo}
          alt=""
          className="tablet-md:w-6 tablet-md:h-6 laptop-sm:w-8 laptop-sm:h-8  full-hd:w-9 full-hd:h-9 w-4 h-4"
        />
      </a>
      <nav className="tablet-md:flex tablet-md:text-sm laptop-sm:text-base desktop-sm:text-lg desktop-md:text-xl full-hd:text-2xl gap-10 uppercase hidden">
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
