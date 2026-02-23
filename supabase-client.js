// Supabase Client Configuration with Official SDK
const SUPABASE_URL = 'https://vptixdomrdxksufgkurp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdGl4ZG9tcmR4a3N1ZmdrdXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NDI2NTYsImV4cCI6MjA4NzMxODY1Nn0.Dqx9Qdbilvn9aMTMUyedv39zZi3xf2o_QR-lCJyGnPs';

// Initialize Supabase client using the official SDK
let supabaseClient = null;

function initSupabase() {
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    });
    return supabaseClient;
  }
  return null;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
});

// Auth helper that works with the official SDK
window.auth = {
  getUser: async function() {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) {
      // Fallback to localStorage
      const stored = localStorage.getItem('sb_user');
      return stored ? JSON.parse(stored) : null;
    }
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (user) localStorage.setItem('sb_user', JSON.stringify(user));
    return user;
  },

  getSession: async function() {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return null;
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session;
  },

  signUp: async function(email, password) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    const result = await supabaseClient.auth.signUp({ email, password });
    if (!result.error && result.data.user) {
      localStorage.setItem('sb_user', JSON.stringify(result.data.user));
      if (result.data.session) {
        localStorage.setItem('sb_access_token', result.data.session.access_token);
      }
    }
    return result;
  },

  signIn: async function(email, password) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    const result = await supabaseClient.auth.signInWithPassword({ email, password });
    if (!result.error && result.data.session) {
      localStorage.setItem('sb_access_token', result.data.session.access_token);
      localStorage.setItem('sb_user', JSON.stringify(result.data.user));
    }
    return result;
  },

  signInWithOAuth: async function(provider) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.auth.signInWithOAuth({ provider });
  },

  signOut: async function() {
    if (!supabaseClient) initSupabase();
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
    }
    localStorage.removeItem('sb_access_token');
    localStorage.removeItem('sb_user');
    window.location.href = '/';
  },

  isSignedIn: function() {
    return !!localStorage.getItem('sb_access_token');
  }
};

// Database helper functions
window.db = {
  // Profiles
  getProfile: async function(userId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    return data;
  },

  createProfile: async function(profile) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('profiles').insert(profile);
  },

  updateProfile: async function(userId, updates) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient
      .from('profiles')
      .update(updates)
      .eq('user_id', userId);
  },

  // Projects
  getProjects: async function(userId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    return data || [];
  },

  getAllProjects: async function() {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  },

  createProject: async function(project) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('projects').insert(project);
  },

  deleteProject: async function(projectId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('projects').delete().eq('id', projectId);
  },

  // Showcase
  getShowcase: async function() {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('showcase')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    return data || [];
  },

  submitToShowcase: async function(item) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('showcase').insert({ ...item, approved: true });
  },

  // Subscribers
  getSubscribers: async function() {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  },

  addSubscriber: async function(email) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('subscribers').insert({ email });
  },

  // Course Progress
  getProgress: async function(userId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('course_progress')
      .select('*')
      .eq('user_id', userId);
    return data || [];
  },

  markComplete: async function(userId, itemType, itemId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('course_progress').insert({
      user_id: userId,
      item_type: itemType,
      item_id: itemId,
      completed: true
    });
  },

  // API Keys
  getUserApiKeys: async function(userId) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient
      .from('user_api_keys')
      .select('provider,api_key,updated_at')
      .eq('user_id', userId);
    return data || [];
  },

  saveApiKey: async function(userId, provider, apiKey) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient.from('user_api_keys').upsert({
      user_id: userId,
      provider,
      api_key: apiKey,
      updated_at: new Date().toISOString()
    });
  },

  deleteApiKey: async function(userId, provider) {
    if (!supabaseClient) initSupabase();
    if (!supabaseClient) return { error: { message: 'Supabase not loaded' } };
    return await supabaseClient
      .from('user_api_keys')
      .delete()
      .eq('user_id', userId)
      .eq('provider', provider);
  }
};

// Export for compatibility
window.supabase = { auth: window.auth };
