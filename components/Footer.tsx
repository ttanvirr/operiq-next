import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="site-footer border-t border-gray-200 pb-8 relative overflow-hidden bg-[#f5f4f0]"
      role="contentinfo"
    >
      {/* Decorative Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none z-0"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flowBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="flowGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M0,600 C400,300 900,700 1440,250 L1440,600 Z"
          fill="#ffffff"
          opacity="0.4"
        />
        <path
          d="M0,600 C500,500 1000,550 1440,400 L1440,600 Z"
          fill="#e5e7eb"
          opacity="0.2"
        />
        <g fill="none" strokeWidth="1.5">
          <path
            d="M-100,450 C300,450 600,250 1000,250 C1200,250 1350,350 1500,350"
            stroke="url(#flowBlue)"
            strokeWidth="3"
          />
          <path
            d="M200,600 C300,400 600,350 800,250"
            stroke="url(#flowGreen)"
            strokeWidth="2"
          />
          <path
            d="M800,250 C950,250 1000,450 1300,550"
            stroke="url(#flowGreen)"
            strokeWidth="2"
          />
          <path
            d="M400,450 C500,550 800,600 1000,500"
            stroke="url(#flowBlue)"
            strokeWidth="2"
          />
        </g>
        <g stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" opacity="0.35">
          <line x1="600" y1="345" x2="600" y2="250" />
          <line x1="1000" y1="250" x2="1000" y2="350" />
          <line x1="400" y1="450" x2="600" y2="450" />
          <line x1="1000" y1="500" x2="1200" y2="500" />
        </g>
      </svg>

      <div className="container-page pt-16 lg:pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 lg:gap-10 mb-20">
          {/* Brand info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col pr-0 lg:pr-6">
            <div className="mb-6">
              <Link className="inline-block" href="/">
                <span className="font-bold text-2xl text-neutral-900 tracking-tight flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <div className="w-2 h-4 bg-white rounded-xs transform skew-x-12" />
                  </div>
                  Operiq
                </span>
              </Link>
            </div>
            <p className="text-body-sm text-gray-600 mb-6 max-w-[280px] leading-relaxed">
              GoHighLevel automation agency helping businesses scale with CRM systems, AI chatbots, and data-driven marketing.
            </p>

            <Link
              className="inline-flex items-center justify-center font-bold text-[13px] text-neutral-900 bg-white border-2 border-neutral-900 rounded-full px-5 py-2 transition-all shadow-[3px_3px_0_0_#0a0a0a] hover:shadow-[4px_4px_0_0_#0a0a0a] hover:-translate-y-px active:translate-y-0.5 active:translate-x-0.5 active:shadow-none w-fit mb-6"
              href="/book-a-call"
            >
              <span>Contact us</span>
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <div className="flex items-center gap-2 text-[13px] text-neutral-700 font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>GoHighLevel Partner</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-600 border border-gray-200 hover:border-blue-600 hover:bg-blue-50/50 transition-colors"
              >
                <span className="text-[11px] font-bold">in</span>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-800 border border-gray-200 hover:border-blue-800 hover:bg-blue-50/50 transition-colors"
              >
                <span className="text-[11px] font-bold">f</span>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-red-600 border border-gray-200 hover:border-red-600 hover:bg-red-50/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-neutral-900 border border-gray-200 hover:border-neutral-900 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column: Services */}
          <div>
            <h3 className="text-label text-neutral-900 mb-5 font-bold">Services</h3>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services/gohighlevel-setup">
                  GoHighLevel Setup
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services/crm-setup">
                  CRM Implementation
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services/gohighlevel-automation">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services/funnel-development">
                  Funnel Development
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services/integrations">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Industries */}
          <div>
            <h3 className="text-label text-neutral-900 mb-5 font-bold">Industries</h3>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/industries/real-estate">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/industries/home-services">
                  Home Services
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/industries/marketing-agencies">
                  Marketing Agencies
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/industries/healthcare">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/industries">
                  All Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Company */}
          <div>
            <h3 className="text-label text-neutral-900 mb-5 font-bold">Company</h3>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/process">
                  Implementation Process
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/book-a-call">
                  Book a Strategy Call
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column: Resources */}
          <div>
            <h3 className="text-label text-neutral-900 mb-5 font-bold">Resources</h3>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/faq">
                  Implementation FAQ
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/blog">
                  Blog and Guides
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/solutions">
                  Solutions Overview
                </Link>
              </li>
              <li>
                <Link className="text-caption text-gray-600 hover:text-neutral-900 transition-colors" href="/services">
                  All Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-300/80">
          <p className="text-caption text-gray-500 text-center md:text-left">
            © 2026 Operiq. GoHighLevel and HighLevel are trademarks of HighLevel Inc.
          </p>
          <div className="flex items-center gap-6">
            <Link className="text-caption text-gray-500 hover:text-neutral-900 transition-colors underline underline-offset-4" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-caption text-gray-500 hover:text-neutral-900 transition-colors underline underline-offset-4" href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
