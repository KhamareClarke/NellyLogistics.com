'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useToast } from '@/hooks/use-toast';
import { Star, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { type Review } from '@/lib/supabase';
import { FileUpload } from '@/components/ui/file-upload';

export default function ReviewsPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    try {
      const response = await fetch('/api/review?published=true');
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      // Set empty array on error to prevent crashes
      setReviews([]);
    }
  }

  const handleFileSelect = (file: File | null) => {
    setProfilePicture(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicturePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePicturePreview(null);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const comment = formData.get('comment') as string;

    // Validate on client side first
    if (!name || name.trim() === '') {
      toast({
        title: 'Error',
        description: 'Please enter your name.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    if (!comment || comment.trim() === '') {
      toast({
        title: 'Error',
        description: 'Please enter your review comment.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    if (!rating || rating < 1 || rating > 5) {
      toast({
        title: 'Error',
        description: 'Please select a rating.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    if (!profilePicture) {
      toast({
        title: 'Error',
        description: 'Please upload a profile picture.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Upload profile picture first
    let profilePictureUrl = '';
    if (profilePicture) {
      try {
        const uploadFormData = new FormData();
        uploadFormData.append('file', profilePicture);
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        });
        
        if (!uploadResponse.ok) {
          let errorMessage = 'Failed to upload profile picture';
          try {
            const errorData = await uploadResponse.json();
            errorMessage = errorData.error || errorMessage;
            if (errorData.details) {
              errorMessage += `: ${errorData.details}`;
            }
          } catch {
            // If response is not JSON, use default message
          }
          throw new Error(errorMessage);
        }
        
        const uploadData = await uploadResponse.json();
        if (!uploadData.url) {
          throw new Error('Upload succeeded but no image URL was returned');
        }
        profilePictureUrl = uploadData.url;
      } catch (uploadError: any) {
        console.error('Profile picture upload error:', uploadError);
        toast({
          title: 'Upload Error',
          description: uploadError?.message || 'Failed to upload profile picture. Please try again.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }
    }

    const data = {
      name: name.trim(),
      rating: Number(rating), // Ensure rating is a number
      comment: comment.trim(),
      profile_picture_url: profilePictureUrl,
    };

    // Validate data before sending
    if (!data.name || !data.comment || !data.rating) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const jsonBody = JSON.stringify(data);
      
      // Log for debugging (remove in production)
      console.log('Submitting review data:', data);
      
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: jsonBody,
      });

      let responseData;
      try {
        responseData = await response.json();
        // Log the response for debugging
        console.log('API Response Status:', response.status);
        console.log('API Response Data:', JSON.stringify(responseData, null, 2));
      } catch (jsonError) {
        // If response is not JSON, check status
        if (response.ok) {
          // Success but no JSON - assume it worked
          toast({
            title: 'Thank you for your review!',
            description: 'Your review will appear after verification.',
          });
          (e.target as HTMLFormElement).reset();
          setRating(5);
          setProfilePicture(null);
          setProfilePicturePreview(null);
          fetchReviews();
          return;
        } else {
          const errorText = await response.text().catch(() => 'Unknown error');
          console.error('Non-JSON error response:', errorText);
          throw new Error(`Server error (${response.status}): ${response.statusText}`);
        }
      }

      if (response.ok) {
        toast({
          title: 'Thank you for your review!',
          description: 'Your review has been published and is now visible.',
        });
        (e.target as HTMLFormElement).reset();
        setRating(5);
        setProfilePicture(null);
        setProfilePicturePreview(null);
        // Refresh reviews list
        fetchReviews();
      } else {
        const errorMessage = responseData?.error || 'Failed to submit review';
        const errorDetails = responseData?.details ? `: ${responseData.details}` : '';
        const fullErrorMessage = errorMessage + errorDetails;
        console.error('API Error Response:', responseData);
        console.error('Full error message:', fullErrorMessage);
        throw new Error(fullErrorMessage);
      }
    } catch (error: any) {
      console.error('Review submission error:', error);
      let errorMessage = 'Failed to submit your review. Please try again.';
      
      if (error?.message) {
        errorMessage = error.message;
      } else if (error?.name === 'TypeError' && error?.message?.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Section className="relative bg-slate-900 py-12 sm:py-16 md:py-20 overflow-hidden" style={{ paddingTop: 'calc(3.5rem + env(safe-area-inset-top, 0px))' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Customer
              <span className="block text-sky-400 mt-1 sm:mt-2">
                Reviews
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Tell us how we did. Leave a review here—or post it on Google to help others find a trusted courier.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            <div>
              <Card className="border-2 border-sky-500 mb-4 sm:mb-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Leave a Review</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">Your Name *</Label>
                      <Input id="name" name="name" required placeholder="John Smith" className="text-sm sm:text-base p-3 sm:p-4" />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm sm:text-base">Rating *</Label>
                      <div className="flex gap-2 sm:gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none touch-target"
                          >
                            <Star
                              className={`w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition-colors ${
                                star <= rating
                                  ? 'text-sky-500 fill-sky-500'
                                  : 'text-gray-300 hover:text-sky-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <FileUpload
                      onFileSelect={handleFileSelect}
                      preview={profilePicturePreview}
                      required={true}
                      maxSize={5}
                      className="mb-4 sm:mb-6"
                    />

                    <div className="space-y-2">
                      <Label htmlFor="comment" className="text-sm sm:text-base">Your Review * (max 500 characters)</Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        required
                        maxLength={500}
                        placeholder="Tell us about your experience with our service..."
                        rows={5}
                        className="text-sm sm:text-base p-3 sm:p-4 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto sm:min-w-[180px] mx-auto sm:mx-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Review →'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Review us on Google</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    Your Google review helps other businesses find a trusted courier service. Click below to leave your feedback on Google.
                  </p>
                  <Button asChild variant="secondary" className="w-full sm:w-auto sm:min-w-[180px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 mx-auto sm:mx-0">
                    <a href={process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Review on Google
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">What Our Customers Say</h2>
              {reviews.length === 0 ? (
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6 sm:p-8 md:p-10 text-center">
                    <Star className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                    <p className="text-gray-600 text-base sm:text-lg">No reviews yet. Be the first to leave a review!</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="group border-2 border-gray-200 hover:border-blue-500 active:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 bg-white">
                      <CardContent className="p-5 sm:p-6 md:p-8">
                        {/* Profile Picture and Rating Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={`${review.profile_picture_url}${review.profile_picture_url.includes('?') ? '&' : '?'}t=${review.id}`}
                              alt={`${review.name}'s profile`}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white shadow-lg ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80&t=${review.id}`;
                              }}
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                              <p className="text-xs sm:text-sm text-gray-500">
                                {new Date(review.created_at).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                    i < review.rating ? 'text-blue-500 fill-blue-500' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Review Comment */}
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic pl-16 sm:pl-18">
                          &quot;{review.comment}&quot;
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
