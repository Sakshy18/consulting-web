import CaseStudiesOverviewSection from "./sections/CaseStudiesOverviewSection";
import CaseStudiesImpactSection from "./sections/CaseStudiesImpactSection";
import CaseStudiesStrategySection from "./sections/CaseStudiesStrategySection";
import CaseStudiesCtaSection from "./sections/CaseStudiesCtaSection";

export default function CaseStudiesPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <CaseStudiesOverviewSection />
      <CaseStudiesImpactSection />
      <CaseStudiesStrategySection />
      <CaseStudiesCtaSection />
    </main>
  );
}
