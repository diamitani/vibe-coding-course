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

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can insert their own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON course_progress;
DROP POLICY IF EXISTS "Users can delete their own progress" ON course_progress;

-- RLS Policies using proper comparison (convert both to text for compatibility)
CREATE POLICY "Users can view their own progress"
  ON course_progress FOR SELECT
  TO authenticated
  USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can insert their own progress"
  ON course_progress FOR INSERT
  TO authenticated
  WITH CHECK (user_id::text = auth.uid()::text);

CREATE POLICY "Users can update their own progress"
  ON course_progress FOR UPDATE
  TO authenticated
  USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can delete their own progress"
  ON course_progress FOR DELETE
  TO authenticated
  USING (user_id::text = auth.uid()::text);

-- Add columns if they don't exist (for existing tables)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'course_progress' AND column_name = 'item_type') THEN
        ALTER TABLE course_progress ADD COLUMN item_type TEXT NOT NULL DEFAULT 'module';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'course_progress' AND column_name = 'item_id') THEN
        ALTER TABLE course_progress ADD COLUMN item_id TEXT NOT NULL DEFAULT '';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'course_progress' AND column_name = 'completed') THEN
        ALTER TABLE course_progress ADD COLUMN completed BOOLEAN DEFAULT true;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'course_progress' AND column_name = 'completed_at') THEN
        ALTER TABLE course_progress ADD COLUMN completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_course_progress_user ON course_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_course_progress_item ON course_progress(item_type, item_id);
