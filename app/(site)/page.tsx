import { AnimatedHero } from "@/components/sections/AnimatedHero";
import { VideoTeaser } from "@/components/sections/VideoTeaser";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { client } from "@/lib/sanity/client";
import { recentBlogPostsQuery } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Cross, BarChart2, Building2, BookOpen } from "lucide-react";


const services = [
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: "Berufsunfähigkeitsversicherung",
    description:
      "Deine Arbeitskraft ist dein größtes Kapital. Ich finde die Absicherung, die wirklich zu deinem Beruf passt.",
    href: "/leistungen/berufsunfaehigkeit",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    title: "Altersvorsorge",
    description:
      "ETF-Strategien, Entnahmekonzepte, Sequence-of-Return-Risiko. Damit du im Alter wirklich frei bist.",
    href: "/leistungen/altersvorsorge",
  },
  {
    icon: <Cross size={28} strokeWidth={1.5} />,
    title: "Private Krankenversicherung",
    description:
      "Für Kammerberufler oft Pflicht und Chance zugleich. Eine ehrliche Einschätzung — ohne Schönfärberei.",
    href: "/leistungen/krankenversicherung",
  },
  {
    icon: <BarChart2 size={28} strokeWidth={1.5} />,
    title: "Vermögensaufbau",
    description:
      "Vom ersten Depot bis zur langfristigen Strategie. Transparent, renditeorientiert, auf dich zugeschnitten.",
    href: "/leistungen/vermoegensaufbau",
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Immobilienfinanzierung",
    description:
      "Eigenkapital planen, Finanzierung vergleichen. Dein Weg zur eigenen Immobilie — Schritt für Schritt.",
    href: "/leistungen/immobilienfinanzierung",
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    title: "Karriere & Finanzplanung",
    description:
      "Brutto/Netto, Steuererklärung, Gehalt verhandeln. Finanzielle Grundlagen für deinen Karrierestart.",
    href: "/leistungen/karriere-finanzplanung",
  },
];

const stats = [
  { value: "1,5", label: "Studiumsabschluss DHBW" },
  { value: "50+", label: "Jahre MLP am Markt" },
  { value: "10k+", label: "Follower auf LinkedIn" },
  { value: "100%", label: "Unverbindlich & kostenlos" },
];

const steps = [
  {
    number: "01",
    title: "Erstgespräch",
    description:
      "30 Minuten, kein Verkaufsdruck. Ich lerne deine Situation kennen und du weißt danach, wo du stehst.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Ich analysiere deine aktuelle Situation und zeige dir konkrete Handlungsoptionen auf.",
  },
  {
    number: "03",
    title: "Strategie",
    description:
      "Kein Standardprodukt. Eine Strategie, die wirklich zu deinem Leben, deinen Zielen und deinem Beruf passt.",
  },
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
      <AnimatedHero
        headline="Finanzielle Klarheit für Kammerberufler & Ingenieure"
        subline="Von 'Ich mach das später' zu 'Hab ich geregelt' — mit maßgeschneiderten Finanzstrategien, die zu deinem Leben passen."
      />

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6 first:pl-0 last:pr-0">
                <span className="font-heading text-3xl font-bold text-darktext">{stat.value}</span>
                <span className="text-xs text-gray-subtle mt-1 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich Teaser */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-navy/5 overflow-hidden">
              <Image
                src="/images/levi-business.jpeg"
                alt="Levi Rudolph — Financial Advisor Frankfurt"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold">
              Über mich
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight">
              Beratung auf Augenhöhe — nicht von der Stange
            </h2>
            <p className="text-gray-subtle leading-relaxed text-lg">
              Ich bin Levi Rudolph, Financial Advisor bei MLP in Frankfurt. Kein
              Versicherungsblabla, keine 08/15-Lösungen. Ich bin Absolvent der DHBW
              Mannheim und berate täglich angehende Kammerberufler und Ingenieure —
              Menschen, die kluge Entscheidungen treffen wollen.
            </p>
            <Link
              href="/ueber-mich"
              className="inline-flex items-center gap-2 text-sm font-semibold text-darktext border-b border-darktext pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Meine Geschichte
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Teaser */}
      <VideoTeaser
        headline="Beratung, die wirklich passt"
        subline="In einem kurzen Erstgespräch lerne ich deine Situation kennen — und du erfährst, wie ich dir konkret helfen kann. Kein Druck, kein Script."
        label="Meine Arbeitsweise"
        posterSrc="/images/beratung-1.jpg"
        posterAlt="Professionelle Finanzberatung mit Levi Rudolph"
      />

      {/* Services */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                Leistungen
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight">
                Was ich für dich tue
              </h2>
            </div>
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-darktext border-b border-darktext pb-0.5 w-fit hover:text-gold hover:border-gold transition-colors duration-200 shrink-0"
            >
              Alle Leistungen
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {services.map((service) => (
              <div key={service.href} className="border-b border-r border-border">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
              So funktioniert's
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-warmwhite leading-tight">
              Drei Schritte zu deiner Finanzstrategie
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-5">
                <span className="font-heading text-6xl font-bold text-warmwhite/10 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-warmwhite">
                  {step.title}
                </h3>
                <p className="text-warmwhite/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-16 border-t border-white/10">
            <Link
              href="/termin"
              className="inline-flex items-center gap-3 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200"
            >
              Kostenloses Erstgespräch buchen
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {recentPosts.length > 0 && (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-warmwhite">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                  Blog
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-darktext leading-tight">
                  Aktuelle Beiträge
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-darktext border-b border-darktext pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Alle Beiträge
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
