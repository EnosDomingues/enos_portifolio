// eslint-disable react/jsx-no-comment-textnodes
export function Skills() {
  return (
    <section
      className="mt-12 flex scroll-mt-44 flex-col leading-relaxed tracking-wide tablet:min-h-[calc(100vh-8rem)] 4k:scroll-mt-96"
      id="skills"
    >
      <h2 className="desktop-md:text-7xl text-xl uppercase tracking-widest tablet:text-4xl laptop:text-5xl desktop:text-6xl full-hd:text-8xl 4k:text-10xl">
        Skills
      </h2>
      <div className="desktop-md:pr-[5%] pt-[6%] laptop:pl-[20%]">
        <div className="desktop-md:text-2xl grid grid-cols-1 place-items-baseline gap-4 text-sm tablet:grid-cols-2 tablet:gap-6 tablet:text-base laptop:text-lg desktop:gap-10 desktop:text-xl full-hd:text-3xl 4k:text-6xl">
          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              JavaScript
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              Strong command over JavaScript, the fundamental programming
              language for web development.
            </p>
          </div>

          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              TypeScript
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              A statically typed superset of JavaScript, enabling safer and more
              efficient development.
            </p>
          </div>

          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              Next.JS
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              A popular React framework for building server-rendered and
              statically generated websites.
            </p>
          </div>

          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              React
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              A JavaScript library for building user interfaces, enabling
              reusable and component-based development.
            </p>
          </div>

          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              Tailwind CSS
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              A utility-first CSS framework, enabling rapid and responsive web
              development with pre-built classes.
            </p>
          </div>

          <div className="flex h-full w-full flex-col rounded border border-slate-400 p-2">
            <span className="rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase 4k:px-4 4k:py-6 4k:text-5xl">
              Node.js
            </span>
            <p className="mt-1 px-2 laptop:mt-2 4k:px-4 4k:py-6 4k:leading-tight">
              A powerful runtime environment that allows developers to execute
              JavaScript code on the server-side.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
