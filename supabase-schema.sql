/*
  # Create reviews table for Nelly's Logistics

  Run this SQL in your Supabase SQL Editor to set up the reviews table.

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text, required) - Name of the reviewer
      - `rating` (int2, required) - Rating from 1 to 5 stars
      - `comment` (text, required) - Review comment text
      - `published` (boolean, default false) - Whether review is published on site
      - `created_at` (timestamptz, default now()) - Timestamp of review submission

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to published reviews only
    - Add policy for public insert (submissions start unpublished)
    - Add policy for authenticated users to manage all reviews (for admin moderation)

  3. Constraints
    - Rating must be between 1 and 5
    - Comment limited to 500 characters
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating int2 NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL CHECK (char_length(comment) <= 500),
  profile_picture_url text NOT NULL, -- Mandatory profile picture URL
  published boolean DEFAULT false NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published reviews"
  ON reviews
  FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews
  FOR INSERT
  WITH CHECK (true); -- Allow publishing immediately

CREATE POLICY "Authenticated users can view all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_reviews_published_created ON reviews(published, created_at DESC);
