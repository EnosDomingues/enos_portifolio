import { About } from '@/components/AboutSection'
import { Contact } from '@/components/ContactSection'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/ProjectsSection'
import { Skills } from '@/components/SkillsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 pt-8 tablet:px-24 tablet:pt-16 4k:px-48 ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
