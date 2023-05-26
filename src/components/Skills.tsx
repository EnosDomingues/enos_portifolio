// eslint-disable react/jsx-no-comment-textnodes
export function Skills() {
  return (
    <section
      className="flex flex-col tracking-wide leading-relaxed scroll-mt-44 mt-12 tablet-md:min-h-screen "
      id="skills"
    >
      <h2 className="uppercase desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl tablet-md:text-4xl tracking-widest laptop-sm:text-5xl text-xl">
        Skills
      </h2>
      <div className="laptop-sm:pl-[20%] pt-[6%] desktop-md:pr-[5%]">
        <div className="grid grid-cols-1 tablet-sm:grid-cols-2 text-justify place-items-baseline gap-4 tablet-sm:gap-6 desktop-sm:gap-10 full-hd:text-3xl desktop-sm:text-xl desktop-md:text-2xl text-zinc-600 laptop-sm:text-lg tablet-md:text-base">
          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              JavaScript
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              Strong command over JavaScript, the fundamental programming
              language for web development.
            </p>
          </div>

          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              TypeScript
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              A statically typed superset of JavaScript, enabling safer and more
              efficient development.
            </p>
          </div>

          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              Next.JS
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              A popular React framework for building server-rendered and
              statically generated websites.
            </p>
          </div>

          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              React
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              A JavaScript library for building user interfaces, enabling
              reusable and component-based development.
            </p>
          </div>

          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              Tailwind CSS
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              A utility-first CSS framework, enabling rapid and responsive web
              development with pre-built classes.
            </p>
          </div>

          <div className="flex flex-col h-full border border-slate-400 rounded p-4">
            <span className="uppercase font-bold py-1 text-xs tablet-md:text-sm desktop-md:text-lg full-hd:text-xl laptop-sm:text-base px-2 bg-zinc-200 rounded-md">
              Node.js
            </span>
            <p className="mt-1 laptop-sm:mt-2">
              A powerful runtime environment that allows developers to execute
              JavaScript code on the server-side.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
