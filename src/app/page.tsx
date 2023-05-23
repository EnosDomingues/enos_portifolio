import { About } from '@/components/About'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-24 py-16">
      <Header />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
