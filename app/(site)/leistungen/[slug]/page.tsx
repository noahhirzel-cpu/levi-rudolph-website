import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/ui/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLeistungBySlug, leistungenContent } from "@/lib/leistungenContent";
import { Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return leistungenContent.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leistung = getLeistungBySlug(slug);
  if (!leistung) return { title: "Nicht gefunden" };
  return {
    title: leistung.title,
    description: leistung.heroSubtext,
  };
}

export default async function LeistungsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const leistung = getLeistungBySlug(slug);

  if (!leistung) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-warmwhite/60 hover:text-warmwhite text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Leistungen
          </Link>
          <div className="text-5xl mb-6">{leistung.icon}</div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight mb-4">
            {leistung.heroHeadline}
          </h1>
          <p className="text-warmwhite/70 text-xl max-w-2xl leading-relaxed mb-8">
            {leistung.heroSubtext}
          </p>
          <Button
            render={<Link href="/termin" />}
            className="bg-gold text-navy font-semibold hover:bg-gold-light rounded-full px-8 py-6 text-base gap-2"
          >
            <Calendar size={18} />
            {leistung.ctaText}
          </Button>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-warmwhite">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-subtle leading-relaxed">{leistung.description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            tag="Was du bekommst"
            title="Das biete ich dir"
            className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leistung.benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-3 p-4 bg-warmwhite rounded-xl"
              >
                <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-darktext font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {leistung.faqItems.length > 0 && (
        <section className="py-16 px-4 bg-warmwhite">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              tag="FAQ"
              title="Häufige Fragen"
              className="mb-10"
            />
            <Accordion multiple={false} className="flex flex-col gap-3">
              {leistung.faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border rounded-xl px-6 bg-white"
                >
                  <AccordionTrigger className="font-heading font-bold text-darktext text-left py-5 hover:no-underline hover:text-gold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-subtle leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <CTABanner
        buttonText={leistung.ctaText}
      />
    </>
  );
}
