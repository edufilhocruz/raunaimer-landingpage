#!/bin/bash

# Script de Deploy para VPS Raunaimer
# VPS: 191.252.111.245
# Servidor: Nginx
# Domínio: raunaimer.adv.br

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações da VPS
VPS_IP="191.252.111.245"
VPS_USER="root"
VPS_PATH="/var/www/html"
NGINX_SITES_AVAILABLE="/etc/nginx/sites-available"
NGINX_SITES_ENABLED="/etc/nginx/sites-enabled"
SITE_NAME="raunaimer-landing"

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

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    error "Node.js não está instalado. Instale o Node.js primeiro."
fi

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    error "npm não está instalado. Instale o npm primeiro."
fi

# Verificar se ssh está disponível
if ! command -v ssh &> /dev/null; then
    error "SSH não está disponível. Instale o OpenSSH primeiro."
fi

# Verificar se scp está disponível
if ! command -v scp &> /dev/null; then
    error "SCP não está disponível. Instale o OpenSSH primeiro."
fi

log "🚀 Iniciando deploy para VPS Raunaimer"
info "VPS: $VPS_IP"
info "Domínio: raunaimer.adv.br"
info "Document Root: $VPS_PATH"

# Build para produção
log "📦 Executando build para produção..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    error "Build falhou. Pasta dist não foi criada."
fi

log "✅ Build concluído com sucesso!"

# Backup do diretório atual na VPS
log "💾 Fazendo backup do diretório atual na VPS..."
ssh $VPS_USER@$VPS_IP "if [ -d $VPS_PATH ]; then cp -r $VPS_PATH ${VPS_PATH}_backup_$(date +%Y%m%d_%H%M%S); fi"

# Upload dos arquivos
log "📤 Fazendo upload dos arquivos para a VPS..."
scp -r dist/* $VPS_USER@$VPS_IP:$VPS_PATH/

# Upload da configuração Nginx
log "📤 Fazendo upload da configuração Nginx..."
scp nginx-config.conf $VPS_USER@$VPS_IP:$NGINX_SITES_AVAILABLE/$SITE_NAME

# Configurar Nginx na VPS
log "⚙️ Configurando Nginx na VPS..."
ssh $VPS_USER@$VPS_IP << 'EOF'
    # Remover configuração anterior se existir
    rm -f /etc/nginx/sites-enabled/raunaimer-landing
    
    # Criar link simbólico
    ln -s /etc/nginx/sites-available/raunaimer-landing /etc/nginx/sites-enabled/
    
    # Testar configuração
    nginx -t
    
    # Recarregar Nginx
    systemctl reload nginx
    
    # Verificar status
    systemctl status nginx --no-pager -l
EOF

# Verificar se o deploy foi bem-sucedido
log "🔍 Verificando se o deploy foi bem-sucedido..."
if ssh $VPS_USER@$VPS_IP "curl -s -o /dev/null -w '%{http_code}' https://raunaimer.adv.br" | grep -q "200"; then
    log "✅ Deploy realizado com sucesso!"
    info "🌐 Site disponível em: https://raunaimer.adv.br"
else
    warn "⚠️ Deploy pode não ter sido bem-sucedido. Verifique manualmente."
fi

# Informações finais
echo ""
log "📋 Resumo do Deploy:"
echo "- VPS: $VPS_IP"
echo "- Domínio: raunaimer.adv.br"
echo "- Document Root: $VPS_PATH"
echo "- Configuração Nginx: $NGINX_SITES_AVAILABLE/$SITE_NAME"
echo ""
log "🔧 Comandos úteis para manutenção:"
echo "- Acessar VPS: ssh $VPS_USER@$VPS_IP"
echo "- Ver logs Nginx: tail -f /var/log/nginx/raunaimer.adv.br.error.log"
echo "- Reiniciar Nginx: systemctl restart nginx"
echo "- Verificar status: systemctl status nginx"
echo ""
log "🎯 Próximos passos:"
echo "1. Configurar EmailJS para formulário de contato"
echo "2. Testar formulário de contato"
echo "3. Configurar SSL se necessário"
echo "4. Configurar backup automático"
echo ""

log "✅ Deploy concluído!" 