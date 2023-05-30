import { Section } from './Section'
import { Card } from './Card'

export function Projects() {
  return (
    <Section title="Projects" id="projects">
      <Card
        title="My portifolio"
        description=" Built with Next.js 13 and Tailwind CSS, showcasing my work in a sleek
        and professional manner. Through this website, I aim to present my
        passion for web development and attract exciting professional
        opportunities."
        cardButtons={{
          githubLink: 'https://github.com/EnosDomingues/enos_portifolio',
          webLink: 'https://enos.dev',
        }}
      />
    </Section>
  )
}
