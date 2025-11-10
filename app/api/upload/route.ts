import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Helper function to create Supabase client
function getSupabaseClient() {
  const supabaseUrl = 'https://hbkarxrwxggdfivzgpzm.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhia2FyeHJ3eGdnZGZpdnpncHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTUxMjcsImV4cCI6MjA3NzQ5MTEyN30.TK35Y_cGSbOKG5GRRu6llYbTM1B7us3EpuC6C03RXuc';

  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    
    if (!supabase) {
      // Fallback: return a placeholder image URL for development
      console.warn('Supabase not configured - using placeholder image');
      const placeholderUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80';
      return NextResponse.json({ url: placeholderUrl }, { status: 200 });
    }

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `profile-pictures/${fileName}`;

      // Convert file to buffer
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('uploads') // Make sure this bucket exists in your Supabase project
        .upload(filePath, buffer, {
          contentType: file.type,
          upsert: false
        });

      if (error) {
        console.error('Supabase upload error:', error);
        // Fallback to placeholder on error
        const placeholderUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80';
        return NextResponse.json({ url: placeholderUrl }, { status: 200 });
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from('uploads')
        .getPublicUrl(filePath);

      if (!publicUrlData?.publicUrl) {
        throw new Error('Failed to get public URL');
      }

      return NextResponse.json({ 
        url: publicUrlData.publicUrl,
        path: filePath 
      }, { status: 200 });

    } catch (uploadError: any) {
      console.error('File upload error:', uploadError);
      // Fallback to placeholder on error
      const placeholderUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80';
      return NextResponse.json({ url: placeholderUrl }, { status: 200 });
    }

  } catch (error: any) {
    console.error('Upload API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process upload', 
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}
