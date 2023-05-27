import Image from 'next/image'

import portifolioLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header
      className="
        z-10 
        flex w-full 
        items-center 
        justify-between 
        bg-white 
        tablet:fixed 
        tablet:left-0 
        tablet:top-0 
        tablet:px-24 
        tablet:py-16 
        4k:px-48 
        4k:py-32
      "
    >
      <a href="#">
        <Image
          src={portifolioLogo}
          alt=""
          className="
            h-4 
            w-4 
            tablet:h-6 
            tablet:w-6  
            laptop:h-8 
            laptop:w-8 
            full-hd:h-9 
            full-hd:w-9 
            4k:h-20 
            4k:w-20"
        />
      </a>
      <nav
        className="
          desktop-md:text-xl 
          hidden 
          gap-10 
          uppercase 
          tablet:flex 
          tablet:text-sm 
          laptop:text-base 
          desktop:text-lg 
          full-hd:text-2xl 
          4k:gap-36 
          4k:text-5xl
        "
      >
        <a
          href="#about"
          className="group flex flex-col items-center justify-center"
        >
          About me
          <div className="h-px w-0 bg-black transition-all group-hover:w-full" />
        </a>
        <a
          href="#projects"
          className="group flex flex-col items-center justify-center"
        >
          Projects
          <div className="h-px w-0 bg-black transition-all group-hover:w-full" />
        </a>
        <a
          href="#skills"
          className="group flex flex-col items-center justify-center"
        >
          Skills
          <div className="h-px w-0 bg-black transition-all group-hover:w-full" />
        </a>
        <a
          href="#contact"
          className="group flex flex-col items-center justify-center"
        >
          Contact
          <div className="h-px w-0 bg-black transition-all group-hover:w-full" />
        </a>
      </nav>
    </header>
  )
}
