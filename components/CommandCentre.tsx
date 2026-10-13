"use client";

import { useEffect, useState } from "react";

export default function CommandCentre() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="py-16 md:py-20 border-b border-gray-200 overflow-hidden relative bg-[#f5f4f0]"
      aria-labelledby="command-centre-heading"
    >
      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2
            id="command-centre-heading"
            className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
          >
            Your GoHighLevel Command Centre
          </h2>
          <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 shadow-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Automations live
            </span>
          </div>
        </div>

        {/* Interactive SVG Diagram */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-[5/3] sm:aspect-[5/3] lg:aspect-[10/6]">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full overflow-visible select-none"
            aria-hidden="true"
          >
            <defs>
              <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.06" />
              </filter>
              <filter id="centerGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#f472b6" floodOpacity="0.35" />
              </filter>
            </defs>

            {/* Connecting flow paths */}
            {/* 1. Left Top (Funnels & Sites) */}
            <g>
              <path
                d="M 410 300 C 310 300, 420 150, 320 150"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 410 300 C 310 300, 420 150, 320 150"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* 2. Left Middle (AI Chatbots) */}
            <g>
              <path
                d="M 410 300 C 310 300, 380 300, 280 300"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 410 300 C 310 300, 380 300, 280 300"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* 3. Left Bottom (CRM and Pipelines) */}
            <g>
              <path
                d="M 410 300 C 310 300, 420 450, 320 450"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 410 300 C 310 300, 420 450, 320 450"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* 4. Right Top (Booking and Calendars) */}
            <g>
              <path
                d="M 590 300 C 690 300, 610 150, 710 150"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 590 300 C 690 300, 610 150, 710 150"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* 5. Right Middle (SMS Automation) */}
            <g>
              <path
                d="M 590 300 C 690 300, 650 300, 750 300"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 590 300 C 690 300, 650 300, 750 300"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* 6. Right Bottom (Email Marketing) */}
            <g>
              <path
                d="M 590 300 C 690 300, 610 450, 710 450"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.18"
              />
              <path
                d="M 590 300 C 690 300, 610 450, 710 450"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.75"
                className="animate-flow"
              />
            </g>

            {/* Satellite Node 1: Funnels & Sites */}
            <g className="transition-all duration-300 hover:scale-105 origin-[215px_150px]">
              <rect
                x="110"
                y="126"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="138" cy="150" r="16" fill="#f97316" />
              <text x="138" y="154.5" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
                F
              </text>
              <text x="164" y="155" fill="#1f2937" fontSize="13" fontWeight="600">
                Funnels and Sites
              </text>
            </g>

            {/* Satellite Node 2: AI Chatbots */}
            <g className="transition-all duration-300 hover:scale-105 origin-[175px_300px]">
              <rect
                x="70"
                y="276"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="98" cy="300" r="16" fill="#3b82f6" />
              <text x="98" y="304.5" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
                AI
              </text>
              <text x="124" y="305" fill="#1f2937" fontSize="13" fontWeight="600">
                AI Chatbots
              </text>
            </g>

            {/* Satellite Node 3: CRM and Pipelines */}
            <g className="transition-all duration-300 hover:scale-105 origin-[215px_450px]">
              <rect
                x="110"
                y="426"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="138" cy="450" r="16" fill="#10b981" />
              <text x="138" y="454.5" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                CRM
              </text>
              <text x="164" y="455" fill="#1f2937" fontSize="13" fontWeight="600">
                CRM and Pipelines
              </text>
            </g>

            {/* Satellite Node 4: Booking and Calendars */}
            <g className="transition-all duration-300 hover:scale-105 origin-[815px_150px]">
              <rect
                x="710"
                y="126"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="738" cy="150" r="16" fill="#ec4899" />
              <text x="738" y="154.5" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
                B
              </text>
              <text x="764" y="155" fill="#1f2937" fontSize="13" fontWeight="600">
                Booking and Calendars
              </text>
            </g>

            {/* Satellite Node 5: SMS Automation */}
            <g className="transition-all duration-300 hover:scale-105 origin-[855px_300px]">
              <rect
                x="750"
                y="276"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="778" cy="300" r="16" fill="#ec4899" />
              <text x="778" y="304.5" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
                SMS
              </text>
              <text x="804" y="305" fill="#1f2937" fontSize="13" fontWeight="600">
                SMS Automation
              </text>
            </g>

            {/* Satellite Node 6: Email Marketing */}
            <g className="transition-all duration-300 hover:scale-105 origin-[815px_450px]">
              <rect
                x="710"
                y="426"
                width="210"
                height="48"
                rx="24"
                fill="#ffffff"
                stroke="#e5e7eb"
                strokeWidth="1.5"
                filter="url(#cardShadow)"
              />
              <circle cx="738" cy="450" r="16" fill="#f59e0b" />
              <text x="738" y="454.5" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
                E
              </text>
              <text x="764" y="455" fill="#1f2937" fontSize="13" fontWeight="600">
                Email Marketing
              </text>
            </g>

            {/* Center Core: GoHighLevel CORE CRM */}
            <g className="transition-transform duration-300 hover:scale-105 origin-[500px_300px]">
              <rect
                x="400"
                y="256"
                width="200"
                height="88"
                rx="28"
                fill="none"
                stroke="#f472b6"
                strokeWidth="2"
                strokeOpacity="0.25"
              />
              <rect
                x="410"
                y="264"
                width="180"
                height="72"
                rx="24"
                fill="#f472b6"
                filter="url(#centerGlow)"
              />
              <text
                x="500"
                y="298"
                fill="#ffffff"
                fontSize="22"
                fontWeight="800"
                fontStyle="italic"
                textAnchor="middle"
                letterSpacing="-0.02em"
              >
                GoHighLevel
              </text>
              <text
                x="500"
                y="318"
                fill="#fce7f3"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="0.06em"
                opacity="0.95"
              >
                CORE CRM
              </text>
            </g>
          </svg>
        </div>

        {/* 3 KPI Metric Cards */}
        <div className="container-page mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Pipeline */}
            <div className="bg-white rounded-2xl border border-gray-200/90 px-6 py-5 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                Pipeline · MTD
              </p>
              <p className="text-3xl font-bold font-number tracking-tight text-neutral-900 mb-4">
                $148.2k
              </p>
              <svg
                viewBox="0 0 160 32"
                className="w-full h-8"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,28 20,24 40,26 60,18 80,20 100,14 120,16 140,8 160,10"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Card 2: New Leads */}
            <div className="bg-white rounded-2xl border border-gray-200/90 px-6 py-5 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                New Leads
              </p>
              <p className="text-3xl font-bold font-number tracking-tight text-neutral-900 mb-4">
                312
              </p>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: active ? "68%" : "0%" }}
                />
              </div>
            </div>

            {/* Card 3: Calls Booked */}
            <div className="bg-white rounded-2xl border border-gray-200/90 px-6 py-5 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                Calls Booked
              </p>
              <p className="text-3xl font-bold font-number tracking-tight text-neutral-900 mb-4">
                128
              </p>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: active ? "52%" : "0%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
