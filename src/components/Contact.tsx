import React from 'react'
import { motion } from 'framer-motion'
import { useContactForm } from '@/hooks/useContactForm'
import { contactInfo } from '@/data'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

// Mapeamento de ícones
const iconMap = {
  Mail,
  Phone,
  MapPin,
}

export const Contact: React.FC = () => {
  const { form, isSubmitting, onSubmit } = useContactForm()

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Fale Conosco
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Mantenha-se atualizado com as novidades do mercado imobiliário e condominial. 
              Leia nossos artigos e fique por dentro das principais mudanças e tendências do setor.
            </p>

            {/* Contact Methods */}
            <div className="mb-12 space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = iconMap[info.icon as keyof typeof iconMap]
                
                return (
                  <div key={info.type} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-raunaimer-gold to-yellow-400">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
              <h4 className="mb-4 font-semibold text-gray-900">
                Por que escolher a Raunaimer?
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-raunaimer-gold"></div>
                  <span>Especialistas em direito condominial</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-raunaimer-gold"></div>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-raunaimer-gold"></div>
                  <span>Soluções jurídicas eficazes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-raunaimer-gold"></div>
                  <span>Experiência comprovada no mercado</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
                              <form onSubmit={onSubmit} className="space-y-6">
                  {/* Tipo de Contato */}
                  <div>
                    <label htmlFor="contactType" className="block mb-2 text-sm font-medium text-gray-700">
                      Você é *
                    </label>
                    <Select onValueChange={(value) => form.setValue('contactType', value as 'syndic' | 'condominium' | 'administrator')}>
                      <SelectTrigger className="border-gray-300 focus:border-raunaimer-gold focus:ring-raunaimer-gold">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="syndic">Síndico</SelectItem>
                        <SelectItem value="condominium">Condomínio</SelectItem>
                        <SelectItem value="administrator">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.contactType && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.contactType.message}
                      </p>
                    )}
                  </div>

                  {/* Nome */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Primeiro Nome *
                  </label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    placeholder="Seu primeiro nome"
                    className={`border-gray-300 focus:border-raunaimer-gold focus:ring-raunaimer-gold ${
                      form.formState.errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="seu@email.com"
                    className={`border-gray-300 focus:border-raunaimer-gold focus:ring-raunaimer-gold ${
                      form.formState.errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    Fone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register('phone')}
                    placeholder="(11) 99999-9999"
                    className={`border-gray-300 focus:border-raunaimer-gold focus:ring-raunaimer-gold ${
                      form.formState.errors.phone ? 'border-red-500' : ''
                    }`}
                  />
                  {form.formState.errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    {...form.register('message')}
                    placeholder="Conte-nos sobre sua necessidade ou dúvida..."
                    rows={4}
                    className={`border-gray-300 focus:border-raunaimer-gold focus:ring-raunaimer-gold resize-none ${
                      form.formState.errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full py-4 space-x-2 text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-raunaimer-gold to-yellow-400 text-raunaimer-dark hover:shadow-xl hover:-translate-y-1"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-center text-gray-500">
                  Ao enviar este formulário, você concorda com nossa{' '}
                  <a href="#" className="text-raunaimer-gold hover:underline">
                    Política de Privacidade
                  </a>
                  . Seus dados serão tratados com segurança.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 