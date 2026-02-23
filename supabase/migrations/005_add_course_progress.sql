-- Course progress tracking table
CREATE TABLE IF NOT EXISTS course_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL CHECK (item_type IN ('module', 'lab')),
  item_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT true,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, item_type, item_id)
);

-- Enable RLS
ALTER TABLE course_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies (cast auth.uid() to uuid to match column type)
CREATE POLICY "Users can view their own progress"
  ON course_progress FOR SELECT
  USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can insert their own progress"
  ON course_progress FOR INSERT
  WITH CHECK (auth.uid()::uuid = user_id);

CREATE POLICY "Users can update their own progress"
  ON course_progress FOR UPDATE
  USING (auth.uid()::uuid = user_id);

CREATE POLICY "Users can delete their own progress"
  ON course_progress FOR DELETE
  USING (auth.uid()::uuid = user_id);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_course_progress_user ON course_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_course_progress_item ON course_progress(item_type, item_id);
