import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      title: "CRM & Pipeline",
      desc: "Custom pipeline stages, contact fields, lead source tracking, and opportunity management configured to match your real sales process.",
    },
    {
      title: "Workflow Automation",
      desc: "Lead follow-up sequences, appointment confirmation, reminders, and post-service workflows — tested and operational at handover.",
    },
    {
      title: "Calendar & Booking",
      desc: "Structured booking with configured availability, appointment types, confirmation and reminder sequences.",
    },
    {
      title: "Communication Systems",
      desc: "Email authentication, phone/SMS setup, and two-way communication channels — fully configured and deliverability-tested.",
    },
    {
      title: "Integrations",
      desc: "Native connections, webhooks, and API integrations to connect your GoHighLevel account with the tools your business uses.",
    },
    {
      title: "Funnels & Pages",
      desc: "Landing pages, opt-in funnels, and booking pages built inside GHL and connected to your CRM and automation workflows.",
    },
  ];

  return (
    <section
      className="section-md border-b border-gray-200 bg-[#f5f4f0]"
      aria-labelledby="ghl-cap-heading"
    >
      <div className="container-page">
        {/* Section Heading */}
        <div className="flex flex-col text-center items-center mb-12 sm:mb-14">
          <span className="eyebrow mb-3">GOHIGHLEVEL</span>
          <h2
            id="ghl-cap-heading"
            className="text-headline max-w-[850px] mx-auto text-neutral-900"
          >
            The complete GoHighLevel implementation.
          </h2>
          <p className="text-body-lg mt-3.5 max-w-[700px] mx-auto text-gray-600">
            GoHighLevel works best when every system is configured correctly and connected. We implement the platform end-to-end — not feature by feature in isolation.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {capabilities.map((cap, i) => (
            <div key={i} className="h-full">
              <div className="bg-white rounded-[24px] p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-subtitle text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            className="btn btn-primary group"
            href="/services/gohighlevel-setup"
          >
            <span>GoHighLevel Setup Details</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
