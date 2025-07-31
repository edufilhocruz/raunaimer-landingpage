import React from 'react'
import { Button } from '@/components/ui/button'
import { stats } from '@/data'
import { smoothScrollTo } from '@/lib/utils'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  const handleCTAClick = () => {
    smoothScrollTo('contato', 80)
  }

  const handleLearnMoreClick = () => {
    smoothScrollTo('recursos', 80)
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Gestão Completa para{' '}
              <span className="gradient-text">Condomínios</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Automatize cobranças, controle inadimplência e gerencie moradores com o sistema mais completo do mercado. 
              Reduza a inadimplência em até 80% e economize horas de trabalho administrativo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="gradient"
                onClick={handleCTAClick}
                className="text-lg px-8 py-4"
              >
                Solicitar Demonstração
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleLearnMoreClick}
                className="text-lg px-8 py-4"
              >
                Conhecer Recursos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder para imagem do dashboard */}
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="h-20 bg-blue-100 rounded-lg"></div>
                      <div className="h-20 bg-purple-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 