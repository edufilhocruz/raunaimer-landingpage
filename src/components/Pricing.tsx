import React from 'react'
import { pricingPlans } from '@/data'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

export const Pricing: React.FC = () => {
  const handlePlanClick = (planName: string) => {
    // Scroll para seção de contato
    const element = document.getElementById('contato')
    element?.scrollIntoView({ behavior: 'smooth' })
    
    // Tracking do evento (desabilitado em desenvolvimento)
    if (!import.meta.env.DEV) {
      console.log(`Plano clicado: ${planName}`)
    }
  }

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho do seu condomínio
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-blue-500 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatCurrency(plan.price)}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Todos os planos incluem:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Suporte técnico</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Backup automático</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Atualizações gratuitas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 