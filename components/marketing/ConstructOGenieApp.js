'use client';

import React, { useState, useEffect } from 'react';
import ArchitecturalCanvas from './ArchitecturalCanvas';
import ArchitecturalLightTailCursor from './ArchitecturalLightTailCursor';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductPillars from './ProductPillars';
import CommandCentre from './CommandCentre';
import BOQSpine from './BOQSpine';
import ApprovalStack from './ApprovalStack';
import FinanceFlow from './FinanceFlow';
import TradePackageMatrix from './TradePackageMatrix';
import RoleTabs from './RoleTabs';
import PortalsSection from './PortalsSection';
import QualitativeOutcomes from './QualitativeOutcomes';
import AboutUs from './AboutUs';
import FAQSection from './FAQSection';
import ImpactMetrics from './ImpactMetrics';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import BookDemoModal from './BookDemoModal';
import SignInModal from './SignInModal';

export default function ConstructOGenieApp() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Global optimized scroll listener for full-page architectural background
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const current = window.scrollY;
            const progress = Math.min(Math.max(current / docHeight, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 selection:bg-white/20 selection:text-white antialiased font-sans relative">
      
      {/* 0. ARCHITECTURAL LUMINOUS LIGHT-TAIL CURSOR */}
      <ArchitecturalLightTailCursor />

      {/* 1. PERSISTENT ARCHITECTURAL DECONSTRUCTION BACKGROUND CANVAS */}
      <ArchitecturalCanvas 
        scrollProgress={scrollProgress} 
      />

      {/* 2. FLOATING ARCHITECTURAL STUDIO NAVBAR */}
      <Navbar 
        onOpenDemo={() => setDemoOpen(true)} 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* 3. EXECUTIVE PRODUCT SUITE STREAM */}
      <main className="relative z-10 space-y-16 sm:space-y-24">
        
        {/* Act 1: The Monumental Vision & Live Site Stream */}
        <Hero 
          onOpenDemo={() => setDemoOpen(true)} 
        />
        
        {/* Act 2: Complete Platform Overview (4 Product Pillars) */}
        <ProductPillars 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 3: Executive Command Centre (Multi-Site Radar) */}
        <CommandCentre 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 4: The Living BOQ Spine (Itemized Rate Analysis & Locking) */}
        <BOQSpine 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 5: Financial Governance (Maker/Checker Multi-Tier Authorization) */}
        <ApprovalStack 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 6: Commercial Invoicing & Tally, SAP & ERP Sync */}
        <FinanceFlow 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 7: Turnkey Trade Package Registers */}
        <TradePackageMatrix 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 8: Tailored Workspaces for Every Role (with Visual UI Mockup) */}
        <RoleTabs 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 9: Ecosystem Transparency Portals (Client & Subcontractor Hub) */}
        <PortalsSection />
        
        {/* Act 10: Interactive Commercial Margin ROI Simulator */}
        <QualitativeOutcomes 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 11: About Us & Leadership Mission */}
        <AboutUs 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 12: Frequently Asked Questions Accordion */}
        <FAQSection 
          onOpenDemo={() => setDemoOpen(true)} 
        />

        {/* Act 13: Industry Scale & Verified Benchmarks */}
        <ImpactMetrics />
        
        {/* Act 14: Final Call to Action */}
        <FinalCTA 
          onOpenDemo={() => setDemoOpen(true)} 
        />
      </main>

      {/* 4. ENTERPRISE FOOTER */}
      <Footer 
        onOpenDemo={() => setDemoOpen(true)} 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* 5. INTERACTIVE MODALS */}
      <BookDemoModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)} 
      />

      <SignInModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
      />

    </div>
  );
}