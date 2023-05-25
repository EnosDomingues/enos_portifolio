export function Hero() {
  return (
    <section
      className="h-96 sm:h-[calc(100vh-2rem)] md:min-h-screen flex flex-col items-center justify-center"
      id="hero"
    >
      <div className="sm:-translate-y-10 flex flex-col items-center justify-center">
        <h1 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-sm xl:translate-y-12 2xl:translate-y-14 lg:translate-y-10 md:translate-y-8 translate-y-6 font-light tracking-wide">
          Front-end Developer
        </h1>
        <h2 className="font-alt 2xl:text-7xl xl:text-6xl text-3xl md:text-4xl lg:text-5xl 2xl:-translate-y-16 xl:-translate-y-14 lg:-translate-y-12 md:-translate-y-10 -translate-y-8">
          Enos Domingues
        </h2>
      </div>
    </section>
  )
}
