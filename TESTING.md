# MB Hub — Guia de Teste das Funcionalidades

## 🧪 Instruções de Teste

Este documento descreve como testar todas as funcionalidades implementadas no MB Hub v2.0.

---

## 🔑 Contas de Teste Disponíveis

```
Email: marcia.braga@mbsolucoes.com.br
Senha: (qualquer)
Role: Administrador (acesso total)

Email: usuario1@mbsolucoes.com.br
Senha: (qualquer)
Role: Usuário (leitura/edição)

Email: usuario2@mbsolucoes.com.br
Senha: (qualquer)
Role: Usuário (leitura/edição)

Email: parceiro1@externo.com
Senha: (qualquer)
Role: Parceiro (apenas seus leads)
```

**Nota:** Senhas são simuladas. Em produção, usar autenticação real.

---

## ✅ Testes por Funcionalidade

### 1️⃣ Onboarding (Boas-vindas)

**Pré-requisito:** Limpar localStorage: `localStorage.clear()`

**Passos:**
1. Abrir `login.html`
2. Fazer login com qualquer email
3. **Esperado:** Redirecionado para `onboarding.html`

**Validar:**
- [ ] Página mostra 6 passos principais
- [ ] FAQ funciona (expandir/colapsar)
- [ ] Botões "Pular" e "Ir para Dashboard" funcionam
- [ ] Ao voltar ao login e entrar novamente, não mostra onboarding
- [ ] Design responsivo em mobile

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 2️⃣ Comissões com Checkbox

**Pré-requisito:** Fazer login como Admin (Márcia)

**Passos:**
1. Acesso menu "Comissões"
2. Procurar coluna com checkboxes

**Validar:**
- [ ] Checkbox visível para cada linha
- [ ] Click checkbox marca/desmarca
- [ ] Dados persistem ao F5 (localStorage)
- [ ] Admin consegue editar % comissão
- [ ] Ao fazer login como Usuário, campo % aparece bloqueado

**Resultado:** ✅ PASSOU / ❌ FALHOU

**Teste como Usuário:**
1. Logout e login como `usuario1@mbsolucoes.com.br`
2. Acesso "Comissões"

**Validar:**
- [ ] Checkboxes aparecem desabilitados (opacidade 0.6)
- [ ] Campos de status aparecem desabilitados
- [ ] Campos de % aparecem desabilitados
- [ ] Alert "Apenas administrador pode alterar" ao tentar editar

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 3️⃣ Status de Pagamento (Pago/Pendente)

**Pré-requisito:** Login como Admin

**Passos:**
1. Acesso "Comissões"
2. Procurar coluna "Status"

**Validar:**
- [ ] Dropdown com opções "Pago" e "Pendente"
- [ ] Ao trocar de "Pendente" para "Pago", campo de data habilita
- [ ] Ao trocar de "Pago" para "Pendente", campo de data desabilita
- [ ] Campo de data mostra calendário
- [ ] Dados persistem ao refresh

**Teste visual:**
- [ ] Status "Pago" = green badge
- [ ] Status "Pendente" = yellow badge

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 4️⃣ Relatório de Comissões

**Pré-requisito:** Login como Admin

**Passos:**
1. Acesso "Comissões"
2. Selecionar período: "Mês Atual"
3. Selecionar consultor: "Todos"
4. Click "Gerar Relatório"

**Validar:**
- [ ] Download começa automaticamente (arquivo CSV)
- [ ] Arquivo nomeado: `Relatorio_Comissoes_Julho_2026.csv`
- [ ] Abrir arquivo em Excel
  - [ ] Cabeçalho com período e consultor
  - [ ] Linhas com dados de comissões
  - [ ] Resumo com totalizações
- [ ] Teste com outros períodos (Mês Anterior, Trimestre, Ano)
- [ ] Teste filtrando por consultor específico

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 5️⃣ Restrição de Visualização (Parceiro)

**Pré-requisito:** Criar um lead como Admin e outro como Parceiro

**Passos:**
1. Login como Admin (Márcia)
2. Acesso "Novo Lead" e criar lead com nome "Lead Admin"
3. Logout

4. Login como Parceiro
5. Acesso "Funil de Leads"

**Validar:**
- [ ] Parceiro vê apenas o lead "Lead Admin"
- [ ] Não vê leads criados por outros usuários
- [ ] "Clientes" também filtra por criador
- [ ] Dropdown de "Consultor responsável" mostra apenas o parceiro

**Teste Admin vendo tudo:**
1. Logout Parceiro
2. Login como Admin
3. Acesso "Funil de Leads"

**Validar:**
- [ ] Admin vê todos os leads

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 6️⃣ Flag Imposto de Renda Declarado

**Pré-requisito:** Login como qualquer usuário

**Passos:**
1. Acesso "Novo Lead"
2. Preencher formulário até "Renda bruta"
3. Procurar checkbox "Declarado de Imposto de Renda"

**Validar:**
- [ ] Checkbox aparece abaixo de "Renda bruta"
- [ ] Label descritivo: "Cliente possui IR declarado"
- [ ] Pode marcar/desmarcar
- [ ] Click "Salvar" persiste o estado
- [ ] Ao reabrir lead, checkbox mantém estado anterior

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 7️⃣ Produto "Outros" com Descrição

**Pré-requisito:** Login, acesso "Novo Lead"

**Passos:**
1. Preencher até campo "Produto indicado"
2. Abrir dropdown e procurar "Outros (especificar)"
3. Selecionar "Outros (especificar)"

**Validar:**
- [ ] Campo de texto "Especifique o produto" aparece automaticamente
- [ ] Campo está vazio inicialmente
- [ ] Pode digitar descrição
- [ ] Ao trocar para outro produto, campo desaparece
- [ ] Ao trocar de volta para "Outros", campo reaparece com texto preservado

**Teste de validação:**
1. Selecionar "Outros (especificar)"
2. Deixar campo em branco
3. Click "Salvar"

**Validar:**
- [ ] Alert: "Por favor, especifique o produto quando "Outros" está selecionado."
- [ ] Campo de texto recebe foco automático

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 8️⃣ Banco "Outros" com Descrição

**Mesmo procedimento que Produto, mas com dropdown "Banco"**

**Pré-requisito:** Login, acesso "Novo Lead"

**Passos:**
1. Procurar "Banco" no formulário
2. Selecionar "Outros (especificar)"

**Validar:**
- [ ] Campo de texto "Especifique o banco" aparece
- [ ] Show/hide automático
- [ ] Validação funciona igual ao Produto
- [ ] Dados persistem

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 9️⃣ Modal LGPD com WhatsApp

**Pré-requisito:** Login, acesso "Novo Lead"

**Passos:**
1. No painel direito, procurar seção "Autorização LGPD"
2. Click "Enviar Autorização"

**Validar:**
- [ ] Modal abre com título "Autorização LGPD"
- [ ] 4 checkboxes visíveis:
  - Coleta de dados pessoais
  - Processamento de informações
  - Comunicação via WhatsApp
  - Compartilhamento com instituições
- [ ] Primeiros 2 checkboxes pré-marcados
- [ ] Terceiro checkbox marcado
- [ ] Quarto checkbox desmarcado
- [ ] Painel de ajuda com link "Política de Privacidade"
- [ ] Botões "Cancelar" e "Autorizar e Enviar"

**Teste de funcionalidade:**
1. Desmarcar "Coleta de dados pessoais"
2. Click "Autorizar e Enviar"

**Validar:**
- [ ] Alert: "Por favor, autorize a coleta e processamento de dados..."
- [ ] Modal não fecha

1. Remarcar checkbox
2. Click "Autorizar e Enviar"

**Validar:**
- [ ] Alert: "Autorização LGPD registrada com sucesso!"
- [ ] Modal fecha
- [ ] Status muda de "Aguardando autorização" para "Autorizado em [data]"
- [ ] Status fica green (#17a34a)

**Teste de WhatsApp:**
1. Click "Enviar via WhatsApp" (abaixo do modal LGPD)

**Validar:**
- [ ] Abre nova aba com WhatsApp
- [ ] Mensagem pré-preenchida com autorização
- [ ] Campo de telefone preenchido com dados do lead

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 🔟 Agendamentos com Aprovação

**Pré-requisito:** Login como Usuário

**Passos:**
1. Acesso "Agendamentos"
2. Click "Novo Agendamento"

**Validar:**
- [ ] Modal abre
- [ ] Dropdown "Com quem?" mostra:
  - Márcia Braga (Admin)
  - Usuário 1, 2, 3
  - Parceiros
- [ ] Campos de data, horário, tipo, assunto, notas
- [ ] Checkbox "Requer aprovação do administrador"

**Teste criar agendamento direto:**
1. Selecionar "Usuário 1"
2. Preencher dados
3. Desmarcar "Requer aprovação do administrador"
4. Click "Solicitar Agendamento"

**Validar:**
- [ ] Agendamento criado imediatamente
- [ ] Aparece no calendário
- [ ] Marca com ponto no dia do calendário
- [ ] Clicando no dia, vê agendamento

**Teste criar solicitação de aprovação:**
1. Click "Novo Agendamento"
2. Selecionar "Márcia Braga (Admin)"
3. Preencher dados
4. Marcar "Requer aprovação do administrador"
5. Click "Solicitar Agendamento"

**Validar:**
- [ ] Agendamento vai para "Solicitações Pendentes"
- [ ] Não aparece no calendário ainda
- [ ] Logout e login como Admin

**Como Admin:**
1. Acesso "Agendamentos"
2. Procurar painel "Solicitações Pendentes" à direita

**Validar:**
- [ ] Solicitação aparece com dados do requisitante
- [ ] Botões "Aprovar" e "Rejeitar"
- [ ] Click "Aprovar"

**Validar:**
- [ ] Solicitação sai do painel
- [ ] Agendamento aparece no calendário
- [ ] Status muda para "Aprovado"

**Teste rejeitar:**
1. Click "Novo Agendamento" novamente
2. Solicitar nova aprovação
3. Como Admin, click "Rejeitar"

**Validar:**
- [ ] Solicitação removida
- [ ] Agendamento não criado
- [ ] Alert "Solicitação rejeitada"

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

### 1️⃣1️⃣ Permissões por Role

**Teste cada funcionalidade com cada role:**

| Funcionalidade | Admin | Usuário | Parceiro | Esperado |
|---|---|---|---|---|
| Ver Dashboard | ✅ | ✅ | ❌ | Apenas Admin/Usuário |
| Ver Funil | ✅ | ✅ | ✅ Filtrado | Todos, Parceiro filtrado |
| Criar Lead | ✅ | ✅ | ✅ | Todos podem |
| Deletar Lead | ✅ | ❌ | ❌ | Apenas Admin |
| Ver Comissões | ✅ Todas | ✅ Suas | ✅ Suas | Todos veem suas |
| Editar % Comissão | ✅ | ❌ | ❌ | Apenas Admin |
| Ver Parceiros | ✅ | ❌ | ❌ | Apenas Admin |
| Criar Agendamento | ✅ | ✅ | ✅ | Todos podem |
| Aprovar Agendamento | ✅ | ❌ | ❌ | Apenas Admin |

**Resultado:** ✅ PASSOU / ❌ FALHOU

---

## 📊 Resumo de Testes

| # | Funcionalidade | Status |
|---|---|---|
| 1 | Onboarding | ⬜ |
| 2 | Comissões Checkbox | ⬜ |
| 3 | Status Pagamento | ⬜ |
| 4 | Relatório CSV | ⬜ |
| 5 | Restrição Parceiro | ⬜ |
| 6 | Flag IR Declarado | ⬜ |
| 7 | Produto "Outros" | ⬜ |
| 8 | Banco "Outros" | ⬜ |
| 9 | Modal LGPD | ⬜ |
| 10 | Agendamentos | ⬜ |
| 11 | Permissões | ⬜ |

---

## 🐛 Relatório de Bugs

Se encontrar bugs, reporte aqui:

```markdown
### Bug: [Título]
- **Passo para reproduzir:**
  1. ...
  2. ...
- **Esperado:** ...
- **Atual:** ...
- **Severity:** [Crítico/Alto/Médio/Baixo]
```

---

## 💡 Notas Adicionais

1. **LocalStorage**: Usar DevTools (F12) → Application → Local Storage para verificar dados
2. **Mobile**: Testar em Chrome DevTools Mobile Emulation
3. **Cross-browser**: Testar em Chrome, Firefox, Safari, Edge
4. **Performance**: Checar velocidade de carregamento
5. **Responsividade**: Testar em 360px, 390px, 768px, 1024px, 1440px

---

**Data:** 02/07/2026  
**Versão:** 2.0.0  
**Testador:** [Seu Nome]
