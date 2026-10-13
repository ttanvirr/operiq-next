import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      desc: "For businesses that need the essential GoHighLevel setup.",
      price: "$1,500",
      featured: false,
      btnClass: "btn-outline",
      features: [
        "CRM & pipeline setup",
        "Calendar & booking configuration",
        "Basic email/SMS templates",
        "Domain & email authentication",
        "1-hour team onboarding",
      ],
    },
    {
      name: "Growth",
      desc: "For businesses that need a complete CRM, automation, and funnel system.",
      price: "$3,000",
      featured: true,
      badge: "Most Popular",
      btnClass: "btn-primary",
      features: [
        "Everything in Starter",
        "Automated lead follow-up sequences",
        "Appointment reminder workflows",
        "Custom landing page & funnel",
        "Basic third-party integrations",
        "30 days post-launch support",
      ],
    },
    {
      name: "Scale",
      desc: "For businesses that need advanced automation and a fully customized ecosystem.",
      price: "$5,500+",
      featured: false,
      btnClass: "btn-outline",
      features: [
        "Everything in Growth",
        "Advanced multi-step automations",
        "Custom webhook & API integrations",
        "Complex data migration",
        "Custom reporting dashboards",
        "90 days dedicated support",
      ],
    },
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="pricing-heading">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col text-center items-center mb-12 sm:mb-16">
          <span className="eyebrow mb-3">Pricing</span>
          <h2 id="pricing-heading" className="text-headline max-w-[850px] mx-auto text-neutral-900">
            Transparent pricing for professional implementation.
          </h2>
          <p className="text-body-lg mt-3.5 max-w-[700px] mx-auto text-gray-600">
            Choose the level of implementation that matches your business complexity. No hidden fees or ongoing retainers required.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div key={tier.name} className="h-full flex">
              <div
                className={`card card-padded flex flex-col justify-between w-full relative transition-all duration-300 hover:shadow-lg ${
                  tier.featured
                    ? "border-neutral-900 ring-2 ring-neutral-900 shadow-md md:-translate-y-2 bg-white"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#0a0a0a] text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-xs">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-title mb-2 text-neutral-900 font-bold">{tier.name}</h3>
                    <p className="text-body-sm text-gray-500 min-h-[3rem] leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="text-display font-number text-neutral-900 my-6">
                    {tier.price}
                  </div>

                  <ul className="flex flex-col gap-3 my-6 list-none p-0">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body-sm text-gray-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1 stroke-[2.5]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link className={`btn w-full justify-center ${tier.btnClass}`} href="/book-a-call">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
