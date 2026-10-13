"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: "GoHighLevel Setup", desc: "End-to-end CRM and platform configuration", href: "/services/gohighlevel-setup" },
    { title: "CRM Implementation", desc: "Custom pipelines, contact fields, and tracking", href: "/services/crm-setup" },
    { title: "Workflow Automation", desc: "Automated email, SMS, and lead nurturing", href: "/services/gohighlevel-automation" },
    { title: "Funnel Development", desc: "High-converting sales funnels and pages", href: "/services/funnel-development" },
    { title: "Integrations", desc: "Zapier, Make, and custom API connections", href: "/services/integrations" },
  ];

  const industries = [
    { title: "Real Estate", desc: "Lead intake, booking, and agent pipelines", href: "/industries/real-estate" },
    { title: "Home Services", desc: "Estimate requests, job dispatch, and reviews", href: "/industries/home-services" },
    { title: "Coaching & Consulting", desc: "Discovery calls, course access, and client care", href: "/industries/coaching-consulting" },
    { title: "Digital Agencies", desc: "White-label GHL portals and client snapshots", href: "/industries/marketing-agencies" },
    { title: "Healthcare & Wellness", desc: "Patient intake and automated SMS reminders", href: "/industries/healthcare" },
    { title: "E-commerce", desc: "Cart recovery and post-purchase retention", href: "/industries/ecommerce" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#f5f4f0] ${
          scrolled ? "border-b border-gray-200/80 shadow-xs py-2" : "border-b border-transparent py-3"
        }`}
        role="banner"
      >
        <div className="container-page">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href="/"
              className="font-bold text-xl text-neutral-900 tracking-tight flex items-center gap-2 shrink-0 mr-6 hover:opacity-85 transition-opacity"
              aria-label="Operiq — Go to homepage"
            >
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center shadow-xs">
                <div className="w-2 h-4 bg-white rounded-xs transform skew-x-12" />
              </div>
              Operiq
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  aria-expanded={servicesOpen}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    servicesOpen ? "text-neutral-900 bg-neutral-200/60" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40"
                  }`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 p-2 space-y-1">
                      {services.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5 line-clamp-1">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                className="px-3.5 py-2 text-sm font-semibold rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40 transition-colors"
                href="/solutions"
              >
                Solutions
              </Link>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  aria-expanded={industriesOpen}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    industriesOpen ? "text-neutral-900 bg-neutral-200/60" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40"
                  }`}
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                >
                  Industries
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      industriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {industriesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-200 p-2 space-y-1">
                      {industries.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5 line-clamp-1">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                className="px-3.5 py-2 text-sm font-semibold rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40 transition-colors"
                href="/case-studies"
              >
                Case Studies
              </Link>

              <Link
                className="px-3.5 py-2 text-sm font-semibold rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/40 transition-colors"
                href="/about"
              >
                About
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 ml-4 shrink-0">
              <Link className="btn btn-outline btn-sm" href="/contact">
                Contact
              </Link>
              <Link className="btn btn-primary btn-sm" href="/book-a-call">
                Book a Call
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center gap-1.25 w-10 h-10 rounded-lg hover:bg-neutral-200/50 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-neutral-900" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] z-40 bg-black/40 backdrop-blur-xs lg:hidden animate-in fade-in duration-200">
          <div className="bg-[#f5f4f0] border-b border-neutral-300 px-6 py-8 h-auto max-h-[calc(100vh-100px)] overflow-y-auto space-y-6 shadow-2xl">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Services</p>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-neutral-300">
                {services.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-neutral-800 hover:text-blue-600 py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Industries</p>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-neutral-300">
                {industries.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-neutral-800 hover:text-blue-600 py-1"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-200 flex flex-col gap-3">
              <Link
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-900 py-1"
              >
                Solutions
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-900 py-1"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-900 py-1"
              >
                About
              </Link>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
              <Link
                className="btn btn-outline w-full justify-center"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                className="btn btn-primary w-full justify-center"
                href="/book-a-call"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
