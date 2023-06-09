import { Section } from './Section'

export function About() {
  return (
    <Section title="About me" id="about">
      <div
        className="
        desktop-md:text-2xl 
        space-y-4 
        text-justify 
        text-sm 
        tablet:text-base 
        laptop:text-lg 
        desktop:text-xl 
        full-hd:text-3xl 
        4k:space-y-24
        4k:text-6xl"
      >
        <p>
          Hi, welcome to my portifolio. My name is Enos Domingues, and I&apos;m
          a passionate front-end developer. I have always been fascinated by the
          power of technology and its ability to shape the world around us. As a
          front-end developer, I strive to create engaging and user-friendly web
          applications that not only meet the needs of the users but also leave
          a lasting impression.
        </p>

        <p>
          With a deep understanding of React, I have successfully delivered
          numerous projects, utilizing its powerful features such as
          component-based architecture, virtual DOM, and state management. I am
          well-versed in HTML, CSS, JavaScript, and have hands-on experience
          with popular frameworks and libraries.
        </p>

        <p>
          If you are looking for a dedicated front-end developer with expertise
          in React and a proven track record of delivering high-quality
          applications, feel free to reach out. I am always excited to take on
          new challenges and contribute to innovative and impactful projects.
          Let&apos;s connect and discuss how I can add value to your team.
        </p>
      </div>
    </Section>
  )
}
