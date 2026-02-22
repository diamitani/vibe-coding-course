-- =============================================
-- Supabase Database Setup for LetsVibeAI
-- Run this in Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- PROFILES TABLE
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT UNIQUE NOT NULL,
  email TEXT,
  name TEXT NOT NULL,
  avatar TEXT DEFAULT '🧑‍💻',
  bio TEXT,
  vibe_type TEXT DEFAULT 'Explorer',
  tools JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- PROJECTS TABLE
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT,
  lab_type TEXT,
  tool_used TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SHOWCASE TABLE
CREATE TABLE showcase (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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

-- Create policies for public access
CREATE POLICY "Public profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public showcase" ON showcase FOR SELECT USING (true);

-- Insert policies
CREATE POLICY "Insert profiles" ON profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Insert projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Insert showcase" ON showcase FOR INSERT WITH CHECK (true);

-- Update policies
CREATE POLICY "Update profiles" ON profiles FOR UPDATE USING (true);
CREATE POLICY "Update projects" ON projects FOR UPDATE USING (true);
CREATE POLICY "Update showcase" ON showcase FOR UPDATE USING (true);

-- Delete policies
CREATE POLICY "Delete projects" ON projects FOR DELETE USING (true);

-- Create indexes
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_showcase_approved ON showcase(approved) WHERE approved = true;

-- Insert some sample data
INSERT INTO showcase (name, title, url, lab_type, tool_used, approved) VALUES
('Demo User', 'My Awesome Landing Page', 'https://example.com', 'marketing', 'v0.dev', true),
('Demo User', 'E-Commerce Store', 'https://example.com/store', 'ecommerce', 'Lovable', true);
