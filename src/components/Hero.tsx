export function Hero() {
  return (
    <section
      className="flex h-96 flex-col items-center justify-center tablet-sm:h-[calc(100vh-2rem)] tablet-md:min-h-screen "
      id="hero"
    >
      <div className="flex flex-col items-center justify-center tablet-sm:-translate-y-10">
        <h1 className="full-hd:translate-y-18 translate-y-6 text-sm font-light tracking-wide tablet-md:translate-y-8 tablet-md:text-lg laptop-sm:translate-y-10 laptop-sm:text-xl desktop-sm:translate-y-12 desktop-sm:text-2xl desktop-md:translate-y-14 desktop-md:text-3xl full-hd:text-4xl">
          Front-end Developer
        </h1>
        <h2 className="-translate-y-8 font-alt text-3xl tablet-md:-translate-y-10 tablet-md:text-4xl laptop-sm:-translate-y-12 laptop-sm:text-5xl desktop-sm:-translate-y-14 desktop-sm:text-6xl desktop-md:-translate-y-16 desktop-md:text-7xl full-hd:-translate-y-24 full-hd:text-8xl">
          Enos Domingues
        </h2>
      </div>
    </section>
  )
}
