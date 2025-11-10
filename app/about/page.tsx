import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Link from 'next/link';
import {
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  Phone,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Professional Birmingham Courier Service | Nelly\'s Logistics',
  description: 'Nelly\'s Logistics - trusted Birmingham courier service. 24/7 operations, fully insured deliveries, DBS-checked drivers. Serving UK & Europe with same-day, next-day & specialist logistics since establishment.',
  keywords: ['about Birmingham courier', 'logistics company Birmingham', 'professional courier service', 'insured delivery UK', 'DBS checked courier drivers'],
  openGraph: {
    title: 'About Nelly\'s Logistics | Birmingham\'s Trusted Courier Service',
    description: '24/7 courier service from Birmingham serving UK & Europe. Fully compliant, insured, and trusted by businesses nationwide.',
    type: 'website',
    url: 'https://www.nellyslogistics.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'Round-the-clock operations mean we\'re always ready to handle your urgent shipments, any time of day or night.',
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      description: 'Comprehensive insurance, goods in transit cover, and compliance with all sector-specific regulations including healthcare and legal.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Trusted by healthcare providers, legal firms, police forces, and businesses across the UK for mission-critical deliveries.',
    },
    {
      icon: Users,
      title: 'Vetted Drivers',
      description: 'All drivers are professionally trained. DBS-checked drivers available for sensitive or high-security shipments.',
    },
  ];

  const stats = [
    { number: '24/7', label: 'Service Available' },
    { number: '100%', label: 'Insured Deliveries' },
    { number: 'UK+EU', label: 'Coverage Area' },
    { number: '60min', label: 'Collection Time' },
  ];

  return (
    <>
      <Section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              About
              <span className="block text-sky-400 mt-2">
                Nelly&apos;s Logistics
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your trusted partner for urgent, reliable courier services across the UK and Europe
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Nelly&apos;s Logistics, we understand that when you need a courier, it&apos;s because something matters.
                Whether it&apos;s a time-critical medical shipment, urgent legal documents for a court deadline, or
                essential equipment for an engineer on site—your delivery is our priority.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Based in Birmingham with nationwide reach, we combine the reliability of a professional logistics
                operation with the responsiveness of a dedicated courier service. Our 24/7 operations mean we&apos;re
                always ready, and our real-time tracking gives you complete peace of mind.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From same-day urgent deliveries to contract logistics for high-volume shippers, we tailor our
                services to your needs. Every driver is professionally trained, every vehicle is well-maintained,
                and every delivery is fully insured and tracked.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-lg">
                          <value.icon className="w-6 h-6 text-sky-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-50 border-2 mb-16">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Insurance</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Fully Insured</p>
                      <p className="text-gray-600">Comprehensive goods in transit insurance up to £100,000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">DBS-Checked Drivers</p>
                      <p className="text-gray-600">Security-vetted drivers available for sensitive shipments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">GDP Compliance</p>
                      <p className="text-gray-600">Healthcare logistics meet Good Distribution Practice standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">GDPR & Confidentiality</p>
                      <p className="text-gray-600">Strict data protection and confidential handling protocols</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sky-50 border-2 border-sky-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-12 h-12 text-sky-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Birmingham Base, National Reach</h2>
                    <p className="text-gray-700 text-lg mb-4">
                      Operating from the heart of the UK gives us unparalleled access to the entire country.
                      From Scotland to Cornwall, London to Wales—we deliver anywhere, anytime.
                    </p>
                    <p className="text-gray-700 text-lg">
                      Our European network extends our reach across the continent, ensuring your shipments
                      get where they need to be, no matter the destination.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-sky-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Experience the Difference?</h2>
            <p className="text-lg mb-6 text-sky-50">
              Join the businesses across the UK who trust Nelly&apos;s Logistics for their critical deliveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-600">
                <a href="tel:+44XXXXXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 24/7
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
