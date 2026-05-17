import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Levi Rudolph — Financial Advisor bei MLP Frankfurt. Finanzberatung auf Augenhöhe für Kammerberufler und Ingenieure.",
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
    title: "Financial Advisor",
    org: "MLP Finanzberatung SE · Frankfurt am Main",
    description:
      "Selbstständige Finanzberatung für Kammerberufler und Ingenieure unter dem Dach von Deutschlands führendem Finanzdienstleister.",
  },
  {
    year: "2022 – 2025",
    title: "B.A. Banking & Financial Support Services",
    org: "DHBW Mannheim · B.A. Banking & Finance",
    description:
      "Duales Studium in Kooperation mit MLP Finanzberatung SE. Schwerpunkte: Produktmanagement, MLP Banking, Beratungssegmente.",
  },
  {
    year: "2018",
    title: "Praktikum Individualkundenberatung",
    org: "Volksbank Neckartal eG · Heidelberg",
    description:
      "Erste Praxiserfahrung in der Kundenberatung und im Bankwesen.",
  },
  {
    year: "bis 2022",
    title: "Abitur",
    org: "Max-Weber-Schule Sinsheim",
    description: "Schwerpunkt Wirtschaft und Betriebswirtschaftslehre.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero — navy split */}
      <section className="relative min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 bg-navy overflow-hidden">
        {/* Left — Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-40 pb-20 lg:py-0">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            Über mich
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-warmwhite leading-[1.05] mb-6">
            Ich bin Levi — Finanzberater auf Augenhöhe
          </h1>
          <p className="text-lg text-warmwhite/60 leading-relaxed mb-8 max-w-lg">
            Financial Advisor bei MLP in Frankfurt. Meine Leidenschaft: Finanzielle Angst in
            finanzielles Selbstbewusstsein verwandeln.
          </p>
          <Button
            render={<Link href="/termin" />}
            className="bg-gold text-navy font-semibold hover:bg-gold-light active:opacity-90 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy transition-colors duration-200 rounded-none px-10 py-5 text-sm tracking-wide w-fit"
          >
            Lern mich kennen
          </Button>
        </div>

        {/* Right — Photo */}
        <div className="relative min-h-[70vh] lg:min-h-screen bg-navy">
          <Image
            src="/images/levi-business.jpeg"
            alt="Levi Rudolph — Financial Advisor Frankfurt"
            fill
            className="object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/10 to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-transparent lg:hidden" />
        </div>
      </section>

      {/* About text */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-subtle leading-relaxed text-lg">
          <p>
            Nach meinem dualen Studium an der DHBW Mannheim habe ich
            mich entschieden, selbstständig zu beraten — weil echte Beratung keine
            Einheitslösungen kennt.
          </p>
          <p>
            Ich berate täglich angehende Kammerberufler, Ingenieure und Young Professionals in
            Frankfurt und deutschlandweit — Menschen, die kluge Entscheidungen treffen wollen.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 py-1 text-darktext font-heading text-xl italic leading-snug">
            &ldquo;Kein Versicherungsblabla. Echte Beratung, die zu deinem Leben passt.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Beratungs-Foto — volle Breite */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <Image
          src="/images/steuerberater-finden-aufgaben-risiko-tipps-unternehmen-abrechnung-jahresabschluss-kanzlei-beratung-dokumente-schreibtisch-notebook-anzug.jpg"
          alt="Professionelle Finanzberatung"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-heading text-2xl sm:text-3xl font-bold text-warmwhite text-center max-w-lg px-4 leading-snug">
            Von der Analyse zur Strategie — persönlich und auf Augenhöhe.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-12">
            Werdegang
          </p>
          <div className="flex flex-col divide-y divide-border">
            {timeline.map((item) => (
              <div key={item.title} className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8">
                <div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                    {item.year}
                  </span>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-darktext">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-subtle font-medium">{item.org}</p>
                  <p className="text-sm text-gray-subtle leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-warmwhite">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-12">
            Expertise
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-darktext border border-border px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-12 border-y border-border">
          <div>
            <p className="font-heading text-2xl font-bold text-darktext mb-2">
              10.000+ Follower auf LinkedIn
            </p>
            <p className="text-gray-subtle text-sm">
              Finanzplanung, Karriere, Vermögensaufbau — wöchentliche Insights kostenlos.
            </p>
          </div>
          <Link
            href="https://de.linkedin.com/in/levi-rudolph-dh-student"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-darktext border-b border-darktext pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 shrink-0"
          >
            LinkedIn besuchen
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Neugierig geworden?"
        subtext="Buche jetzt dein kostenloses Erstgespräch — ich freu mich drauf."
      />
    </>
  );
}
