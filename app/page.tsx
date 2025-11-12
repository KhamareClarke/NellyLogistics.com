'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Truck,
  Clock,
  Shield,
  MapPin,
  CheckCircle2,
  Phone,
  Package,
  Zap,
  Building2,
  HeartPulse,
  Scale,
  Radio,
  Star,
  ArrowRight,
  Users,
  Award,
  Target,
  Gauge,
  Globe,
  TrendingUp,
  Quote,
  Calendar,
  MessageCircle,
  Sparkles,
  Rocket,
  Bolt,
  Crown,
  Medal,
  Flame,
  Eye,
  Heart,
  Briefcase,
  FileText,
  Calculator,
  Timer,
  Headphones,
  ChevronDown,
  ExternalLink,
  Mail
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { type Review } from '@/lib/supabase';

export default function HomePage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    deliveries: 0,
    clients: 0,
    coverage: 0,
    satisfaction: 0
  });

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/review?published=true');
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews?.slice(0, 6) || []);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    }

    fetchReviews();

    // Animate stats counter
    const animateStats = () => {
      const targets = { deliveries: 50000, clients: 2500, coverage: 100, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setStats({
          deliveries: Math.floor(targets.deliveries * progress),
          clients: Math.floor(targets.clients * progress),
          coverage: Math.floor(targets.coverage * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, increment);
    };

    const timer = setTimeout(animateStats, 500);
    
    // Scroll animations
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-rotate reviews carousel
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change review every 4 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Zap, title: 'Same-Day Delivery', description: 'Urgent shipments collected and delivered within hours across the UK', price: 'From £15', popular: true },
    { icon: Clock, title: 'Next-Day Service', description: 'Guaranteed next-day delivery nationwide with tracking', price: 'From £8', popular: false },
    { icon: Package, title: 'Time-Critical', description: 'Dedicated vehicles for mission-critical consignments', price: 'From £25', popular: false },
    { icon: Building2, title: 'Contract Services', description: 'Tailored logistics solutions for your business needs', price: 'Custom', popular: false },
    { icon: HeartPulse, title: 'Healthcare Logistics', description: 'Secure, confidential medical and pharmaceutical delivery', price: 'From £20', popular: false },
    { icon: Scale, title: 'Legal Services', description: 'DBS-checked drivers for sensitive legal documents', price: 'From £18', popular: false },
    { icon: Shield, title: 'Police Logistics', description: 'Trusted partner for law enforcement transport needs', price: 'Quote', popular: false },
    { icon: Radio, title: 'Telecoms', description: 'Rapid equipment and parts delivery for telecoms sector', price: 'From £12', popular: false },
  ];


  const industries = [
    { icon: HeartPulse, name: 'Healthcare', count: '500+ clients' },
    { icon: Scale, name: 'Legal', count: '300+ firms' },
    { icon: Building2, name: 'Corporate', count: '1000+ businesses' },
    { icon: Shield, name: 'Government', count: '50+ agencies' },
    { icon: Radio, name: 'Telecoms', count: '200+ companies' },
    { icon: Package, name: 'E-commerce', count: '800+ retailers' }
  ];

  const trustFeatures = [
    { icon: MapPin, title: 'UK & Europe Coverage', description: 'From Coventry to anywhere in the UK and across Europe' },
    { icon: Clock, title: 'Live Tracking', description: 'Real-time updates on every delivery from collection to doorstep' },
    { icon: Shield, title: 'Fully Insured', description: 'Comprehensive insurance up to £100,000 for your peace of mind' },
    { icon: CheckCircle2, title: 'DBS-Checked Drivers', description: 'All drivers security vetted for sensitive deliveries' },
  ];

  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0">
          {/* Base Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        </div>
        
        <Container className="relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wide">UK'S FASTEST GROWING LOGISTICS COMPANY</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                <span className="block">West Midlands Premier</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  Logistics Partner
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-4">
                Same-day delivery, international shipping & secure storage solutions across the UK and Europe. Trusted by 2,500+ businesses since 2014.
              </p>
              
            </div>

            {/* Premium CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 text-lg font-semibold px-10 py-4 rounded-full group">
                <Link href="/contact" className="flex items-center gap-3">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 text-lg font-semibold px-10 py-4 rounded-full group">
                <Link href="/services" className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Premium Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-orange-400/30 transition-all duration-500">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent mb-3">
                    50K+
                  </div>
                  <div className="text-slate-300 text-sm font-semibold tracking-wide">
                    DELIVERIES COMPLETED
                  </div>
                  <div className="text-orange-400 text-xs mt-1 opacity-75">
                    This year alone
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-cyan-400/30 transition-all duration-500">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent mb-3">
                    99.8%
                  </div>
                  <div className="text-slate-300 text-sm font-semibold tracking-wide">
                    ON-TIME DELIVERY
                  </div>
                  <div className="text-cyan-400 text-xs mt-1 opacity-75">
                    Industry leading
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-blue-400/30 transition-all duration-500">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent mb-3">
                    24/7
                  </div>
                  <div className="text-slate-300 text-sm font-semibold tracking-wide">
                    EMERGENCY SUPPORT
                  </div>
                  <div className="text-blue-400 text-xs mt-1 opacity-75">
                    Always available
                  </div>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-orange-400/30 transition-all duration-500">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-white to-orange-200 bg-clip-text text-transparent mb-3">
                    £100K
                  </div>
                  <div className="text-slate-300 text-sm font-semibold tracking-wide">
                    INSURANCE COVERAGE
                  </div>
                  <div className="text-orange-400 text-xs mt-1 opacity-75">
                    Full protection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* Premium Services Section */}
      <Section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              AWARD-WINNING LOGISTICS SERVICES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Professional Courier &
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Logistics Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From urgent same-day deliveries to international freight forwarding - we deliver excellence across Coventry, the UK, and Europe with unmatched reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Same-Day Deliveries */}
            <Card className="group relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Same-Day Courier Coventry
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Emergency same-day delivery across Coventry and the West Midlands. Collection within 60 minutes, delivery within 4 hours guaranteed.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  <span>From £15</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* Pallet Shipping */}
            <Card className="group relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  UK Pallet Delivery Network
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Professional pallet shipping across the UK and Europe. Next-day delivery, full tracking, and comprehensive insurance up to £100,000.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  <span>From £45</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* International */}
            <Card className="group relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  International Freight Forwarding
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Expert international shipping to 200+ countries. Full customs clearance, documentation, and door-to-door delivery worldwide.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Free Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            {/* Storage */}
            <Card className="group relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Secure Warehouse Storage
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Coventry-based secure storage facility with 24/7 CCTV, climate control, and flexible access. Perfect for e-commerce fulfillment.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  <span>From £25/week</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-lg font-semibold px-12 py-4 rounded-full group">
              <Link href="/services" className="flex items-center gap-3">
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Premium Trust Badges - Mobile Responsive */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 opacity-60">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">ISO 9001 Certified</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">Industry Award Winner</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Premium About Section */}
      <Section className="bg-white py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                BIRMINGHAM'S #1 LOGISTICS COMPANY
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                West Midlands Logistics
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                  Experts Since 2014
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Family-owned Coventry courier company serving 2,500+ businesses across the West Midlands, UK, and Europe. Specializing in same-day delivery, international shipping, and secure storage solutions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our experienced team combines local knowledge with cutting-edge logistics technology. From Coventry city center to international destinations, we guarantee reliable, cost-effective delivery solutions tailored to your business needs.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Dedicated Support</h4>
                    <p className="text-slate-600 text-sm">Personal account managers for every client</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Fully Insured</h4>
                    <p className="text-slate-600 text-sm">Comprehensive coverage up to £100k</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Real-Time Tracking</h4>
                    <p className="text-slate-600 text-sm">Live GPS updates every 30 seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Global Reach</h4>
                    <p className="text-slate-600 text-sm">UK, Europe, and worldwide delivery</p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg font-semibold px-10 py-4 rounded-full">
                <Link href="/about" className="flex items-center gap-3">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional logistics team managing warehouse operations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              {/* Premium Floating Stats Card - Mobile Responsive */}
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-slate-200/50 group hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-slate-900 to-orange-600 bg-clip-text text-transparent">99.8%</div>
                    <div className="text-slate-600 font-semibold text-sm sm:text-base">Customer Satisfaction</div>
                    <div className="text-orange-500 text-xs font-medium">5-Star Rated Service</div>
                  </div>
                </div>
              </div>
              
              {/* Premium Floating Badge - Mobile Responsive */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-orange-500 text-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-2 sm:py-4 shadow-2xl shadow-blue-500/25 rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-black">10+</div>
                  <div className="text-xs sm:text-sm font-semibold opacity-95">Years Excellence</div>
                </div>
              </div>
              
              {/* Award Badge - Mobile Responsive */}
              <div className="hidden sm:block absolute top-1/4 -left-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl shadow-orange-500/25 animate-pulse">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>
        </Container>
      </Section>


      {/* Premium Reviews & Testimonials Section */}
      <Section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white mb-8">
              <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-sm font-semibold tracking-wide">CLIENT TESTIMONIALS</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              What Our Clients
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders across the UK and Europe. Here's what our clients have to say about their experience with Nelly's Logistics.
            </p>
          </div>

          {/* Reviews Carousel - Preserve ALL backend logic */}
          {reviews.length > 0 ? (
            <>
              <div className="relative w-full max-w-5xl mx-auto mb-16">
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-600 ease-in-out"
                    style={{ transform: `translateX(-${currentReview * 100}%)` }}
                  >
                    {reviews.map((review, index) => {
                      // Generate avatar initial
                      const initial = review.name.charAt(0).toUpperCase();
                      
                      return (
                        <div key={review.id} className="w-full flex-shrink-0 px-6">
                          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden group hover:bg-white/15 transition-all duration-500">
                            <CardContent className="p-10 text-center">
                              {/* Star Rating */}
                              <div className="flex items-center justify-center mb-8 gap-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-6 h-6 transition-all duration-300 ${
                                      i < review.rating 
                                        ? 'text-cyan-400 fill-cyan-400' 
                                        : 'text-slate-600 fill-slate-600'
                                    }`}
                                  />
                                ))}
                              </div>
                              
                              {/* Review Text */}
                              <div className="relative mb-10">
                                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-400/30" />
                                <p className="text-white text-xl lg:text-2xl leading-relaxed font-light italic">
                                  "{review.comment}"
                                </p>
                                <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-blue-400/30 rotate-180" />
                              </div>
                              
                              {/* Reviewer Info */}
                              <div className="flex items-center justify-center gap-6">
                                {/* Profile Picture */}
                                <div className="w-16 h-16 rounded-full flex-shrink-0 shadow-lg ring-4 ring-white/20">
                                  <img
                                    src={`${review.profile_picture_url}${review.profile_picture_url.includes('?') ? '&' : '?'}t=${review.id}`}
                                    alt={`${review.name}'s profile`}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => {
                                      // Fallback to initial avatar if image fails to load
                                      const target = e.target as HTMLImageElement;
                                      const container = target.parentElement;
                                      if (container) {
                                        container.innerHTML = `<div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"><span class="text-white text-xl font-bold">${initial}</span></div>`;
                                      }
                                    }}
                                  />
                                </div>
                                
                                {/* Name and Company */}
                                <div className="text-left">
                                  <p className="font-bold text-white text-xl mb-1">
                                    {review.name}
                                  </p>
                                  <p className="text-slate-300 text-sm font-medium">
                                    Verified Customer
                                  </p>
                                  <div className="flex items-center gap-1 mt-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-green-400 text-xs font-medium">Verified Purchase</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Modern Carousel Indicators */}
                {reviews.length > 1 && (
                  <div className="flex justify-center items-center gap-3 mt-12">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`transition-all duration-300 ${
                          index === currentReview
                            ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'
                            : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg font-semibold px-12 py-4 rounded-full">
                  <Link href="/reviews" className="flex items-center gap-3">
                    View All Reviews
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-12 h-12 text-white/50" />
              </div>
              <p className="text-white/70 text-xl">No reviews yet. Be the first to share your experience!</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Premium Contact Section */}
      <Section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              FREE INSTANT QUOTES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Get Your Coventry
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Delivery Quote
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Need same-day courier services in Coventry? Call now for instant quotes on local deliveries, UK-wide shipping, and international freight forwarding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-8">
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Call Us Directly</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-2">+44 (0)1234 567890</p>
                    <p className="text-slate-600">Available 24/7 for emergency support and urgent deliveries</p>
                  </div>
                </div>
              </Card>
              
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Support</h3>
                    <p className="text-lg font-semibold text-cyan-600 mb-2">operations@nellyslogistics.com</p>
                    <p className="text-slate-600">Professional response within 2 hours during business hours</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* CTA Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-10 text-white text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Get Instant Quote</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Need a quick estimate? Our intelligent pricing system can provide you with an instant quote for most delivery services.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-lg font-semibold px-10 py-4 rounded-full w-full">
                  <Link href="/contact" className="flex items-center justify-center gap-3">
                    Get Free Quote Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: "Nelly's Logistics",
            image: 'https://www.nellyslogistics.com/og-image.jpg',
            '@id': 'https://www.nellyslogistics.com',
            url: 'https://www.nellyslogistics.com',
            telephone: '+44XXXXXXXXXX',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Birmingham',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 52.4862,
              longitude: -1.8904,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            areaServed: 'United Kingdom',
            priceRange: '££',
          }),
        }}
      />
    </>
  );
}
