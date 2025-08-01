import { useState, useCallback } from 'react'
import { formatPhone } from '@/lib/utils'

export const usePhoneFormat = () => {
  const [phone, setPhone] = useState('')

  const handlePhoneChange = useCallback((value: string) => {
    // Remove todos os caracteres não numéricos
    const cleaned = value.replace(/\D/g, '')
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    if (cleaned.length <= 11) {
      const formatted = formatPhone(cleaned)
      setPhone(formatted)
      return formatted
    }
    
    return phone
  }, [phone])

  const handlePhoneInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const formatted = handlePhoneChange(value)
    e.target.value = formatted
  }, [handlePhoneChange])

  return {
    phone,
    setPhone,
    handlePhoneChange,
    handlePhoneInput
  }
} 