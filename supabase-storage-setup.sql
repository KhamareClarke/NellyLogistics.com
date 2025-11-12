/*
  # Supabase Storage Bucket Setup for Nelly's Logistics
  
  This script creates the 'uploads' storage bucket and configures it for public read access.
  Run this in your Supabase SQL Editor to enable image uploads for profile pictures.
  
  Steps:
  1. Open your Supabase dashboard: https://supabase.com/dashboard
  2. Navigate to your project
  3. Click on "SQL Editor" in the left sidebar
  4. Copy and paste this entire script
  5. Click "Run" to create the storage bucket
*/

-- Create the 'uploads' storage bucket if it doesn't exist
-- Note: If the bucket already exists, this will update its settings
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'uploads',
  'uploads',
  true, -- Make bucket public so images can be accessed
  5242880, -- 5MB file size limit (5 * 1024 * 1024)
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO UPDATE
SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];

-- NOTE: Storage policies must be created through the Supabase Dashboard UI
-- The SQL approach for policies requires owner permissions which regular users don't have.
-- 
-- After running this script, go to:
-- 1. Storage → uploads → Policies
-- 2. Create the following policies manually (see STORAGE-SETUP-GUIDE.md for details)

-- Verify the bucket was created
SELECT 
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types,
  created_at
FROM storage.buckets
WHERE id = 'uploads';

