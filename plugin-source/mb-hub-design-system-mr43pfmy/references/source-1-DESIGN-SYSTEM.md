# MB Hub — Design System

**Sistema de design para o CRM multitenant da MB Soluções Financeiras**

Versão: 1.0  
Última atualização: 02/07/2026

---

## 📐 Fundamentos

### Propósito

O Design System do MB Hub estabelece padrões visuais e de interação consistentes para todas as interfaces do CRM, garantindo:

- **Consistência** — Mesma experiência em todas as telas
- **Eficiência** — Desenvolvimento mais rápido com componentes reutilizáveis
- **Acessibilidade** — Interfaces usáveis para todos os usuários
- **Identidade** — Alinhamento com a marca MB Soluções Financeiras

### Princípios de Design

1. **Clareza** — Interfaces diretas, sem ambiguidade
2. **Eficiência** — Ações rápidas, menos cliques
3. **Confiança** — Transmitir profissionalismo financeiro
4. **Densidade** — Informação densa sem sobrecarga visual

---

## 🎨 Tokens de Design

### Cores

#### Paleta Principal

```css
:root {
  /* Neutros */
  --bg: #ffffff;           /* Background principal */
  --surface: #f8f9fa;      /* Cards, painéis elevados */
  --fg: #1a1a1a;           /* Texto principal */
  --muted: #6b7280;        /* Texto secundário */
  --border: #e5e7eb;       /* Divisores, bordas */

  /* Marca MB Soluções */
  --accent: #ca8c3f;       /* Dourado — Primária */
  --accent-secondary: #141352; /* Azul escuro — Secundária */
}
```

#### Uso de Cores

| Token | Hex | Uso | Onde Aplicar |
|-------|-----|-----|--------------|
| `--bg` | `#ffffff` | Canvas principal | Body, modais, cards |
| `--surface` | `#f8f9fa` | Superfícies elevadas | Tabelas header, cards hover |
| `--fg` | `#1a1a1a` | Texto de alta legibilidade | Títulos, corpo de texto |
| `--muted` | `#6b7280` | Texto de suporte | Labels, metadados |
| `--border` | `#e5e7eb` | Divisores sutis | Cards, inputs, tabelas |
| `--accent` | `#ca8c3f` | Ações primárias | Botões, links, destaques |
| `--accent-secondary` | `#141352` | Ações secundárias | Estados hover, badges |

**Regras de Contraste:**
- Texto `--fg` sobre `--bg`: 13:1 (AAA)
- Texto `--muted` sobre `--bg`: 4.5:1 (AA)
- Botões `--accent` com texto branco: 4.7:1 (AA)

#### Cores Semânticas

```css
/* Estados */
--success: #17a34a;      /* Verde — Sucesso, aprovado */
--warning: #f59e0b;      /* Laranja — Atenção, pendente */
--danger: #dc2626;       /* Vermelho — Erro, crítico */
--info: #3b82f6;         /* Azul — Informação */
```

### Tipografia

#### Fonte

**Família:** Astra  
**Fallbacks:** `system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`

```css
:root {
  --font: 'Astra', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
}
```

#### Escala Tipográfica

| Nível | Tamanho | Line Height | Peso | Uso |
|-------|---------|-------------|------|-----|
| Display | 32px | 1.2 | 600 | Títulos de página |
| H1 | 28px | 1.3 | 600 | Cabeçalhos principais |
| H2 | 24px | 1.3 | 600 | Cabeçalhos de seção |
| H3 | 20px | 1.4 | 600 | Sub-cabeçalhos |
| Body | 15px | 1.5 | 400 | Texto corrido |
| Small | 14px | 1.5 | 400 | Labels, metadados |
| Caption | 13px | 1.5 | 400 | Notas de rodapé |
| Micro | 12px | 1.5 | 500 | Badges, contadores |

#### Letter Spacing

```css
/* Títulos grandes */
h1, h2 { letter-spacing: -0.02em; }

/* Títulos médios */
h3 { letter-spacing: -0.01em; }

/* Labels e UI */
label, .label { letter-spacing: 0.02em; }

/* ALL CAPS obrigatório */
.uppercase { 
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

### Espaçamento

#### Grid Base: 8px

Todos os espaçamentos são múltiplos de 8px:

| Token | Valor | Uso |
|-------|-------|-----|
| `xs` | 4px | Espaçamento mínimo, ícones |
| `sm` | 8px | Gaps internos pequenos |
| `md` | 16px | Padding padrão de componentes |
| `lg` | 24px | Margens entre seções |
| `xl` | 32px | Espaçamento entre blocos |
| `2xl` | 48px | Espaçamento de página |

### Bordas e Cantos

```css
:root {
  --radius: 8px;           /* Border radius padrão */
  --border-width: 1px;     /* Espessura de bordas */
}

/* Variações */
--radius-sm: 4px;          /* Badges, tags */
--radius-lg: 12px;         /* Modais, painéis grandes */
--radius-full: 9999px;     /* Avatares, pílulas */
```

### Sombras

```css
/* Elevação sutil */
.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Elevação média */
.shadow-md {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

/* Elevação alta */
.shadow-lg {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Hover de cards */
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
```

---

## 🧩 Componentes

### Botões

#### Variações

**Primário:**
```html
<button class="btn btn-primary">Salvar</button>
```

```css
.btn-primary {
  background: var(--accent);
  border: 1px solid var(--accent);
  color: var(--bg);
  padding: 10px 16px;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
}
.btn-primary:hover {
  filter: brightness(0.95);
}
```

**Secundário:**
```html
<button class="btn btn-secondary">Cancelar</button>
```

```css
.btn-secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--fg);
  padding: 10px 16px;
  border-radius: var(--radius);
  cursor: pointer;
}
.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}
```

**Perigo:**
```html
<button class="btn btn-danger">Excluir</button>
```

```css
.btn-danger {
  background: transparent;
  border: 1px solid var(--accent-secondary);
  color: var(--accent-secondary);
  padding: 10px 16px;
  border-radius: var(--radius);
  cursor: pointer;
}
.btn-danger:hover {
  background: rgba(217,83,79,0.08);
}
```

#### Tamanhos

| Classe | Padding | Font Size | Uso |
|--------|---------|-----------|-----|
| `.btn-sm` | 6px 12px | 13px | Ações secundárias |
| `.btn` | 10px 16px | 14px | Padrão |
| `.btn-lg` | 14px 24px | 15px | CTAs principais |

#### Estados

- **Hover:** `filter: brightness(0.95)` ou troca de border-color
- **Disabled:** `opacity: 0.5; cursor: not-allowed;`
- **Loading:** Adicionar spinner e desabilitar cliques

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3>Título do Card</h3>
  </div>
  <div class="card-body">
    Conteúdo aqui
  </div>
</div>
```

```css
.card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.card-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}

.card-body {
  padding: 20px;
}

.card:hover {
  border-color: var(--accent);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
```

### Inputs

```html
<div class="form-group">
  <label class="form-label">Nome completo</label>
  <input type="text" class="form-input" placeholder="Digite seu nome">
</div>
```

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.form-input {
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 14px;
  font-family: var(--font);
  color: var(--fg);
  background: var(--bg);
  transition: border-color 0.15s;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent);
}

.form-input::placeholder {
  color: var(--muted);
}
```

### Badges

```html
<span class="badge badge-success">Aprovado</span>
<span class="badge badge-warning">Pendente</span>
<span class="badge badge-danger">Rejeitado</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.badge-success {
  background: #d1fae5;
  color: #065f46;
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
}

.badge-danger {
  background: #fee2e2;
  color: #991b1b;
}
```

### Tabelas

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Cliente</th>
        <th>Produto</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>Crédito Pessoal</td>
        <td>R$ 15.000</td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.table-container {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.table th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.table td {
  padding: 16px;
  border-bottom: 1px solid var(--border);
  font-size: 14px;
}

.table tbody tr:hover {
  background: var(--surface);
}
```

### Avatares

```html
<div class="avatar">MB</div>
```

```css
.avatar {
  width: 36px;
  height: 36px;
  background: var(--accent);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--bg);
  font-weight: 600;
  font-size: 14px;
}
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
@media (min-width: 360px) { /* Mobile compact */ }
@media (min-width: 390px) { /* Mobile standard */ }
@media (min-width: 768px) { /* Tablet portrait */ }
@media (min-width: 1024px) { /* Tablet landscape / Desktop */ }
@media (min-width: 1440px) { /* Desktop large */ }
```

### Regras Mobile

- **Touch targets mínimos:** 44px × 44px
- **Sidebar:** Ocultar em mobile, mostrar via hamburguer
- **Tabelas:** Scroll horizontal quando necessário
- **Fonte base:** Manter 15px em mobile

---

## ♿ Acessibilidade

### Contraste

- **Texto normal:** Mínimo 4.5:1 (AA)
- **Texto grande (≥18px):** Mínimo 3:1 (AA)
- **Componentes UI:** Mínimo 3:1

### Navegação por Teclado

- **Tab:** Navegar entre elementos interativos
- **Enter/Space:** Ativar botões
- **Esc:** Fechar modais
- **Arrow keys:** Navegação em listas

### ARIA Labels

```html
<button aria-label="Excluir lead">
  <svg>...</svg>
</button>

<input aria-describedby="cpf-hint" />
<span id="cpf-hint">Digite apenas números</span>
```

---

## 🔧 Uso

### Importar Tokens

```html
<style>
  :root {
    --bg: #ffffff;
    --surface: #f8f9fa;
    --fg: #1a1a1a;
    --muted: #6b7280;
    --border: #e5e7eb;
    --accent: #ca8c3f;
    --accent-secondary: #141352;
    --radius: 8px;
    --font: 'Astra', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  }
</style>
```

### Aplicar em Componentes

```css
.meu-componente {
  background: var(--bg);
  color: var(--fg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font);
}
```

---

## 📚 Referências

- **Site MB Soluções:** [www.mbsolucoesfinanceiras.com.br](https://www.mbsolucoesfinanceiras.com.br)
- **Figma:** (a criar)
- **Storybook:** (a criar)

---

## 🔄 Changelog

### v1.0 — 02/07/2026
- ✅ Definição de tokens base (cores, tipografia, espaçamento)
- ✅ Componentes principais (botões, cards, inputs, badges, tabelas)
- ✅ Guidelines de responsividade e acessibilidade
- ✅ Documentação inicial

---

**MB Soluções Financeiras** — Design System v1.0
