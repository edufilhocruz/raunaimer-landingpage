#!/bin/bash

# Script de Deploy para Raunaimer Monfre Advocacia
# Uso: ./deploy.sh [ambiente]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    error "Node.js não está instalado. Instale o Node.js primeiro."
fi

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    error "npm não está instalado. Instale o npm primeiro."
fi

# Ambiente padrão
ENVIRONMENT=${1:-production}

log "Iniciando deploy para ambiente: $ENVIRONMENT"

# Limpar cache e node_modules se necessário
if [ "$2" = "--clean" ]; then
    log "Limpando cache e reinstalando dependências..."
    rm -rf node_modules package-lock.json
    npm install
fi

# Instalar dependências
log "Instalando dependências..."
npm install

# Verificar se as variáveis de ambiente estão configuradas
if [ ! -f ".env" ]; then
    warn "Arquivo .env não encontrado. Verifique se as variáveis do EmailJS estão configuradas."
    echo "Copie o arquivo emailjs-config.example para .env e configure as variáveis:"
    echo "VITE_EMAILJS_SERVICE_ID=sua_service_id"
    echo "VITE_EMAILJS_TEMPLATE_ID=sua_template_id"
    echo "VITE_EMAILJS_PUBLIC_KEY=sua_public_key"
fi

# Build para produção
log "Executando build para produção..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    error "Build falhou. Pasta dist não foi criada."
fi

log "Build concluído com sucesso!"

# Informações sobre o deploy
echo ""
log "📦 Arquivos prontos para deploy na pasta 'dist/'"
echo ""
log "📍 Estrutura de Domínios:"
echo "- raunaimer.adv.br → Landing page de vendas (este projeto)"
echo "- app.raunaimer.adv.br → Sistema Raunaimer (aplicação principal)"
echo ""
log "📋 Próximos passos para deploy no domínio raunaimer.adv.br:"
echo "1. Faça upload dos arquivos da pasta 'dist/' para o servidor"
echo "2. Configure o servidor web (Apache/Nginx) para servir os arquivos"
echo "3. Configure o arquivo .htaccess (já incluído na pasta public/)"
echo "4. Configure HTTPS para segurança"
echo "5. Teste o formulário de contato"
echo ""
log "🔧 Configurações recomendadas:"
echo "- Servidor: Apache ou Nginx"
echo "- Document Root: pasta com os arquivos do dist/"
echo "- Módulos Apache: mod_rewrite, mod_deflate, mod_expires, mod_headers"
echo "- SSL: Certificado válido para raunaimer.adv.br"
echo ""

# Tamanho do build
BUILD_SIZE=$(du -sh dist | cut -f1)
log "📊 Tamanho do build: $BUILD_SIZE"

log "✅ Deploy preparado com sucesso!" 