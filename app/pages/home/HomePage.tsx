import FaqSection from "@/components/UI/FaqSection";
import TeamSection from "@/components/UI/TeamSection";
import CtaSection from "@/components/UI/CtaSection";
import HomeHeroSection from "./sections/HomeHeroSection";
import HomeGrowthSection from "./sections/HomeGrowthSection";
import HomeNewsInsightSection from "./sections/HomeNewsInsightSection";
import HomeServiceSection from "./sections/HomeServiceSection";
import HomeStatsSection from "./sections/HomeStatsSection";
import HomeTestimonialsSection from "./sections/HomeTestimonialsSection";
import HomeTrustedPartnersSection from "./sections/HomeTrustedPartnersSection";

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
