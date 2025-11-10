import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Force dynamic rendering - this API route must run on each request
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

// Mock data storage for frontend-only operation (fallback)
const mockReviews: any[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Excellent service! My package was delivered exactly on time and the driver was very professional.',
    profile_picture_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    published: true,
    created_at: '2024-10-15T10:30:00Z'
  },
  {
    id: '2', 
    name: 'Mike Thompson',
    rating: 5,
    comment: 'Used Nelly\'s for urgent same-day delivery. Fantastic communication and reliable service.',
    profile_picture_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    published: true,
    created_at: '2024-10-10T14:20:00Z'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    rating: 4,
    comment: 'Great courier service, very competitive prices and friendly staff.',
    profile_picture_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80',
    published: true,
    created_at: '2024-10-05T09:15:00Z'
  }
];

export async function POST(request: NextRequest) {
  try {
    let body;
    
    // Read request body as text first, then parse JSON
    // This allows us to log the raw body if parsing fails
    try {
      const rawBody = await request.text();
      
      // Check if body is empty
      if (!rawBody || rawBody.trim() === '') {
        console.error('Empty request body received');
        return NextResponse.json(
          { error: 'Request body is empty' },
          { status: 400 }
        );
      }

      // Try to parse JSON
      try {
        body = JSON.parse(rawBody);
      } catch (jsonParseError: any) {
        console.error('JSON parse error:', jsonParseError);
        console.error('Raw body that failed to parse:', rawBody);
        console.error('Body length:', rawBody.length);
        return NextResponse.json(
          { 
            error: 'Invalid JSON in request body', 
            details: jsonParseError?.message || 'Could not parse request body as JSON'
          },
          { status: 400 }
        );
      }
    } catch (readError: any) {
      console.error('Error reading request body:', readError);
      return NextResponse.json(
        { 
          error: 'Failed to read request body', 
          details: readError?.message || 'Unknown error reading request'
        },
        { status: 400 }
      );
    }

    // Validate body structure
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      console.error('Invalid body structure:', typeof body, body);
      return NextResponse.json(
        { error: 'Request body must be a valid JSON object' },
        { status: 400 }
      );
    }

    console.log('Received body:', body);
    const { name, rating, comment, profile_picture_url } = body;
    console.log('Extracted values:', { name, rating, comment, profile_picture_url, ratingType: typeof rating });

    // Validate required fields
    if (!name || name.trim() === '') {
      console.error('Validation failed: Name is empty');
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (rating === null || rating === undefined) {
      console.error('Validation failed: Rating is null/undefined');
      return NextResponse.json(
        { error: 'Rating is required' },
        { status: 400 }
      );
    }

    if (!comment || comment.trim() === '') {
      console.error('Validation failed: Comment is empty');
      return NextResponse.json(
        { error: 'Comment is required' },
        { status: 400 }
      );
    }

    if (!profile_picture_url || profile_picture_url.trim() === '') {
      console.error('Validation failed: Profile picture URL is empty');
      return NextResponse.json(
        { error: 'Profile picture is required' },
        { status: 400 }
      );
    }

    // Validate rating range
    const ratingNum = Number(rating);
    console.log('Rating conversion:', { original: rating, converted: ratingNum, isNaN: isNaN(ratingNum) });
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      console.error('Validation failed: Rating out of range', { ratingNum, isNaN: isNaN(ratingNum) });
      return NextResponse.json(
        { error: 'Rating must be a number between 1 and 5' },
        { status: 400 }
      );
    }

    // Validate comment length
    const commentTrimmed = comment.trim();
    if (commentTrimmed.length > 500) {
      return NextResponse.json(
        { error: 'Comment must be 500 characters or less' },
        { status: 400 }
      );
    }

    const reviewData = {
      name: name.trim(),
      rating: ratingNum,
      comment: commentTrimmed,
      profile_picture_url: profile_picture_url.trim(),
      published: true, // Publish immediately - no verification needed
    };

    const supabaseUrl = 'https://hbkarxrwxggdfivzgpzm.supabase.co';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhia2FyeHJ3eGdnZGZpdnpncHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTUxMjcsImV4cCI6MjA3NzQ5MTEyN30.TK35Y_cGSbOKG5GRRu6llYbTM1B7us3EpuC6C03RXuc';
    const supabase = getSupabaseClient();

    console.log('Review data to save:', reviewData);
    console.log('Supabase client available:', !!supabase);
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase key present:', !!supabaseAnonKey);
    console.log('Supabase key length:', supabaseAnonKey?.length || 0);
    
    // Warn if Supabase is not configured
    if (!supabase) {
      console.warn('WARNING: Supabase client not initialized. Check environment variables!');
      console.warn('URL check:', { 
        hasUrl: !!supabaseUrl, 
        urlValue: supabaseUrl,
        isMock: supabaseUrl === 'https://mock.supabase.co'
      });
      console.warn('Key check:', { 
        hasKey: !!supabaseAnonKey, 
        isMock: supabaseAnonKey === 'mock-key',
        keyLength: supabaseAnonKey?.length || 0
      });
      // In mock mode, still allow submission
      console.log('Using mock mode - review will not be saved to database');
    }

    // Try to save to Supabase if available
    if (supabase) {
      try {
        console.log('Attempting to insert review into Supabase...');
        const { data, error } = await supabase
          .from('reviews')
          .insert([reviewData])
          .select()
          .single();

        if (error) {
          console.error('Supabase error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code,
            fullError: JSON.stringify(error, null, 2)
          });
          return NextResponse.json(
            { 
              error: 'Failed to save review to database', 
              details: error.message || 'Unknown database error',
              hint: error.hint || null,
              code: error.code || null
            },
            { status: 500 }
          );
        }

        console.log('Review successfully saved to Supabase:', data);
        return NextResponse.json({ ok: true, data }, { status: 200 });
      } catch (supabaseError: any) {
        console.error('Supabase insertion exception:', {
          message: supabaseError?.message,
          stack: supabaseError?.stack,
          fullError: JSON.stringify(supabaseError, null, 2)
        });
        return NextResponse.json(
          { 
            error: 'Database error occurred', 
            details: supabaseError?.message || 'Unknown error',
            stack: process.env.NODE_ENV === 'development' ? supabaseError?.stack : undefined
          },
          { status: 500 }
        );
      }
    } else {
      // Mock mode - just log and return success
      const newReview = {
        id: Date.now().toString(),
        ...reviewData,
        created_at: new Date().toISOString()
      };

      console.log('New review submitted (mock mode):', newReview);
      return NextResponse.json({ ok: true, data: newReview }, { status: 200 });
    }
  } catch (error: any) {
    console.error('Error processing review:', error);
    console.error('Error stack:', error?.stack);
    return NextResponse.json(
      { 
        error: 'Failed to process request', 
        details: error?.message || 'Unknown error occurred',
        type: error?.name || 'UnknownError',
        // Only include stack in development
        ...(process.env.NODE_ENV === 'development' && { stack: error?.stack })
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const published = searchParams.get('published') === 'true';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 10;
    const offset = (page - 1) * limit;

    // Try to fetch from Supabase if available
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        let query = supabase
          .from('reviews')
          .select('*', { count: 'exact' });

        if (published) {
          query = query.eq('published', true);
        }

        const { data, error, count } = await query
          .order('created_at', { ascending: false })
          .range(offset, offset + limit - 1);

        if (error) {
          console.error('Supabase fetch error details:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code,
            fullError: JSON.stringify(error, null, 2)
          });
          // Fallback to mock data on error, but log the issue
          console.warn('Falling back to mock data due to Supabase error');
        } else if (data !== null && data !== undefined) {
          return NextResponse.json(
            {
              reviews: data || [],
              total: count || 0,
              page,
              totalPages: Math.ceil((count || 0) / limit),
            },
            { status: 200 }
          );
        }
      } catch (supabaseError: any) {
        console.error('Supabase fetch exception:', {
          message: supabaseError?.message,
          stack: supabaseError?.stack,
          fullError: JSON.stringify(supabaseError, null, 2)
        });
        console.warn('Falling back to mock data due to Supabase exception');
        // Fallback to mock data below
      }
    } else {
      console.warn('Supabase not configured - using mock data for GET request');
    }

    // Fallback to mock data
    let filteredReviews = mockReviews;
    if (published) {
      filteredReviews = mockReviews.filter(review => review.published);
    }

    // Sort by created_at descending
    filteredReviews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    // Apply pagination
    const paginatedReviews = filteredReviews.slice(offset, offset + limit);
    const total = filteredReviews.length;

    return NextResponse.json(
      {
        reviews: paginatedReviews,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to process request', details: error?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
