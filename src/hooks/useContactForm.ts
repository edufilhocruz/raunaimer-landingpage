import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useToast } from '@/hooks/useToast'
import { contactService } from '@/services/contactService'
import { generateWhatsAppLink, generateEmailLink } from '@/lib/utils'

// Schema de validação do formulário
const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().optional(),
  units: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      units: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true)
    
    try {
      // Enviar dados para a API
      await contactService.submitContact(data)
      
      // Mostrar toast de sucesso
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
        variant: 'success',
      })

      // Limpar formulário
      form.reset()

      // Enviar para WhatsApp e Email
      await sendToWhatsApp(data)
      await sendToEmail(data)

    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente em alguns instantes.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendToWhatsApp = async (data: ContactFormSchema) => {
    const message = formatWhatsAppMessage(data)
    const whatsappLink = generateWhatsAppLink('11999999999', message)
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappLink, '_blank')
  }

  const sendToEmail = async (data: ContactFormSchema) => {
    const subject = 'Nova solicitação - Sistema Raunaimer'
    const body = formatEmailMessage(data)
    const emailLink = generateEmailLink('contato@raunaimer.adv.br', subject, body)
    
    // Abrir cliente de email
    window.open(emailLink, '_blank')
  }

  const formatWhatsAppMessage = (data: ContactFormSchema): string => {
    return `Olá! Recebi uma nova solicitação do site:

*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone}
${data.company ? `*Empresa:* ${data.company}` : ''}
${data.units ? `*Unidades:* ${data.units}` : ''}
${data.message ? `*Mensagem:* ${data.message}` : ''}

Gostaria de saber mais sobre o Sistema Raunaimer.`
  }

  const formatEmailMessage = (data: ContactFormSchema): string => {
    return `Nova solicitação recebida do site:

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
${data.company ? `Empresa: ${data.company}` : ''}
${data.units ? `Unidades: ${data.units}` : ''}
${data.message ? `Mensagem: ${data.message}` : ''}

---
Enviado automaticamente pelo sistema de contato.`
  }

  return {
    form,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  }
} 