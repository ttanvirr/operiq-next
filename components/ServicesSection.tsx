"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings, Zap, Users, Filter, Share2, Check, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  href: string;
  gradient: string;
  accentColor: string;
  icon: typeof Settings;
  features: string[];
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: "setup",
      num: "01",
      title: "GoHighLevel Setup and Configuration",
      desc: "Full GoHighLevel account setup. Pipelines, calendars, forms, triggers, and integrations built from day one to match your exact sales process.",
      href: "/services/gohighlevel-setup",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      accentColor: "#3b82f6",
      icon: Settings,
      features: [
        "Pipeline and stage configuration.",
        "Calendar and booking setup.",
        "Trigger and workflow automation.",
      ],
    },
    {
      id: "automation",
      num: "02",
      title: "Marketing Automation",
      desc: "Automated email, SMS, and voicemail sequences that nurture leads and convert on autopilot. Flows that keep working long after setup is done.",
      href: "/services/gohighlevel-automation",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      accentColor: "#f59e0b",
      icon: Zap,
      features: [
        "Email and SMS drip campaigns.",
        "Lead nurturing sequences.",
        "Abandoned lead recovery.",
      ],
    },
    {
      id: "crm",
      num: "03",
      title: "CRM Setup and Configuration",
      desc: "Custom pipelines, contact fields, lead tracking, and opportunity management — configured around your real sales process, not default settings.",
      href: "/services/crm-setup",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      accentColor: "#10b981",
      icon: Users,
      features: [
        "Custom pipeline stages.",
        "Contact field mapping.",
        "Lead source and status tracking.",
      ],
    },
    {
      id: "funnel",
      num: "04",
      title: "Funnel Development",
      desc: "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GHL and connected to your CRM and automation workflows.",
      href: "/services/funnel-development",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      accentColor: "#8b5cf6",
      icon: Filter,
      features: [
        "Landing pages and opt-in funnels.",
        "Sales and booking pages.",
        "CRM-connected forms.",
      ],
    },
    {
      id: "integrations",
      num: "05",
      title: "Integrations",
      desc: "Native integrations, Zapier/Make connections, API and webhook configurations — so your full stack works as one connected system.",
      href: "/services/integrations",
      gradient: "linear-gradient(135deg, #ec4899, #db2777)",
      accentColor: "#ec4899",
      icon: Share2,
      features: [
        "Native app integrations.",
        "Zapier and Make workflows.",
        "API and webhook configuration.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section aria-labelledby="services-heading" className="bg-[#f5f4f0] py-16 md:py-20 border-b border-gray-200">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header Grid */}
        <div className="mb-12 grid items-end gap-8 md:grid-cols-2">
          <div>
            <span className="mb-3 block text-[13px] font-bold text-[#1b6ef3] uppercase tracking-wider">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="m-0 max-w-[680px] text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0a0a0a]"
            >
              Everything you need to grow with GoHighLevel.
            </h2>
          </div>
          <p className="m-0 max-w-[480px] text-[16px] leading-[1.65] text-gray-600">
            One team across the whole stack — CRM, automations, funnels, and integrations — so nothing lands in the gap between two freelancers. Every workflow is tested against your real sales process.
          </p>
        </div>

        {/* Desktop 3D Carousel / Showcase */}
        <div className="hidden md:block relative">
          <div
            className="relative w-full h-[460px] flex items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            {services.map((service, index) => {
              // Calculate offset relative to activeIndex (-2, -1, 0, 1, 2)
              let offset = index - activeIndex;
              if (offset < -2) offset += services.length;
              if (offset > 2) offset -= services.length;

              const isCurrent = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const translateX = offset * 260;
              const scale = isCurrent ? 1 : 0.88;
              const rotateY = offset * -18;
              const zIndex = 20 - Math.abs(offset) * 5;
              const opacity = isCurrent ? 1 : Math.abs(offset) === 1 ? 0.75 : 0.4;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className="absolute cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex,
                    opacity,
                    width: "340px",
                  }}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              aria-label="Previous service"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? "w-8 bg-[#0a0a0a]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next service"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Swipe Track */}
        <div className="md:hidden">
          <div
            className="flex w-full snap-x snap-mandatory overflow-x-auto gap-4 pb-6 pt-2"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="group block w-full outline-none focus-visible:ring-2 focus-visible:ring-[#1b6ef3]"
    >
      <article
        className="relative flex min-h-[350px] flex-col gap-5 rounded-2xl bg-white p-7 transition-[box-shadow,border-color] duration-300 ease-out overflow-hidden"
        style={{
          border: "1px solid #d1d5db",
          boxShadow: "0 18px 45px -12px rgba(0,0,0,0.12)",
        }}
      >
        {/* 4 decorative corner dots */}
        <span
          aria-hidden="true"
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "#d1d5db", top: "10px", left: "10px" }}
        />
        <span
          aria-hidden="true"
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "#d1d5db", top: "10px", right: "10px" }}
        />
        <span
          aria-hidden="true"
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "#d1d5db", bottom: "10px", left: "10px" }}
        />
        <span
          aria-hidden="true"
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "#d1d5db", bottom: "10px", right: "10px" }}
        />

        {/* Header: Number and Gradient Icon */}
        <div className="flex items-start justify-between">
          <span className="text-[12px] font-bold text-gray-300 tracking-wider">
            {service.num}
          </span>
          <div
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-xs"
            style={{ background: service.gradient }}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="m-0 text-[18px] font-bold leading-[1.35] text-[#0a0a0a] group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="m-0 text-[14px] leading-[1.6] text-gray-600">
            {service.desc}
          </p>
        </div>

        {/* Feature List */}
        <ul className="m-0 flex flex-col gap-2 border-t border-gray-100 pt-4 list-none p-0">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[13px] leading-[1.45] text-gray-700"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[2.5]"
                style={{ color: service.accentColor }}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </article>
    </Link>
  );
}
