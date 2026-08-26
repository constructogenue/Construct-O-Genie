// Central Domain Data & Financial Formatting Helpers for Construct-O-Genie OS
// Defensible, unified figures across the entire website

export const formatINR = (val, compact = false) => {
  if (val === null || val === undefined || isNaN(val)) return '₹0';
  const num = Number(val);
  
  if (compact) {
    if (Math.abs(num) >= 10000000) {
      const cr = (num / 10000000).toFixed(2);
      return `₹${cr.endsWith('.00') ? cr.slice(0, -3) : cr} Cr`;
    }
    if (Math.abs(num) >= 100000) {
      const l = (num / 100000).toFixed(2);
      return `₹${l.endsWith('.00') ? l.slice(0, -3) : l} L`;
    }
    if (Math.abs(num) >= 1000) {
      return `₹${(num / 1000).toFixed(1)}k`;
    }
  }
  
  return '₹' + num.toLocaleString('en-IN');
};

// Single canonical demo project referenced across Hero, Product Tour, Case Breakdown & ROI
export const DEMO_PROJECT = {
  id: 'COG-PRJ-26041',
  code: 'HORIZON-04',
  name: 'Commercial Corporate Fit-Out — DLF Cyber City',
  client: 'Horizon Enterprise Technologies',
  siteAddress: 'Tower B, Level 14–16, DLF Cyber City, Phase 2, Gurugram, Haryana',
  type: 'Turnkey Commercial Interior Fit-Out',
  areaSqFt: 42500,
  contractValue: 48250000,     // ₹4.83 Cr (₹4,82,50,000)
  bcsBudget: 39400000,         // ₹3.94 Cr baseline target cost (₹3,94,00,000)
  committedCost: 39400000,     // ₹3.94 Cr total committed POs & subcontracts
  projectedMargin: 18.34,      // 18.34% ((4.825 - 3.94) / 4.825 * 100)
  projectedGrossProfit: 8850000, // ₹88.50 L
  poIssuedCount: 48,
  billedToClient: 30800000,    // ₹3.08 Cr certified RA billings
  collectedFromClient: 26200000, // ₹2.62 Cr client cash collected
  vendorPayables: 18800000,    // ₹1.88 Cr vendor liabilities
  vendorPaid: 15400000,        // ₹1.54 Cr disbursed via bank UTR
  retentionHeld: 2412500,      // ₹24.12 L (5% client retention)
  tdsDeducted: 376000,         // ₹3.76 L (TDS u/s 194C)
  siteProgress: 67,            // 67% certified physical completion
  daysRemaining: 42,
  status: 'In Execution',
  gfcVersion: 'REV-04.2'
};

export const PORTFOLIO_PROJECTS = [
  {
    id: 'COG-26041',
    name: 'Commercial Corporate Fit-Out — DLF Cyber City',
    client: 'Horizon Enterprise Technologies',
    location: 'Cyber City, Gurugram',
    area: '42,500 sq.ft',
    value: 48250000,
    committedCost: 39400000,
    progress: 67,
    margin: 18.3,
    health: 'healthy',
    status: 'In Execution',
    pendingApprovals: 2,
    stage: 'Procurement & Site'
  },
  {
    id: 'COG-26042',
    name: 'Fintech Executive HQ — BKC',
    client: 'Axis Financial Services',
    location: 'BKC, Mumbai',
    area: '78,000 sq.ft',
    value: 125000000,
    committedCost: 98500000,
    progress: 84,
    margin: 21.2,
    health: 'healthy',
    status: 'Finishing & Joinery',
    pendingApprovals: 1,
    stage: 'Client RA Billing'
  },
  {
    id: 'COG-26043',
    name: 'Global Tech R&D Facility — Outer Ring Road',
    client: 'Apex Software Labs',
    location: 'Outer Ring Road, Bengaluru',
    area: '110,000 sq.ft',
    value: 198000000,
    committedCost: 159000000,
    progress: 38,
    margin: 19.7,
    health: 'review',
    status: 'HVAC & MEP First-Fix',
    pendingApprovals: 4,
    stage: 'Subcontractor Indents'
  }
];

export const BOQ_SAMPLE_ITEMS = [
  {
    code: 'BOQ-JOIN-014',
    trade: 'Joinery & Woodwork',
    description: 'Bespoke Executive Boardroom Table (24-Seater) in natural smoked oak veneer with integrated pop-up motorized AV cable cubby and acoustic backing paneling.',
    unit: 'RMT',
    tenderQty: 28.5,
    tenderRate: 48500,
    clientTotal: 1382250,
    bccRate: 38000,
    budgetCeiling: 1083000,
    committedRate: 37200,
    committedTotal: 1060200,
    actualExecutedQty: 18.0,
    certifiedJMRQty: 18.0,
    varianceQty: 0.0,
    marginAmount: 322050,
    marginPercent: 23.3,
    status: 'Locked & In Budget'
  },
  {
    code: 'BOQ-GLAZ-008',
    trade: 'Acoustic Glazing',
    description: 'Double-glazed acoustic glass partitions (Rw 48dB) with slimline matte black anodized aluminum profile, acoustic drop seals, and 12mm toughened laminate glass.',
    unit: 'SQFT',
    tenderQty: 3450,
    tenderRate: 980,
    clientTotal: 3381000,
    bccRate: 790,
    budgetCeiling: 2725500,
    committedRate: 765,
    committedTotal: 2639250,
    actualExecutedQty: 2400,
    certifiedJMRQty: 2350,
    varianceQty: 50,
    marginAmount: 741750,
    marginPercent: 21.9,
    status: 'Locked & In Budget'
  },
  {
    code: 'BOQ-MEP-022',
    trade: 'HVAC & Ducting',
    description: 'Factory-fabricated GI rectangular ductwork (class 24G) complete with closed-cell nitrile rubber thermal insulation, volume control dampers, and linear diffusers.',
    unit: 'SQM',
    tenderQty: 1850,
    tenderRate: 1650,
    clientTotal: 3052500,
    bccRate: 1320,
    budgetCeiling: 2442000,
    committedRate: 1290,
    committedTotal: 2386500,
    actualExecutedQty: 1620,
    certifiedJMRQty: 1620,
    varianceQty: 0.0,
    marginAmount: 666000,
    marginPercent: 21.8,
    status: 'Locked & In Budget'
  },
  {
    code: 'BOQ-ELEC-031',
    trade: 'Electrical & Lighting',
    description: 'Recessed trimless architectural linear LED lighting profile (4000K, CRI 90+) including digital DALI dimming drivers, suspension kits, and feed cabling.',
    unit: 'RMT',
    tenderQty: 620,
    tenderRate: 3400,
    clientTotal: 2108000,
    bccRate: 2750,
    budgetCeiling: 1705000,
    committedRate: 2680,
    committedTotal: 1661600,
    actualExecutedQty: 410,
    certifiedJMRQty: 400,
    varianceQty: 10,
    marginAmount: 446400,
    marginPercent: 21.2,
    status: 'Locked & In Budget'
  }
];

export const WORKFLOW_STAGES = [
  {
    id: 'boq',
    step: '01',
    group: 'Commercial',
    title: 'Living BOQ & Cost Baseline',
    role: 'Commercial Team & QS',
    action: 'Tender BOQ lines are locked with itemized internal budget cost ceilings (BCC) before site mobilization.',
    impactRole: 'Budget Control',
    impactVal: 'Line item cost caps active'
  },
  {
    id: 'drawings',
    step: '02',
    group: 'Commercial',
    title: 'GFC Drawing Revisions',
    role: 'Design Coordinator & QS',
    action: 'Architectural drawing revisions (REV-03 vs REV-04) trigger automated quantity delta takeoffs.',
    impactRole: 'Variation Register',
    impactVal: 'Unbilled extra scope caught early'
  },
  {
    id: 'indent',
    step: '03',
    group: 'Procurement',
    title: 'Material Site Indents',
    role: 'Site Engineer',
    action: 'Site supervisors generate digital material indents mapped strictly to approved BOQ item codes.',
    impactRole: 'Requisition Gate',
    impactVal: 'Zero off-BOQ site ordering'
  },
  {
    id: 'po',
    step: '04',
    group: 'Procurement',
    title: 'PO Generation & Caps',
    role: 'Purchase Manager',
    action: 'System validates quantity and rate against remaining line budget headroom before generating PO.',
    impactRole: 'Cost Protection',
    impactVal: 'Hard ceiling stops overspend'
  },
  {
    id: 'approval',
    step: '05',
    group: 'Procurement',
    title: 'Maker-Checker Approvals',
    role: 'Managing Director / Commercial Lead',
    action: 'High-value POs and rate deviations route through one-click mobile executive approval tiers.',
    impactRole: 'Delegation of Authority',
    impactVal: 'Multi-tier financial governance'
  },
  {
    id: 'grn',
    step: '06',
    group: 'Execution',
    title: 'Gate Entry & GRN Inspection',
    role: 'Storekeeper / Site Supervisor',
    action: 'Material deliveries checked against PO specs with photo-tagged delivery challans at the site gate.',
    impactRole: 'Material Receiving',
    impactVal: 'Defective batches rejected at gate'
  },
  {
    id: 'dpr',
    step: '07',
    group: 'Execution',
    title: 'Mobile DPR & Snagging',
    role: 'Site Engineer',
    action: 'Daily progress percentages, subcontractor headcount, and snag items logged on mobile with offline sync.',
    impactRole: 'Daily Site Log',
    impactVal: 'Submitted daily before 8 PM'
  },
  {
    id: 'jmr',
    step: '08',
    group: 'Billing',
    title: 'Tripartite JMR Certification',
    role: 'QS & Client PMC',
    action: 'Joint Measurement Records verified on drawing grids with digital sign-offs from client, PMC, and contractor.',
    impactRole: 'Measurement Sign-Off',
    impactVal: 'Eliminates billing disputes'
  },
  {
    id: 'ra_bill',
    step: '09',
    group: 'Billing',
    title: 'Automated Client RA Bill',
    role: 'Billing Lead & Accounts',
    action: 'One-click Running Account bill generated directly from certified JMR with advance recovery & retention.',
    impactRole: 'Billing Turnaround',
    impactVal: 'Reduced to ~4 days'
  },
  {
    id: 'accounting',
    step: '10',
    group: 'Finance',
    title: 'Two-Way ERP Sync & Collection',
    role: 'Finance Director',
    action: 'Sales bills and approved vendor liabilities sync directly with Tally Prime / SAP with TDS and retention ledger.',
    impactRole: 'Cash Realized',
    impactVal: 'Real-time ledger reconciliation'
  }
];

export const WORKFLOW_GROUPS = [
  {
    id: 'commercial',
    title: '1. Commercial & Baseline',
    desc: 'Quotation, living BOQ, internal budget cost ceilings, and GFC drawing revision deltas.',
    stages: ['01', '02'],
    roles: ['Commercial Director', 'Lead Estimator / QS']
  },
  {
    id: 'procurement',
    title: '2. Procurement & Approval',
    desc: 'Material indents, budget headroom validation, vendor PO creation, and maker-checker approval tiers.',
    stages: ['03', '04', '05'],
    roles: ['Purchase Manager', 'Managing Director']
  },
  {
    id: 'execution',
    title: '3. Site Execution & Quality',
    desc: 'Site gate GRN receipt, mobile daily progress reports (DPR), labor tracking, and photo snagging.',
    stages: ['06', '07'],
    roles: ['Site Engineer', 'Project Manager']
  },
  {
    id: 'billing',
    title: '4. Joint Measurement & RA Billing',
    desc: 'Tripartite digital JMR sign-offs with PMC, automated Running Account (RA) billing, and retention deductions.',
    stages: ['08', '09'],
    roles: ['Lead QS', 'Client PMC', 'Billing Lead']
  },
  {
    id: 'finance',
    title: '5. Finance & ERP Reconciliation',
    desc: 'Statutory TDS u/s 194C, bank UTR reconciliation, and two-way synchronization with Tally Prime and SAP.',
    stages: ['10'],
    roles: ['Head of Accounts', 'Chief Financial Officer']
  }
];

export const ROLE_EXPERIENCES = [
  {
    id: 'founder',
    role: 'Founder & Managing Director',
    tagline: 'Multi-Site Financial Control & Cash Visibility',
    description: 'Executive visibility across active projects. Monitor projected gross margins, committed liabilities against tender baselines, and pending high-value purchase approvals.',
    highlights: [
      'Portfolio gross margin vs tender baseline across all active projects',
      'One-tap executive approvals for purchase orders exceeding specified thresholds',
      'Milestone billing forecast and real-time client receivable ageing',
      'Early warning triggers on scope variations and site delay risks'
    ],
    sampleMetric: { label: 'Protected Portfolio Margin', value: '18.3%', sub: 'DLF Cyber City & active portfolio' }
  },
  {
    id: 'qs',
    role: 'Quantity Surveyor & Estimator',
    tagline: 'Living BOQ & Drawing Revision Delta Control',
    description: 'Map tender BOQs into itemized internal cost ceilings, track GFC drawing revision deltas, and validate purchase orders directly against approved line items.',
    highlights: [
      'Automated drawing revision takeoff comparisons (REV-03 vs REV-04 deltas)',
      'Itemized rate analysis breakdown (Material, Labor, Plant & Machinery)',
      'Budget cost ceilings preventing purchase orders from exceeding line caps',
      'Variation register tracking cost impact against approved client rates'
    ],
    sampleMetric: { label: 'BOQ Lines Budget-Mapped', value: '100%', sub: 'Full line-item cost visibility' }
  },
  {
    id: 'pm',
    role: 'Project Manager',
    tagline: 'Trade Package Coordination & Site Milestones',
    description: 'Coordinate multiple specialized trades simultaneously. Track physical milestone completion, manage vendor delivery schedules, and monitor gate GRN receipts.',
    highlights: [
      'Trade package registers covering Joinery, MEP, Glazing, and Finishes',
      'Subcontractor work order creation and measurement verification',
      'Site Material Delivery Note (GRN) inspection at the site gate',
      'Critical path milestone tracking with planned vs actual progress curves'
    ],
    sampleMetric: { label: 'Trade Packages Active', value: '14 Trades', sub: 'On-schedule execution' }
  },
  {
    id: 'site',
    role: 'Site Supervisor & Field Engineer',
    tagline: 'Mobile DPRs & Joint Measurement Records',
    description: 'Digital DPR entry on mobile with offline sync, photo-tagged snag lists, daily labor headcounts, and digital Joint Measurement Record (JMR) sign-offs with PMC.',
    highlights: [
      'Fast mobile Daily Progress Reports (DPR) with offline caching',
      'Photo snagging tagged directly to architectural floor plans',
      'Subcontractor measurement logging at site with digital sign-off',
      'Material delivery verification against approved purchase order specs'
    ],
    sampleMetric: { label: 'Daily DPR Submission', value: 'Daily 8 PM', sub: 'Site-to-office sync' }
  },
  {
    id: 'finance',
    role: 'Head of Accounts & Billing',
    tagline: 'Automated RA Billing & ERP Bridge',
    description: 'Generate client Running Account (RA) bills directly from verified JMRs, manage contractor tax withholdings (TDS u/s 194C), track retention, and sync with Tally Prime and SAP.',
    highlights: [
      'Automated RA billing with advance recovery and retention schedules',
      'Statutory compliance handling (GST, TDS u/s 194C, e-Way bills)',
      'Vendor payment advice generation with bank UTR reconciliation',
      'Integration options for Tally Prime, SAP ECC/S4, and Zoho Books'
    ],
    sampleMetric: { label: 'Billing Turnaround', value: '~4 Days', sub: 'From JMR sign-off to RA bill' }
  }
];

export const INTEGRATIONS_LIST = [
  {
    name: 'Tally Prime',
    type: 'Native XML / ODBC Connector',
    category: 'Accounting & Statutory',
    desc: 'Sync purchase vouchers, vendor ledgers, TDS u/s 194C deductions, and client sales bills directly into your Tally company books.',
    badge: 'Native XML/ODBC',
    status: 'Production Ready'
  },
  {
    name: 'SAP ECC / S/4HANA',
    type: 'Enterprise API & RFC Connector',
    category: 'Enterprise ERP',
    desc: 'Consolidate project procurement orders, material ledger entries, and vendor payment clearances into enterprise SAP modules.',
    badge: 'Enterprise RFC/API',
    status: 'Enterprise Custom'
  },
  {
    name: 'Zoho Books',
    type: 'REST Cloud API Sync',
    category: 'Cloud Accounting',
    desc: 'Automated sync for client sales invoices, vendor bills, expense tracking, and GST e-invoicing compliance.',
    badge: 'REST Cloud API',
    status: 'Production Ready'
  },
  {
    name: 'Microsoft Excel & CSV',
    type: 'Structured Multi-Sheet Engine',
    category: 'Data Import & Export',
    desc: 'Import complex multi-trade tender BOQs with rate formulas; export JMR measurement sheets and cost reconciliation reports.',
    badge: 'Instant Import/Export',
    status: 'Standard'
  },
  {
    name: 'Custom ERP & Webhooks',
    type: 'Secure REST Webhooks',
    category: 'Custom Architecture',
    desc: 'Configurable webhook endpoints and REST APIs to connect with internal data lakes and proprietary contractor ERPs.',
    badge: 'Custom Webhooks',
    status: 'Developer API'
  }
];

export const FAQS = [
  {
    q: 'How does Construct-O-Genie protect project gross margins against cost overruns?',
    a: 'Every tender BOQ item is mapped to an internal Budget Cost Ceiling (BCC). When a project engineer or purchase manager creates a Purchase Order or Subcontractor Work Order, the system checks remaining budget headroom in real time. If a PO exceeds the budget or margin threshold, it cannot be issued without tiered executive approval.'
  },
  {
    q: 'How does Construct-O-Genie connect with our existing Tally Prime or SAP setup?',
    a: 'Construct-O-Genie provides direct XML/ODBC integration for Tally Prime and REST API/RFC protocols for SAP. Approved vendor purchase bills, TDS deductions under section 194C, and client sales invoices sync directly into your chart of accounts, eliminating double data entry.'
  },
  {
    q: 'How does the Joint Measurement Record (JMR) to RA Billing workflow work?',
    a: 'Site engineers and quantity surveyors record verified site measurements against the architectural drawing grid on mobile. Once the client PMC approves the digital JMR sign-off, the billing team generates a client Running Account (RA) bill with one click. The system automatically computes advance mobilization deductions, retention money, and GST.'
  },
  {
    q: 'Can site teams submit Daily Progress Reports (DPRs) with poor mobile connectivity?',
    a: 'Yes. The mobile site interface features local offline caching. Field supervisors can log labor headcounts, progress percentages, material deliveries (GRNs), and photo-tagged snags on site. Data automatically synchronizes securely as soon as an internet connection is re-established.'
  },
  {
    q: 'How does Construct-O-Genie handle client scope changes and GFC drawing revisions?',
    a: 'When an architect issues a new Good For Construction (GFC) revision (e.g. REV-04 vs REV-03), Construct-O-Genie runs an automated delta takeoff. Any added quantities or new trade specifications are recorded into a formal Variation Register, ensuring unbilled extra work is flagged before material procurement begins.'
  },
  {
    q: 'What is the typical onboarding and data migration timeline?',
    a: 'Most turnkey fit-out and interior general contractors onboard within 7 to 14 days. Our engineering team assists with importing active tender BOQs from Excel, configuring vendor master lists, mapping cost codes to your Tally/SAP chart of accounts, and setting up role-based approval thresholds.'
  }
];
