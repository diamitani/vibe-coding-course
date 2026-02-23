// Supabase Client Configuration with Official SDK
const SUPABASE_URL = 'https://vptixdomrdxksufgkurp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdGl4ZG9tcmR4a3N1ZmdrdXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3NDI2NTYsImV4cCI6MjA4NzMxODY1Nn0.Dqx9Qdbilvn9aMTMUyedv39zZi3xf2o_QR-lCJyGnPs';

// Initialize Supabase client using the official SDK
let supabaseClient = null;
let supabaseInitialized = false;
let initPromise = null;

async function waitForSupabaseSDK(maxRetries = 50) {
  return new Promise((resolve) => {
    let retries = 0;
    const checkInterval = setInterval(() => {
      if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
        clearInterval(checkInterval);
        resolve(true);
      } else if (retries >= maxRetries) {
        clearInterval(checkInterval);
        console.error('Supabase SDK failed to load after', maxRetries, 'retries');
        resolve(false);
      }
      retries++;
    }, 100);
  });
}

async function initSupabase() {
  if (supabaseInitialized && supabaseClient) {
    return supabaseClient;
  }
  
  if (initPromise) {
    return initPromise;
  }
  
  initPromise = new Promise(async (resolve) => {
    const sdkLoaded = await waitForSupabaseSDK();
    
    if (!sdkLoaded) {
      console.error('Supabase SDK not available');
      resolve(null);
      return;
    }
    
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true
        }
      });
      supabaseInitialized = true;
      console.log('Supabase initialized successfully');
      resolve(supabaseClient);
    } catch (err) {
      console.error('Failed to initialize Supabase:', err);
      resolve(null);
    }
  });
  
  return initPromise;
}

// Initialize immediately
initSupabase();

// Auth helper that works with the official SDK
window.auth = {
  ensureInitialized: async function() {
    if (!supabaseClient) {
      await initSupabase();
    }
    return supabaseClient;
  },
  
  getUser: async function() {
    const client = await this.ensureInitialized();
    if (!client) {
      const stored = localStorage.getItem('sb_user');
      return stored ? JSON.parse(stored) : null;
    }
    const { data: { user }, error } = await client.auth.getUser();
    if (error) {
      console.error('getUser error:', error);
      return null;
    }
    if (user) localStorage.setItem('sb_user', JSON.stringify(user));
    return user;
  },

  getSession: async function() {
    const client = await this.ensureInitialized();
    if (!client) return null;
    const { data: { session }, error } = await client.auth.getSession();
    if (error) {
      console.error('getSession error:', error);
      return null;
    }
    return session;
  },

  signUp: async function(email, password) {
    const client = await this.ensureInitialized();
    if (!client) return { error: { message: 'Supabase not loaded. Please refresh the page and try again.' } };
    
    console.log('Attempting signUp with:', email);
    const { data, error } = await client.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: window.location.origin + '/auth.html'
      }
    });
    
    if (error) {
      console.error('signUp error:', error);
      return { error };
    }
    
    console.log('signUp success:', data);
    if (data.user) localStorage.setItem('sb_user', JSON.stringify(data.user));
    if (data.session) {
      localStorage.setItem('sb_access_token', data.session.access_token);
    }
    return { data, error: null };
  },

  signIn: async function(email, password) {
    const client = await this.ensureInitialized();
    if (!client) return { error: { message: 'Supabase not loaded. Please refresh the page and try again.' } };
    
    console.log('Attempting signIn with:', email);
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    
    if (error) {
      console.error('signIn error:', error);
      return { error };
    }
    
    console.log('signIn success:', data);
    if (data.session) {
      localStorage.setItem('sb_access_token', data.session.access_token);
      localStorage.setItem('sb_user', JSON.stringify(data.user));
    }
    return { data, error: null };
  },

  signInWithOAuth: async function(provider) {
    const client = await this.ensureInitialized();
    if (!client) return { error: { message: 'Supabase not loaded. Please refresh the page and try again.' } };
    
    const { data, error } = await client.auth.signInWithOAuth({ 
      provider,
      options: {
        redirectTo: window.location.origin + '/auth.html'
      }
    });
    
    return { data, error };
  },

  signOut: async function() {
    const client = await this.ensureInitialized();
    if (client) {
      await client.auth.signOut();
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
  ensureClient: async function() {
    if (!supabaseClient) {
      await initSupabase();
    }
    return supabaseClient;
  },

  // Profiles
  getProfile: async function(userId) {
    const client = await this.ensureClient();
    if (!client) return null;
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    if (error) console.error('getProfile error:', error);
    return data;
  },

  createProfile: async function(profile) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('profiles').insert(profile);
    if (result.error) console.error('createProfile error:', result.error);
    return result;
  },

  updateProfile: async function(userId, updates) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client
      .from('profiles')
      .update(updates)
      .eq('user_id', userId);
    if (result.error) console.error('updateProfile error:', result.error);
    return result;
  },

  // Projects
  getProjects: async function(userId) {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) console.error('getProjects error:', error);
    return data || [];
  },

  getAllProjects: async function() {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('getAllProjects error:', error);
    return data || [];
  },

  createProject: async function(project) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('projects').insert(project);
    if (result.error) console.error('createProject error:', result.error);
    return result;
  },

  deleteProject: async function(projectId) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('projects').delete().eq('id', projectId);
    if (result.error) console.error('deleteProject error:', result.error);
    return result;
  },

  // Showcase
  getShowcase: async function() {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('showcase')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });
    if (error) console.error('getShowcase error:', error);
    return data || [];
  },

  submitToShowcase: async function(item) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('showcase').insert({ ...item, approved: true });
    if (result.error) console.error('submitToShowcase error:', result.error);
    return result;
  },

  // Subscribers
  getSubscribers: async function() {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('subscribers')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('getSubscribers error:', error);
    return data || [];
  },

  addSubscriber: async function(email) {
    const client = await this.ensureClient();
    if (!client) {
      console.warn('Supabase not available, subscriber not saved to cloud');
      return { error: { message: 'Supabase not loaded' } };
    }
    const result = await client.from('subscribers').insert({ email });
    if (result.error) console.error('addSubscriber error:', result.error);
    return result;
  },

  // Newsletter Subscribers
  subscribeNewsletter: async function(email, firstName = null) {
    const client = await this.ensureClient();
    if (!client) {
      console.warn('Supabase not available, newsletter subscriber not saved to cloud');
      return { error: { message: 'Supabase not loaded' } };
    }
    
    try {
      // Insert subscriber - this triggers the welcome email via database webhook
      const result = await client
        .from('newsletter_subscribers')
        .insert({ 
          email, 
          first_name: firstName,
          source: 'website'
        });
      
      if (result.error) {
        // If duplicate email, still return success (already subscribed)
        if (result.error.code === '23505') {
          return { data: { alreadySubscribed: true }, error: null };
        }
        console.error('subscribeNewsletter error:', result.error);
        return { error: result.error };
      }
      
      return { data: result.data, error: null };
    } catch (err) {
      console.error('subscribeNewsletter exception:', err);
      return { error: err };
    }
  },

  getNewsletterSubscribers: async function() {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('newsletter_subscribers')
      .select('*')
      .eq('unsubscribed', false)
      .order('subscribed_at', { ascending: false });
    if (error) console.error('getNewsletterSubscribers error:', error);
    return data || [];
  },

  // Course Progress
  getProgress: async function(userId) {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('course_progress')
      .select('*')
      .eq('user_id', userId);
    if (error) console.error('getProgress error:', error);
    return data || [];
  },

  markComplete: async function(userId, itemType, itemId) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('course_progress').upsert({
      user_id: userId,
      item_type: itemType,
      item_id: itemId,
      completed: true,
      completed_at: new Date().toISOString()
    });
    if (result.error) console.error('markComplete error:', result.error);
    return result;
  },

  // API Keys
  getUserApiKeys: async function(userId) {
    const client = await this.ensureClient();
    if (!client) return [];
    const { data, error } = await client
      .from('user_api_keys')
      .select('provider,api_key,updated_at')
      .eq('user_id', userId);
    if (error) console.error('getUserApiKeys error:', error);
    return data || [];
  },

  saveApiKey: async function(userId, provider, apiKey) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client.from('user_api_keys').upsert({
      user_id: userId,
      provider,
      api_key: apiKey,
      updated_at: new Date().toISOString()
    });
    if (result.error) console.error('saveApiKey error:', result.error);
    return result;
  },

  deleteApiKey: async function(userId, provider) {
    const client = await this.ensureClient();
    if (!client) return { error: { message: 'Supabase not loaded' } };
    const result = await client
      .from('user_api_keys')
      .delete()
      .eq('user_id', userId)
      .eq('provider', provider);
    if (result.error) console.error('deleteApiKey error:', result.error);
    return result;
  }
};

// Export for compatibility
window.supabase = { auth: window.auth };
