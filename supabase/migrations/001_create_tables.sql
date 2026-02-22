-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT UNIQUE NOT NULL,
  email TEXT,
  name TEXT NOT NULL,
  avatar TEXT DEFAULT '🧑‍💻',
  bio TEXT,
  vibe_type TEXT DEFAULT 'Explorer',
  tools JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT,
  lab_type TEXT,
  tool_used TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create showcase table
CREATE TABLE IF NOT EXISTS showcase (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT,
  name TEXT,
  title TEXT NOT NULL,
  url TEXT,
  lab_type TEXT,
  tool_used TEXT,
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE showcase ENABLE ROW LEVEL SECURITY;

-- Profiles policies
DROP POLICY IF EXISTS "Public profiles" ON profiles;
CREATE POLICY "Public profiles" ON profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Insert profiles" ON profiles;
CREATE POLICY "Insert profiles" ON profiles FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Update profiles" ON profiles;
CREATE POLICY "Update profiles" ON profiles FOR UPDATE USING (true);

-- Projects policies
DROP POLICY IF EXISTS "Public projects" ON projects;
CREATE POLICY "Public projects" ON projects FOR SELECT USING (true);
DROP POLICY IF EXISTS "Insert projects" ON projects;
CREATE POLICY "Insert projects" ON projects FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Update projects" ON projects;
CREATE POLICY "Update projects" ON projects FOR UPDATE USING (true);
DROP POLICY IF EXISTS "Delete projects" ON projects;
CREATE POLICY "Delete projects" ON projects FOR DELETE USING (true);

-- Showcase policies
DROP POLICY IF EXISTS "Public showcase" ON showcase;
CREATE POLICY "Public showcase" ON showcase FOR SELECT USING (true);
DROP POLICY IF EXISTS "Insert showcase" ON showcase;
CREATE POLICY "Insert showcase" ON showcase FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "Update showcase" ON showcase;
CREATE POLICY "Update showcase" ON showcase FOR UPDATE USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
