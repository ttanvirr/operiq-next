import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import CommandCentre from "@/components/CommandCentre";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Operiq",
    description:
      "Professional GoHighLevel setup, CRM implementation, workflow automation, and funnel development for growing businesses and agencies.",
    url: "https://operiq.com",
    email: "hello@operiq.com",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4f0] text-[#0a0a0a] overflow-x-clip">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Notification Announcement */}
      <AnnouncementBanner />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {/* Section 0: Hero */}
        <HeroSection />

        {/* Section 1: Logo Marquee */}
        <LogoMarquee />

        {/* Section 2: Command Centre */}
        <CommandCentre />

        {/* Section 3: Services */}
        <ServicesSection />

        {/* Section 4: Platform Capabilities */}
        <CapabilitiesGrid />

        {/* Section 5: Implementation Process */}
        <ProcessSection />

        {/* Section 6: Industry Specializations */}
        <IndustriesSection />

        {/* Section 7: Client Success Testimonials */}
        <TestimonialsSection />

        {/* Section 8: Transparent Pricing */}
        <PricingSection />

        {/* Section 9: FAQ */}
        <FaqSection />

        {/* Section 10: Call To Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
