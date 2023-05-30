import { Github, LinkedinIcon, Mail } from 'lucide-react'
import { Section } from './Section'
import { ContactInfo } from './ContactInfo'

export function Contact() {
  return (
    <Section title="Contact" id="contact">
      <div className="mb-[6%] space-y-8 4k:space-y-16">
        <ContactInfo
          title="Linkedin"
          description="linkedin.com/in/enosdomingues"
          href="https://www.linkedin.com/in/enosdomingues/"
          icon={LinkedinIcon}
        />

        <ContactInfo
          title="Email"
          description="mail@enos.dev"
          href="mailto:mail@enos.dev"
          icon={Mail}
        />

        <ContactInfo
          title="Github"
          description="github.com/EnosDomingues"
          href="https://github.com/EnosDomingues"
          icon={Github}
        />
      </div>
    </Section>
  )
}
