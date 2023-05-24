import { Github, Globe } from 'lucide-react'

export function Projects() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-44 mt-12 md:min-h-screen"
      id="projects"
    >
      <h2 className="uppercase font-medium xl:text-6xl md:text-4xl tracking-widest lg:text-5xl text-xl">
        Projects
      </h2>
      <div className="sm:pl-[10%] md:pl-[15%] lg:pl-[20%] pt-[6%] md:pr-[5%]">
        <div className="">
          <header className="mb-1">
            <span className="uppercase font-bold text-sm">My portifolio</span>
          </header>
          <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
            Built with Next.js 13 and Tailwind CSS, showcasing my work in a
            sleek and professional manner. Through this website, I aim to
            present my passion for web development and attract exciting
            professional opportunities.
          </p>
          <div className="flex items-center gap-2 my-2">
            <a
              href="http://"
              className="flex items-center bg-zinc-200 md:bg-zinc-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-200 transition-all"
            >
              <Github className="w-4 h-4" />
              <span className="hidden md:flex">Github</span>
            </a>
            <a
              href="http://"
              className="flex items-center bg-zinc-200 md:bg-zinc-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-200 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden md:flex">Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
