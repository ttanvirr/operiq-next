"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is GoHighLevel and how can it help my business?",
      answer:
        "GoHighLevel is a comprehensive all-in-one marketing and sales platform. It helps businesses consolidate their software stack by combining CRM, email marketing, SMS, calendar scheduling, funnels, and automation into a single system, streamlining operations and improving lead conversion.",
    },
    {
      question: "What does your GHL setup service include?",
      answer:
        "Our service includes complete configuration of your GoHighLevel account. This covers CRM pipeline setup, domain and email authentication, calendar booking systems, core automation workflows, SMS/phone provisioning, and a structured handover so your team can use the system immediately.",
    },
    {
      question: "How long does a typical GHL setup take?",
      answer:
        "A standard implementation typically takes 2 to 4 weeks depending on the complexity of your requirements. We start with a strategy call to map out your workflows, followed by the build phase, rigorous testing, and a final handover.",
    },
    {
      question: "Do you build funnels and websites inside GoHighLevel?",
      answer:
        "Yes, depending on the package you choose, we can design and build custom landing pages, opt-in funnels, and full websites directly within GoHighLevel, fully integrated with your CRM and automated follow-up sequences.",
    },
    {
      question: "Can you create automated workflows and follow-up sequences?",
      answer:
        "Absolutely. We specialize in building reliable automation workflows, including immediate lead follow-ups, appointment reminders, nurture sequences, and post-service review requests to ensure no opportunity falls through the cracks.",
    },
    {
      question: "Can you migrate my existing CRM or customer data?",
      answer:
        "Yes, we can handle data migration from your existing CRM or spreadsheets. We ensure your contacts, tags, and basic histories are properly formatted and securely imported into your new GoHighLevel pipelines.",
    },
    {
      question: "Will you provide support after the setup is complete?",
      answer:
        "Yes. Every setup includes a post-launch support period (ranging from 30 to 90 days depending on your package) to help answer questions, make minor adjustments, and ensure your team is confident using the platform.",
    },
    {
      question: "Can you customize the setup for my specific business?",
      answer:
        "100%. We do not use generic, one-size-fits-all templates. Every pipeline, custom field, and automation is mapped and configured to match your actual business model and sales process.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="home-faq-heading">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex flex-col text-center items-center mb-10 sm:mb-14">
          <span className="eyebrow mb-3">FAQ</span>
          <h2 id="home-faq-heading" className="text-headline max-w-[850px] mx-auto text-neutral-900">
            Common questions about our setup service.
          </h2>
          <p className="text-body-lg mt-3.5 max-w-[700px] mx-auto text-gray-600">
            If your question isn&#x27;t covered here, book a strategy call and we&#x27;ll be happy to answer it directly.
          </p>
        </div>

        {/* Accordion list */}
        <div className="w-full mt-6" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="accordion-item" role="listitem">
                <h3>
                  <button
                    id={`accordion-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-${i}-panel`}
                    onClick={() => toggle(i)}
                    className="accordion-trigger group"
                  >
                    <span className="text-left font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <Plus
                      className={`accordion-icon shrink-0 ${isOpen ? "open" : ""}`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`accordion-${i}-panel`}
                    role="region"
                    aria-labelledby={`accordion-${i}`}
                    className="pb-5 pt-1 text-body-sm text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
