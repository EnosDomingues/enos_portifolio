import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="z-10 flex h-8 w-full items-center justify-between bg-white tablet-md:fixed tablet-md:left-0 tablet-md:top-0 tablet-md:px-24 tablet-md:py-16">
      <a href="#">
        <Image
          src={portifolioLogo}
          alt=""
          className="h-4 w-4 tablet-md:h-6 tablet-md:w-6  laptop-sm:h-8 laptop-sm:w-8 full-hd:h-9 full-hd:w-9"
        />
      </a>
      <nav className="hidden gap-10 uppercase tablet-md:flex tablet-md:text-sm laptop-sm:text-base desktop-sm:text-lg desktop-md:text-xl full-hd:text-2xl">
        <a
          href="#about"
          className="group flex flex-col items-center justify-center"
        >
          About me
          <div className="h-px w-0 bg-black transition-all group-hover:w-full"></div>
        </a>
        <a
          href="#projects"
          className="group flex flex-col items-center justify-center"
        >
          Projects
          <div className="h-px w-0 bg-black transition-all group-hover:w-full"></div>
        </a>
        <a
          href="#skills"
          className="group flex flex-col items-center justify-center"
        >
          Skills
          <div className="h-px w-0 bg-black transition-all group-hover:w-full"></div>
        </a>
        <a
          href="#contact"
          className="group flex flex-col items-center justify-center"
        >
          Contact
          <div className="h-px w-0 bg-black transition-all group-hover:w-full"></div>
        </a>
      </nav>
    </header>
  )
}
