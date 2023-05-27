import { Github, LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="mt-12 flex snap-start scroll-mt-16 flex-col leading-relaxed tracking-wide"
      id="contact"
    >
      <h2 className="desktop-md:text-7xl text-xl uppercase tracking-widest tablet:text-4xl laptop:text-5xl desktop:text-6xl full-hd:text-8xl 4k:text-10xl">
        Contact
      </h2>
      <div className="mb-[6%] space-y-8 pt-[6%] tablet:pr-[5%] laptop:pl-[20%] 4k:space-y-16">
        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <LinkedinIcon
                className="desktop-md:h-12 desktop-md:w-12 h-5 w-5 tablet:h-8 tablet:w-8 laptop:h-9 laptop:w-9 desktop:h-10 desktop:w-10 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="desktop-md:text-3xl text-sm tablet:text-lg laptop:text-xl desktop:text-2xl 4k:text-6xl">
                Linkedin
              </span>
            </span>

            <a
              href="https://linkedin.com/in/enos-domingues-a8541b277"
              className="desktop-md:text-xl text-xs font-semibold text-zinc-600 tablet:text-sm laptop:text-lg full-hd:text-2xl 4k:text-4xl"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/enosdomingues
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <Mail
                className="desktop-md:h-12 desktop-md:w-12 h-5 w-5 tablet:h-8 tablet:w-8 laptop:h-9 laptop:w-9 desktop:h-10 desktop:w-10 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="desktop-md:text-3xl text-sm tablet:text-lg laptop:text-xl desktop:text-2xl 4k:text-6xl">
                Email
              </span>
            </span>

            <a
              href="mailto:mail@enos.dev"
              className="desktop-md:text-xl text-xs font-semibold text-zinc-600 tablet:text-sm laptop:text-lg full-hd:text-2xl 4k:text-4xl"
            >
              mail@enos.dev
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <Github
                className="desktop-md:h-12 desktop-md:w-12 h-5 w-5 tablet:h-8 tablet:w-8 laptop:h-9 laptop:w-9 desktop:h-10 desktop:w-10 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="desktop-md:text-3xl text-sm tablet:text-lg laptop:text-xl desktop:text-2xl 4k:text-6xl">
                Github
              </span>
            </span>

            <a
              href="https://github.com/EnosDomingues"
              className="desktop-md:text-xl text-xs font-semibold text-zinc-600 tablet:text-sm laptop:text-lg full-hd:text-2xl 4k:text-4xl"
            >
              github.com/EnosDomingues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
