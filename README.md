# 🏢 Raunaimer Monfre Advocacia - Landing Page

Landing page profissional para o escritório de advocacia **Raunaimer Monfre**, especializado em **Direito Condominial**.

## 📋 Sobre o Projeto

Site institucional moderno e responsivo desenvolvido para apresentar os serviços jurídicos especializados em questões condominiais, com foco em conversão e credibilidade profissional.

**Domínio:** `raunaimer.adv.br` (Landing page de vendas)
**Sistema:** `app.raunaimer.adv.br` (Aplicação principal)

## ✨ Principais Funcionalidades

- **Design Profissional** - Interface limpa e moderna adequada para escritório jurídico
- **Animações Suaves** - Contadores animados e transições elegantes
- **Formulário Completo** - Captura de leads com validação e integração WhatsApp/Email
- **Navegação Intuitiva** - Links diretos para seções específicas
- **Responsivo** - Otimizado para todos os dispositivos

## 🎯 Seções da Página

1. **Hero** - Apresentação principal com estatísticas animadas
2. **Features** - Serviços gerais e diferenciais
3. **Direito Condominial** - Serviços especializados em accordion
4. **Contato** - Formulário completo e informações de contato
5. **Footer** - Links úteis e informações da empresa

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Radix UI** para componentes acessíveis
- **React Hook Form** + **Zod** para formulários

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📧 Configuração do EmailJS

Para que o formulário de contato funcione corretamente, configure o EmailJS:

1. **Crie uma conta** em [EmailJS](https://www.emailjs.com/)
2. **Configure um serviço de email** (Gmail, Outlook, etc.)
3. **Crie um template** com as variáveis:
   - `{{to_email}}` - Email de destino
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{phone}}` - Telefone
   - `{{contact_type}}` - Tipo de contato
   - `{{company}}` - Empresa
   - `{{units}}` - Unidades
   - `{{message}}` - Mensagem
4. **Copie as chaves** e crie um arquivo `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=sua_service_id
   VITE_EMAILJS_TEMPLATE_ID=sua_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

## 🌐 Deploy no Domínio

### 📍 Estrutura de Domínios
- **`raunaimer.adv.br`** - Landing page de vendas (este projeto)
- **`app.raunaimer.adv.br`** - Sistema Raunaimer (aplicação principal)

### 🚀 Deploy da Landing Page

#### **VPS Configurada (Recomendado)**
A landing page está configurada para deploy na VPS existente:

- **VPS:** 191.252.111.245
- **Servidor:** Nginx
- **Document Root:** `/var/www/html`
- **Sistema:** `/var/www/sistema_raunaimer` (app.raunaimer.adv.br)

#### **Deploy Automatizado**
```bash
# Executar deploy automatizado
./deploy-vps.sh
```

#### **Deploy Manual**
Para deploy manual no domínio `raunaimer.adv.br`:

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Upload para VPS:**
   ```bash
   scp -r dist/* root@191.252.111.245:/var/www/html/
   scp nginx-config.conf root@191.252.111.245:/etc/nginx/sites-available/raunaimer-landing
   ```

3. **Configurar Nginx:**
   ```bash
   ssh root@191.252.111.245
   ln -s /etc/nginx/sites-available/raunaimer-landing /etc/nginx/sites-enabled/
   nginx -t
   systemctl reload nginx
   ```

### 📦 Build para Produção
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/` para upload no servidor.

## 📞 Contato

**Raunaimer Monfre Advocacia**
- **Endereço:** Avenida Regente Feijó 944, Conj. 1604A Anália Franco, São Paulo/SP
- **Telefone:** (11) 99423-2497
- **Email:** contato@raunaimer.adv.br
- **Horário:** Seg-Sex 9.00 - 17.00

---

**Desenvolvido para Raunaimer Monfre Advocacia** 🏛️ 