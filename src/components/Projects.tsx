import { Github, Globe } from 'lucide-react'

export function Projects() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-44 mt-12 tablet-md:min-h-[calc(100vh-8rem)]"
      id="projects"
    >
      <h2 className="uppercase desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl tablet-md:text-4xl tracking-widest laptop-sm:text-5xl text-xl">
        Projects
      </h2>
      <div className="laptop-sm:pl-[20%] pt-[6%] tablet-md:pr-[5%]">
        <div className="">
          <header className="mb-1 laptop-sm:mb-2">
            <span className="uppercase font-bold text-sm laptop-sm:text-lg desktop-sm:text-xl desktop-md:text-2xl full-hd:text-3xl">
              My portifolio
            </span>
          </header>
          <p className="desktop-sm:text-xl full-hd:text-3xl desktop-md:text-2xl laptop-sm:text-lg tablet-md:text-base text-sm text-justify tablet-md:text-start">
            Built with Next.js 13 and Tailwind CSS, showcasing my work in a
            sleek and professional manner. Through this website, I aim to
            present my passion for web development and attract exciting
            professional opportunities.
          </p>
          <div className="flex items-center gap-2 my-2">
            <a
              href="https://github.com/EnosDomingues/enos_portifolio"
              target="_blank"
              className="flex items-center bg-zinc-200 tablet-md:bg-zinc-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-200 transition-all"
              rel="noreferrer"
            >
              <Github
                className="w-4 h-4 laptop-sm:w-5 laptop-sm:h-5 desktop-sm:w-6 desktop-sm:h-6 desktop-md:w-8 desktop-md:h-8 full-hd:w-10 full-hd:h-10"
                strokeWidth={1}
              />
            </a>
            <a
              href="https://enos.dev"
              target="_blank"
              className="flex items-center bg-zinc-200 tablet-md:bg-zinc-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-200 transition-all"
              rel="noreferrer"
            >
              <Globe
                className="w-4 h-4 laptop-sm:w-5 laptop-sm:h-5 desktop-sm:w-6 desktop-sm:h-6 desktop-md:w-8 desktop-md:h-8 full-hd:w-10 full-hd:h-10"
                strokeWidth={1}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
