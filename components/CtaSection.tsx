import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      className="py-16 md:py-24 border-t border-gray-200 bg-[#f5f4f0]"
      aria-labelledby="cta-heading"
    >
      <div className="container-page">
        <div className="bg-white rounded-[32px] border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-16 sm:px-12 sm:py-20 max-w-[940px] mx-auto text-center relative">
          <span className="eyebrow text-neutral-500 mb-5 block">
            Free Strategy Call
          </span>
          <h2
            id="cta-heading"
            className="text-headline text-neutral-900 mb-5 font-extrabold"
          >
            Start with a strategy call.
          </h2>
          <p className="text-body-lg text-neutral-600 mb-9 max-w-xl mx-auto leading-relaxed">
            Tell us about your business and what you&#x27;re trying to build. We&#x27;ll outline a clear implementation plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8">
            <Link className="btn btn-primary btn-lg group" href="/book-a-call">
              <span>Book a Call</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                →
              </span>
            </Link>
          </div>

          <p className="text-caption text-neutral-400 font-medium">
            Average delivery — 5 business days · 24/7 support included
          </p>
        </div>
      </div>
    </section>
  );
}
