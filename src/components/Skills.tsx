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
        <ul>
          <li>
            <span className="uppercase font-bold py-1 text-sm">JavaScript</span>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              Strong command over JavaScript, the fundamental programming
              language for web development.
            </p>
          </li>

          <li className="mt-4">
            <span className="uppercase font-bold py-1 text-sm">TypeScript</span>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              A statically typed superset of JavaScript, enabling safer and more
              efficient development.
            </p>
          </li>

          <li className="mt-4">
            <span className="uppercase font-bold py-1 text-sm">Next.JS</span>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              A popular React framework for building server-rendered and
              statically generated websites.
            </p>
          </li>

          <li className="mt-4">
            <span className="uppercase font-bold py-1 text-sm">React</span>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              A powerful JavaScript library for building user interfaces,
              enabling reusable and component-based development.
            </p>
          </li>

          {/* <li className="mt-4">
            <span className="uppercase font-bold py-1 border-b border-gray-900">
              Node.JS
            </span>
             <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              A server-side JavaScript runtime environment, for building
              scalable and efficient back-end applications.
            </p>
          </li> */}

          <li className="mt-4">
            <span className="uppercase font-bold py-1 text-sm">
              Tailwind CSS
            </span>
            <p className="xl:text-xl lg:text-lg md:text-base text-sm text-justify md:text-start">
              A utility-first CSS framework, enabling rapid and responsive web
              development with pre-built classes.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
