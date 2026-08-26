import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy — Construct-O-Genie",
  description: "Enterprise privacy policy for Construct-O-Genie Fit-Out Construction OS.",
};

export default function PrivacyPage() {
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
            <span>ENTERPRISE GOVERNANCE</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: August 2026 • Construct-O-Genie Technologies</p>
        </div>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
          <p>
            Construct-O-Genie Technologies (&quot;Construct-O-Genie&quot;, &quot;we&quot;, &quot;us&quot;) provides a project operating system for commercial interior fit-out and turnkey contracting enterprises. In providing this service, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>Account &amp; Identity Data:</strong> Name, business email, mobile number, company legal entity name, and role designation.</li>
            <li><strong>Project &amp; Commercial Operational Data:</strong> Tender BOQ line items, purchase orders, subcontractor contracts, Daily Progress Reports (DPRs), Joint Measurement Records (JMRs), and certified Running Account (RA) billing data provided by your authorized users.</li>
            <li><strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser specifications, operating system telemetry, and audit timestamps for security log integrity.</li>
          </ul>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">2. Purpose of Data Processing</h2>
          <p>
            We process your enterprise data strictly to provide, maintain, and secure the Construct-O-Genie platform:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li>Executing Living BOQ budget cost ceiling validations and maker-checker approval workflows.</li>
            <li>Facilitating tripartite JMR certifications and Running Account bill calculations.</li>
            <li>Enabling secure two-way accounting synchronization with your configured Tally Prime or SAP instances.</li>
            <li>Maintaining immutable audit trails for commercial compliance and dispute resolution.</li>
          </ul>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">3. Data Ownership &amp; Confidentiality</h2>
          <p>
            You retain sole and exclusive ownership of all project rates, contractor costs, vendor contracts, and client commercial data. Construct-O-Genie does not sell, lease, or monetize your project data to third parties.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">4. Data Security &amp; Retention</h2>
          <p>
            All data is encrypted in transit via TLS 1.3 and at rest via AES-256 in isolated enterprise cloud VPCs hosted in AWS Asia Pacific (Mumbai) data centers. We retain active project records for the duration of your active enterprise subscription plus statutory audit retention periods requested by your organization.
          </p>
        </section>

        <section className="space-y-3 text-xs leading-relaxed text-slate-300">
          <h2 className="text-base font-bold text-white">5. Contact Information</h2>
          <p>
            For privacy inquiries or data protection requests, please contact our Data Governance Officer at <a href="mailto:privacy@constructogenie.in" className="text-white underline">privacy@constructogenie.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
