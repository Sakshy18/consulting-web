export default function TermsAndConditionsPage() {
  return (
    <main className="w-full bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[960px] space-y-6">
        <h1 className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]">
          Terms &amp; Conditions
        </h1>
        <p className="text-[18px] leading-7 text-[#33373d]">
          By using this website, you agree to use the content for informational purposes and not for
          unlawful activity.
        </p>
        <p className="text-[16px] leading-6 text-[#33373d]">
          All materials are provided as-is without warranties. If you have questions about these
          terms, contact us at{" "}
          <a href="mailto:legal@execora.com" className="text-[#1a2e05] underline">
            legal@execora.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
