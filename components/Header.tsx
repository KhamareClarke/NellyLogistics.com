'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Phone, Menu, X, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium">02475 269000</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
              <div className="flex items-center gap-2 hover:text-blue-300 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="font-medium">operations@nellyslogistics.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-slate-300">24/7 Emergency Support</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-900/10 border-b border-slate-200/50' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-3 sm:gap-4">
          <Logo variant="header" className="flex-shrink-0 min-w-0" />

          <nav className="hidden lg:flex items-center space-x-8 flex-shrink-0">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-slate-700 font-semibold text-sm tracking-wide transition-all duration-300 hover:text-blue-600 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 text-sm font-semibold px-6 py-2.5 rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl">
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-700 font-semibold text-base py-3 px-4 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-full mt-4">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}
