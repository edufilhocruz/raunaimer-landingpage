import emailjs from '@emailjs/browser'
import { ContactFormData } from '@/types'

// Configurações do EmailJS
// Estas chaves precisarão ser configuradas no EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

export const emailService = {
  /**
   * Inicializa o EmailJS
   */
  init() {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  },

  /**
   * Envia email usando EmailJS
   */
  async sendEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      const contactTypeLabels: Record<string, string> = {
        syndic: 'Síndico',
        condominium: 'Condomínio',
        administrator: 'Administrador'
      }

      const templateParams = {
        to_email: 'contato@raunaimer.adv.br',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        contact_type: contactTypeLabels[data.contactType] || 'Não informado',
        company: data.company || 'Não informado',
        units: data.units || 'Não informado',
        message: data.message || 'Não informado',
        subject: 'Nova solicitação - Raunaimer Monfre Advocacia',
        reply_to: data.email,
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email enviado com sucesso!'
        }
      } else {
        throw new Error('Falha no envio do email')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      return {
        success: false,
        message: 'Erro ao enviar email. Tente novamente.'
      }
    }
  },

  /**
   * Envia email de backup usando mailto (fallback)
   */
  sendEmailFallback(data: ContactFormData): void {
      const contactTypeLabels: Record<string, string> = {
    syndic: 'Síndico',
    condominium: 'Condomínio',
    administrator: 'Administrador'
  }

    const subject = 'Nova solicitação - Raunaimer Monfre Advocacia'
    const body = `
Nova solicitação recebida do site:

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
    Tipo: ${contactTypeLabels[data.contactType] || 'Não informado'}
Empresa: ${data.company || 'Não informado'}
Unidades: ${data.units || 'Não informado'}
Mensagem: ${data.message || 'Não informado'}

---
Enviado automaticamente pelo sistema de contato.
    `.trim()

    const mailtoLink = `mailto:contato@raunaimer.adv.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
  }
} 