export function Hero() {
  return (
    <section
      className="h-96 tablet-sm:h-[calc(100vh-2rem)] tablet-md:min-h-screen flex flex-col items-center justify-center "
      id="hero"
    >
      <div className="tablet-sm:-translate-y-10 flex flex-col items-center justify-center">
        <h1 className="full-hd:text-4xl desktop-md:text-3xl desktop-sm:text-2xl laptop-sm:text-xl tablet-md:text-lg text-sm desktop-sm:translate-y-12 desktop-md:translate-y-14 full-hd:translate-y-18 laptop-sm:translate-y-10 tablet-md:translate-y-8 translate-y-6 font-light tracking-wide">
          Front-end Developer
        </h1>
        <h2 className="font-alt full-hd:text-8xl desktop-md:text-7xl desktop-sm:text-6xl text-3xl tablet-md:text-4xl laptop-sm:text-5xl full-hd:-translate-y-24 desktop-md:-translate-y-16 desktop-sm:-translate-y-14 laptop-sm:-translate-y-12 tablet-md:-translate-y-10 -translate-y-8">
          Enos Domingues
        </h2>
      </div>
    </section>
  )
}
