// eslint-disable react/jsx-no-comment-textnodes
export function Skills() {
  return (
    <section
      className="mt-12 flex scroll-mt-44 flex-col leading-relaxed tracking-wide tablet-md:min-h-screen "
      id="skills"
    >
      <h2 className="text-xl uppercase tracking-widest tablet-md:text-4xl laptop-sm:text-5xl desktop-sm:text-6xl desktop-md:text-7xl full-hd:text-8xl">
        Skills
      </h2>
      <div className="pt-[6%] laptop-sm:pl-[20%] desktop-md:pr-[5%]">
        <div className="grid grid-cols-1 place-items-baseline gap-4 text-justify text-sm tablet-sm:grid-cols-2 tablet-sm:gap-6 tablet-md:text-base laptop-sm:text-lg desktop-sm:gap-10 desktop-sm:text-xl desktop-md:text-2xl full-hd:text-3xl">
          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              JavaScript
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              Strong command over JavaScript, the fundamental programming
              language for web development.
            </p>
          </div>

          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              TypeScript
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              A statically typed superset of JavaScript, enabling safer and more
              efficient development.
            </p>
          </div>

          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              Next.JS
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              A popular React framework for building server-rendered and
              statically generated websites.
            </p>
          </div>

          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              React
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              A JavaScript library for building user interfaces, enabling
              reusable and component-based development.
            </p>
          </div>

          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              Tailwind CSS
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              A utility-first CSS framework, enabling rapid and responsive web
              development with pre-built classes.
            </p>
          </div>

          <div className="flex h-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 font-bold uppercase">
              Node.js
            </span>
            <p className="mt-1 px-2 laptop-sm:mt-2">
              A powerful runtime environment that allows developers to execute
              JavaScript code on the server-side.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
