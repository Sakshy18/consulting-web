import FaqSection from "@/components/UI/FaqSection";
import TeamSection from "@/components/UI/TeamSection";
import CtaSection from "@/components/UI/CtaSection";
import HomeHeroSection from "./HomeHeroSection";
import HomeGrowthSection from "./HomeGrowthSection";
import HomeNewsInsightSection from "./HomeNewsInsightSection";
import HomeServiceSection from "./HomeServiceSection";
import HomeStatsSection from "./HomeStatsSection";
import HomeTestimonialsSection from "./HomeTestimonialsSection";
import HomeTrustedPartnersSection from "./HomeTrustedPartnersSection";

export default function HomePage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeTrustedPartnersSection />
      <HomeGrowthSection />
      <HomeStatsSection />
      <HomeTestimonialsSection />
      <TeamSection />
      <FaqSection />
    
      <CtaSection />
      <HomeNewsInsightSection />
    </main>
  );
}
