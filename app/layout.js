import "./globals.css";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#030508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://www.constructogenie.in"),
  title: "Construct-O-Genie — The Operating System for Turnkey Interiors & Fit-Out",
  description: "Run every fit-out project with total margin certainty. Living BOQ, itemized procurement caps, mobile site DPRs, certified JMR billing, and bi-directional Tally & SAP sync.",
  keywords: [
    "turnkey interior software",
    "fit-out construction OS",
    "BOQ margin protection",
    "Tally Prime construction sync",
    "JMR measurement record",
    "commercial fit-out ERP",
  ],
  authors: [{ name: "Construct-O-Genie Technologies" }],
  openGraph: {
    title: "Construct-O-Genie — From Bare Shell to Certified Handover",
    description: "Run every fit-out project with total margin certainty. Manage budgets, procurement, execution, and billing from one connected platform.",
    url: "https://www.constructogenie.in",
    siteName: "Construct-O-Genie",
    images: [
      {
        url: "/dashboard-screen.jpg",
        width: 1200,
        height: 630,
        alt: "Construct-O-Genie Executive Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construct-O-Genie — Fit-Out Construction OS",
    description: "BOQ Line Locking, Site DPRs, Maker/Checker Approvals, and Tally/SAP ERP Invoicing.",
    images: ["/dashboard-screen.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} dark`}>
      <body className="bg-[#030508] text-slate-100 antialiased font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
