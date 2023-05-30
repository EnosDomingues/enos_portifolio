export function Hero() {
  return (
    <section
      className="tableth-[calc(100vh-2rem)] flex h-96 flex-col items-center justify-center tablet:min-h-screen"
      id="hero"
    >
      <div className="tablet-translate-y-10 flex flex-col items-center justify-center">
        <h1 className="full-hd:translate-y-18 desktop-md:translate-y-14 desktop-md:text-3xl translate-y-6 text-sm font-light tracking-wide tablet:translate-y-8 tablet:text-lg laptop:translate-y-10 laptop:text-xl desktop:translate-y-12 desktop:text-2xl full-hd:text-4xl 4k:translate-y-36 4k:text-7xl">
          Front-end Developer
        </h1>
        <h2 className="desktop-md:-translate-y-16 desktop-md:text-7xl -translate-y-8 font-alt text-3xl tablet:-translate-y-10 tablet:text-4xl laptop:-translate-y-12 laptop:text-5xl desktop:-translate-y-14 desktop:text-6xl full-hd:-translate-y-24 full-hd:text-8xl 4k:-translate-y-32 4k:text-10xl">
          Enos Domingues
        </h2>
      </div>
    </section>
  )
}
