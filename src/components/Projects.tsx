import { Github, Globe } from 'lucide-react'

export function Projects() {
  return (
    <section
      className="mt-12 flex scroll-mt-44 flex-col leading-relaxed tracking-wide tablet-md:min-h-[calc(100vh-8rem)] 4k:scroll-mt-96"
      id="projects"
    >
      <h2 className="text-xl uppercase tracking-widest tablet-md:text-4xl laptop-sm:text-5xl desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl 4k:text-10xl">
        Projects
      </h2>
      <div className="pt-[6%] tablet-md:pr-[5%] laptop-sm:pl-[20%]">
        <div className="flex h-full flex-col space-y-2 rounded border border-slate-400 p-2 4k:space-y-6">
          <header className="laptop-sm:mb-2">
            <span className="flex rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              My portifolio
            </span>
          </header>
          <p className="text-justify text-sm tablet-md:text-start tablet-md:text-base laptop-sm:text-lg desktop-sm:text-xl desktop-md:text-2xl full-hd:text-3xl 4k:text-6xl">
            Built with Next.js 13 and Tailwind CSS, showcasing my work in a
            sleek and professional manner. Through this website, I aim to
            present my passion for web development and attract exciting
            professional opportunities.
          </p>
          <div className="flex items-center gap-2 text-xs 4k:text-3xl">
            <a
              href="https://github.com/EnosDomingues/enos_portifolio"
              target="_blank"
              className="flex items-center gap-2 rounded-md bg-zinc-200 px-4 py-2  transition-all hover:bg-slate-200 tablet-md:bg-zinc-200 4k:px-8 4k:py-4 "
              rel="noreferrer"
            >
              <Github
                className="h-4 w-4 laptop-sm:h-5 laptop-sm:w-5 desktop-sm:h-6 desktop-sm:w-6 desktop-md:h-8 desktop-md:w-8 full-hd:h-10 full-hd:w-10 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span>Github</span>
            </a>
            <a
              href="https://enos.dev"
              target="_blank"
              className="flex items-center gap-2 rounded-md bg-zinc-200 px-4 py-2 transition-all hover:bg-slate-200 tablet-md:bg-zinc-200 4k:px-8 4k:py-4"
              rel="noreferrer"
            >
              <Globe
                className="h-4 w-4 laptop-sm:h-5 laptop-sm:w-5 desktop-sm:h-6 desktop-sm:w-6 desktop-md:h-8 desktop-md:w-8 full-hd:h-10 full-hd:w-10 4k:h-20 4k:w-20"
                strokeWidth={1}
              />
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
