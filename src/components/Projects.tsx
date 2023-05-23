import { Github, Globe } from 'lucide-react'

export function Projects() {
  return (
    <section className="flex flex-col mt-56 scroll-mt-10" id="projects">
      <h2 className="uppercase font-medium text-6xl tracking-widest">
        Projects
      </h2>
      <div className="pl-[20%] pt-[10%] PR-[5%]">
        <div className="border-b border-gray-900 p-4">
          <header className="mb-4">
            <span className="uppercase font-bold">My portifolio</span>
          </header>
          <p className="text-xl">
            Built with Next.js 13 and Tailwind CSS, showcasing my work in a
            sleek and professional manner. Through this website, I aim to
            present my passion for web development and attract exciting
            professional opportunities.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a
              href="http://"
              className="flex items-center bg-slate-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-300 transition-all"
            >
              <Github size={18} />
              <span>Github</span>
            </a>
            <a
              href="http://"
              className="flex items-center bg-slate-200 px-4 py-2 gap-2 rounded-md hover:bg-slate-300 transition-all"
            >
              <Globe size={18} />
              <span>Website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
