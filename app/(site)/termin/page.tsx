import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buche jetzt dein kostenloses 30-Minuten Erstgespräch mit Levi Rudolph — Financial Advisor bei MLP Frankfurt. Unverbindlich und kostenlos.",
};

const calcomUrl =
  process.env.NEXT_PUBLIC_CAL_COM_URL ??
  "https://cal.com/levi-rudolph/erstgespraech";

export default function TerminPage() {
  return (
    <>
      <section className="pt-32 pb-8 px-4 bg-warmwhite">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              tag="Termin"
              title="Kostenloses Erstgespräch buchen"
              subtitle="30 Minuten, kein Verkaufsdruck. Lass uns schauen, wie ich dir helfen kann."
              centered
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              "✓ Kostenlos & unverbindlich",
              "✓ 30 Minuten via Video oder Telefon",
              "✓ Keine versteckten Kosten",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-darktext">
                <CheckCircle2 size={16} className="text-gold shrink-0" />
                {item.replace("✓ ", "")}
              </div>
            ))}
          </div>

          {/* Cal.com Embed */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-white">
            <iframe
              src={calcomUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Termin mit Levi Rudolph buchen"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
