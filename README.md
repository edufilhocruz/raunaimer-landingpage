# 🚀 Landing Page - Sistema Raunaimer

Landing page moderna e responsiva para o Sistema Raunaimer, desenvolvida com React, TypeScript, Vite e Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Framer Motion** - Animações e transições
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Lucide React** - Ícones modernos

## 🏗️ Arquitetura

O projeto segue uma arquitetura limpa e escalável:

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (Radix UI)
│   ├── Header.tsx      # Cabeçalho da página
│   ├── Hero.tsx        # Seção principal
│   ├── Features.tsx    # Recursos do produto
│   ├── Pricing.tsx     # Planos e preços
│   ├── CTA.tsx         # Call-to-action
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── hooks/              # Hooks personalizados
│   ├── useContactForm.ts
│   ├── useToast.ts
│   └── useScrollAnimation.ts
├── services/           # Serviços e APIs
│   └── contactService.ts
├── types/              # Definições TypeScript
│   └── index.ts
├── data/               # Dados mockados
│   └── index.ts
├── lib/                # Utilitários
│   └── utils.ts
└── App.tsx             # Componente principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📱 Funcionalidades

### ✨ Design Moderno
- Interface limpa e profissional
- Gradientes e animações suaves
- Design responsivo para todos os dispositivos
- Tipografia otimizada (Inter)

### 📝 Formulário de Contato
- Validação em tempo real com Zod
- Integração com WhatsApp e Email
- Feedback visual com toasts
- Campos obrigatórios e opcionais

### 🎨 Componentes Reutilizáveis
- Sistema de design consistente
- Componentes baseados no Radix UI
- Variantes e estados bem definidos
- Acessibilidade integrada

### ⚡ Performance
- Lazy loading de componentes
- Otimização de imagens
- Code splitting automático
- Bundle otimizado

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local`:
```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Sistema Raunaimer
```

### Personalização
- **Cores**: Edite `tailwind.config.js` e `src/index.css`
- **Conteúdo**: Modifique `src/data/index.ts`
- **Formulário**: Ajuste `src/hooks/useContactForm.ts`

## 📊 Seções da Landing Page

### 1. Header
- Logo e navegação responsiva
- Menu mobile com animações
- Links para seções principais

### 2. Hero
- Título principal com gradiente
- Descrição do produto
- Call-to-action principal
- Estatísticas animadas

### 3. Features
- 6 cards com funcionalidades
- Ícones SVG personalizados
- Animações de entrada

### 4. Pricing
- 3 planos com destaque
- Comparação de recursos
- Botões de ação

### 5. CTA
- Call-to-action secundário
- Links para demonstração
- Indicadores de confiança

### 6. Contact
- Formulário completo
- Validação em tempo real
- Integração WhatsApp/Email
- Informações de contato

### 7. Footer
- Links organizados
- Redes sociais
- Informações legais

## 🎯 Funcionalidades do Formulário

### Validação
- Nome: mínimo 2 caracteres
- Email: formato válido
- Telefone: mínimo 10 dígitos
- Feedback visual de erros

### Integração
- **WhatsApp**: Abre conversa com mensagem formatada
- **Email**: Abre cliente de email com dados preenchidos
- **API**: Envia dados para backend (opcional)

### UX/UI
- Loading states
- Toasts de sucesso/erro
- Limpeza automática do formulário
- Responsivo em todos os dispositivos

## 🔒 Segurança

- Validação client-side e server-side
- Sanitização de dados
- HTTPS obrigatório
- Headers de segurança

## 📈 Analytics e Tracking

### Eventos Rastreados
- Visualização de página
- Cliques em CTAs
- Envios de formulário
- Interações com seções

### Integração Preparada
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- LinkedIn Insight Tag

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Servidor Estático
```bash
npm run preview
```

### Deploy no Servidor
```bash
# Copiar arquivos para servidor
scp -r dist/* user@server:/var/www/landing_page/

# Configurar Nginx
sudo cp nginx-landing-page.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/landing_page /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 🧪 Testes

### Testes Manuais
- [x] Responsividade (mobile, tablet, desktop)
- [x] Navegação e scroll
- [x] Formulário de contato
- [x] Validações
- [x] Integração WhatsApp/Email

### Navegadores Suportados
- [x] Chrome (última versão)
- [x] Firefox (última versão)
- [x] Safari (última versão)
- [x] Edge (última versão)

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: contato@raunaimer.adv.br
- **Telefone**: (11) 99999-9999

## 📄 Licença

Este projeto é propriedade da Raunaimer e não pode ser reproduzido sem autorização.

---

**Desenvolvido com ❤️ para o Sistema Raunaimer** 