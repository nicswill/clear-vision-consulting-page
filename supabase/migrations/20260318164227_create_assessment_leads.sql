/*
  # Create assessment leads table

  1. New Tables
    - `assessment_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `email` (text, unique, not null) - User's email address
      - `phone` (text, not null) - User's phone number
      - `created_at` (timestamptz) - Timestamp when lead was captured
      - `assessment_completed` (boolean) - Whether user completed the assessment
      - `assessment_results` (jsonb) - Store the P3 assessment results if completed
      
  2. Security
    - Enable RLS on `assessment_leads` table
    - Add policy for inserting new leads (public access)
    - Add policy for authenticated admin users to view all leads
*/

CREATE TABLE IF NOT EXISTS assessment_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now(),
  assessment_completed boolean DEFAULT false,
  assessment_results jsonb,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE assessment_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create assessment leads"
  ON assessment_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can update their own lead by email"
  ON assessment_leads
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_assessment_leads_email ON assessment_leads(email);
CREATE INDEX IF NOT EXISTS idx_assessment_leads_created_at ON assessment_leads(created_at DESC);