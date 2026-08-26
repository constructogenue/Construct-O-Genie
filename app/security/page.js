import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, Server, KeyRound, Database, RefreshCw, FileText } from 'lucide-react';

export const metadata = {
  title: "Enterprise Security Architecture — Construct-O-Genie",
  description: "Security architecture, encryption, access control, and compliance for Construct-O-Genie Fit-Out OS.",
};

export default function SecurityPage() {
  const securityPillars = [
    {
      icon: Lock,
      title: "Data Encryption Standards",
      desc: "All network traffic is encrypted using TLS 1.3 with forward secrecy. All project databases, tender rates, and attachments are encrypted at rest using AES-256 with managed KMS keys."
    },
    {
      icon: KeyRound,
      title: "Role-Based Access Control (RBAC)",
      desc: "Granular permission boundaries enforce strict segregation of duties. Site supervisors cannot alter tender baseline rates, and purchase managers cannot issue high-value POs without multi-tier director sign-off."
    },
    {
      icon: FileText,
      title: "Immutable Audit Trails",
      desc: "Every rate change, GFC drawing revision takeoff, purchase order approval, and JMR measurement modification is permanently logged with user ID, IP address, and cryptographic timestamp."
    },
    {
      icon: Server,
      title: "AWS Asia Pacific (Mumbai) VPC",
      desc: "Enterprise data is hosted in dedicated Virtual Private Clouds (VPC) in ISO-compliant AWS Mumbai data centers with automated multi-zone failover and DDoS protection."
    },
    {
      icon: Database,
      title: "Automated Daily Backups & Disaster Recovery",
      desc: "Point-in-time recovery (PITR) with automated daily snapshot backups. Redundant database replication guarantees business continuity for mission-critical fit-out operations."
    },
    {
      icon: RefreshCw,
      title: "Secure ERP & Accounting Connectors",
      desc: "Integrations with Tally Prime and SAP utilize authenticated, encrypted local connectors and scoped API tokens with zero public exposure of accounting credentials."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030508] text-slate-200 py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Construct-O-Genie</span>
        </Link>
      </div>

      <div className="space-y-10">
        <div className="space-y-3 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SECURITY ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Enterprise Security &amp; Data Governance
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            Construct-O-Genie is engineered with defense-in-depth architecture to safeguard proprietary commercial tender rates, supplier contracts, and financial ledgers.
          </p>
        </div>

        {/* 6 Security Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-white">{p.title}</h2>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Security Contact */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white">Security Vulnerability Disclosure</h3>
            <p className="text-xs text-slate-400">
              For security advisories or penetration testing reports, please contact our SecOps team.
            </p>
          </div>
          <a
            href="mailto:security@constructogenie.in"
            className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs hover:bg-slate-100 transition-all whitespace-nowrap"
          >
            Contact SecOps Team
          </a>
        </div>
      </div>
    </div>
  );
}
