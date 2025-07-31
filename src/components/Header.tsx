import React, { useState, useEffect } from 'react'
import { navigationItems } from '@/data'
import { smoothScrollTo } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank')
    } else {
      smoothScrollTo(href.replace('#', ''), 80)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-raunaimer-dark/95 backdrop-blur-md shadow-xl'
          : 'bg-raunaimer-dark'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logotipo.png" 
              alt="Raunaimer Monfre Advocacia" 
              className="w-auto h-24"
            />
          </div>

          {/* Desktop Navigation - Only show if there are items */}
          {navigationItems.length > 0 && (
            <nav className="items-center hidden space-x-8 md:flex">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="font-medium transition-colors text-raunaimer-white hover:text-raunaimer-gold"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button - Only show if there are items */}
          {navigationItems.length > 0 && (
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-raunaimer-white" />
              ) : (
                <Menu className="w-6 h-6 text-raunaimer-white" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu - Only show if there are items */}
        {navigationItems.length > 0 && isMobileMenuOpen && (
          <div className="border-t md:hidden border-raunaimer-gray bg-raunaimer-dark">
            <nav className="flex flex-col py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="px-4 py-2 font-medium text-left transition-colors text-raunaimer-white hover:text-raunaimer-gold hover:bg-raunaimer-gray"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 