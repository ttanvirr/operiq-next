import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Operiq — GoHighLevel Implementation and Business Automation",
  description:
    "Professional GoHighLevel setup, CRM implementation, workflow automation, and funnel development for growing businesses and agencies.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Operiq — GoHighLevel Implementation and Business Automation",
    description:
      "Professional GoHighLevel setup, CRM implementation, workflow automation, and funnel development for growing businesses and agencies.",
    url: "https://operiq.com",
    siteName: "Operiq",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#f5f4f0] text-[#0a0a0a] selection:bg-[#86efac] selection:text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
