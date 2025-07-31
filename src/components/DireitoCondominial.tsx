import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const DireitoCondominial: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(0) // 0 = Gestão dos condomínios (inicialmente expandido)

  const accordionItems = [
    {
      title: 'Gestão dos condomínios',
      content: 'Mediação e conciliação de conflitos, Assessoria nas tomadas decisões, Parecer técnico jurídico, Análise e revisão de contratos, Contencioso Trabalhista, Comparecimento em audiências, Cobrança de cotas condominiais e Elaboração e envio de multas.',
    },
    {
      title: 'Assessoria Condominial',
      content: 'Serviços especializados para condomínios com foco em mediação, conciliação, pareceres técnicos, análise de contratos, contencioso trabalhista, comparecimento em audiências e elaboração de multas.',
    },
    {
      title: 'Direito Civil',
      content: 'Atuação em questões de direito civil relacionadas a condomínios, incluindo responsabilidade civil, contratos, obrigações e direitos dos condôminos.',
    }
  ]

  const toggleAccordion = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index) // -1 fecha todos, index abre o selecionado
  }

  return (
    <section id="direito-condominial" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-raunaimer-gold to-yellow-400 bg-clip-text text-transparent">
              Direito Condominial
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Assessoria jurídica completa para todas as questões condominiais
          </p>
        </motion.div>

        {/* Accordion Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-raunaimer-gold transition-colors shadow-sm">
                <button 
                  className="w-full p-8 text-left flex items-center justify-between text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-bold text-xl">{item.title}</span>
                  <span className="text-3xl text-raunaimer-gold transition-transform duration-300">
                    {expandedItem === index ? '−' : '+'}
                  </span>
                </button>
                {expandedItem === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-raunaimer-gold to-yellow-400 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-raunaimer-dark mb-4">
              Precisa de assessoria jurídica?
            </h3>
            <p className="text-raunaimer-dark/80 mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato conosco e descubra como podemos ajudar com as questões jurídicas do seu condomínio
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-raunaimer-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Assessoria
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 