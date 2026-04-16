import AboutHeroSection from "./AboutHeroSection";
import TeamSection from "@/components/UI/TeamSection";
import TrustedPartnersSection from "@/components/UI/TrustedPartnersSection";
import AboutStrategySection from "./AboutStrategySection";
import AboutOperationalExcellenceSection from "./AboutOperationalExcellenceSection";
import AboutCtaSection from "./AboutCtaSection";
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
