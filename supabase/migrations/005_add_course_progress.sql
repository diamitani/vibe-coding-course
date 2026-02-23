-- Create course_progress table for tracking module/lab completion
CREATE TABLE IF NOT EXISTS course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  content_slug TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('module', 'lab')),
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, content_slug)
);

-- Enable Row Level Security
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;

-- Users can view their own progress
DROP POLICY IF EXISTS "Users view own progress" ON course_progress;
CREATE POLICY "Users view own progress" ON course_progress FOR SELECT USING (true);

-- Users can insert their own progress
DROP POLICY IF EXISTS "Users insert own progress" ON course_progress;
CREATE POLICY "Users insert own progress" ON course_progress FOR INSERT WITH CHECK (true);

-- Users can delete their own progress
DROP POLICY IF EXISTS "Users delete own progress" ON course_progress;
CREATE POLICY "Users delete own progress" ON course_progress FOR DELETE USING (true);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_course_progress_user_id ON course_progress(user_id);
