import { Github, LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-16 mt-12"
      id="contact"
    >
      <h2 className="uppercase font-medium xl:text-6xl md:text-4xl tracking-widest lg:text-5xl text-xl">
        Contact
      </h2>
      <div className="lg:pl-[20%] pt-[6%] md:pr-[5%] mb-[6%]">
        <div className="grid md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <LinkedinIcon
                className="h-5 w-5 md:h-8 md:w-8"
                strokeWidth={1.5}
              />
              <span className="font-semibold text-sm md:text-lg">Linkedin</span>
            </span>

            <a
              href="https://linkedin.com/in/enos-domingues-a8541b277"
              className="font-semibold text-xs md:text-sm text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/enosdomingues
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start mt-4">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <Mail className="h-5 w-5 md:h-8 md:w-8" strokeWidth={1.5} />
              <span className="font-semibold text-sm md:text-lg">Email</span>
            </span>

            <a
              href="mailto:mail@enos.dev"
              className="font-semibold text-xs md:text-sm text-blue-700"
            >
              mail@enos.dev
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start mt-4">
          <div>
            <span className="flex h-full gap-2 w-full items-center">
              <Github className="h-5 w-5 md:h-8 md:w-8" strokeWidth={1.5} />
              <span className="font-semibold text-sm md:text-lg">Github</span>
            </span>

            <a
              href="https://github.com/EnosDomingues"
              className="font-semibold text-xs md:text-sm text-blue-700"
            >
              github.com/EnosDomingues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
