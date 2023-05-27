import { Github, LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-16 mt-12 snap-start"
      id="contact"
    >
      <h2 className="uppercase desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl tablet-md:text-4xl tracking-widest laptop-sm:text-5xl text-xl">
        Contact
      </h2>
      <div className="laptop-sm:pl-[20%] pt-[6%] tablet-md:pr-[5%] mb-[6%] space-y-8">
        <div className="grid tablet-md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <LinkedinIcon
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl">
                Linkedin
              </span>
            </span>

            <a
              href="https://linkedin.com/in/enos-domingues-a8541b277"
              className="font-semibold text-xs tablet-md:text-sm laptop-sm:text-lg desktop-md:text-xl text-zinc-600"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/enosdomingues
            </a>
          </div>
        </div>

        <div className="grid tablet-md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <Mail
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl">
                Email
              </span>
            </span>

            <a
              href="mailto:mail@enos.dev"
              className="font-semibold text-xs tablet-md:text-sm laptop-sm:text-lg desktop-md:text-xl text-zinc-600"
            >
              mail@enos.dev
            </a>
          </div>
        </div>

        <div className="grid tablet-md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start border-b border-b-slate-400">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <Github
                className="h-5 w-5 tablet-md:h-8 tablet-md:w-8 laptop-sm:h-9 laptop-sm:w-9 desktop-sm:h-10 desktop-sm:w-10 desktop-md:h-12 desktop-md:w-12 full-hd:h-14 full-hd:w-14"
                strokeWidth={1}
              />
              <span className="text-sm tablet-md:text-lg laptop-sm:text-xl desktop-sm:text-2xl desktop-md:text-3xl">
                Github
              </span>
            </span>

            <a
              href="https://github.com/EnosDomingues"
              className="font-semibold text-xs tablet-md:text-sm full-hd:text-2xl laptop-sm:text-lg desktop-md:text-xl text-zinc-600"
            >
              github.com/EnosDomingues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
