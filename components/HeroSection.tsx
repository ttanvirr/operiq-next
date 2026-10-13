import Link from "next/link";
import { CheckCircle2, Star, Zap, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="pt-12 pb-10 md:pt-16 md:pb-14 border-b border-gray-200 overflow-hidden bg-[#f5f4f0]"
      aria-labelledby="home-hero-heading"
    >
      <div className="container-page">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full shadow-2xs"
              style={{ backgroundColor: "#f0cdb7", color: "#7a3d12" }}
            >
              GoHighLevel Implementation and Automation
            </span>
          </div>

          {/* Headline with green highlighter */}
          <h1
            id="home-hero-heading"
            className="text-display max-w-[840px] mb-5 tracking-tight text-neutral-900"
          >
            Hire GoHighLevel{" "}
            <span className="relative inline-block px-1">
              <span
                aria-hidden="true"
                className="absolute inset-y-1 -inset-x-1.5 bg-[#22c55e]/30 rounded-md z-0"
              />
              <span className="relative z-10 font-extrabold">experts</span>
            </span>{" "}
            who can turn <br className="hidden sm:block" />
            your CRM into booked calls
          </h1>

          {/* Subtitle */}
          <p className="text-body-lg max-w-[540px] mb-8 text-neutral-600">
            We map your sales process first, then build the CRM, automations, and workflows around it — every system tested and operational before handover.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 mb-10">
            <Link className="btn btn-primary btn-lg group" href="/book-a-call">
              <span>Book a Strategy Call</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </Link>
            <Link className="btn btn-outline btn-lg group" href="/services">
              <span>Explore Services</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pt-2 text-neutral-600">
            <div className="flex items-center gap-2 text-caption font-semibold">
              <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
              <span>Official GoHighLevel partner</span>
            </div>
            <span aria-hidden="true" className="hidden sm:block text-gray-300 select-none">
              |
            </span>
            <div className="flex items-center gap-2 text-caption font-semibold">
              <Star className="w-4 h-4 text-neutral-900 shrink-0 fill-neutral-900" />
              <span>Fixed scope, fixed price</span>
            </div>
            <span aria-hidden="true" className="hidden sm:block text-gray-300 select-none">
              |
            </span>
            <div className="flex items-center gap-2 text-caption font-semibold">
              <Zap className="w-4 h-4 text-neutral-900 shrink-0 fill-neutral-900" />
              <span>Live in 2–4 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
