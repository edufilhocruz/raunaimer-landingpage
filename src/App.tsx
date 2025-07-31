import { useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { useToast } from '@/hooks/useToast'
import { contactService } from '@/services/contactService'

function App() {
  const { showInfo } = useToast()

  useEffect(() => {
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

    // Mostrar toast de boas-vindas (opcional)
    setTimeout(() => {
      showInfo(
        'Bem-vindo ao Sistema Raunaimer!',
        'Descubra como podemos ajudar seu condomínio.'
      )
    }, 2000)
  }, [showInfo])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App 