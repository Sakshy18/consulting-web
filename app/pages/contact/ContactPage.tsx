import FaqSection from "@/components/UI/FaqSection";
import ContactFormSection from "./sections/ContactFormSection";

export default function ContactPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <ContactFormSection />
      <FaqSection/>
    </main>
  );
}
