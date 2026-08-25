export const DEMO_PROJECT = {
  id: "COG-PRJ-26041",
  code: "HORIZON-04",
  name: "Horizon Workspace & Innovation Lab",
  client: "Horizon Technologies Ltd.",
  siteAddress: "Tower B, Level 14-16, DLF Cyber City, Phase 2, Gurugram, Haryana",
  type: "Commercial Fit-Out & Turnkey Interiors",
  areaSqFt: 42500,
  contractValue: 48250000, // ₹4.825 Cr
  bcsBudget: 39400000,    // ₹3.94 Cr
  poIssued: 21420000,     // ₹2.142 Cr
  billedToClient: 30800000, // ₹3.08 Cr
  collectedFromClient: 26200000, // ₹2.62 Cr
  vendorPayables: 18800000, // ₹1.88 Cr
  vendorPaid: 15400000,   // ₹1.54 Cr
  tdsDeducted: 376000,    // ₹3.76L
  projectedMargin: 18.4,  // %
  siteProgress: 67,       // %
  daysRemaining: 42,
  status: "In Execution",
  gfcVersion: "REV-04.2"
};

export const PORTFOLIO_PROJECTS = [
  {
    id: "COG-26041",
    name: "Horizon Workspace HQ",
    client: "Horizon Technologies",
    location: "Gurugram",
    value: 48250000,
    progress: 67,
    margin: 18.4,
    health: "healthy",
    status: "Execution",
    pendingApprovals: 2,
    stage: "Procurement & Site"
  },
  {
    id: "COG-26042",
    name: "Starlight Fintech Hub",
    client: "Starlight Capital",
    location: "BKC, Mumbai",
    value: 125000000,
    progress: 84,
    margin: 21.2,
    health: "healthy",
    status: "Finishing",
    pendingApprovals: 1,
    stage: "Client Billing"
  },
  {
    id: "COG-26043",
    name: "Aura Biotech R&D Facility",
    client: "Aura Life Sciences",
    location: "Whitefield, Bengaluru",
    value: 89000000,
    progress: 42,
    margin: 16.8,
    health: "warning",
    status: "MEP & Partitions",
    pendingApprovals: 4,
    stage: "PO Approvals"
  },
  {
    id: "COG-26044",
    name: "The Oberoi Grand Penthouse",
    client: "Private Residence",
    location: "Worli, Mumbai",
    value: 62000000,
    progress: 91,
    margin: 24.5,
    health: "healthy",
    status: "Snagging & Handover",
    pendingApprovals: 0,
    stage: "Final Retention Release"
  }
];

export const BOQ_SAMPLE_ITEMS = [
  {
    id: "BOQ-01",
    code: "04.01.A",
    package: "Joinery & Millwork",
    desc: "Bespoke Acoustic Wall Paneling in Natural Fluted White Oak Veneer on 18mm FR Grade HDHMR substrate",
    unit: "SQ.M",
    tenderQty: 480,
    clientRate: 7200,
    budgetCostRate: 5450,
    totalBudget: 2616000,
    poCommitted: 1980000,
    poBalance: 636000,
    drawingRef: "DWG-ARCH-JN-04.2",
    gfcRevision: "REV-04",
    status: "PO Active (Locked)"
  },
  {
    id: "BOQ-02",
    code: "07.02.C",
    package: "Electrical & Lighting",
    desc: "DALI Dimming Architectural Linear Suspended Profile 3000K CRI 95+ with integrated Dali drivers",
    unit: "R.MTR",
    tenderQty: 620,
    clientRate: 4800,
    budgetCostRate: 3450,
    totalBudget: 2139000,
    poCommitted: 1725000,
    poBalance: 414000,
    drawingRef: "DWG-MEP-EL-07.1",
    gfcRevision: "REV-03",
    status: "PO Active (Locked)"
  },
  {
    id: "BOQ-03",
    code: "03.04.B",
    package: "Glazing & Partitions",
    desc: "12mm Toughened Clear Glass Acoustic Partition with Slimline Matte Black Anodized Aluminium Trims",
    unit: "SQ.M",
    tenderQty: 340,
    clientRate: 5900,
    budgetCostRate: 4100,
    totalBudget: 1394000,
    poCommitted: 1394000,
    poBalance: 0,
    drawingRef: "DWG-ARCH-GL-03.4",
    gfcRevision: "REV-02",
    status: "100% Indented (Capped)"
  },
  {
    id: "BOQ-04",
    code: "09.01.F",
    package: "Flooring & Carpeting",
    desc: "Shaw Contract Tufted Nylon Modular Carpet Tiles with Ecoworx Backing including adhesive primer",
    unit: "SQ.M",
    tenderQty: 1850,
    clientRate: 3200,
    budgetCostRate: 2350,
    totalBudget: 4347500,
    poCommitted: 3525000,
    poBalance: 822500,
    drawingRef: "DWG-ARCH-FL-09.1",
    gfcRevision: "REV-05",
    status: "PO Active (Locked)"
  }
];

export const ROLE_EXPERIENCES = [
  {
    id: "founder",
    role: "Founder / Managing Director",
    tagline: "Live Margin Command & Cash Flow Radar",
    description: "Real-time visibility into company-wide project health, locked purchase margins, gross profit projections, and pending executive approvals.",
    highlights: [
      "Real-time company gross margin vs tender baseline",
      "Executive 1-click approvals for POs > ₹5 Lakhs",
      "Billing milestones and projected cash collections",
      "Risk alerts for delayed milestones and scope deviations"
    ]
  },
  {
    id: "qs",
    role: "Quantity Surveyor & Estimator",
    tagline: "Living BOQ Spine & Drawing Revision Sync",
    description: "Upload client tender BOQs, map itemized rate analyses, track GFC drawing revision deltas, and lock purchase orders directly against budget line items.",
    highlights: [
      "Side-by-side GFC drawing revision takeoff comparison",
      "Detailed rate analysis for materials, labor, and machinery",
      "Hard caps preventing purchase orders exceeding BOQ limits",
      "Instant client variation register with cost vs selling rates"
    ]
  },
  {
    id: "pm",
    role: "Project Manager",
    tagline: "Multi-Trade Execution & Procurement Engine",
    description: "Manage multiple turnkey trade packages simultaneously. Track physical site progress, issue vendor purchase orders, and monitor critical delivery dates.",
    highlights: [
      "Trade package register from tender to handover",
      "Subcontractor work order generation & tracking",
      "Site Material Delivery Note (GRN) verification",
      "Planned vs actual schedule milestone radar"
    ]
  },
  {
    id: "site",
    role: "Site Supervisor / Field Engineer",
    tagline: "Mobile Daily Progress Reports & Joint Measurements",
    description: "Digital DPRs on mobile, photo-based snagging with plan pinning, worker headcounts, and tripartite Joint Measurement Record (JMR) sign-offs.",
    highlights: [
      "Offline-capable mobile Daily Progress Reports (DPR)",
      "Photo snagging pinned directly to 2D floor plans",
      "Subcontractor measurement sheet entry at site gate",
      "Digital architect/client sign-off on completed stages"
    ]
  },
  {
    id: "finance",
    role: "Head of Accounts & Billing",
    tagline: "Automated RA Billing & Two-Way Tally Prime Sync",
    description: "Generate client Running Account (RA) bills from verified JMRs, manage contractor tax withholdings (TDS/WCT), track retention money, and sync two-way with Tally Prime.",
    highlights: [
      "Automated RA billing with retention & advance recovery",
      "Statutory compliance (GST, TDS u/s 194C, e-Way bills)",
      "Vendor payment advice with UTR tracking",
      "Direct two-way synchronization with Tally Prime"
    ]
  }
];
