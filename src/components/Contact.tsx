import { LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-16 mt-12"
      id="contact"
    >
      <h2 className="uppercase font-medium xl:text-6xl md:text-4xl tracking-widest lg:text-5xl text-xl">
        Contact
      </h2>
      <div className="sm:pl-[10%] md:pl-[15%] lg:pl-[20%] pt-[6%] md:pr-[5%] mb-[6%]">
        <div className="grid md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start">
          <div>
            <span className="flex  h-full gap-2 w-full text-sm md:text-md">
              <LinkedinIcon className="h-5 w-5" strokeWidth={1.5} />
              <span className="translate-y-[3px] font-semibold">Linkedin</span>
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

        <div className="grid md:grid-cols-[1fr] grid-cols-[40px_1fr] grid-rows-1 place-items-start mt-2">
          <div>
            <span className="flex  h-full gap-2 w-full text-sm md:text-md">
              <Mail className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-semibold">Email</span>
            </span>

            <a
              href="mailto:mail@enos.dev"
              className="font-semibold text-xs md:text-sm text-blue-700"
            >
              mail@enos.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
