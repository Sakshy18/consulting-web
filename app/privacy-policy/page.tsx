export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto w-full max-w-[960px] space-y-6">
        <h1 className="text-[40px] leading-[48px] font-medium tracking-[-1.2px] text-[#070a0f]">
          Privacy Policy
        </h1>
        <p className="text-[18px] leading-7 text-[#33373d]">
          We respect your privacy and only collect the information needed to respond to inquiries,
          provide consulting services, and improve our website experience.
        </p>
        <p className="text-[16px] leading-6 text-[#33373d]">
          Information submitted through our forms is used only for communication and service
          delivery. We do not sell personal data. For privacy-related requests, contact us at{" "}
          <a href="mailto:privacy@execora.com" className="text-[#1a2e05] underline">
            privacy@execora.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
