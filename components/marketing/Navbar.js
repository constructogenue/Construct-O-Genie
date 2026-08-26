'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenDemo, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['overview', 'outcomes', 'product', 'workflow', 'roles', 'integrations', 'roi', 'faq'];
      const scrollPos = window.scrollY + 180;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Outcomes', href: '#outcomes', id: 'outcomes' },
    { name: 'Platform', href: '#product', id: 'product' },
    { name: 'Workflow', href: '#workflow', id: 'workflow' },
    { name: 'Roles', href: '#roles', id: 'roles' },
    { name: 'Integrations', href: '#integrations', id: 'integrations' },
    { name: 'ROI', href: '#roi', id: 'roi' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 py-3 sm:py-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'apple-glass shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'bg-[#080B10]/75 border border-white/10 backdrop-blur-md'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <img
                src="/brand/logo-icon.png"
                alt="Construct-O-Genie"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="text-left">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-none block font-display">
                Construct-O-Genie
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono tracking-wider uppercase block mt-0.5">
                Fit-Out Construction OS
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 font-medium text-xs">
          <button
            onClick={onOpenLogin}
            className="hidden sm:block px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-sans"
          >
            Sign In
          </button>
          
          <button
            onClick={onOpenDemo}
            className="group inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 active:scale-95 transition-all duration-200 shadow-md cursor-pointer tracking-wide"
          >
            <span>Book a 15-Min Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white cursor-pointer ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="pointer-events-auto fixed inset-0 bg-black/75 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="pointer-events-auto fixed inset-x-4 top-20 max-h-[85vh] overflow-y-auto p-6 rounded-3xl apple-glass shadow-2xl flex flex-col gap-2.5 text-sm font-medium z-50 xl:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-slate-200 hover:text-white border-b border-white/10 font-sans"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold"
              >
                Sign In to Enterprise Portal
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
                className="w-full py-3 rounded-xl bg-white text-slate-950 font-bold text-xs tracking-wide"
              >
                Book a 15-Min Demo
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
