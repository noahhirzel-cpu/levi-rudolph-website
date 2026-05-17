import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, GraduationCap, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Levi Rudolph — Financial Advisor bei MLP Frankfurt. B.A. DHBW Mannheim Note 1,5. Finanzberatung auf Augenhöhe für Kammerberufler und Ingenieure.",
};

const skills = [
  "Finanzplanung",
  "Altersvorsorge",
  "Berufsunfähigkeit",
  "Kapitalmärkte",
  "ETF-Strategien",
  "Private Krankenversicherung",
  "Vermögensaufbau",
  "Immobilienfinanzierung",
  "Nachhaltigkeitsberatung",
  "Vermögensallokation",
];

const timeline = [
  {
    year: "2025 – heute",
    icon: <Briefcase size={16} />,
    title: "Financial Advisor",
    org: "MLP Finanzberatung SE",
    location: "Frankfurt am Main",
    description:
      "Selbstständige Finanzberatung für Kammerberufler und Ingenieure unter dem Dach von Deutschlands führendem Finanzdienstleister.",
  },
  {
    year: "2022 – 2025",
    icon: <GraduationCap size={16} />,
    title: "B.A. Banking & Financial Support Services",
    org: "DHBW Mannheim",
    location: "Mannheim",
    description:
      "Duales Studium in Kooperation mit MLP Finanzberatung SE. Abschluss mit Note 1,5. Schwerpunkte: Produktmanagement, MLP Banking, Beratungssegmente.",
  },
  {
    year: "2018",
    icon: <Briefcase size={16} />,
    title: "Praktikum Individualkundenberatung",
    org: "Volksbank Neckartal eG",
    location: "Heidelberg",
    description:
      "Erste Praxiserfahrung in der Kundenberatung und im Bankwesen.",
  },
  {
    year: "bis 2022",
    icon: <GraduationCap size={16} />,
    title: "Abitur",
    org: "Max-Weber-Schule Sinsheim",
    location: "Sinsheim",
    description: "Schwerpunkt VBWL. Abschluss mit Note 1,3.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-warmwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden bg-navy/10">
              <Image
                src="/levi-placeholder.jpg"
                alt="Levi Rudolph — Financial Advisor Frankfurt"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/20" />
            </div>
            <div className="absolute bottom-4 left-4 bg-navy text-warmwhite rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gold font-semibold uppercase tracking-wide">
                Financial Advisor
              </p>
              <p className="text-sm font-bold">MLP · Frankfurt</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:pt-8">
            <SectionHeading
              tag="Über mich"
              title="Ich bin Levi — Finanzberater auf Augenhöhe"
            />

            <div className="space-y-4 text-gray-subtle leading-relaxed">
              <p>
                Ich bin Levi Rudolph, Financial Advisor bei MLP Finanzberatung SE in Frankfurt.
                Meine Leidenschaft: Finanzielle Angst in finanzielles Selbstbewusstsein verwandeln.
              </p>
              <p>
                Nach meinem dualen Studium an der DHBW Mannheim (B.A. Banking, Note 1,5) habe ich
                mich entschieden, selbstständig zu beraten — weil ich glaube, dass echte Beratung
                keine Einheitslösungen kennt.
              </p>
              <p>
                Meine Zielgruppe sind angehende Kammerberufler — Ärzte, Anwälte, Ingenieure — die
                kluge, langfristige Entscheidungen treffen wollen. Menschen, die sich kein
                Versicherungsblabla wünschen, sondern echte Beratung, die zu ihrem Leben passt.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-darktext font-heading text-lg">
              "Kein Versicherungsblabla. Echte Beratung, die zu deinem Leben passt."
            </blockquote>

            <Button
              render={<Link href="/termin" />}
              className="w-fit bg-gold text-navy font-semibold hover:bg-gold-light rounded-full px-6 gap-2"
            >
              <Calendar size={16} />
              Lern mich kennen
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="Werdegang"
            title="Mein Weg zur Finanzberatung"
            className="mb-12"
          />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="flex flex-col gap-10">
              {timeline.map((item) => (
                <div key={item.title} className="flex gap-6 relative">
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-navy flex items-center justify-center text-gold z-10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1 pb-2">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-darktext">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-subtle">
                      {item.org} · {item.location}
                    </p>
                    <p className="text-sm text-gray-subtle leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-warmwhite">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="Expertise"
            title="Top-Kenntnisse"
            subtitle="Bereiche, in denen ich täglich berate und publiziere."
            className="mb-10"
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="border-navy/20 text-darktext text-sm px-4 py-2 rounded-full font-medium hover:border-gold hover:text-gold transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 p-8 bg-navy/5 rounded-2xl border border-navy/10">
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-darktext mb-2">
              10.000+ Follower auf LinkedIn
            </h3>
            <p className="text-gray-subtle text-sm">
              Ich schreibe regelmäßig über Finanzplanung, Karriere und Vermögensaufbau.
              Folg mir für kostenlose Insights.
            </p>
          </div>
          <Button
            render={<a href="https://de.linkedin.com/in/levi-rudolph-dh-student" target="_blank" rel="noopener noreferrer" />}
            variant="outline"
            className="border-navy text-navy hover:bg-navy hover:text-warmwhite rounded-full px-6 gap-2 shrink-0"
          >
            LinkedIn besuchen
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <CTABanner
        heading="Neugierig geworden?"
        subtext="Buche jetzt dein kostenloses Erstgespräch und wir schauen gemeinsam, wie ich dir helfen kann."
      />
    </>
  );
}
