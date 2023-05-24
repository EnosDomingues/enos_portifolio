/* eslint-disable react/jsx-no-comment-textnodes */
export function Skills() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-44 mt-12 md:min-h-screen"
      id="skills"
    >
      <h2 className="uppercase font-medium xl:text-6xl md:text-4xl tracking-widest lg:text-5xl text-xl">
        Skills
      </h2>
      <div className="sm:pl-[10%] md:pl-[15%] lg:pl-[20%] pt-[6%] md:pr-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-baseline gap-6">
          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              JavaScript
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* Strong command over JavaScript, the fundamental programming
              language for web development. */
            </p>
          </div>

          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              TypeScript
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* A statically typed superset of JavaScript, enabling safer and
              more efficient development. */
            </p>
          </div>

          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              Next.JS
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* A popular React framework for building server-rendered and
              statically generated websites. */
            </p>
          </div>

          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              React
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* A powerful JavaScript library for building user interfaces,
              enabling reusable and component-based development. */
            </p>
          </div>

          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              Tailwind CSS
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* A utility-first CSS framework, enabling rapid and responsive
              web development with pre-built classes. */
            </p>
          </div>

          <div>
            <span className="uppercase font-bold py-1 text-xs md:text-sm px-2 bg-zinc-600 rounded-md text-white">
              Nodejs
            </span>
            <p className="xl:text-xl text-zinc-600 lg:text-lg md:text-base max-w-md mt-1 text-sm text-justify md:text-start">
              /* A powerful runtime environment that allows developers to
              execute JavaScript code on the server-side. */
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
