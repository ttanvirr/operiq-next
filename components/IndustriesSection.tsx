import Link from "next/link";
import { ArrowUpRight, Home, Wrench, GraduationCap, Briefcase, HeartPulse, ShoppingBag } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Real Estate",
      desc: "Automated pipelines, lead generation, and booking for agents and brokerages.",
      tags: ["Lead Intake", "Property Tours", "Contract Follow-up"],
      color: "#60a5fa",
      icon: Home,
      href: "/industries/real-estate",
    },
    {
      title: "Home Services",
      desc: "Booking automation, review requests, and job tracking for service businesses.",
      tags: ["Estimate Requests", "Job Dispatch", "Review Automation"],
      color: "#fed7aa",
      icon: Wrench,
      href: "/industries/home-services",
    },
    {
      title: "Coaching and Consulting",
      desc: "Course delivery, calendar booking, and nurture sequences that guide the client journey.",
      tags: ["Discovery Calls", "Program Onboarding", "Client Nurture"],
      color: "#f472b6",
      icon: GraduationCap,
      href: "/industries/coaching-consulting",
    },
    {
      title: "Digital Agencies",
      desc: "White-label GHL systems your clients use under your brand, end to end.",
      tags: ["White-Label Portals", "Snapshot Deploy", "Automated Reports"],
      color: "#60a5fa",
      icon: Briefcase,
      href: "/industries/marketing-agencies",
    },
    {
      title: "Medical and Wellness",
      desc: "Patient communication workflows and appointment automation with high delivery rates.",
      tags: ["Patient Intake", "SMS Reminders", "Care Follow-ups"],
      color: "#fed7aa",
      icon: HeartPulse,
      href: "/industries/healthcare",
    },
    {
      title: "E-commerce",
      desc: "Abandoned cart recovery, SMS follow-ups, and post-purchase customer retention.",
      tags: ["Cart Recovery", "Post-Purchase SMS", "VIP Retention"],
      color: "#f472b6",
      icon: ShoppingBag,
      href: "/industries/ecommerce",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 border-b border-gray-200 overflow-hidden relative bg-[#f5f4f0]"
      aria-labelledby="industries-heading"
    >
      {/* Decorative dots */}
      <div className="absolute top-12 left-1/4 w-2.5 h-2.5 rounded-full bg-emerald-400/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-16 left-12 w-3 h-3 rounded-full bg-amber-400/50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-8 w-2.5 h-2.5 rounded-full bg-pink-400/40 pointer-events-none" aria-hidden="true" />

      <div className="container-page relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="eyebrow text-neutral-500 mb-3 block">
              EVERY NICHE, EVERY MARKET
            </span>
            <h2 id="industries-heading" className="text-headline text-neutral-900">
              A GHL expert for your industry
            </h2>
          </div>
          <div className="self-start md:self-auto">
            <Link className="btn btn-primary group text-sm" href="/book-a-call">
              <span>Don&#x27;t see yours? Tell us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title}>
                <Link
                  href={ind.href}
                  className="group h-full bg-white rounded-[24px] p-7 sm:p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <div>
                    {/* Icon and arrow */}
                    <div className="flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: ind.color }}
                      >
                        <Icon className="w-5 h-5 text-neutral-900" />
                      </div>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-title text-neutral-900 mt-6 mb-2.5">
                      {ind.title}
                    </h3>
                    <p className="text-body-sm text-neutral-600 mb-6 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                    {ind.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption text-neutral-600 bg-neutral-100/90 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
