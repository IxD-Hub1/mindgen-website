import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import IndustriesSection from "./sections/IndustriesSection";
import PartnershipsSection from "./sections/PartnershipsSection";
import ServicesSection from "./sections/ServicesSection";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";
import FrameworkSection from "./sections/FrameworkSection";

// 1. Import the two new components
import TrustStrip from "./sections/TrustStrip";
import ProblemSection from "./sections/ProblemSection";
import ProofSection from "./sections/ProofSection";
import ResearchSection from "./sections/ResearchSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <FrameworkSection />
        <ServicesSection />
        <IndustriesSection />
        <PartnershipsSection />
        <ProofSection/>
        <ResearchSection/>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}