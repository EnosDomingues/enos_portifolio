import { Github, Globe } from 'lucide-react'

interface ButtonPorps {
  buttonText: string
  href?: string
  buttonType: 'github' | 'website' | 'default'
}

export function Button({ buttonText, href, buttonType }: ButtonPorps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-2 border border-slate-400 px-4 py-2 transition-all hover:bg-zinc-100 4k:px-8 4k:py-4 "
      rel="noreferrer"
    >
      {buttonType === 'github' && (
        <Github
          className="desktop-md:h-8 desktop-md:w-8 h-4 w-4 laptop:h-5 laptop:w-5 desktop:h-6 desktop:w-6 full-hd:h-10 full-hd:w-10 4k:h-20 4k:w-20"
          strokeWidth={1}
        />
      )}
      {buttonType === 'website' && (
        <Globe
          className="desktop-md:h-8 desktop-md:w-8 h-4 w-4 laptop:h-5 laptop:w-5 desktop:h-6 desktop:w-6 full-hd:h-10 full-hd:w-10 4k:h-20 4k:w-20"
          strokeWidth={1}
        />
      )}
      <span>{buttonText}</span>
    </a>
  )
}
