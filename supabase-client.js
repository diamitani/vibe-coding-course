// Supabase Client Configuration with Auth
const SUPABASE_URL = 'https://vptixdomrdxksufgkurp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_XUCSEcjKE0RyGQoL8fplPg_xCoTWOGE';

window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_KEY = SUPABASE_KEY;

// Simple Supabase client with Auth
const supabase = {
  URL: SUPABASE_URL,
  key: SUPABASE_KEY,
  
  // Auth methods
  auth: {
    getSession: async () => {
      const { data: { session }, error } = await supabase.supabase.auth.getSession();
      return { data: { session }, error };
    },
    
    signInWithPassword: async ({ email, password }) => {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      return { data, error: response.ok ? null : data };
    },
    
    signUp: async ({ email, password }) => {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      return { data, error: response.ok ? null : data };
    },
    
    signInWithOAuth: async ({ provider }) => {
      const { data, error } = await supabase.supabase.auth.signInWithOAuth({ provider });
      return { data, error };
    },
    
    signOut: async () => {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${localStorage.getItem('sb_access_token')}`
        }
      });
      localStorage.removeItem('sb_access_token');
      localStorage.removeItem('sb_user');
      return { error: response.ok ? null : await response.json() };
    },
    
    getUser: async () => {
      const token = localStorage.getItem('sb_access_token');
      if (!token) return { data: { user: null }, error: null };
      
      const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      return { data: { user: response.ok ? data : null }, error: response.ok ? null : data };
    }
  },
  
  // Database methods
  from: function(table) {
    const token = localStorage.getItem('sb_access_token');
    return {
      table: table,
      _eq: null,
      _filters: [],
      
      select: function(columns = '*') { this._select = columns; return this; },
      insert: function(data) { this._data = data; this._action = 'insert'; return this; },
      update: function(data) { this._data = data; this._action = 'update'; return this; },
      delete: function() { this._action = 'delete'; return this; },
      
      eq: function(column, value) { this._eq = { column, value }; return this; },
      neq: function(column, value) { this._filters.push({ op: 'neq', column, value }); return this; },
      order: function(column, { ascending = true } = {}) { this._order = { column, ascending }; return this; },
      limit: function(n) { this._limit = n; return this; },
      
      then: async function(resolve, reject) {
        try {
          let url = `${supabase.URL}/rest/v1/${this.table}`;
          const params = new URLSearchParams();
          params.append('select', this._select || '*');
          
          if (this._eq) params.append(this._eq.column, `eq.${this._eq.value}`);
          this._filters.forEach(f => params.append(f.column, `${f.op}.${f.value}`));
          if (this._order) params.append('order', `${this._order.column}.${this._order.ascending ? 'asc' : 'desc'}`);
          if (this._limit) params.append('limit', this._limit.toString());
          
          url += '?' + params.toString();
          
          const headers = {
            'apikey': supabase.key,
            'Authorization': `Bearer ${token || supabase.key}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          };
          
          let response;
          
          if (this._action === 'insert') {
            response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(this._data) });
          } else if (this._action === 'update') {
            const where = this._eq ? `?${this._eq.column}=eq.${this._eq.value}` : '';
            response = await fetch(`${supabase.URL}/rest/v1/${this.table}${where}`, { 
              method: 'PATCH', headers, body: JSON.stringify(this._data) 
            });
          } else if (this._action === 'delete') {
            const where = this._eq ? `?${this._eq.column}=eq.${this._eq.value}` : '';
            response = await fetch(`${supabase.URL}/rest/v1/${this.table}${where}`, { method: 'DELETE', headers });
          } else {
            response = await fetch(url, { headers });
          }
          
          const data = await response.json();
          resolve({ data, error: response.ok ? null : data });
        } catch (err) { reject(err); }
      }
    };
  }
};

// Initialize supabase with the official library if available
if (typeof window.supabase !== 'undefined') {
  supabase.supabase = window.supabase;
}

// DB Helper functions
window.db = {
  // Profiles
  getProfile: async function(userId) {
    const { data, error } = await supabase.from('profiles').select('*').eq('user_id', userId).then(r => r);
    return data && data.length > 0 ? data[0] : null;
  },
  
  createProfile: async function(profile) {
    return await supabase.from('profiles').insert(profile).then(r => r);
  },
  
  updateProfile: async function(userId, updates) {
    return await supabase.from('profiles').update(updates).eq('user_id', userId).then(r => r);
  },
  
  // Projects
  getProjects: async function(userId) {
    const { data, error } = await supabase.from('projects').select('*').eq('user_id', userId).order('created_at', { ascending: false }).then(r => r);
    return data || [];
  },
  
  getAllProjects: async function() {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false }).then(r => r);
    return data || [];
  },
  
  createProject: async function(project) {
    return await supabase.from('projects').insert(project).then(r => r);
  },
  
  deleteProject: async function(projectId) {
    return await supabase.from('projects').delete().eq('id', projectId).then(r => r);
  },
  
  // Showcase
  getShowcase: async function() {
    const { data, error } = await supabase.from('showcase').select('*').eq('approved', true).order('created_at', { ascending: false }).then(r => r);
    return data || [];
  },
  
  submitToShowcase: async function(item) {
    return await supabase.from('showcase').insert({ ...item, approved: true }).then(r => r);
  },

  // Subscribers
  getSubscribers: async function() {
    const { data, error } = await supabase.from('subscribers').select('*').order('created_at', { ascending: false }).then(r => r);
    return data || [];
  },

  addSubscriber: async function(email) {
    return await supabase.from('subscribers').insert({ email }).then(r => r);
  },

  // API Keys
  getUserApiKeys: async function(userId) {
    const token = localStorage.getItem('sb_access_token');
    const response = await fetch(`${supabase.URL}/rest/v1/user_api_keys?user_id=eq.${encodeURIComponent(userId)}&select=provider,api_key,updated_at`, {
      headers: {
        'apikey': supabase.key,
        'Authorization': `Bearer ${token || supabase.key}`
      }
    });
    const data = await response.json();
    return response.ok ? (data || []) : [];
  },

  saveApiKey: async function(userId, provider, apiKey) {
    const token = localStorage.getItem('sb_access_token');
    // Upsert via POST with merge-duplicates
    const response = await fetch(`${supabase.URL}/rest/v1/user_api_keys`, {
      method: 'POST',
      headers: {
        'apikey': supabase.key,
        'Authorization': `Bearer ${token || supabase.key}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify({ user_id: userId, provider, api_key: apiKey, updated_at: new Date().toISOString() })
    });
    return { ok: response.ok, status: response.status };
  },

  deleteApiKey: async function(userId, provider) {
    const token = localStorage.getItem('sb_access_token');
    const response = await fetch(`${supabase.URL}/rest/v1/user_api_keys?user_id=eq.${encodeURIComponent(userId)}&provider=eq.${encodeURIComponent(provider)}`, {
      method: 'DELETE',
      headers: {
        'apikey': supabase.key,
        'Authorization': `Bearer ${token || supabase.key}`
      }
    });
    return { ok: response.ok };
  }
};

// Auth helper
window.auth = {
  getUser: async function() {
    const stored = localStorage.getItem('sb_user');
    if (stored) return JSON.parse(stored);
    const { data: { user } } = await supabase.auth.getUser();
    if (user) localStorage.setItem('sb_user', JSON.stringify(user));
    return user;
  },
  
  getSession: async function() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },
  
  signUp: async function(email, password) {
    const result = await supabase.auth.signUp({ email, password });
    if (!result.error && result.data.user) {
      localStorage.setItem('sb_access_token', result.data.session.access_token);
      localStorage.setItem('sb_user', JSON.stringify(result.data.user));
    }
    return result;
  },
  
  signIn: async function(email, password) {
    const result = await supabase.auth.signInWithPassword({ email, password });
    if (!result.error && result.data.access_token) {
      localStorage.setItem('sb_access_token', result.data.access_token);
      const { data: { user } } = await supabase.auth.getUser();
      if (user) localStorage.setItem('sb_user', JSON.stringify(user));
    }
    return result;
  },
  
  signOut: async function() {
    await supabase.auth.signOut();
    window.location.href = '/';
  },
  
  isSignedIn: function() {
    return !!localStorage.getItem('sb_access_token');
  }
};

window.supabase = supabase;
