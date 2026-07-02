# MB Hub v2.0 — Guia de Deployment

## 🚀 Opções de Deploy

O MB Hub pode ser deployado de várias formas, dependendo de suas necessidades:

---

## 1️⃣ Deploy Local (Desenvolvimento)

### Usar Python (Built-in):
```bash
# Na pasta do projeto
python3 -m http.server 8000

# Abrir em: http://localhost:8000
```

### Usar Node.js:
```bash
npm install -g http-server
http-server

# Abrir em: http://localhost:8080
```

### Usar VS Code Live Server:
1. Instalar extensão "Live Server"
2. Click direito em `index.html`
3. Selecionar "Open with Live Server"

---

## 2️⃣ Deploy em Hosting Gratuito

### **Netlify** (Recomendado)

**Passo 1: Preparar arquivos**
```bash
# Criar pasta com todos arquivos
mb-hub/
├── *.html
├── *.js
├── *.md
└── mr2km39w-IMG_3972.jpg
```

**Passo 2: Fazer upload**
1. Acesso https://app.netlify.com
2. Drag & drop pasta para "Sites"
3. Automático: recebe URL pública

**Passo 3: Configurar (opcional)**
- Mudar nome da aplicação
- Adicionar domínio próprio
- Configurar HTTPS (automático)

**Resultado:** Acesso de qualquer lugar com HTTPS

---

### **Vercel**

**Passo 1: Fazer upload**
1. Acesso https://vercel.com
2. Importar projeto do GitHub (ou fazer upload)
3. Seguir wizard

**Passo 2: Deploy automático**
- Automático ao fazer push no GitHub
- HTTPS gratuito
- Edge functions disponíveis

---

### **GitHub Pages**

**Passo 1: Criar repositório**
```bash
git init
git add .
git commit -m "MB Hub v2.0"
git branch -M main
git remote add origin https://github.com/seu-user/mb-hub.git
git push -u origin main
```

**Passo 2: Ativar GitHub Pages**
1. Settings → Pages
2. Source: main branch
3. Selecionar pasta: / (root)
4. Save

**Resultado:** Acesso em `seu-user.github.io/mb-hub`

---

## 3️⃣ Deploy em Servidor Próprio

### **Servidor Linux com Apache**

**Passo 1: Conectar ao servidor**
```bash
ssh usuario@seu-servidor.com
```

**Passo 2: Criar diretório**
```bash
sudo mkdir /var/www/mb-hub
sudo chown -R $USER:$USER /var/www/mb-hub
```

**Passo 3: Fazer upload dos arquivos**
```bash
scp -r ./* usuario@seu-servidor.com:/var/www/mb-hub/
```

**Passo 4: Configurar Apache**
```bash
sudo nano /etc/apache2/sites-available/mb-hub.conf
```

Adicionar:
```apache
<VirtualHost *:80>
    ServerName seu-dominio.com
    DocumentRoot /var/www/mb-hub

    <Directory /var/www/mb-hub>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/mb-hub-error.log
    CustomLog ${APACHE_LOG_DIR}/mb-hub-access.log combined
</VirtualHost>
```

**Passo 5: Ativar site**
```bash
sudo a2ensite mb-hub.conf
sudo systemctl reload apache2
```

**Resultado:** Acesso em `http://seu-dominio.com`

---

### **Servidor Linux com Nginx**

**Passo 1-3:** Mesmo que Apache (upload de arquivos)

**Passo 4: Configurar Nginx**
```bash
sudo nano /etc/nginx/sites-available/mb-hub
```

Adicionar:
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    root /var/www/mb-hub;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
}
```

**Passo 5: Ativar site**
```bash
sudo ln -s /etc/nginx/sites-available/mb-hub /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 4️⃣ Deploy com HTTPS/SSL

### **Usar Let's Encrypt (Gratuito)**

#### Com Certbot:
```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d seu-dominio.com
```

#### Com Nginx:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

**Automático:** Renova certificado a cada 90 dias

---

## 5️⃣ Deploy com Backend (Produção)

### **Arquitetura Recomendada**

```
Frontend (MB Hub)
      ↓
API Gateway (Node.js/Python)
      ↓
Backend (Express/FastAPI)
      ↓
Banco de Dados (MySQL/PostgreSQL)
      ↓
Cache (Redis)
```

### **Exemplo: Node.js + Express**

**1. Criar backend**
```bash
mkdir mb-hub-backend
cd mb-hub-backend
npm init -y
npm install express cors mysql2 dotenv bcrypt jsonwebtoken
```

**2. Arquivo `server.js`**
```javascript
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Endpoint: Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  // Validar credenciais
  // Retornar JWT token
});

// Endpoint: Listar leads
app.get('/api/leads', async (req, res) => {
  const conn = await pool.getConnection();
  const [rows] = await conn.execute('SELECT * FROM leads');
  conn.release();
  res.json(rows);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
```

**3. Variáveis de ambiente (`.env`)**
```
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=mb_hub
JWT_SECRET=sua_chave_secreta
```

**4. Deploy no Heroku**
```bash
heroku create mb-hub-api
git push heroku main
heroku config:set DB_HOST=...
```

---

## 6️⃣ Checklist de Deploy

- [ ] Todos arquivos `.html` estão presentes
- [ ] Imagens e assets carregam corretamente
- [ ] JavaScript executa sem erros (F12 → Console)
- [ ] LocalStorage funciona
- [ ] Responsivo em mobile
- [ ] Links de navegação funcionam
- [ ] Modal LGPD abre/fecha
- [ ] WhatsApp link funciona
- [ ] Relatórios CSV baixam
- [ ] HTTPS ativado (recomendado)

---

## 7️⃣ Monitoramento Pós-Deploy

### **Verificar Erros**
```javascript
// F12 → Console
localStorage.getItem('mb_hub_all_users')
```

### **Medir Performance**
```javascript
// F12 → Performance
console.time('Carregamento');
// ... código
console.timeEnd('Carregamento');
```

### **Monitorar Uptime**
- Usar serviço como Uptime Robot
- Alertas por email se site ficar offline

---

## 🔐 Segurança em Produção

### **Antes de Deploy:**

1. **HTTPS/SSL** ✅
   - Certificado Let's Encrypt (gratuito)
   - Redirect HTTP → HTTPS

2. **CORS** ✅
   - Apenas domínios autorizados
   - Evita roubo de dados cross-origin

3. **Backend** ✅
   - Autenticação JWT
   - Validação de entrada
   - Rate limiting

4. **Banco de Dados** ✅
   - Backups automáticos
   - Criptografia de senhas (bcrypt)
   - SQL injection prevention (prepared statements)

5. **Secrets** ✅
   - Nunca committar `.env`
   - Usar variáveis de ambiente
   - Rotacionar chaves regularmente

---

## 📊 Opções de Hosting Comparadas

| Provider | Custo | Uptime | Scaling | HTTPS | Recomendado |
|----------|-------|--------|---------|-------|-------------|
| Netlify | Gratuito | 99.9% | Automático | ✅ | ⭐ |
| Vercel | Gratuito | 99.9% | Automático | ✅ | ⭐ |
| GitHub Pages | Gratuito | 99.9% | Limitado | ✅ | ✅ |
| Heroku | $7/mês | 99.5% | Manual | ✅ | ✅ |
| AWS | $1-50/mês | 99.99% | Automático | ✅ | Para escala |
| DigitalOcean | $5-20/mês | 99.9% | Manual | ✅ | Controle total |

**Recomendação:** Netlify ou Vercel para começar (gratuito + profissional)

---

## 🔄 CI/CD Pipeline (Opcional)

### **GitHub Actions Workflow**

Arquivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy MB Hub

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

**Setup:**
1. Gerar tokens no Netlify
2. Adicionar secrets no GitHub
3. Push → Deploy automático

---

## 📞 Troubleshooting

### "Erro 404 - Arquivos não encontrados"
- Verificar se todos `.html` e `mr2km39w-IMG_3972.jpg` estão no servidor
- Verificar caminhos relativos em `index.html`

### "LocalStorage não funciona"
- Checar se site está em HTTPS (HTTPS requerido para armazenamento permanente)
- Desabilitar modo privado/incognito

### "Modal LGPD não abre"
- F12 → Console → Ver erros JavaScript
- Verificar se `onclick="abrirModalLGPD()"` está correto

### "WhatsApp link não abre"
- Verificar formato: `https://api.whatsapp.com/send?phone=55XXXXXXXXXXX`
- Testar número de telefone

### "CSS não carrega corretamente"
- Limpar cache: Ctrl+Shift+Delete
- Verificar import de fonts
- Checar media queries para mobile

---

## 🎯 Roadmap Pós-Deploy

**Week 1:** Monitorar uptime e erros  
**Week 2:** Coletar feedback de usuários  
**Week 3:** Implementar melhorias  
**Week 4:** Preparar backend  
**Month 2:** Deploy com banco de dados  
**Month 3:** Integração Google Calendar  

---

## 📚 Referências

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Docker Deployment](https://docs.docker.com/)

---

**Desenvolvido para MB Soluções Financeiras**

**Versão:** 2.0.0  
**Data:** 02/07/2026  
**Status:** Pronto para Deploy
