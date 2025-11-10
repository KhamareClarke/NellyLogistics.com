'use client';

import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      pickupPostcode: formData.get('pickupPostcode'),
      dropoffPostcode: formData.get('dropoffPostcode'),
      details: formData.get('details'),
      when: formData.get('when'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Quote request sent!',
          description: "We'll get back to you within 30 minutes during business hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send your request. Please call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Get Your
              <span className="block text-sky-400 mt-2">
                Instant Quote
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fill in your details below or call us directly. We respond to all quote requests within 30 minutes during business hours.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" name="name" required placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="Optional" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="+44 XXXX XXXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupPostcode">Pickup Postcode *</Label>
                        <Input id="pickupPostcode" name="pickupPostcode" required placeholder="B1 1AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoffPostcode">Delivery Postcode *</Label>
                        <Input id="dropoffPostcode" name="dropoffPostcode" required placeholder="M1 1AA" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="when">When do you need delivery? *</Label>
                      <Input id="when" name="when" required placeholder="e.g., Same-day, Next-day, Tomorrow 2pm" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Shipment Details *</Label>
                      <Textarea
                        id="details"
                        name="details"
                        required
                        placeholder="Size, weight, special requirements..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Your Quote →'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-sky-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-6">
                    <Phone className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us 24/7</h3>
                      <a href="tel:02475269000" className="text-lg text-sky-600 hover:text-sky-700 font-medium">
                        02475 269000
                      </a>
                      <br />
                      <a href="tel:+447727363722" className="text-lg text-sky-600 hover:text-sky-700 font-medium">
                        +44 7727 363722
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Available around the clock</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <Mail className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:operations@nellyslogistics.com" className="text-sky-600 hover:text-sky-700">
                        operations@nellyslogistics.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Response within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-700">Unit 5 Warwick St</p>
                      <p className="text-gray-700">Coventry CV5 6ET</p>
                      <p className="text-sm text-gray-600 mt-1">Central UK hub</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                      <p className="text-gray-700">24/7 Service</p>
                      <p className="text-sm text-gray-600 mt-1">365 days a year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-sky-50 border-2 border-sky-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Fast Response Guaranteed</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We pride ourselves on rapid response times. All quote requests receive a reply within 30 minutes
                    during business hours. For urgent bookings outside office hours, call our 24/7 hotline.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Emergency Deliveries</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    For urgent same-day or time-critical deliveries, please call us directly for the fastest service.
                  </p>
                  <Button asChild className="w-full sm:w-auto sm:min-w-[180px] bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 mx-auto sm:mx-0">
                    <a href="tel:02475269000" className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                    <p className="font-medium">Unit 5 Warwick St, Coventry CV5 6ET</p>
                    <p className="text-sm">Central location for nationwide coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
