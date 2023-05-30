import { LucideIcon } from 'lucide-react'

interface ContactInfoProps {
  icon: LucideIcon
  title: string
  href: string
  description: string
}

export function ContactInfo({
  icon: Icon,
  title,
  href,
  description,
}: ContactInfoProps) {
  return (
    <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet:grid-cols-[1fr]">
      <div>
        <span className="flex h-full w-full items-center gap-2">
          <Icon
            className="desktop-md:h-12 desktop-md:w-12 h-5 w-5 tablet:h-8 tablet:w-8 laptop:h-9 laptop:w-9 desktop:h-10 desktop:w-10 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
            strokeWidth={1}
          />
          <span className="desktop-md:text-3xl text-sm tablet:text-lg laptop:text-xl desktop:text-2xl 4k:text-6xl">
            {title}
          </span>
        </span>

        <a
          href={href}
          className="desktop-md:text-xl text-xs font-semibold text-zinc-600 tablet:text-sm laptop:text-lg full-hd:text-2xl 4k:text-4xl"
          target="_blank"
          rel="noreferrer"
        >
          {description}
        </a>
      </div>
    </div>
  )
}
