// ========================================
// SUPABASE CLIENT — Official SDK
// ========================================

const SUPABASE_URL = 'https://vptixdomrdxksufgkurp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdGl4ZG9tcmR4a3N1ZmdrdXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NDI2NTYsImV4cCI6MjA4NzMxODY1Nn0.Dqx9Qdbilvn9aMTMUyedv39zZi3xf2o_QR-lCJyGnPs';

// The official SDK is loaded via <script> tag in HTML pages:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
// That script exposes window.supabase which has createClient

let _supabaseClient = null;

function getSupabase() {
  if (_supabaseClient) return _supabaseClient;
  if (window.supabase && window.supabase.createClient) {
    _supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _supabaseClient;
  }
  return null;
}

// ========================================
// AUTH HELPERS
// ========================================

window.auth = {
  getUser: async function () {
    const sb = getSupabase();
    if (!sb) return null;
    const { data: { user } } = await sb.auth.getUser();
    return user;
  },

  getSession: async function () {
    const sb = getSupabase();
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    return session;
  },

  signUp: async function (email, password, metadata) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.auth.signUp({
      email,
      password,
      options: { data: metadata || {} }
    });
  },

  signIn: async function (email, password) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.auth.signInWithPassword({ email, password });
  },

  signInWithOAuth: async function (provider) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + '/auth.html'
      }
    });
  },

  signOut: async function () {
    const sb = getSupabase();
    if (!sb) return;
    await sb.auth.signOut();
    window.location.href = '/';
  },

  isSignedIn: async function () {
    const session = await this.getSession();
    return !!session;
  },

  onAuthStateChange: function (callback) {
    const sb = getSupabase();
    if (!sb) return;
    return sb.auth.onAuthStateChange(callback);
  }
};

// ========================================
// DB HELPERS
// ========================================

window.db = {
  createProject: async function (project) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('projects').insert([project]);
  },
  // Profiles
  getProfile: async function (userId) {
    const sb = getSupabase();
    if (!sb) return null;
    const { data, error } = await sb
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    return error ? null : data;
  },

  createProfile: async function (profile) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('profiles').insert(profile);
  },

  updateProfile: async function (userId, updates) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('profiles').update(updates).eq('user_id', userId);
  },

  getAllProfiles: async function () {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb.from('profiles').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  // Projects
  getProjects: async function (userId) {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    return data || [];
  },

  getAllProjects: async function () {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb.from('projects').select('*').order('created_at', { ascending: false });
    return data || [];
  },

  createProject: async function (project) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('projects').insert(project).select();
  },

  deleteProject: async function (projectId) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('projects').delete().eq('id', projectId);
  },

  // Showcase
  getShowcase: async function () {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb
      .from('showcase')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    return data || [];
  },

  submitToShowcase: async function (item) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('showcase').insert({ ...item, approved: true });
  },

  // Subscribers
  addSubscriber: async function (email) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('subscribers').insert({ email });
  },

  // Course Progress
  getProgress: async function (userId) {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb
      .from('course_progress')
      .select('*')
      .eq('user_id', userId);
    return data || [];
  },

  markComplete: async function (userId, contentSlug, contentType) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('course_progress').upsert({
      user_id: userId,
      content_slug: contentSlug,
      content_type: contentType,
      completed_at: new Date().toISOString()
    }, { onConflict: 'user_id,content_slug' });
  },

  unmarkComplete: async function (userId, contentSlug) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb
      .from('course_progress')
      .delete()
      .eq('user_id', userId)
      .eq('content_slug', contentSlug);
  },

  // API Keys
  getUserApiKeys: async function (userId) {
    const sb = getSupabase();
    if (!sb) return [];
    const { data } = await sb
      .from('user_api_keys')
      .select('provider,api_key,updated_at')
      .eq('user_id', userId);
    return data || [];
  },

  saveApiKey: async function (userId, provider, apiKey) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb.from('user_api_keys').upsert({
      user_id: userId,
      provider,
      api_key: apiKey,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,provider' });
  },

  deleteApiKey: async function (userId, provider) {
    const sb = getSupabase();
    if (!sb) return { data: null, error: { message: 'Supabase not loaded' } };
    return await sb
      .from('user_api_keys')
      .delete()
      .eq('user_id', userId)
      .eq('provider', provider);
  }
};
