'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDemo, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-black/80 border-b border-white/10 backdrop-blur-xl py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/brand/logo-icon-white.png"
              alt="Construct-O-Genie"
              className="w-7 h-7 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-sm sm:text-base tracking-tight text-white">
              Construct-O-Genie
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
            <a href="/#product-tour" className="hover:text-white transition-colors">Product Tour</a>
            <a href="/#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all shadow-sm active:scale-[0.98] flex items-center gap-1.5"
            >
              <span>Book a 15-Min Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] text-slate-300 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 space-y-4 bg-black/95 rounded-2xl p-4 border">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-200">
              <a 
                href="/#product-tour" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Product Tour
              </a>
              <a 
                href="/#roi-calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                ROI Calculator
              </a>
              <Link 
                href="/security" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Security
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white"
              >
                Contact &amp; Sales
              </Link>
            </nav>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs text-center"
              >
                Book a 15-Min Demo
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] text-slate-200 font-medium text-xs text-center border border-white/10"
              >
                Sign In
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
