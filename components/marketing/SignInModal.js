'use client';

import React, { useState } from 'react';
import { X, ArrowRight, Building2 } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSignIn = (e) => {
    e.preventDefault();
    window.location.href = '/?logged_in=true';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-sm rounded-2xl bg-[#080c14] border border-white/15 p-6 text-slate-100 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-medium text-slate-400">CONSTRUCT-O-GENIE OS</span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Sign In to Platform
            </h3>
            <p className="text-xs text-slate-400">
              Access your project workspace, living BOQ, and site logs.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Work Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-300 font-medium">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <span>Enter Workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
