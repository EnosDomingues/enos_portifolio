import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-16">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
