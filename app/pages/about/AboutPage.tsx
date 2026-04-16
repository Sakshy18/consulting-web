import AboutHeroSection from "./sections/AboutHeroSection";
import TeamSection from "@/components/UI/TeamSection";
import TrustedPartnersSection from "@/components/UI/TrustedPartnersSection";
import AboutStrategySection from "./sections/AboutStrategySection";
import AboutOperationalExcellenceSection from "./sections/AboutOperationalExcellenceSection";
import AboutCtaSection from "./sections/AboutCtaSection";
import FaqSection from "@/components/UI/FaqSection";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <AboutHeroSection />
      <TeamSection />
      <TrustedPartnersSection />
      <AboutStrategySection />
      <AboutOperationalExcellenceSection />
      <AboutCtaSection />
      <FaqSection/>
    </main>
  );
}
