#!/bin/bash

# Script de Deploy para VPS Raunaimer (Sem SSL)
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

log "🚀 Iniciando deploy para VPS Raunaimer (Sem SSL)"
info "VPS: $VPS_IP"
info "Domínio: raunaimer.adv.br"
info "Document Root: $VPS_PATH"

# Backup do diretório atual na VPS
log "💾 Fazendo backup do diretório atual na VPS..."
ssh $VPS_USER@$VPS_IP "if [ -d $VPS_PATH ]; then cp -r $VPS_PATH ${VPS_PATH}_backup_$(date +%Y%m%d_%H%M%S); fi"

# Limpar diretório na VPS
log "🧹 Limpando diretório na VPS..."
ssh $VPS_USER@$VPS_IP "rm -rf $VPS_PATH/*"

# Upload dos arquivos
log "📤 Fazendo upload dos arquivos para a VPS..."
scp -r dist/* $VPS_USER@$VPS_IP:$VPS_PATH/

# Upload da configuração Nginx (sem SSL)
log "📤 Fazendo upload da configuração Nginx (sem SSL)..."
scp nginx-config-no-ssl.conf $VPS_USER@$VPS_IP:$NGINX_SITES_AVAILABLE/$SITE_NAME

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
if ssh $VPS_USER@$VPS_IP "curl -s -o /dev/null -w '%{http_code}' http://raunaimer.adv.br" | grep -q "200"; then
    log "✅ Deploy realizado com sucesso!"
    info "🌐 Site disponível em: http://raunaimer.adv.br"
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
echo "- SSL: Não configurado (HTTP apenas)"
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
echo "3. Configurar SSL com Let's Encrypt"
echo "4. Configurar backup automático"
echo ""
log "🔒 Para configurar SSL depois:"
echo "certbot --nginx -d raunaimer.adv.br -d www.raunaimer.adv.br"
echo ""

log "✅ Deploy concluído!" 