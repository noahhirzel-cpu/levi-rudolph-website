import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Levi Rudolph — Financial Advisor Frankfurt.",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 px-4 bg-warmwhite">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-darktext mb-8">
          Datenschutzerklärung
        </h1>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-semibold text-darktext mb-2">Allgemeine Hinweise</h3>
          <p className="text-gray-subtle leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
            personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene
            Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            2. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-semibold text-darktext mb-2">
            Wer ist verantwortlich für die Datenerfassung?
          </h3>
          <p className="text-gray-subtle leading-relaxed mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
            Kontaktdaten kannst du dem Impressum entnehmen.
          </p>
          <h3 className="font-semibold text-darktext mb-2">Wie erfassen wir deine Daten?</h3>
          <p className="text-gray-subtle leading-relaxed mb-4">
            Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst (z.B. über
            das Kontaktformular). Andere Daten werden automatisch beim Besuch der Website
            erfasst (Server-Log-Dateien).
          </p>
          <h3 className="font-semibold text-darktext mb-2">Wofür nutzen wir deine Daten?</h3>
          <p className="text-gray-subtle leading-relaxed">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
            gewährleisten. Andere Daten können zur Analyse deines Nutzerverhaltens verwendet
            werden.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            3. Hosting
          </h2>
          <p className="text-gray-subtle leading-relaxed">
            Diese Website wird bei Netlify, Inc. gehostet. Netlify ist ein Anbieter für
            Cloud-Hosting-Dienste. Details zur Verarbeitung deiner Daten durch Netlify findest
            du in deren Datenschutzerklärung unter{" "}
            <a
              href="https://www.netlify.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              https://www.netlify.com/privacy/
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            4. Analytics
          </h2>
          <p className="text-gray-subtle leading-relaxed">
            Diese Website verwendet Netlify Analytics bzw. Server-Log-Auswertungen zur
            anonymisierten Auswertung des Nutzerverhaltens. Es werden keine Cookies gesetzt
            und keine personenbezogenen Daten erhoben. Es werden ausschließlich aggregierte,
            anonyme Statistiken erfasst, die DSGVO-konform sind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            5. Kontaktformular
          </h2>
          <p className="text-gray-subtle leading-relaxed">
            Wenn du uns per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus
            dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne deine Einwilligung weiter. Rechtsgrundlage: Art. 6
            Abs. 1 lit. b DSGVO.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-xl font-bold text-darktext mb-3">
            6. Deine Rechte
          </h2>
          <p className="text-gray-subtle leading-relaxed">
            Du hast jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck deiner gespeicherten personenbezogenen Daten zu erhalten. Du hast außerdem
            ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit an
            uns wenden.
          </p>
        </section>

        <p className="text-xs text-gray-subtle mt-12 pt-8 border-t border-border">
          Stand: Mai 2026 · [Bitte von einem Datenschutzexperten prüfen lassen]
        </p>
      </div>
    </section>
  );
}
