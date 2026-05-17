import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Levi Rudolph — Financial Advisor bei MLP Finanzberatung SE, Frankfurt.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 px-4 bg-warmwhite">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="font-heading text-3xl font-bold text-darktext mb-8">Impressum</h1>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">Angaben gemäß § 5 TMG</h2>
        <p className="text-gray-subtle">
          Levi Rudolph<br />
          c/o MLP Finanzberatung SE<br />
          [Straße und Hausnummer]<br />
          60313 Frankfurt am Main
        </p>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">Kontakt</h2>
        <p className="text-gray-subtle">
          E-Mail: [E-Mail-Adresse eintragen]<br />
          Telefon: [Telefonnummer eintragen]
        </p>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p className="text-gray-subtle">
          Berufsbezeichnung: Selbstständiger Handelsvertreter / Financial Advisor<br />
          Zuständige Kammer: IHK Frankfurt am Main<br />
          Verliehen in: Deutschland
        </p>
        <p className="text-gray-subtle mt-2">
          Erlaubnis nach § 34d GewO (Versicherungsvermittlung), § 34f GewO
          (Finanzanlagenvermittlung) und § 34i GewO (Immobiliendarlehensvermittlung).
        </p>
        <p className="text-gray-subtle mt-2">
          Registriert beim DIHK (Deutscher Industrie- und Handelskammertag e.V.) unter der
          Registernummer [Registernummer eintragen].
        </p>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">EU-Streitschlichtung</h2>
        <p className="text-gray-subtle">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p className="text-gray-subtle">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">Haftungsausschluss</h2>
        <p className="text-gray-subtle">
          Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und
          stellen keine Finanzberatung, Anlageberatung oder Versicherungsberatung dar. Für
          individuelle Beratung buche bitte ein persönliches Gespräch.
        </p>

        <p className="text-xs text-gray-subtle mt-12 pt-8 border-t border-border">
          [Platzhalter: Bitte alle mit [ ] markierten Felder vor der Veröffentlichung ausfüllen.]
        </p>
      </div>
    </section>
  );
}
