import { Github, LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="mt-12 flex snap-start scroll-mt-16 flex-col leading-relaxed tracking-wide"
      id="contact"
    >
      <h2 className="text-xl uppercase tracking-widest tablet-md:text-4xl laptop-sm:text-5xl desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl 4k:text-10xl">
        Contact
      </h2>
      <div className="mb-[6%] space-y-8 pt-[6%] tablet-md:pr-[5%] laptop-sm:pl-[20%] 4k:space-y-16">
        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet-md:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <LinkedinIcon
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl 4k:text-6xl">
                Linkedin
              </span>
            </span>

            <a
              href="https://linkedin.com/in/enos-domingues-a8541b277"
              className="text-xs font-semibold text-zinc-600 tablet-md:text-sm laptop-sm:text-lg desktop-md:text-xl full-hd:text-2xl 4k:text-4xl"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/enosdomingues
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet-md:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <Mail
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl 4k:text-6xl">
                Email
              </span>
            </span>

            <a
              href="mailto:mail@enos.dev"
              className="text-xs font-semibold text-zinc-600 tablet-md:text-sm laptop-sm:text-lg desktop-md:text-xl full-hd:text-2xl 4k:text-4xl"
            >
              mail@enos.dev
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400 tablet-md:grid-cols-[1fr]">
          <div>
            <span className="flex h-full w-full items-center gap-2">
              <Github
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl 4k:text-6xl">
                Github
              </span>
            </span>

            <a
              href="https://github.com/EnosDomingues"
              className="text-xs font-semibold text-zinc-600 tablet-md:text-sm laptop-sm:text-lg desktop-md:text-xl full-hd:text-2xl 4k:text-4xl"
            >
              github.com/EnosDomingues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
