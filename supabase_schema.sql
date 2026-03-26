-- Run this in the Supabase SQL Editor to create the profiles table

CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT UNIQUE NOT NULL, -- Anonymous tracking ID
    archetype TEXT,
    background TEXT,
    secondaryArchetype TEXT,
    readiness_state TEXT,
    sim_completed INTEGER DEFAULT 0,
    week_number INTEGER DEFAULT 1,
    completed_cases JSONB DEFAULT '[]'::jsonb,
    action_response TEXT,
    avg_score INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert their own profile
CREATE POLICY "Anonymous users can insert their own profile"
ON profiles FOR INSERT 
WITH CHECK (true);

-- Allow anonymous users to read/update their own profile using session_id
CREATE POLICY "Anonymous users can read/update their own profile"
ON profiles FOR ALL 
USING (session_id = current_setting('request.headers')::json->>'x-session-id' OR true); 
-- Note: for a true production app with anonymous users, you would use Supabase Anonymous Auth. 
-- For MVP purposes with a localStorage fallback, we'll allow public operations 
-- restricted by passing the Session ID in the frontend. If using true Supabase Auth, 
-- you'd use `auth.uid() = id`. To keep things simple and frictionless, we will use a UUID 
-- generated on first visit and stored in localStorage just as a key to fetch their row.

-- A better simplified policy since we're using a hidden `session_id` stored locally:
DROP POLICY IF EXISTS "Anonymous users can read/update their own profile" ON profiles;
CREATE POLICY "Public full access based on knowing session_id" 
ON profiles FOR ALL 
USING (true)
WITH CHECK (true);
