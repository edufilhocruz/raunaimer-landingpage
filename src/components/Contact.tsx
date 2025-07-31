import React from 'react'
import { motion } from 'framer-motion'
import { useContactForm } from '@/hooks/useContactForm'
import { contactInfo, unitsOptions } from '@/data'
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
import { Mail, Phone, MapPin } from 'lucide-react'

// Mapeamento de ícones
const iconMap = {
  Mail,
  Phone,
  MapPin,
}

export const Contact: React.FC = () => {
  const { form, isSubmitting, onSubmit } = useContactForm()

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe está pronta para ajudar você a escolher a melhor solução para seu condomínio.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const IconComponent = iconMap[info.icon as keyof typeof iconMap]
                
                return (
                  <div key={info.type} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
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
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-3">
                Por que escolher o Sistema Raunaimer?
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Implementação rápida e sem complicações</li>
                <li>• Treinamento gratuito para sua equipe</li>
                <li>• Migração de dados sem custo adicional</li>
                <li>• Suporte técnico especializado</li>
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
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    placeholder="Seu nome completo"
                    className={form.formState.errors.name ? 'border-red-500' : ''}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="seu@email.com"
                    className={form.formState.errors.email ? 'border-red-500' : ''}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register('phone')}
                    placeholder="(11) 99999-9999"
                    className={form.formState.errors.phone ? 'border-red-500' : ''}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa/Condomínio
                  </label>
                  <Input
                    id="company"
                    {...form.register('company')}
                    placeholder="Nome da empresa ou condomínio"
                  />
                </div>
              </div>

              {/* Número de Unidades */}
              <div>
                <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Unidades
                </label>
                <Select onValueChange={(value) => form.setValue('units', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o número de unidades" />
                  </SelectTrigger>
                  <SelectContent>
                    {unitsOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  {...form.register('message')}
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                Ao enviar este formulário, você concorda com nossa{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </a>
                . Seus dados serão tratados com segurança.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 