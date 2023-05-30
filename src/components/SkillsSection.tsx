import { Card } from './Card'
import { Section } from './Section'

export function Skills() {
  return (
    <Section title="Skills" id="skills">
      <div className="desktop-md:text-2xl grid grid-cols-1 place-items-baseline gap-4 text-sm tablet:grid-cols-2 tablet:gap-6 tablet:text-base laptop:text-lg desktop:gap-8 desktop:text-xl full-hd:text-3xl 4k:text-6xl">
        <Card
          title="JavaScript"
          description="Strong command over JavaScript, the fundamental programming language
            for web development."
        />

        <Card
          title="TypeScript"
          description="A statically typed superset of JavaScript, enabling safer and more
          efficient development."
        />

        <Card
          title="Next.JS"
          description="A popular React framework for building server-rendered and
          statically generated websites."
        />

        <Card
          title="React"
          description="A JavaScript library for building user interfaces, enabling reusable
          and component-based development."
        />

        <Card
          title="Tailwind CSS"
          description="A utility-first CSS framework, enabling rapid and responsive web
          development with pre-built classes."
        />

        <Card
          title="Node.js"
          description="A powerful runtime environment that allows developers to execute
          JavaScript code on the server-side."
        />
      </div>
    </Section>
  )
}
