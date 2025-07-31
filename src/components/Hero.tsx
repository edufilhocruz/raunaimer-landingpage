import React from 'react'

import { smoothScrollTo } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useCounter } from '@/hooks/useCounter'

export const Hero: React.FC = () => {
  const handleCTAClick = () => {
    smoothScrollTo('contato', 80)
  }

  const handleLearnMoreClick = () => {
    smoothScrollTo('recursos', 80)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6">
              Especialistas em{' '}
              <span className="bg-gradient-to-r from-raunaimer-gold to-yellow-400 bg-clip-text text-transparent">
                Direito Condominial
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Sua jornada para soluções jurídicas condominiais começa aqui
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-raunaimer-gold to-yellow-400 text-raunaimer-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleLearnMoreClick}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:border-raunaimer-gold hover:text-raunaimer-gold transition-all duration-300"
            >
              Saiba Mais
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <StatCounter 
              end={500} 
              suffix="+" 
              label="Condomínios Atendidos" 
              delay={0.6}
            />
            <StatCounter 
              end={80} 
              suffix="%" 
              label="Redução na Inadimplência" 
              delay={0.8}
            />
            <StatCounter 
              end={24} 
              suffix="/7" 
              label="Suporte Disponível" 
              delay={1.0}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente para estatística com contador animado
interface StatCounterProps {
  end: number
  suffix: string
  label: string
  delay: number
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix, label, delay }) => {
  const { count, ref } = useCounter({ end, suffix, duration: 2000 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-raunaimer-gold mb-2">
        {count}
      </div>
      <div className="text-sm text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  )
} 