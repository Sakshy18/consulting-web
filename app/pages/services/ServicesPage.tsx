import ServicesGrowthSection from "./sections/ServicesGrowthSection";
import ServicesScaleChecklistSection from "./sections/ServicesScaleChecklistSection";
import ServicesGuidanceSection from "./sections/ServicesGuidanceSection";
import FaqSection from "@/components/UI/FaqSection";

export default function ServicesPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <ServicesGrowthSection />
      <ServicesScaleChecklistSection />
      <ServicesGuidanceSection />
      <FaqSection/>
    </main>
  );
}
