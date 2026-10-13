export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategy call",
      desc: "Map your business workflow, goals, and technical requirements.",
    },
    {
      num: "02",
      title: "Scoping",
      desc: "Define what gets built, the timeline, and what's needed to start.",
    },
    {
      num: "03",
      title: "Implementation",
      desc: "Configure, build, and integrate every system for your business.",
    },
    {
      num: "04",
      title: "Testing",
      desc: "End-to-end verification of every workflow, channel, and connection.",
    },
    {
      num: "05",
      title: "Handover & support",
      desc: "Documentation, walkthrough, and post-launch support.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200" aria-labelledby="home-process-heading">
      <div className="container-page max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16 md:max-w-3xl">
          <span className="eyebrow mb-4 block">How We Work</span>
          <h2 id="home-process-heading" className="text-headline mb-4 text-neutral-900">
            A structured implementation process.
          </h2>
          <p className="text-body-lg text-gray-500">
            Every engagement follows the same disciplined method — scoped to your business, executed systematically.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:flex justify-between relative pt-2">
          {/* Continuous baseline */}
          <div className="absolute top-[21px] left-5 right-5 h-[2px] bg-gray-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.num}
              className="flex-1 relative pr-8 last:pr-0 group cursor-default"
            >
              {/* Node indicator */}
              <div className="relative z-20 w-11 h-11 rounded-full flex items-center justify-center border-2 bg-white border-gray-300 text-gray-400 group-hover:border-[#1b6ef3] group-hover:text-[#1b6ef3] group-hover:shadow-[0_0_0_5px_rgba(27,110,243,0.12)] transition-all duration-300">
                <span className="text-caption font-bold">{step.num}</span>
              </div>

              {/* Text */}
              <div className="mt-8 max-w-xs relative z-20">
                <h3 className="text-subtitle mb-2.5 text-neutral-900 group-hover:text-[#1b6ef3] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-body-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col pt-2">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.num}
                className="relative flex gap-6 pb-10 last:pb-0 group cursor-default"
              >
                {!isLast && (
                  <div className="absolute top-10 bottom-0 left-[21px] w-[2px] bg-gray-200 group-hover:bg-[#1b6ef3]/40 transition-colors duration-300 z-0" />
                )}

                <div className="relative z-10 w-11 h-11 shrink-0 rounded-full bg-white border-2 border-gray-300 text-gray-400 group-hover:border-[#1b6ef3] flex items-center justify-center group-hover:text-[#1b6ef3] group-hover:shadow-[0_0_0_5px_rgba(27,110,243,0.12)] transition-all duration-300">
                  <span className="text-caption font-bold">{step.num}</span>
                </div>

                <div className="pt-1.5 relative z-10">
                  <h3 className="text-subtitle text-neutral-900 mb-2 group-hover:text-[#1b6ef3] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
