/**
 * MB Hub - Sistema de Autenticação e Permissões
 *
 * Roles disponíveis:
 * - ADMIN: Acesso total, comissões, parceiros, excluir
 * - USUARIO: Acesso leitura/edição, sem excluir, sem comissões
 * - PARCEIRO: Apenas leads, funil e suas comissões
 */

class AuthSystem {
  constructor() {
    this.currentUser = null;
    this.loadCurrentUser();
  }

  /**
   * Roles e permissões
   */
  ROLES = {
    ADMIN: 'administrador',
    USUARIO: 'usuario',
    PARCEIRO: 'parceiro'
  };

  PERMISSIONS = {
    // Visualização
    VIEW_DASHBOARD: ['administrador', 'usuario'],
    VIEW_FUNIL: ['administrador', 'usuario', 'parceiro'],
    VIEW_CLIENTES: ['administrador', 'usuario'],
    VIEW_LEAD_DETAIL: ['administrador', 'usuario', 'parceiro'],

    // Edição
    EDIT_LEAD: ['administrador', 'usuario', 'parceiro'],
    DELETE_LEAD: ['administrador'], // Apenas admin pode excluir
    CREATE_LEAD: ['administrador', 'usuario', 'parceiro'],

    // Funcionalidades especiais
    VIEW_COMISSOES: ['administrador', 'usuario', 'parceiro'], // Cada um vê suas próprias
    EDIT_COMISSOES: ['administrador'], // Apenas admin define %
    VIEW_PARCEIROS: ['administrador'],
    EDIT_PARCEIROS: ['administrador'],
    VIEW_ALL_COMISSOES: ['administrador'] // Admin vê todas
  };

  /**
   * Usuários do sistema - carregados do localStorage com fallback para padrões
   */
  DEFAULT_USERS = {
    'marciabraga.consultorias@gmail.com': {
      id: 1,
      nome: 'Márcia Braga',
      email: 'marciabraga.consultorias@gmail.com',
      role: 'administrador',
      tipo: 'admin',
      avatar: 'MB',
      ativo: true
    }
  };

  constructor() {
    this.currentUser = null;
    this.users = {};
    this.loadUsers();
    this.loadCurrentUser();
  }

  /**
   * Carrega todos os usuários do localStorage
   */
  loadUsers() {
    const stored = localStorage.getItem('mb_hub_all_users');
    if (stored) {
      try {
        this.users = JSON.parse(stored);
      } catch (e) {
        console.error('Erro ao carregar usuários:', e);
        this.initializeDefaultUsers();
      }
    } else {
      this.initializeDefaultUsers();
    }
  }

  /**
   * Inicializa usuários padrão
   */
  initializeDefaultUsers() {
    this.users = { ...this.DEFAULT_USERS };
    this.saveUsers();
  }

  /**
   * Salva todos os usuários no localStorage
   */
  saveUsers() {
    localStorage.setItem('mb_hub_all_users', JSON.stringify(this.users));
  }

  /**
   * Registra novo usuário
   * @param {Object} userData - { email, nome, role }
   * @returns {Object|null}
   */
  register(userData) {
    const { email, nome, role } = userData;

    if (!email || !nome || !role) return null;
    if (this.users[email]) return null; // Já existe

    const newUser = {
      id: Date.now(),
      email,
      nome,
      role,
      avatar: nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    };

    this.users[email] = newUser;
    this.saveUsers();
    return newUser;
  }

  /**
   * Carrega usuário atual do localStorage
   */
  loadCurrentUser() {
    const stored = localStorage.getItem('mb_hub_current_user');
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
      } catch (e) {
        console.error('Erro ao carregar usuário:', e);
        this.setDefaultUser();
      }
    } else {
      this.setDefaultUser();
    }
  }

  /**
   * Define usuário padrão (Márcia Braga - Admin)
   */
  setDefaultUser() {
    this.currentUser = this.DEFAULT_USERS['marciabraga.consultorias@gmail.com'];
    this.saveCurrentUser();
  }

  /**
   * Salva usuário atual no localStorage
   */
  saveCurrentUser() {
    localStorage.setItem('mb_hub_current_user', JSON.stringify(this.currentUser));
  }

  /**
   * Faz login
   * @param {string} email
   * @returns {Object|null}
   */
  login(email) {
    const user = this.users[email];
    if (user) {
      this.currentUser = user;
      this.saveCurrentUser();
      return user;
    }
    return null;
  }

  /**
   * Retorna todos os usuários (admin only)
   * @returns {Object}
   */
  getAllUsers() {
    if (!this.isAdmin()) return {};
    return this.users;
  }

  /**
   * Filtra leads baseado no role do usuário
   * @param {Array} allLeads
   * @returns {Array}
   */
  filterLeadsByRole(allLeads) {
    if (!this.currentUser) return [];

    if (this.isAdmin()) return allLeads;
    if (this.isUsuario()) return allLeads;

    // Parceiros veem apenas seus leads
    if (this.isParceiro()) {
      return allLeads.filter(lead => lead.criadoPor === this.currentUser.email);
    }

    return [];
  }

  /**
   * Faz logout
   */
  logout() {
    this.currentUser = null;
    localStorage.removeItem('mb_hub_current_user');
  }

  /**
   * Retorna usuário atual
   * @returns {Object|null}
   */
  getCurrentUser() {
    return this.currentUser;
  }

  /**
   * Verifica se usuário tem permissão
   * @param {string} permission
   * @returns {boolean}
   */
  hasPermission(permission) {
    if (!this.currentUser) return false;

    const allowedRoles = this.PERMISSIONS[permission];
    if (!allowedRoles) return false;

    return allowedRoles.includes(this.currentUser.role);
  }

  /**
   * Verifica se é administrador
   * @returns {boolean}
   */
  isAdmin() {
    return this.currentUser && this.currentUser.role === this.ROLES.ADMIN;
  }

  /**
   * Verifica se é usuário padrão
   * @returns {boolean}
   */
  isUsuario() {
    return this.currentUser && this.currentUser.role === this.ROLES.USUARIO;
  }

  /**
   * Verifica se é parceiro
   * @returns {boolean}
   */
  isParceiro() {
    return this.currentUser && this.currentUser.role === this.ROLES.PARCEIRO;
  }

  /**
   * Renderiza informações do usuário na sidebar
   * @param {string} containerId
   */
  renderUserInfo(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !this.currentUser) return;

    const roleLabels = {
      'administrador': 'Administrador',
      'usuario': 'Usuário',
      'parceiro': 'Parceiro'
    };

    container.innerHTML = `
      <div class="user-avatar">${this.currentUser.avatar}</div>
      <div class="user-info">
        <div class="user-name">${this.currentUser.nome}</div>
        <div class="user-role">${roleLabels[this.currentUser.role]}</div>
      </div>
    `;
  }

  /**
   * Oculta elementos sem permissão
   */
  applyPermissions() {
    // Ocultar botão excluir para não-admins
    if (!this.hasPermission('DELETE_LEAD')) {
      document.querySelectorAll('.btn-danger, [data-action="delete"]').forEach(el => {
        el.style.display = 'none';
      });
    }

    // Ocultar menu Comissões para não-admins (ou mostrar apenas suas próprias)
    const comissoesMenu = document.querySelector('[href="comissoes.html"]');
    if (comissoesMenu && !this.isAdmin()) {
      comissoesMenu.style.display = 'none';
    }

    // Ocultar menu Parceiros para não-admins
    const parceirosMenu = document.querySelector('[href="parceiros.html"]');
    if (parceirosMenu && !this.hasPermission('VIEW_PARCEIROS')) {
      parceirosMenu.style.display = 'none';
    }

    // Aplicar visibilidade de valores de comissão
    if (!this.hasPermission('VIEW_ALL_COMISSOES')) {
      document.querySelectorAll('.comissao-value').forEach(el => {
        el.textContent = '—';
        el.title = 'Sem permissão para visualizar';
      });
    }
  }

  /**
   * Adiciona event listeners para edição de perfil
   */
  setupProfileEdit() {
    const userNameEl = document.querySelector('.user-name');
    if (userNameEl && this.isUsuario()) {
      userNameEl.style.cursor = 'pointer';
      userNameEl.title = 'Clique para editar seu nome';

      userNameEl.addEventListener('click', () => {
        const novoNome = prompt('Digite seu nome:', this.currentUser.nome);
        if (novoNome && novoNome.trim()) {
          this.currentUser.nome = novoNome.trim();
          this.saveCurrentUser();
          userNameEl.textContent = this.currentUser.nome;
        }
      });
    }
  }
}

// Instância global
const auth = new AuthSystem();

// Inicializa ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  auth.applyPermissions();
  auth.setupProfileEdit();

  // Renderiza info do usuário se houver container
  const userContainer = document.querySelector('.user');
  if (userContainer && userContainer.id) {
    auth.renderUserInfo(userContainer.id);
  }
});

// Exporta para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AuthSystem;
}
