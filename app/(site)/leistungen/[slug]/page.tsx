import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLeistungBySlug, leistungenContent } from "@/lib/leistungenContent";
import { ArrowLeft } from "lucide-react";

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
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-navy text-warmwhite">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-warmwhite/40 hover:text-warmwhite text-xs tracking-widest uppercase font-semibold mb-12 transition-colors"
          >
            <ArrowLeft size={14} />
            Alle Leistungen
          </Link>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight mb-6">
            {leistung.heroHeadline}
          </h1>
          <p className="text-warmwhite/50 text-xl max-w-2xl leading-relaxed mb-10">
            {leistung.heroSubtext}
          </p>
          <Button
            render={<Link href="/termin" />}
            className="bg-gold text-navy font-semibold hover:bg-gold-light transition-colors duration-200 rounded-none px-10 py-5 text-sm tracking-wide"
          >
            {leistung.ctaText}
          </Button>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-subtle leading-relaxed">{leistung.description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-10">
            Was du bekommst
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-border">
            {leistung.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 p-6 border-b border-r border-border"
              >
                <span className="text-gold font-bold text-lg leading-none mt-0.5 shrink-0">—</span>
                <span className="text-darktext text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {leistung.faqItems.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-10">
              Häufige Fragen
            </p>
            <Accordion multiple={false} className="flex flex-col divide-y divide-border border-y border-border">
              {leistung.faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="py-1"
                >
                  <AccordionTrigger className="font-heading font-bold text-darktext text-left py-5 text-lg hover:no-underline hover:text-gold transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-subtle leading-relaxed pb-5 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <CTABanner buttonText={leistung.ctaText} />
    </>
  );
}
