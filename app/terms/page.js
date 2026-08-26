import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Terms of Service — Construct-O-Genie",
  description: "Enterprise terms of service for Construct-O-Genie Fit-Out Construction OS.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030508] text-slate-200 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Construct-O-Genie</span>
        </Link>
      </div>

      <div className="space-y-8">
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMMERCIAL AGREEMENT</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Terms of Service</h1>
          <p className="text-xs text-slate-400">Effective: August 2026 • Construct-O-Genie Technologies</p>
        </div>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">1. Platform Access &amp; Subscription</h2>
          <p>
            By accessing or subscribing to the Construct-O-Genie project operating system, your organization agrees to these Terms of Service. Construct-O-Genie grants you a non-exclusive, commercial SaaS license to access and utilize the platform across your authorized project sites and corporate entities.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">2. User Responsibilities &amp; Role Access</h2>
          <p>
            Your organization is responsible for maintaining administrative control over user credentials and role-based permissions (Director, QS, PM, Site Engineer, Finance). You are responsible for ensuring that all financial entries, PO approvals, and JMR records comply with your internal corporate governance.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">3. Third-Party Integrations (Tally, SAP, Zoho)</h2>
          <p>
            Construct-O-Genie provides connectivity bridges for accounting software such as Tally Prime, SAP, and Zoho Books. Compatibility is dependent upon your organization maintaining licensed, accessible instances of these third-party platforms with proper network permissions.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">4. Intellectual Property &amp; Commercial Data</h2>
          <p>
            All software code, user interface designs, algorithms, and documentation are the exclusive intellectual property of Construct-O-Genie Technologies. All project rates, BOQs, client records, and site drawings uploaded by your organization remain your exclusive proprietary property.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi / Gurugram, India.
          </p>
        </section>
      </div>
    </div>
  );
}
