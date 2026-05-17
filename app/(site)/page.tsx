import { AnimatedHero } from "@/components/sections/AnimatedHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { client } from "@/lib/sanity/client";
import { recentBlogPostsQuery } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🛡️",
    title: "Berufsunfähigkeitsversicherung",
    description:
      "Dein persönlicher Bodyguard für deine Arbeitskraft. Schütze dein größtes Kapital — deine Fähigkeit zu arbeiten.",
    href: "/leistungen/berufsunfaehigkeit",
  },
  {
    icon: "📈",
    title: "Altersvorsorge & Ruhestandsplanung",
    description:
      "Sequence-of-Return-Risiko, ETF-Strategien, Entnahmekonzepte. Damit du im Alter wirklich frei bist.",
    href: "/leistungen/altersvorsorge",
  },
  {
    icon: "🏥",
    title: "Private Krankenversicherung",
    description:
      "Für Kammerberufler oft Pflicht und Chance zugleich. Ich zeige dir, wann und wie PKV sich wirklich lohnt.",
    href: "/leistungen/krankenversicherung",
  },
  {
    icon: "💰",
    title: "Vermögensaufbau & Kapitalanlage",
    description:
      "ETFs, Depot-Aufbau, Geldanlage vom ersten Gehalt an. Einfach, transparent und renditeorientiert.",
    href: "/leistungen/vermoegensaufbau",
  },
  {
    icon: "🏠",
    title: "Immobilienfinanzierung",
    description:
      "Eigenkapital planen, Finanzierung vergleichen, Erstgespräch kostenlos. Dein Weg zur eigenen Immobilie.",
    href: "/leistungen/immobilienfinanzierung",
  },
  {
    icon: "🎓",
    title: "Karriere & Finanzplanung für Studis",
    description:
      "Brutto/Netto, Steuererklärung, Gehalt verhandeln. Finanzielle Grundlagen für deinen Karrierestart.",
    href: "/leistungen/karriere-finanzplanung",
  },
];

const steps = [
  {
    number: "01",
    title: "Kostenloses Erstgespräch",
    description:
      "30 Minuten, kein Verkaufsdruck. Ich lerne deine Situation kennen und du weißt danach, wo du stehst.",
  },
  {
    number: "02",
    title: "Individuelle Analyse",
    description:
      "Ich analysiere deine aktuelle Situation, deine Ziele und zeige dir konkrete Handlungsoptionen auf.",
  },
  {
    number: "03",
    title: "Maßgeschneiderte Strategie",
    description:
      "Kein Standard-Produkt. Eine Strategie, die wirklich zu deinem Leben, deinen Zielen und deinem Beruf passt.",
  },
];

const trustItems = [
  { icon: "🎓", label: "B.A. DHBW Mannheim", value: "Note 1,5" },
  { icon: "🏢", label: "MLP Finanzberatung SE", value: "50+ Jahre Erfahrung" },
  { icon: "📍", label: "Frankfurt am Main", value: "Persönlich & digital" },
  { icon: "💬", label: "LinkedIn Community", value: "10.000+ Follower" },
];

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  tags?: string[];
}

async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(recentBlogPostsQuery);
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const recentPosts = await getRecentPosts();

  return (
    <>
      {/* Hero */}
      <AnimatedHero
        headline="Finanzielle Klarheit für Kammerberufler & Ingenieure"
        subline="Von 'Ich mach das später' zu 'Hab ich geregelt' — mit maßgeschneiderten Finanzstrategien, die zu deinem Leben passen."
      />

      {/* Trust Bar */}
      <section className="bg-navy/5 border-y border-border py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold text-darktext">{item.value}</span>
                <span className="text-xs text-gray-subtle">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich Teaser */}
      <section className="py-20 px-4 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-navy/10">
              <Image
                src="/levi-placeholder.jpg"
                alt="Levi Rudolph — Financial Advisor Frankfurt"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Gold accent border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/20" />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-navy text-warmwhite rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gold font-semibold uppercase tracking-wide">Financial Advisor</p>
              <p className="text-sm font-bold">MLP · Frankfurt</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading
              tag="Über mich"
              title="Ich bin Levi — Finanzberater auf Augenhöhe"
              subtitle="Kein Versicherungsblabla, keine 08/15-Lösungen. Beratung, die wirklich zu dir passt."
            />
            <p className="text-gray-subtle leading-relaxed">
              Als Absolvent der DHBW Mannheim (Note 1,5) und Financial Advisor bei MLP kenne ich
              beide Seiten: die Theorie aus dem Studium und die Praxis aus der täglichen Beratung.
              Meine Zielgruppe sind angehende Kammerberufler und Ingenieure — Menschen wie du,
              die kluge Entscheidungen treffen wollen.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Persönliche Beratung auf Augenhöhe",
                "Keine versteckten Provisionen",
                "Langfristige Partnerschaft statt Einmalberatung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-darktext">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button
              render={<Link href="/ueber-mich" />}
              variant="outline"
              className="w-fit border-navy text-navy hover:bg-navy hover:text-warmwhite rounded-full px-6 gap-2 mt-2"
            >
              Lern mich kennen
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionHeading
              tag="Leistungen"
              title="Was ich für dich tue"
              subtitle="Maßgeschneiderte Beratung in den Bereichen, die für deinen Lebensabschnitt wirklich zählen."
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionHeading
              tag="So funktioniert's"
              title="Von der Idee zur Strategie"
              subtitle="Drei Schritte zu deiner persönlichen Finanzstrategie."
              centered
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col gap-4 relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%+1rem)] w-8 h-0.5 bg-gold/30" />
                )}
                <div className="text-5xl font-bold font-heading text-gold/20 leading-none">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold text-warmwhite">
                  {step.title}
                </h3>
                <p className="text-warmwhite/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              render={<Link href="/termin" />}
              className="bg-gold text-navy font-semibold hover:bg-gold-light rounded-full px-8 py-6 text-base gap-2"
            >
              <CheckCircle2 size={18} />
              Jetzt Erstgespräch buchen
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {recentPosts.length > 0 && (
        <section className="py-20 px-4 bg-warmwhite">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <SectionHeading
                tag="Blog"
                title="Aktuelle Beiträge"
                subtitle="Finanzwissen, das wirklich hilft."
              />
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
              >
                Alle Beiträge
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <div className="flex justify-center mt-8 sm:hidden">
              <Button render={<Link href="/blog" />} variant="outline" className="rounded-full gap-2">
                Alle Beiträge <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
