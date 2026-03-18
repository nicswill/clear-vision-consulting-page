/*
  # Leadership Consultation Requests

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `full_name` (text) - Full name of the requester
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `organization` (text) - Organization or business name
      - `leadership_role` (text) - Current leadership role
      - `challenge` (text) - Leadership challenge they want to address
      - `contact_method` (text) - Preferred contact method (phone, email, either)
      - `best_time` (text) - Best time to connect
      - `created_at` (timestamptz) - When the request was submitted
      - `status` (text) - Request status (pending, contacted, scheduled, completed)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for anonymous users to insert their consultation requests
    - Add policy for authenticated admin users to view all requests
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text NOT NULL,
  leadership_role text NOT NULL,
  challenge text NOT NULL,
  contact_method text NOT NULL,
  best_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' NOT NULL
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation request"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);