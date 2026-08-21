import './globals.css';

export const viewport = {
  themeColor: '#080A0C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Construct-O-Genie | Interior & Fit-Out Management Software',
  description: 'Construct-O-Genie connects design, BOQs, procurement, site execution, billing and finance in one operating system built for interior and fit-out companies.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Construct-O-Genie'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080A0C] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
