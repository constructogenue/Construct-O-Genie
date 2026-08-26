'use client';

import React, { useState } from 'react';
import { X, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const [role, setRole] = useState('founder');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Demo sign-in simulated for ${role} role (${email || 'demo@constructogenie.in'}).`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="fixed inset-0"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-[#080B10] border border-white/20 backdrop-blur-2xl shadow-2xl text-left z-10 space-y-6 font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
            SECURE ENTERPRISE PORTAL
          </span>
          <h3 className="text-xl font-bold text-white font-display mt-0.5">
            Sign In to Construct-O-Genie
          </h3>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">Select Workspace</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-black/80 border border-white/15 text-white focus:outline-none focus:border-white transition-colors"
            >
              <option value="founder">Founder / Managing Director</option>
              <option value="qs">Quantity Surveyor & Estimator</option>
              <option value="pm">Project Manager</option>
              <option value="site">Site Supervisor (DPR)</option>
              <option value="finance">Finance & Accounts Head</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Work Email</label>
            <input
              type="email"
              required
              placeholder="user@fitoutfirm.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
          >
            <span>Access Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-400">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Role-Based Access Control (RBAC) • SSL 256-Bit</span>
        </div>

      </div>
    </div>
  );
}
