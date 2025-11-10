/*
  Migration: Add profile picture support to reviews table
  
  This migration adds the profile_picture_url column to existing reviews table.
  Run this in your Supabase SQL Editor if you already have the reviews table.
*/

-- Add profile_picture_url column to existing reviews table
ALTER TABLE reviews 
ADD COLUMN IF NOT EXISTS profile_picture_url text;

-- For existing reviews without profile pictures, set a default placeholder
UPDATE reviews 
SET profile_picture_url = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
WHERE profile_picture_url IS NULL;

-- Make the column NOT NULL after setting defaults
ALTER TABLE reviews 
ALTER COLUMN profile_picture_url SET NOT NULL;

-- Add comment to document the change
COMMENT ON COLUMN reviews.profile_picture_url IS 'URL to user profile picture - mandatory for all reviews';
