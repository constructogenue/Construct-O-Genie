import "./globals.css";
export const viewport = { themeColor: "#000000" };
export const metadata = {
  title: "Construct-O-Genie — Interior & Fit-Out OS",
  description: "The operating system for interior design and fit-out companies. Design, BOQ, Procurement, Site, Finance — unified.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
