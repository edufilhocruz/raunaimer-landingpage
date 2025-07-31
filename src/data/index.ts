import { Feature, PricingPlan, Stat, ContactInfo, NavItem } from '@/types'

// Dados de navegação
export const navigationItems: NavItem[] = [
]

// Dados de estatísticas
export const stats: Stat[] = [
  {
    id: '1',
    number: '500+',
    label: 'Condomínios Atendidos',
  },
  {
    id: '2',
    number: '80%',
    label: 'Redução na Inadimplência',
  },
  {
    id: '3',
    number: '24/7',
    label: 'Suporte Disponível',
  },
]

// Dados de recursos/features
export const features: Feature[] = [
  {
    id: '1',
    title: 'Cobrança Automática',
    description: 'Envie cobranças automaticamente por email e WhatsApp. Personalize mensagens e acompanhe o status de entrega.',
    icon: 'Star',
  },
  {
    id: '2',
    title: 'Controle de Inadimplência',
    description: 'Acompanhe inadimplentes em tempo real, gere relatórios detalhados e tome decisões baseadas em dados.',
    icon: 'CheckCircle',
  },
  {
    id: '3',
    title: 'Gestão de Moradores',
    description: 'Cadastre e gerencie moradores, proprietários e inquilinos com informações completas e histórico.',
    icon: 'Users',
  },
  {
    id: '4',
    title: 'Relatórios Avançados',
    description: 'Gere relatórios personalizados de inadimplência, receitas, despesas e performance do condomínio.',
    icon: 'FileText',
  },
  {
    id: '5',
    title: 'Segurança Total',
    description: 'Dados protegidos com criptografia SSL, backup automático e controle de acesso por usuários.',
    icon: 'Shield',
  },
  {
    id: '6',
    title: 'Suporte 24/7',
    description: 'Equipe especializada disponível 24 horas por dia para resolver suas dúvidas e problemas.',
    icon: 'Bell',
  },
]

// Dados de planos de preço
export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Básico',
    price: 99,
    period: '/mês',
    description: 'Ideal para condomínios pequenos',
    features: [
      'Até 50 unidades',
      'Cobrança automática',
      'Relatórios básicos',
      'Suporte por email',
      'Backup automático',
    ],
    ctaText: 'Começar Agora',
  },
  {
    id: '2',
    name: 'Profissional',
    price: 199,
    period: '/mês',
    description: 'Para condomínios médios',
    features: [
      'Até 200 unidades',
      'Todos os recursos do Básico',
      'Relatórios avançados',
      'Integração WhatsApp',
      'Suporte telefônico',
      'API personalizada',
    ],
    popular: true,
    ctaText: 'Escolher Plano',
  },
  {
    id: '3',
    name: 'Enterprise',
    price: 399,
    period: '/mês',
    description: 'Para grandes condomínios',
    features: [
      'Unidades ilimitadas',
      'Todos os recursos do Profissional',
      'Múltiplos condomínios',
      'Suporte prioritário 24/7',
      'Treinamento personalizado',
      'Customizações exclusivas',
    ],
    ctaText: 'Falar com Vendas',
  },
]

// Dados de informações de contato
export const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'contato@raunaimer.adv.br',
    icon: 'Mail',
  },
  {
    type: 'phone',
    label: 'Telefone',
    value: '(11) 99999-9999',
    icon: 'Phone',
  },
  {
    type: 'address',
    label: 'Endereço',
    value: 'São Paulo, SP - Brasil',
    icon: 'MapPin',
  },
]

// Configurações da empresa
export const companyConfig = {
  name: 'Raunaimer',
  email: 'contato@raunaimer.adv.br',
  phone: '(11) 99999-9999',
  address: 'São Paulo, SP - Brasil',
  website: 'https://raunaimer.adv.br',
  whatsapp: '11999999999',
}

// Configurações de SEO
export const seoConfig = {
  title: 'Sistema Raunaimer - Gestão Completa para Condomínios',
  description: 'Sistema completo para gestão de condomínios. Automatize cobranças, controle inadimplência e gerencie moradores com facilidade.',
  keywords: ['sistema condomínio', 'gestão condomínio', 'cobrança automática', 'inadimplência', 'administração condomínio'],
  ogImage: '/assets/og-image.jpg',
}

// Opções para o campo de unidades
export const unitsOptions = [
  { value: '', label: 'Selecione...' },
  { value: '1-50', label: '1 - 50 unidades' },
  { value: '51-100', label: '51 - 100 unidades' },
  { value: '101-200', label: '101 - 200 unidades' },
  { value: '201+', label: 'Mais de 200 unidades' },
] 