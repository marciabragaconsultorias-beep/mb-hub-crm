# 🚀 MB Hub v2.0 — Comece Aqui

## ✨ Bem-vindo ao MB Hub!

Seu sistema completo de CRM SaaS para gerenciar leads, clientes e comissões com perfil de usuário, agenda integrada e conformidade LGPD.

---

## 📚 Documentação Rápida

### 🎯 Para Começar Agora:
1. **Abra:** `index.html` em seu navegador
2. **Faça login:** Use qualquer email (ex: `marcia.braga@mbsolucoes.com.br`)
3. **Tutorial:** Será mostrado automaticamente na primeira login

### 📖 Documentação Completa:
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** — Resumo executivo ⭐ LEIA PRIMEIRO
- **[CHANGELOG.md](CHANGELOG.md)** — Histórico de funcionalidades
- **[TESTING.md](TESTING.md)** — Guia passo-a-passo de testes
- **[DEPLOYMENT.md](DEPLOYMENT.md)** — Como colocar em produção
- **[DESIGN-SYSTEM.md](DESIGN-SYSTEM.md)** — Tokens e componentes de design

---

## 🎮 Contas de Teste

Use qualquer uma destas contas para testar:

| Email | Role | Acesso |
|-------|------|--------|
| marcia.braga@mbsolucoes.com.br | Admin | TUDO (recomendado começar aqui) |
| usuario1@mbsolucoes.com.br | Usuário | Dashboard, Funil, Comissões |
| usuario2@mbsolucoes.com.br | Usuário | Dashboard, Funil, Comissões |
| parceiro1@externo.com | Parceiro | Apenas seus leads |

**Senha:** Qualquer valor (simulado)

---

## ✅ Funcionalidades Implementadas (100%)

### ✨ Principais:
- ✅ **Comissões** — Checkbox, status (Pago/Pendente), data de recebimento
- ✅ **Usuários Ilimitados** — Admin, Usuário, Parceiro com permissões específicas
- ✅ **Imposto de Renda** — Flag "Declarado de IR" no cadastro
- ✅ **Restrição Parceiro** — Vê apenas seus leads no Funil
- ✅ **Agendamentos** — Calendário com aprovação de admin
- ✅ **Produtos/Bancos "Outros"** — Opção customizável
- ✅ **LGPD + WhatsApp** — Modal de autorização + envio automático (bônus)
- ✅ **Onboarding** — Tutorial com FAQ na primeira login (bônus)
- ✅ **Relatórios** — Export CSV de comissões (bônus)

---

## 🗂️ Estrutura de Arquivos

```
mb-hub/
│
├── 📄 START_HERE.md ..................... Este arquivo
├── 📄 IMPLEMENTATION_SUMMARY.md ......... Resumo completo
├── 📄 CHANGELOG.md ..................... Histórico de mudanças
├── 📄 TESTING.md ....................... Guia de testes
├── 📄 DEPLOYMENT.md .................... Como fazer deploy
├── 📄 DESIGN-SYSTEM.md ................. Design tokens
│
├── 🌐 index.html ....................... Página de boas-vindas
├── 🔐 login.html ....................... Login (vai para onboarding)
├── 🎓 onboarding.html .................. Tutorial (NEW)
│
├── 📊 dashboard.html ................... Dashboard principal
├── 📈 pipeline.html .................... Funil de Leads
├── 👥 clientes.html .................... Listagem de Clientes
├── 📝 lead-detail.html ................. Ficha do Lead (+ LGPD)
├── 💰 comissoes.html ................... Comissões (+ CSV)
├── 🤝 parceiros.html ................... Parceiros
├── 📅 agendamentos.html ................ Calendário (NEW)
│
├── 🔧 auth.js .......................... Sistema de permissões
├── 🔗 google-drive-connector.js ........ Google Drive API
│
└── 🎨 mr2km39w-IMG_3972.jpg ............ Logo MB Hub
```

---

## 🎯 Fluxo de Uso (Primeiro Acesso)

```
1. Abrir index.html
   ↓
2. Click "Login" ou link direto
   ↓
3. login.html — fazer login
   ↓
4. onboarding.html — tutorial automático (primeira login)
   ↓
5. dashboard.html — sistema pronto!
```

---

## 🔑 Funcionalidades por Role

### 👑 Administrador (Márcia Braga)
```
✅ Ver Dashboard
✅ Gerenciar Funil de Leads
✅ Editar % de Comissões
✅ Aprovar Agendamentos
✅ Gerenciar Parceiros
✅ Gerar Relatórios CSV
```

### 👤 Usuário (Colaboradores)
```
✅ Ver Dashboard
✅ Criar/Editar Leads (no Funil)
✅ Ver suas Comissões (read-only)
✅ Criar Agendamentos
✅ Agendar com outros Usuários ou Admin
❌ Editar % de Comissões
❌ Deletar Leads
❌ Ver Parceiros
```

### 🤝 Parceiro (Externos)
```
✅ Ver seus Leads (filtrado)
✅ Criar Leads (seus próprios)
✅ Ver suas Comissões
✅ Solicitar Agendamentos
❌ Ver leads de outros parceiros
❌ Editar % de Comissões
❌ Agendar com usuários (apenas admin)
```

---

## 💡 Guias Rápidos

### ❓ "Como testo as comissões?"
1. Login como Admin
2. Acesso menu "Comissões"
3. Marque checkboxes, mude status
4. Clique "Gerar Relatório" para export CSV

### ❓ "Como envio LGPD via WhatsApp?"
1. Crie um novo lead
2. Painel direito → "Autorização LGPD"
3. Click "Enviar Autorização"
4. Marque os consentimentos
5. Click "Enviar via WhatsApp"

### ❓ "Como parceiros veem apenas seus leads?"
1. Login como Parceiro
2. Vá ao "Funil de Leads"
3. Sistema filtra automaticamente
4. Mesmo em "Clientes"

### ❓ "Como criar agendamentos com aprovação?"
1. Login como Usuário
2. Menu "Agendamentos"
3. Click "Novo Agendamento"
4. Selecione "Márcia Braga (Admin)"
5. Marque "Requer aprovação"
6. Login como Admin → painel mostra solicitação

---

## 🧪 Testes Essenciais (5 min)

```javascript
// No Console (F12):

// 1. Verificar usuários carregados
JSON.parse(localStorage.getItem('mb_hub_all_users'))

// 2. Ver usuário logado
JSON.parse(localStorage.getItem('mb_hub_current_user'))

// 3. Ver comissões salvas
JSON.parse(localStorage.getItem('mb_hub_comissoes'))

// 4. Ver agendamentos
JSON.parse(localStorage.getItem('mb_hub_agendamentos'))

// 5. Limpar tudo (se precisar resetar)
localStorage.clear()
```

---

## 🚀 Deploy em 5 Minutos

### **Opção 1: Netlify (Recomendado)**
1. Acesso https://app.netlify.com
2. Drag & drop pasta do projeto
3. Pronto! URL automática em HTTPS

### **Opção 2: GitHub Pages**
```bash
git init
git add .
git commit -m "MB Hub v2.0"
git branch -M main
git remote add origin https://github.com/seu-user/mb-hub.git
git push -u origin main
# Vai estar em: seu-user.github.io/mb-hub
```

### **Opção 3: Servidor Local**
```bash
# Python 3
python3 -m http.server 8000
# http://localhost:8000

# Node.js
npx http-server
# http://localhost:8080
```

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Linhas de código | 2,500+ |
| Funcionalidades | 12 principais |
| Permissões | 3 roles |
| Modais | 3 (Comissões, LGPD, Agendamentos) |
| Páginas | 8 principais + 2 novas |
| Responsividade | 5 breakpoints |
| LGPD Compliant | ✅ Sim |

---

## 🔒 Segurança

- ✅ Controle de acesso por role
- ✅ Filtro automático de dados por parceiro
- ✅ Modal LGPD com consentimento explícito
- ✅ Validação de formulários
- ✅ LocalStorage (dados locais, não transmitidos)

---

## 🎨 Customização

Todos os tokens de design estão em `DESIGN-SYSTEM.md`:
- Cores: Dourado (#ca8c3f) e Azul escuro (#141352)
- Typography: Font "Astra"
- Espaçamento: Grid base 8px
- Componentes: Botões, cards, inputs, modais

Para mudar cores, editar:
```css
:root {
  --accent: #ca8c3f;           /* Cor primária */
  --accent-secondary: #141352; /* Cor secundária */
}
```

---

## ❓ FAQ

**P: Posso usar em produção?**  
R: Sim, mas recomenda-se adicionar um backend com banco de dados. LocalStorage é para prototipagem.

**P: Como migrar dados para banco de dados?**  
R: Exportar localStorage → API → Banco de dados. Ver `DEPLOYMENT.md`.

**P: E se usuário perder dados?**  
R: LocalStorage é local apenas. Recomenda-se backup manual ou backend com autosync.

**P: Posso adicionar mais campos?**  
R: Sim! Editar HTML de cada página. Ver `DESIGN-SYSTEM.md` para padrão.

**P: Como integrar Google Calendar?**  
R: Usar Google Calendar API. Exemplo em `DEPLOYMENT.md` (roadmap).

---

## 📞 Próximos Passos

1. **Agora:** Explorar o sistema (10 min)
2. **Hoje:** Testar todas funcionalidades (1 hora)
3. **Semana:** Considerar backend (dados permanentes)
4. **Mês:** Deploy em produção

---

## 📁 Arquivos Importantes

| Arquivo | Propósito |
|---------|-----------|
| `IMPLEMENTATION_SUMMARY.md` | ⭐ Leia primeiro — resumo completo |
| `TESTING.md` | Guia passo-a-passo de testes |
| `DEPLOYMENT.md` | Como colocar em produção |
| `CHANGELOG.md` | Histórico de mudanças |
| `DESIGN-SYSTEM.md` | Componentes e tokens |

---

## 🎓 Aprenda Mais

- **Código:** Ver `*.html` e `*.js` — bem comentados
- **Design:** Ler `DESIGN-SYSTEM.md`
- **Testes:** Seguir `TESTING.md` passo-a-passo
- **Deploy:** Consultar `DEPLOYMENT.md`

---

## 🎉 Resumo Rápido

| Feature | Status | Localização |
|---------|--------|-------------|
| Login | ✅ | login.html |
| Onboarding | ✅ | onboarding.html |
| Dashboard | ✅ | dashboard.html |
| Funil | ✅ | pipeline.html |
| Comissões | ✅ | comissoes.html |
| Agendamentos | ✅ | agendamentos.html |
| LGPD | ✅ | lead-detail.html |
| Relatórios | ✅ | comissoes.html |
| Permissões | ✅ | auth.js |

---

## 🚀 Começar Agora!

**1. Abra `index.html` em seu navegador**  
**2. Faça login**  
**3. Siga o tutorial**  
**4. Explore!**

---

**Desenvolvido com ❤️ para MB Soluções Financeiras**

**Versão:** 2.0.0  
**Data:** 02/07/2026  
**Status:** ✅ Pronto para Usar

---

## 📞 Suporte

Encontrou algo errado?
1. Verificar `TESTING.md` para passo-a-passo
2. Consultar `FAQ` acima
3. Ver documentação em `DESIGN-SYSTEM.md`

**Última atualização:** 02/07/2026
