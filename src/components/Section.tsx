import { HTMLProps, ReactNode } from 'react'

interface SectionProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode
  title: string
}

export function Section({ children, title, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className="
        mt-12 
        flex 
        scroll-mt-44 
        flex-col 
        leading-relaxed 
        tracking-wide 
        tablet:min-h-[calc(100vh-8rem)] 
        4k:scroll-mt-96"
    >
      <h2 className="desktop-md:text-7xl text-xl uppercase tracking-widest tablet:text-4xl laptop:text-5xl desktop:text-6xl full-hd:text-8xl 4k:text-10xl">
        {title}
      </h2>
      <div className="pt-[6%] tablet:pr-[5%] laptop:pl-[20%]">{children}</div>
    </section>
  )
}
