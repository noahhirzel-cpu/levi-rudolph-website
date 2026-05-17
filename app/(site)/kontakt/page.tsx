import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreib Levi Rudolph direkt — Financial Advisor bei MLP Frankfurt. Antwort innerhalb von 24 Stunden.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 bg-warmwhite">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <SectionHeading
              tag="Kontakt"
              title="Schreib mir direkt"
              subtitle="Hast du Fragen? Ich antworte persönlich — meist innerhalb von 24 Stunden."
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
