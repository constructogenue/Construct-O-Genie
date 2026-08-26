'use client';

import React, { useState, useEffect } from 'react';
import ArchitecturalCanvas from './ArchitecturalCanvas';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import BusinessOutcomes from './BusinessOutcomes';
import ProductExperience from './ProductExperience';
import MasterWorkflow from './MasterWorkflow';
import RoleWorkspaces from './RoleWorkspaces';
import IntegrationsSection from './IntegrationsSection';
import CaseBreakdown from './CaseBreakdown';
import ROICalculator from './ROICalculator';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCTA';
import Footer from './Footer';
import BookDemoModal from './BookDemoModal';
import SignInModal from './SignInModal';

export default function ConstructOGenieApp() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  // High-performance scroll listener for architectural deconstruction background
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
      
      {/* 1. PERSISTENT ARCHITECTURAL DECONSTRUCTION BACKGROUND CANVAS */}
      <ArchitecturalCanvas 
        scrollProgress={scrollProgress}
        manualStage={activeStage}
      />

      {/* 2. FLOATING ENTERPRISE NAVBAR */}
      <Navbar 
        onOpenDemo={() => setDemoOpen(true)} 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* 3. CONSOLIDATED ENTERPRISE SECTIONS */}
      <main className="relative z-10 space-y-16 sm:space-y-24">
        
        {/* 01. Cinematic Deconstruction Hero & Early Product Reveal */}
        <Hero 
          onOpenDemo={() => setDemoOpen(true)}
          onStageSelect={(idx) => setActiveStage(idx)}
          activeStage={activeStage}
        />

        {/* 02. Trust & Positioning Strip */}
        <TrustStrip />

        {/* 03. Three Core Business Outcomes */}
        <BusinessOutcomes 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 04. Actual Product Experience (Interactive Enterprise Showcase) */}
        <ProductExperience 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 05. End-to-End Master Workflow */}
        <MasterWorkflow 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 06. Role-Based Dedicated Workspaces */}
        <RoleWorkspaces 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 07. Enterprise Integrations */}
        <IntegrationsSection 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 08. Modelled Case Breakdown (Before vs After) */}
        <CaseBreakdown 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 09. Interactive Profit Margin Simulator */}
        <ROICalculator 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection 
          onOpenDemo={() => setDemoOpen(true)}
        />

        {/* 11. Final Call to Action */}
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
