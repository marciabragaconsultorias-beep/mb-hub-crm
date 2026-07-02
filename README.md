# MB Hub

**Sistema de gestão de leads e clientes para consultoria financeira**

---

## 📋 Sobre

MB Hub é o CRM desenvolvido para MB Soluções Financeiras, centralizando a gestão de leads desde a entrada (indicações, tráfego pago, redes sociais) até a finalização de produtos bancários.

---

## 🎨 Identidade Visual

- **Nome:** MB Hub
- **Cores:**
  - Primária (Dourado): `#ca8c3f`
  - Secundária (Azul escuro): `#141352`
- **Tipografia:** Astra
- **Logo:** 80px de largura para leitura clara de "Soluções Financeiras"

---

## 📦 Arquivos do Sistema

### Páginas principais
- `login.html` — Autenticação de usuários
- `dashboard.html` — Visão geral com métricas e agenda
- `pipeline.html` — Kanban de leads (Análise → Aprovação → Formalização → Finalizado)
- `clientes.html` — Listagem de clientes que finalizaram produtos
- `lead-detail.html` — Ficha completa do lead/cliente
- `index.html` — Launcher / overview do sistema

### Módulos
- `google-drive-connector.js` — **Sistema de integração Google Drive**

---

## 🔗 Google Drive Integration

### Status Atual
✅ **Estrutura criada** — Sistema de conexão preparado  
⏳ **Aguardando conexão MCP** — Configure o MCP Google Drive no Open Design

### Como conectar

1. Abra **Settings → MCP Servers** no Open Design
2. Conecte o servidor **claude.ai Google Drive**
3. Autorize o acesso à pasta **"Equipe MB"**
4. Recarregue a página

### Estrutura de pastas

```
Equipe MB/
├── Ana Maria Santos/
│   ├── CPF.pdf
│   ├── Comprovante de Renda.pdf
│   └── ...
├── Carlos Silva/
│   └── ...
└── [Nome Sobrenome]/
    └── documentos...
```

### Funcionalidades

O módulo `google-drive-connector.js` fornece:

- **`buscarPastaCliente(nome, sobrenome)`** — Localiza pasta do cliente
- **`listarDocumentos(folderId)`** — Lista arquivos da pasta
- **`abrirDocumento(webViewLink)`** — Abre documento no Drive
- **`criarPastaCliente(nome, sobrenome)`** — Cria nova pasta
- **`isConnected()`** — Verifica status da conexão

### Visualização na ficha do lead

Na aba **Documentos** de `lead-detail.html`:
- Status de conexão do Google Drive
- Lista de documentos do cliente (quando conectado)
- Abertura direta no Drive com um clique

---

## 🏦 Produtos Financeiros

O sistema gerencia os seguintes produtos:

### Crédito
- Crédito Pessoal
- Crédito Consignado
- Crédito Empresarial
- Crédito Construção
- Home Equity

### Consórcio
- Carta Contemplada (Consórcio)
- Consórcio Automóvel
- Consórcio Imóvel
- Consórcio Serviços

### Financiamento e Investimentos
- Financiamento Imobiliário
- Investimentos
- Câmbio

### Outros Produtos
- Cartão de Crédito
- Seguros
- Consultoria Financeira
- Matrícula
- Outros Serviços

---

## 🏛️ Bancos Cadastrados

13 instituições financeiras principais:
Itaú, Banco do Brasil, Caixa Econômica, Bradesco, Santander, Inter, Nubank, C6 Bank, Sicoob, Sicredi, Safra, BMG, Banco Pan

---

## 🎯 Funcionalidades Principais

### Dashboard
- Métricas de conversão
- Agendamentos do dia
- Resumo do pipeline

### Pipeline Kanban
- 4 etapas configuráveis
- Filtros por produto e origem
- Drag & drop de leads

### Ficha do Lead
- **Dados pessoais** — Nome, CPF, e-mail, telefone, DOB, renda
- **Histórico** — Timeline de interações
- **Agendamentos** — Consultorias agendadas
- **Documentos** — Integração Google Drive (pasta do cliente)
- **Produto indicado** — Banco, valor, taxas, parcelas
- **WhatsApp** — Acesso rápido à conversa

### Clientes
- Listagem de clientes finalizados
- Filtros por produto
- Busca por nome, CPF ou produto

---

## 🔧 Tecnologias

- **HTML5** — Estrutura semântica
- **CSS3** — Design system com tokens customizados
- **JavaScript** — Interações e integração Google Drive
- **MCP Google Drive** — Acesso programático ao Drive (quando conectado)

---

## 📝 Próximos Passos

1. ✅ **Renomeação para MB Hub** — Concluído
2. ✅ **Logo ampliada (80px)** — Concluído
3. ✅ **Sistema Google Drive criado** — Concluído
4. ⏳ **Conectar MCP Google Drive** — Pendente (configuração do usuário)
5. 🔜 **Campos dinâmicos** — Sistema de custom fields
6. 🔜 **Pipelines configuráveis** — Personalização de etapas
7. 🔜 **WhatsApp Business API** — Integração nativa

---

## 🚀 Como Usar

1. Abra `login.html` para acessar o sistema
2. Navegue entre as seções via sidebar
3. Gerencie leads no Pipeline (kanban)
4. Visualize clientes finalizados em Clientes
5. **Configure Google Drive** para acessar documentos nas fichas

---

**MB Soluções Financeiras** — Transformando leads em clientes com eficiência.
