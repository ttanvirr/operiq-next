export default function LogoMarquee() {
  const logos = [
    {
      name: "Acme Corp",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
        </svg>
      ),
    },
    {
      name: "GlobalTech",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      name: "Nexus",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
        </svg>
      ),
    },
    {
      name: "Vertex",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
    },
    {
      name: "Nova Media",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5zM5 6h14v8H5z" />
        </svg>
      ),
    },
    {
      name: "Zenith",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 border-b border-gray-100 bg-white overflow-hidden relative">
      <div className="container-page mb-6">
        <p className="text-center eyebrow text-gray-400 font-bold">
          Trusted by growing agencies and businesses
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden mask-linear-fade">
        <div className="animate-marquee items-center gap-12 sm:gap-24 pl-12 sm:pl-24">
          {/* First loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default select-none shrink-0"
            >
              <div className="text-neutral-900">{logo.icon}</div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                {logo.name}
              </span>
            </div>
          ))}

          {/* Duplicate loop for infinite marquee */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default select-none shrink-0"
            >
              <div className="text-neutral-900">{logo.icon}</div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
