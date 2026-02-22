-- Create subscribers table for email list signups
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
DROP POLICY IF EXISTS "Insert subscribers" ON subscribers;
CREATE POLICY "Insert subscribers" ON subscribers FOR INSERT WITH CHECK (true);

-- Allow public read (for admin dashboard)
DROP POLICY IF EXISTS "Public subscribers read" ON subscribers;
CREATE POLICY "Public subscribers read" ON subscribers FOR SELECT USING (true);

-- Index on email for uniqueness checks
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
