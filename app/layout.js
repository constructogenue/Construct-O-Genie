import "./globals.css";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#040609",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://construct-o-genie.vercel.app"),
  title: "Construct-O-Genie — Interior & Turnkey Fit-Out Construction OS",
  description: "The complete operating system for turnkey interior contractors. Living BOQ Spine, Site DPRs, Maker-Checker PO Approvals, and two-way sync with Tally, SAP & other ERPs.",
  keywords: [
    "turnkey interior software",
    "fit-out construction OS",
    "BOQ item locking",
    "Tally SAP ERP construction sync",
    "JMR measurement record",
    "interior general contractor ERP",
  ],
  authors: [{ name: "Construct-O-Genie Technologies" }],
  openGraph: {
    title: "Construct-O-Genie — From Bare Shell to Handover",
    description: "The enterprise OS for turnkey interior design and commercial fit-out contractors.",
    url: "https://construct-o-genie.vercel.app",
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
    title: "Construct-O-Genie — Turnkey Fit-Out OS",
    description: "BOQ Line Locking, Site DPRs, Maker/Checker Approvals, and Tally/SAP & ERP Invoicing.",
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
    <html lang="en" className={`${jakarta.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#030508] text-slate-100 antialiased font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}