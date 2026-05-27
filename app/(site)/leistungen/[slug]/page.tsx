import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

const slugToImage: Record<string, string> = {
  berufsunfaehigkeit:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&fit=crop",
  altersvorsorge:
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=80&fit=crop",
  krankenversicherung:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop",
  vermoegensaufbau:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&fit=crop",
  immobilienfinanzierung:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&fit=crop",
  "karriere-finanzplanung":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&fit=crop",
};

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

  const heroImage = slugToImage[slug];

  return (
    <>
      {/* Hero — split oder reines Navy je nach Bild-Verfügbarkeit */}
      <section className="relative min-h-[60vh] grid grid-cols-1 lg:grid-cols-2 bg-navy overflow-hidden">
        {/* Left — Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-40 pb-16 lg:py-0">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-warmwhite/40 hover:text-warmwhite text-xs tracking-widest uppercase font-semibold mb-10 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Alle Leistungen
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warmwhite leading-[1.05] mb-6">
            {leistung.heroHeadline}
          </h1>
          <p className="text-warmwhite/60 text-lg max-w-lg leading-relaxed mb-10">
            {leistung.heroSubtext}
          </p>
          <Button
            render={<Link href="/termin" />}
            variant="gold"
            className="transition-colors duration-200 rounded-none px-10 py-5 text-sm tracking-wide w-fit"
          >
            {leistung.ctaText}
          </Button>
        </div>

        {/* Right — Image */}
        {heroImage ? (
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src={heroImage}
              alt={leistung.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-transparent lg:hidden" />
          </div>
        ) : (
          <div className="hidden lg:block bg-navy/40" />
        )}
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-subtle leading-relaxed">{leistung.description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-warmwhite">
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
