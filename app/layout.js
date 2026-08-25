import "./globals.css";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
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
  title: "Construct-O-Genie — Interior & Fit-Out Construction OS",
  description: "The unified operating system for interior design and turnkey fit-out contractors. Estimation, BOQ Line Locking, Site DPRs, Vendor Approvals, and Tally-native RA Billing.",
  keywords: [
    "construction management software",
    "fit-out operating system",
    "interior contractor software",
    "BOQ estimation software",
    "Joint Measurement Record JMR",
    "Tally Prime construction billing",
  ],
  authors: [{ name: "Construct-O-Genie Technologies" }],
  openGraph: {
    title: "Construct-O-Genie — From Bare Shell to Handover",
    description: "The unified operating system for interior design and turnkey fit-out contractors.",
    url: "https://construct-o-genie.vercel.app",
    siteName: "Construct-O-Genie",
    images: [
      {
        url: "/dashboard-screen.jpg",
        width: 1200,
        height: 630,
        alt: "Construct-O-Genie Executive Command Centre",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construct-O-Genie — Interior & Fit-Out OS",
    description: "Manage estimation, BOQs, site progress, vendor procurement, and billing on a single unified platform.",
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
    <html lang="en" className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#040609] text-slate-100 antialiased font-sans selection:bg-white/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
