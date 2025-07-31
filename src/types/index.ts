// Tipos para o formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  units?: string;
  message?: string;
}

// Tipos para os planos de preço
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

// Tipos para os recursos/features
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Tipos para estatísticas
export interface Stat {
  id: string;
  number: string;
  label: string;
}

// Tipos para informações de contato
export interface ContactInfo {
  type: 'email' | 'phone' | 'address';
  label: string;
  value: string;
  icon: string;
}

// Tipos para navegação
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Tipos para configuração da aplicação
export interface AppConfig {
  company: {
    name: string;
    email: string;
    phone: string;
    address: string;
    website: string;
  };
  social: {
    whatsapp: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

// Tipos para resposta da API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Tipos para validação de formulário
export interface FormValidation {
  isValid: boolean;
  errors: Record<string, string>;
} 