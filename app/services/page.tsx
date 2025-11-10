import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { PricingCalculator } from '@/components/PricingCalculator';
import { 
  Truck, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Package, 
  Zap, 
  Heart, 
  Scale,
  Phone,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: 'Same-Day Delivery',
      description: 'Urgent deliveries within hours across Coventry and the West Midlands',
      features: ['1-4 hour delivery', 'Real-time tracking', 'Proof of delivery', 'SMS updates'],
      price: 'From £15',
      color: 'amber'
    },
    {
      icon: Clock,
      title: 'Next-Day Delivery',
      description: 'Reliable next-day service across the UK with morning or afternoon slots',
      features: ['Before 12pm delivery', 'Before 6pm delivery', 'Saturday delivery', 'Signature required'],
      price: 'From £8',
      color: 'sky'
    },
    {
      icon: Package,
      title: 'Time-Critical',
      description: 'Emergency deliveries for time-sensitive documents and packages',
      features: ['Within 60 minutes', 'Dedicated driver', 'Direct route', 'Live GPS tracking'],
      price: 'From £25',
      color: 'amber'
    },
    {
      icon: Truck,
      title: 'Contract Services',
      description: 'Regular delivery routes and ongoing logistics partnerships',
      features: ['Weekly routes', 'Monthly contracts', 'Dedicated account manager', 'Volume discounts'],
      price: 'Custom pricing',
      color: 'sky'
    },
    {
      icon: Heart,
      title: 'Healthcare Logistics',
      description: 'Specialized medical deliveries with temperature control and compliance',
      features: ['Temperature monitoring', 'GDPR compliant', 'Medical waste disposal', 'Emergency response'],
      price: 'From £20',
      color: 'amber'
    },
    {
      icon: Scale,
      title: 'Legal Services',
      description: 'Secure document delivery for law firms and legal professionals',
      features: ['Court filings', 'Confidential documents', 'Chain of custody', 'Sworn affidavits'],
      price: 'From £18',
      color: 'sky'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Up to £100,000 coverage on every delivery'
    },
    {
      icon: CheckCircle2,
      title: 'DBS-Checked Drivers',
      description: 'All drivers are security vetted and professional'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Available around the clock, 365 days a year'
    },
    {
      icon: Package,
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking and delivery notifications'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Our
              <span className="block text-sky-400 mt-2">
                Services
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Comprehensive courier solutions tailored to your business needs. From same-day delivery to specialized logistics.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colorScheme = service.color;
              return (
                <Card
                  key={index}
                  className={`group relative border-2 border-gray-200 hover:border-${colorScheme}-500 hover:shadow-2xl hover:shadow-${colorScheme}-500/20 transition-all duration-300 overflow-hidden bg-white hover:-translate-y-2`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${colorScheme}-500/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-16 h-16 bg-${colorScheme}-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-${colorScheme}-500/30`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold text-gray-900 group-hover:text-${colorScheme}-600 mb-3 transition-all duration-300`}>{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className={`w-4 h-4 text-${colorScheme}-500 mr-2 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold text-${colorScheme}-600`}>{service.price}</span>
                      <Button asChild size="sm" className={`bg-${colorScheme}-500 hover:bg-${colorScheme}-600 text-white shadow-lg hover:scale-105 transition-all duration-300`}>
                        <Link href="/contact">
                          Get Quote
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pricing Calculator */}
      <Section className="relative bg-slate-50 py-16">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Instant Delivery Quote
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get an accurate price estimate in seconds. No commitment required.
              </p>
            </div>
            <div className="flex justify-center">
              <PricingCalculator />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="relative bg-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">Why Choose Nelly's Logistics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across the UK for reliable, secure delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group text-center border-2 border-gray-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-500/30">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 mb-3 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-900">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get an instant quote or speak to our team about your delivery requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-10 py-6 shadow-xl shadow-amber-500/30 border-0 hover:scale-110 transition-all duration-300">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-6 bg-white/10 backdrop-blur-sm border-2 border-sky-400/30 text-white hover:bg-sky-500/20 hover:border-sky-400/50 hover:scale-110 transition-all duration-300">
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
