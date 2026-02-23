-- Enable pg_net extension for HTTP requests (required for webhook triggers)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT false,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  unsubscribed BOOLEAN DEFAULT false,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Users can view own subscription" ON newsletter_subscribers;

-- RLS Policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own subscription"
  ON newsletter_subscribers FOR SELECT
  USING (auth.jwt() ->> 'email' = email);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at);

-- Function to send welcome email via HTTP request to Edge Function
CREATE OR REPLACE FUNCTION public.handle_new_subscriber()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function to send welcome email
  PERFORM net.http_post(
    url := 'https://vptixdomrdxksufgkurp.supabase.co/functions/v1/send-welcome-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := jsonb_build_object(
      'email', NEW.email,
      'firstName', NEW.first_name
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to send welcome email on new subscription
DROP TRIGGER IF EXISTS on_newsletter_subscribe ON newsletter_subscribers;
CREATE TRIGGER on_newsletter_subscribe
  AFTER INSERT ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_subscriber();
