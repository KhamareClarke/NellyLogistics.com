# Supabase Storage Setup Guide

This guide will help you set up the Supabase storage bucket for profile picture uploads.

## Why This Is Needed

The review system needs to upload profile pictures. The storage bucket must be created and configured with proper permissions to allow:
- Public read access (so images can be displayed on your website)
- Public upload access (so users can submit profile pictures with reviews)

## Step-by-Step Setup

### Step 1: Open Supabase Dashboard

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sign in to your account
3. Select your project (the one with URL: `https://hbkarxrwxggdfivzgpzm.supabase.co`)

### Step 2: Create the Storage Bucket

**Option A: Using SQL (Recommended)**

1. In your Supabase dashboard, click on **"SQL Editor"** in the left sidebar
2. Click **"New query"** button
3. Open the file `supabase-storage-setup.sql` from this project
4. Copy the **entire contents** of the file
5. Paste it into the SQL Editor
6. Click the **"Run"** button (or press `Ctrl+Enter` / `Cmd+Enter`)

You should see a success message and a table showing the bucket details.

**Option B: Using Dashboard UI (Alternative)**

1. In your Supabase dashboard, click on **"Storage"** in the left sidebar
2. Click **"New bucket"** button
3. Fill in the form:
   - **Name**: `uploads`
   - **Public bucket**: Toggle **ON** (this is important!)
   - **File size limit**: `5242880` (5 MB)
   - **Allowed MIME types**: `image/jpeg, image/jpg, image/png, image/gif, image/webp`
4. Click **"Create bucket"**

### Step 3: Set Up Storage Policies (REQUIRED)

Storage policies control who can read and upload files. You must set these up through the dashboard:

1. In your Supabase dashboard, go to **Storage** → **uploads** bucket
2. Click on the **"Policies"** tab
3. Click **"New Policy"** button

**Create Policy 1: Public Read Access**
- **Policy name**: `Public can view uploads`
- **Allowed operation**: Select **SELECT** (for reading files)
- **Target roles**: Select **public**
- **USING expression**: `bucket_id = 'uploads'`
- Click **"Review"** then **"Save policy"**

**Create Policy 2: Public Upload Access**
- Click **"New Policy"** again
- **Policy name**: `Public can upload to uploads`
- **Allowed operation**: Select **INSERT** (for uploading files)
- **Target roles**: Select **public**
- **WITH CHECK expression**: `bucket_id = 'uploads'`
- Click **"Review"** then **"Save policy"**

### Step 4: Verify the Bucket Was Created

1. In your Supabase dashboard, click on **"Storage"** in the left sidebar
2. You should see a bucket named **"uploads"** in the list
3. Click on the **"uploads"** bucket
4. Verify it shows:
   - **Public bucket**: Yes (toggle should be ON)
   - **File size limit**: 5 MB
   - **Allowed MIME types**: image/jpeg, image/jpg, image/png, image/gif, image/webp
5. Check the **"Policies"** tab - you should see 2 policies listed

### Step 5: Test the Upload

1. Go to your website's reviews page
2. Try submitting a review with a profile picture
3. The upload should now work!

## Troubleshooting

### Error: "must be owner of table objects" or "42501"

If you see this error when running the SQL script:
- **This is normal!** The script tries to create storage policies via SQL, but regular users don't have permission to modify `storage.objects` directly.
- **Solution**: The SQL script will still create the bucket successfully. You just need to create the policies manually through the dashboard (see Step 3 above).

### Error: "bucket already exists"

If you see this error, the bucket already exists. You can either:
- **Option A**: Delete the existing bucket and run the script again
  - Go to Storage → uploads → Settings → Delete bucket
- **Option B**: Just run the policy creation parts (lines 30-48 of the SQL file)

### Error: "permission denied"

If you get permission errors:
1. Make sure you're logged in as the project owner/admin
2. Check that RLS (Row Level Security) is enabled on storage.objects
3. Verify the policies were created correctly

### Images Still Not Uploading

If uploads still fail after setup:

1. **Check the bucket exists:**
   - Go to Storage → Check if "uploads" bucket is listed

2. **Check bucket is public:**
   - Go to Storage → uploads → Settings
   - Toggle "Public bucket" to ON if it's off

3. **Check policies:**
   - Go to Storage → uploads → Policies
   - You should see:
     - "Public can view uploads" (SELECT policy)
     - "Public can upload to uploads" (INSERT policy)

4. **Check browser console:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Try uploading an image
   - Look for any error messages

5. **Check Supabase logs:**
   - Go to Supabase Dashboard → Logs → API Logs
   - Look for errors related to storage uploads

### Quick Reference: Policy Setup

If you need to recreate the policies, here's a quick reference:

**Policy 1 - Read Access:**
- Name: `Public can view uploads`
- Operation: **SELECT**
- Roles: **public**
- USING: `bucket_id = 'uploads'`

**Policy 2 - Upload Access:**
- Name: `Public can upload to uploads`
- Operation: **INSERT**
- Roles: **public**
- WITH CHECK: `bucket_id = 'uploads'`

## Security Considerations

⚠️ **Note**: The current setup allows **anyone** to upload images. This is fine for a review system, but consider:

- **File size limits** are enforced (5MB max)
- **File type restrictions** are enforced (images only)
- You can add rate limiting later if needed
- You can require authentication for uploads if you want more control

## Next Steps

Once the storage is set up:
1. Test uploading a profile picture with a review
2. Verify the image appears correctly in the review
3. Check that each review shows its own unique image

If you encounter any issues, check the error messages in:
- Browser console (F12 → Console)
- Supabase dashboard → Logs → API Logs
- Your application's error logs

