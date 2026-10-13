"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The CRM configuration completely transformed how we handle inbound leads. We're closing 30% more deals simply because no one falls through the cracks anymore.",
      name: "Sarah Jenkins",
      role: "Operations Director",
      company: "Elevate Real Estate",
      initial: "S",
    },
    {
      quote:
        "We needed a system that actually matched our complex sales process. They mapped it out perfectly and delivered a GoHighLevel setup that our team adopted immediately.",
      name: "Michael Chen",
      role: "CEO",
      company: "Apex Consulting Group",
      initial: "M",
    },
    {
      quote:
        "Their workflow automations save us at least 15 hours a week in manual follow-ups. The handover process was incredibly thorough.",
      name: "David Ross",
      role: "Founder",
      company: "Ross & Partners",
      initial: "D",
    },
    {
      quote:
        "Unlike other agencies, they didn't just sell us a template. They built a custom integration ecosystem that connects our existing tools directly into GHL.",
      name: "Elena Rodriguez",
      role: "Marketing Head",
      company: "Nexus Tech Solutions",
      initial: "E",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="section-md border-b border-gray-200 overflow-hidden bg-[#f5f4f0]"
      aria-labelledby="home-testimonials-heading"
    >
      <div className="container-page">
        {/* Heading */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center">
          <span className="eyebrow mb-3">CLIENT SUCCESS</span>
          <h2
            id="home-testimonials-heading"
            className="text-headline max-w-[850px] mx-auto tracking-tight text-neutral-900"
          >
            Systems that drive real business results.
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="w-full shrink-0 px-2 sm:px-4">
                  <div className="flex flex-col gap-6 w-full bg-white rounded-[28px] p-8 sm:p-12 transition-all duration-300 border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                    <Quote className="w-10 h-10 text-neutral-300 shrink-0" />
                    <blockquote className="flex-1">
                      <p className="text-[20px] sm:text-[24px] text-neutral-900 leading-[1.5] tracking-tight font-medium">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                        <span className="text-body-sm font-bold text-gray-600">
                          {item.initial}
                        </span>
                      </div>
                      <div>
                        <p className="text-body-sm font-bold text-neutral-900">
                          {item.name}
                        </p>
                        <p className="text-caption text-gray-500">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 px-4">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? "w-8 bg-[#0a0a0a]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-neutral-800 hover:text-black hover:border-black transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
