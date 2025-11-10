import { createClient } from '@supabase/supabase-js';

// Supabase client configuration
const supabaseUrl = 'https://hbkarxrwxggdfivzgpzm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhia2FyeHJ3eGdnZGZpdnpncHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTUxMjcsImV4cCI6MjA3NzQ5MTEyN30.TK35Y_cGSbOKG5GRRu6llYbTM1B7us3EpuC6C03RXuc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  profile_picture_url: string; // Mandatory profile picture URL
  published: boolean;
  created_at: string;
};
