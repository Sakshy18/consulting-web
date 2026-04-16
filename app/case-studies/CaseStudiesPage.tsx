import CaseStudiesOverviewSection from "./CaseStudiesOverviewSection";
import CaseStudiesImpactSection from "./CaseStudiesImpactSection";
import CaseStudiesStrategySection from "./CaseStudiesStrategySection";
import CaseStudiesCtaSection from "./CaseStudiesCtaSection";

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
