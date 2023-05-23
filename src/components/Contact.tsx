import { LinkedinIcon, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section className="flex flex-col mt-56">
      <h2 className="uppercase font-medium text-6xl tracking-widest">
        Contact
      </h2>
      <div className="pl-[20%] pt-[10%] PR-[5%]">
        <div className="grid grid-cols-[100px_1fr] grid-rows-1 place-items-start">
          <div className="p-2 bg-gray-200 rounded-md">
            <LinkedinIcon size={28} />
          </div>
          <div>
            <span className="flex h-full text-md font-semibold">Linkedin</span>

            <a
              href="https://linkedin.com/in/enos-domingues-a8541b277"
              className="font-semibold text-md text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/enos-domingues-a8541b277
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[100px_1fr] grid-rows-1 place-items-start mt-8">
          <div className="p-2 bg-gray-200 rounded-md">
            <Mail size={28} />
          </div>
          <div>
            <span className="flex h-full text-md font-semibold">Linkedin</span>

            <a
              href="mailto:mail@enos.dev"
              className="font-semibold text-md text-blue-700"
            >
              mail@enos.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
