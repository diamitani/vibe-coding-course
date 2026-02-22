// Supabase Client Configuration
// Using only publishable key for client-side operations

const SUPABASE_URL = 'https://vptixdomrdxksufgkurp.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XUCSEcjKE0RyGQoL8fplPg_xCoTWOGE';

window.supabaseClient = window.supabase ? window.supabase : createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

function createClient(url, key) {
  return {
    url: url,
    key: key,
    
    from: function(table) {
      return {
        table: table,
        select: function(columns = '*') { return this; },
        insert: function(data) { return this; },
        update: function(data) { return this; },
        delete: function() { return this; },
        eq: function(column, value) { this._eq = { column, value }; return this; },
        then: async function(resolve, reject) {
          try {
            let url = `${this.url}/rest/v1/${this.table}`;
            const params = new URLSearchParams();
            if (this._eq) params.append(this._eq.column, 'eq.' + this._eq.value);
            const queryString = params.toString();
            if (queryString) url += '?' + queryString;
            
            const response = await fetch(url, {
              headers: {
                'apikey': this.key,
                'Authorization': 'Bearer ' + this.key,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
              }
            });
            
            const data = await response.json();
            resolve({ data: data, error: response.ok ? null : data });
          } catch (err) { reject(err); }
        }
      };
    },
    
    insert: async function(table, data) {
      const response = await fetch(`${this.url}/rest/v1/${table}`, {
        method: 'POST',
        headers: {
          'apikey': this.key,
          'Authorization': 'Bearer ' + this.key,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(data)
      });
      return { data: await response.json(), error: response.ok ? null : await response.json() };
    },
    
    update: async function(table, data, eq) {
      const response = await fetch(`${this.url}/rest/v1/${table}?${eq.column}=eq.${eq.value}`, {
        method: 'PATCH',
        headers: {
          'apikey': this.key,
          'Authorization': 'Bearer ' + this.key,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(data)
      });
      return { data: await response.json(), error: response.ok ? null : await response.json() };
    },
    
    delete: async function(table, eq) {
      const response = await fetch(`${this.url}/rest/v1/${table}?${eq.column}=eq.${eq.value}`, {
        method: 'DELETE',
        headers: {
          'apikey': this.key,
          'Authorization': 'Bearer ' + this.key
        }
      });
      return { error: response.ok ? null : await response.json() };
    },
    
    get: async function(table, eq = null) {
      let url = `${this.url}/rest/v1/${table}`;
      if (eq) url += `?${eq.column}=eq.${eq.value}`;
      const response = await fetch(url, {
        headers: {
          'apikey': this.key,
          'Authorization': 'Bearer ' + this.key
        }
      });
      return { data: await response.json(), error: response.ok ? null : await response.json() };
    }
  };
}

window.db = {
  getProfile: async function(userId) {
    const result = await window.supabaseClient.get('profiles', { column: 'user_id', value: userId });
    return result.data && result.data.length > 0 ? result.data[0] : null;
  },
  
  createProfile: async function(profile) {
    return await window.supabaseClient.insert('profiles', profile);
  },
  
  updateProfile: async function(userId, updates) {
    return await window.supabaseClient.update('profiles', updates, { column: 'user_id', value: userId });
  },
  
  getProjects: async function(userId) {
    const result = await window.supabaseClient.get('projects', { column: 'user_id', value: userId });
    return result.data || [];
  },
  
  createProject: async function(project) {
    return await window.supabaseClient.insert('projects', project);
  },
  
  deleteProject: async function(projectId) {
    return await window.supabaseClient.delete('projects', { column: 'id', value: projectId });
  },
  
  getShowcase: async function() {
    const result = await window.supabaseClient.get('showcase', null);
    return result.data || [];
  },
  
  submitToShowcase: async function(item) {
    return await window.supabaseClient.insert('showcase', { ...item, approved: true });
  }
};
