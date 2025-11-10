import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Summary */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo variant="footer" />
            </div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Generation Logistics
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Coventry-based logistics innovators revolutionizing supply chain management with cutting-edge technology and unparalleled service excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group" aria-label="Facebook">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group" aria-label="Twitter">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Location</p>
                  <p className="text-slate-300">Unit 5 Warwick St, Coventry CV5 6ET</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:02475269000" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    02475 269000
                  </a>
                  <br />
                  <a href="tel:+447727363722" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    +44 7727 363722
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email Us</p>
                  <a href="mailto:operations@nellyslogistics.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    operations@nellyslogistics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-slate-400">
              &copy; {currentYear} Nelly&apos;s Logistics. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/legal/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/legal/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
