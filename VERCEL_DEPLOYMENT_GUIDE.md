# 🚀 MB Hub v2.0 — Guia Completo de Deploy na Vercel

## 📋 Pré-requisitos

1. **Conta GitHub** — https://github.com/signup
2. **Conta Vercel** — https://vercel.com/signup
3. **Git instalado** — https://git-scm.com/
4. **Node.js 16+** — https://nodejs.org/

---

## 🎯 Passo 1: Preparar o Projeto Localmente

### 1.1 Inicializar Git (se ainda não estiver)
```bash
cd /Users/marcinhabraga/Library/Application\ Support/Open\ Design/namespaces/release-stable-intel/data/projects/58d863c1-5e38-43a4-a46c-43b820ff510e

git init
git config user.email "seu-email@gmail.com"
git config user.name "Seu Nome"
```

### 1.2 Verificar arquivos necessários
Certifique-se de que existem:
```
✅ index.html
✅ login.html
✅ dashboard.html
✅ pipeline.html
✅ comissoes.html
✅ agendamentos.html
✅ onboarding.html
✅ lead-detail.html
✅ clientes.html
✅ parceiros.html
✅ auth.js
✅ google-drive-connector.js
✅ vercel.json ← NOVO
✅ package.json ← NOVO
✅ .gitignore ← NOVO
✅ .env.example ← NOVO
```

### 1.3 Criar arquivo .env.local
```bash
cp .env.example .env.local

# Editar .env.local com seus valores:
REACT_APP_WHATSAPP_NUMBER=5511999999999
REACT_APP_ENVIRONMENT=production
```

### 1.4 Adicionar ao Git
```bash
git add .
git commit -m "feat: Preparar MB Hub v2.0 para produção na Vercel

- Adicionar configuração Vercel (vercel.json)
- Criar package.json com scripts de build
- Adicionar .gitignore para segurança
- Documentar variáveis de ambiente (.env.example)

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

## 🔗 Passo 2: Criar Repositório no GitHub

### 2.1 Acessar GitHub
1. Acesse https://github.com/new
2. Preencha:
   - **Repository name:** `mb-hub-crm`
   - **Description:** `CRM Multitenant para MB Soluções Financeiras`
   - **Visibilidade:** Selecione conforme necessário (Public/Private)
   - **Initialize:** NÃO marque nada (já temos git local)
3. Clique em "Create repository"

### 2.2 Conectar repositório local com GitHub
```bash
# Substitua USERNAME pelo seu usuário GitHub
git remote add origin https://github.com/USERNAME/mb-hub-crm.git
git branch -M main
git push -u origin main
```

### 2.3 Verificar no GitHub
Acesse https://github.com/USERNAME/mb-hub-crm e confirme se os arquivos estão lá.

---

## ⚡ Passo 3: Deploy na Vercel

### 3.1 Conectar Vercel com GitHub
1. Acesse https://vercel.com/new
2. Clique em "Import Git Repository"
3. Cole a URL do seu repositório GitHub:
   ```
   https://github.com/USERNAME/mb-hub-crm
   ```
4. Clique em "Continue"

### 3.2 Configurar Projeto Vercel
1. **Project Name:** `mb-hub-crm`
2. **Framework:** Selecione `Other` (não é Node.js/Next.js)
3. **Root Directory:** `./` (deixe em branco ou .)
4. **Build Command:** `npm run build`
5. **Output Directory:** `./` (stay in current)
6. **Environment Variables:** Configure:
   - `NODE_ENV` = `production`
   - `REACT_APP_ENVIRONMENT` = `production`
   - `REACT_APP_WHATSAPP_NUMBER` = `5511999999999` (seu número)

### 3.3 Deploy
1. Clique em "Deploy"
2. Aguarde 2-3 minutos

### 3.4 Acessar aplicação
Após deploy, você receberá uma URL como:
```
https://mb-hub-crm.vercel.app
```

---

## 🔐 Passo 4: Configurar HTTPS e Domínio Personalizado

### 4.1 HTTPS (automático)
✅ Vercel habilita HTTPS automaticamente com certificado Let's Encrypt

### 4.2 Domínio Personalizado (Opcional)
Se você tem um domínio como `mbhub.com.br`:

1. Na Vercel, acesse: Settings → Domains
2. Clique em "Add Domain"
3. Digite seu domínio: `crm.mbsolucoesfinanceiras.com.br`
4. Siga as instruções para configurar DNS no seu registrador

---

## 🔄 Passo 5: Deploy Contínuo (CI/CD)

### 5.1 Automático com Vercel
Agora, toda vez que você fazer push no GitHub:
```bash
git add .
git commit -m "fix: Corrigir bug XYZ"
git push origin main
```

**Vercel automaticamente:**
- ✅ Detecta o novo push
- ✅ Faz build do projeto
- ✅ Deploy em produção
- ✅ Notifica quando completo

### 5.2 Preview de Pull Requests
Quando abrir um PR, Vercel cria um ambiente de preview:
```
https://mb-hub-crm-pr-1.vercel.app/
```

---

## 🛠️ Passo 6: Variáveis de Ambiente em Produção

### 6.1 Adicionar Secrets na Vercel
1. Na Vercel: Settings → Environment Variables
2. Adicione:

| Variável | Valor | Escopo |
|----------|-------|--------|
| `REACT_APP_WHATSAPP_NUMBER` | `5511999999999` | Production |
| `REACT_APP_API_URL` | `https://api.mbhub.com` | Production |
| `REACT_APP_GOOGLE_CLIENT_ID` | (se usar Google) | Production |

**NÃO adicione secrets ao arquivo .env.example!**

---

## 🧪 Passo 7: Testar em Produção

### 7.1 Testar URL Vercel
```
1. Acesse: https://mb-hub-crm.vercel.app
2. Login com: marcia.braga@mbsolucoes.com.br
3. Teste cada página:
   ✅ Dashboard
   ✅ Funil de Vendas (com drag-and-drop)
   ✅ Clientes
   ✅ Comissões
   ✅ Agendamentos
   ✅ Parceiros
```

### 7.2 Testar em Mobile
```bash
# URL em QR Code (usar na câmera do celular):
https://mb-hub-crm.vercel.app

# Ou compartilhar direto:
- iPhone: Safari
- Android: Chrome
```

### 7.3 Verificar Performance
1. Acesse: https://vercel.com/dashboard
2. Clique no projeto
3. Analytics → Veja métricas de performance

---

## 📊 Passo 8: Monitoramento e Logs

### 8.1 Ver Logs de Deploy
Na Vercel:
1. Settings → Deployments
2. Clique no deploy mais recente
3. Veja logs de build e runtime

### 8.2 Verificar Erros
```
Vercel → Project → Monitoring → Error Tracking
```

---

## 🔄 Passo 9: Atualizações Futuras

### 9.1 Fazer mudanças localmente
```bash
# Fazer edições nos arquivos HTML/CSS/JS
nano dashboard.html
# (editar arquivo)

git add dashboard.html
git commit -m "fix: Corrigir layout dashboard"
git push origin main
```

**Vercel automaticamente re-faz deploy!** ✨

### 9.2 Reverter deploy
Se algo der errado:
1. Vercel → Deployments
2. Clique no deploy anterior (que funcionava)
3. Clique em "Promote to Production"

---

## ⚠️ Troubleshooting

### Problema: Deploy falha com erro de build
**Solução:**
```bash
# Verificar se package.json está correto
npm install

# Testar build localmente
npm run build

# Verificar erros:
git push origin main
# Ver logs na Vercel
```

### Problema: Páginas carregam em branco
**Solução:**
1. Verificar console (F12 → Console)
2. Procurar erros de JavaScript
3. Verificar se auth.js está carregando

### Problema: WhatsApp não funciona
**Solução:**
1. Verificar REACT_APP_WHATSAPP_NUMBER em .env
2. Verificar número com código de país: 55 + DDD + número

### Problema: Erro CORS
**Solução:**
Vercel.json já tem configurado. Se persistir:
1. Verificar headers em vercel.json
2. Adicionar domínios permitidos

---

## 📱 Testar em Diferentes Dispositivos

### Desde Computador (DevTools)
```
Chrome/Firefox:
1. Abra DevTools (F12)
2. Clique no ícone de celular (Toggle Device Toolbar)
3. Selecione iPhone/Android
4. Teste cada página
```

### Desde Dispositivo Real
```
1. iPhone: Abra Safari
2. Digite: https://mb-hub-crm.vercel.app
3. Adicione à home screen (Share → Add to Home Screen)

1. Android: Abra Chrome
2. Digite: https://mb-hub-crm.vercel.app
3. Menu → Install app
```

---

## ✅ Checklist Final Pré-Produção

- [ ] Todas as páginas carregam sem erro
- [ ] Login funciona com e-mail
- [ ] Dashboard mostra dados
- [ ] Funil de Vendas tem drag-and-drop
- [ ] Comissões calcula corretamente
- [ ] Agendamentos permite criar/aprovar
- [ ] Mobile (iPhone) funciona
- [ ] Mobile (Android) funciona
- [ ] Links internos funcionam
- [ ] Botões respondem corretamente
- [ ] Formulários validam
- [ ] WhatsApp abre quando clicado
- [ ] HTTPS funciona (URL segura)
- [ ] Performance é aceitável (<3s load)

---

## 🎉 Você Está Pronto Para Produção!

Sua URL segura é:
```
https://mb-hub-crm.vercel.app
```

Ou com domínio personalizado:
```
https://crm.mbsolucoesfinanceiras.com.br
```

---

## 📞 Contato & Suporte

**Problemas com Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Problemas com GitHub:**
- Docs: https://docs.github.com

---

**Versão:** 2.0.0  
**Data:** 02/07/2026  
**Status:** Pronto para Produção ✅
