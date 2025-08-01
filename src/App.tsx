import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { DireitoCondominial } from '@/components/DireitoCondominial'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useToast } from '@/hooks/useToast'
import { contactService } from '@/services/contactService'
import { emailService } from '@/services/emailService'

function App() {
  const { showInfo } = useToast()

  useEffect(() => {
    // Inicializar EmailJS
    emailService.init()

    // Inicializar AOS (Animate On Scroll)
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100,
        })
      } catch (error) {
        console.warn('AOS não disponível:', error)
      }
    }

    initAOS()

    // Tracking de visualização da página
    contactService.trackEvent('page_view', {
      page: 'landing-page',
      title: document.title,
    })
  }, [showInfo])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <DireitoCondominial />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App 