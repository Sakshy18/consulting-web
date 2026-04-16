import ServicesGrowthSection from "./ServicesGrowthSection";
import ServicesScaleChecklistSection from "./ServicesScaleChecklistSection";
import ServicesGuidanceSection from "./ServicesGuidanceSection";
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
