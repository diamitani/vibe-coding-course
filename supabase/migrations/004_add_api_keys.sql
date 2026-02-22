-- Create user_api_keys table with proper RLS (only the authenticated user can see their own keys)
CREATE TABLE IF NOT EXISTS user_api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL,   -- 'anthropic', 'openai', 'google', 'groq'
  api_key TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, provider)
);

-- Enable Row Level Security
ALTER TABLE user_api_keys ENABLE ROW LEVEL SECURITY;

-- Only the owner can read/write their own keys (uses Supabase JWT)
DROP POLICY IF EXISTS "Users manage own api keys" ON user_api_keys;
CREATE POLICY "Users manage own api keys" ON user_api_keys
  USING (auth.uid()::text = user_id)
  WITH CHECK (auth.uid()::text = user_id);

-- Index for fast lookup by user
CREATE INDEX IF NOT EXISTS idx_user_api_keys_user_id ON user_api_keys(user_id);
