export interface LeistungContent {
  slug: string;
  title: string;
  icon: string;
  heroHeadline: string;
  heroSubtext: string;
  description: string;
  benefits: { icon: string; text: string }[];
  faqItems: { question: string; answer: string }[];
  ctaText: string;
}

export const leistungenContent: LeistungContent[] = [
  {
    slug: "berufsunfaehigkeit",
    title: "Berufsunfähigkeitsversicherung",
    icon: "🛡️",
    heroHeadline: "Dein Bodyguard für deine Arbeitskraft",
    heroSubtext:
      "Jeder vierte Arbeitnehmer wird vor Renteneintritt berufsunfähig. Bist du abgesichert?",
    description:
      "Die Berufsunfähigkeitsversicherung ist mein emotionalstes Thema — weil sie dein größtes Kapital schützt: deine Fähigkeit zu arbeiten. Gerade als Kammerberufler oder Ingenieur, der viele Jahre in seine Ausbildung investiert hat, ist eine BU unverzichtbar.",
    benefits: [
      { icon: "✅", text: "Absicherung bei Burnout, psychischen Erkrankungen und Unfällen" },
      { icon: "✅", text: "Individuelle Bedarfsanalyse ohne Standardlösungen" },
      { icon: "✅", text: "Vergleich aller relevanten Anbieter für deinen Beruf" },
      { icon: "✅", text: "Klauseln und Feinheiten verständlich erklärt" },
      { icon: "✅", text: "Besondere Tarife für Studenten und Berufseinsteiger" },
      { icon: "✅", text: "Nachversicherungsgarantie bei Lebensereignissen" },
    ],
    faqItems: [
      {
        question: "Ab wann brauche ich eine BU?",
        answer:
          "Je früher, desto besser — und desto günstiger. Als Student oder Berufseinsteiger bist du in der Regel noch gesund, zahst weniger Beitrag und kannst dir später höhere Renten nachversichern.",
      },
      {
        question: "Was kostet eine gute BU?",
        answer:
          "Das hängt von Beruf, Alter, Gesundheitszustand und gewünschter Rentenhöhe ab. Als grobe Orientierung: 20–80€/Monat für eine solide BU-Rente von 2.000€. Im Gespräch rechnen wir das genau durch.",
      },
      {
        question: "Ist eine BU auch bei psychischen Erkrankungen relevant?",
        answer:
          "Absolut — psychische Erkrankungen sind inzwischen die häufigste BU-Ursache. Deshalb ist es so wichtig, frühzeitig abzusichern, bevor eventuelle Vorerkrankungen entstehen.",
      },
      {
        question: "Kann ich die BU steuerlich absetzen?",
        answer:
          "In vielen Konstellationen ja, teilweise über die Sonderausgaben (§ 10 EStG) oder wenn sie als Schicht-2-Produkt abgeschlossen wird. Ich kläre das mit dir im Detail.",
      },
    ],
    ctaText: "BU-Bedarf kostenlos analysieren",
  },
  {
    slug: "altersvorsorge",
    title: "Altersvorsorge & Ruhestandsplanung",
    icon: "📈",
    heroHeadline: "Damit du im Alter wirklich frei bist",
    heroSubtext:
      "ETFs, Entnahmestrategien, Sequence-of-Return-Risiko — Altersvorsorge neu gedacht.",
    description:
      "Altersvorsorge ist mehr als nur ein Sparplan. Es geht um die Frage: Wie viel Kapital brauche ich wann, und wie nehme ich es im Alter klug heraus? Ich zeige dir, wie du heute anfängst und welche Risiken du dabei im Blick behalten musst.",
    benefits: [
      { icon: "✅", text: "ETF-Depot als Kerninstrument der Altersvorsorge" },
      { icon: "✅", text: "Sequence-of-Return-Risiko verstehen und absichern" },
      { icon: "✅", text: "Betriebliche Altersvorsorge optimal nutzen" },
      { icon: "✅", text: "Riester & Rürup — wann es sich lohnt und wann nicht" },
      { icon: "✅", text: "Steueroptimierte Entnahmestrategien" },
      { icon: "✅", text: "Frühzeitig starten — Zinseszins nutzen" },
    ],
    faqItems: [
      {
        question: "Mit welchem Betrag sollte ich anfangen?",
        answer:
          "Jeder Betrag hilft. Schon 50€/Monat in ein ETF-Depot investiert können nach 30 Jahren zu einem bedeutenden Kapitalstock werden. Der Zinseszinseffekt belohnt frühes Starten.",
      },
      {
        question: "Was ist das Sequence-of-Return-Risiko?",
        answer:
          "Das ist das Risiko, dass schlechte Börsenjahre ausgerechnet zu Beginn deiner Entnahmephase auftreten und dein Kapital überproportional verringern. Ich zeige dir, wie du dich dagegen absicherst.",
      },
      {
        question: "ETF oder klassische Rentenversicherung?",
        answer:
          "Das hängt von deiner persönlichen Situation ab. ETFs bieten mehr Flexibilität und Rendite, klassische Rentenversicherungen bieten Garantien. Oft ist eine Kombination sinnvoll.",
      },
    ],
    ctaText: "Altersvorsorge kostenlos planen",
  },
  {
    slug: "krankenversicherung",
    title: "Private Krankenversicherung (PKV)",
    icon: "🏥",
    heroHeadline: "PKV — Chance oder Risiko?",
    heroSubtext:
      "Für Kammerberufler oft die bessere Wahl. Ich erkläre dir, wann PKV wirklich sinnvoll ist.",
    description:
      "Private Krankenversicherung ist komplex — und genau deshalb braucht es eine unabhängige, ehrliche Beratung. Als zukünftiger Arzt, Anwalt oder Ingenieur hast du oft die Wahl. Ich zeige dir die Vor- und Nachteile ohne Schönfärberei.",
    benefits: [
      { icon: "✅", text: "Individuelle Tarifanalyse für deinen Beruf und deine Situation" },
      { icon: "✅", text: "Direkter Arzt-Zugang, keine Überweisungen nötig" },
      { icon: "✅", text: "Besondere Leistungen: Einbettzimmer, Chefarztbehandlung" },
      { icon: "✅", text: "Beitragsrückerstattung bei Nicht-Inanspruchnahme" },
      { icon: "✅", text: "Langfristiger Beitragsvergleich mit GKV" },
      { icon: "✅", text: "Risikobewertung bei Vorerkrankungen" },
    ],
    faqItems: [
      {
        question: "Ab wann lohnt sich die PKV?",
        answer:
          "Die PKV lohnt sich für Selbstständige und Freiberufler (wie Kammerberufler) oft deutlich. Angestellte müssen die Einkommensgrenze überschreiten. Im Studium ist die PKV als Student besonders günstig.",
      },
      {
        question: "Was passiert im Alter mit den PKV-Beiträgen?",
        answer:
          "PKV-Beiträge können im Alter steigen — das ist ein reales Risiko. Deshalb ist es wichtig, früh Altersrückstellungen aufzubauen und dies in die Gesamtplanung einzubeziehen.",
      },
      {
        question: "Kann ich zurück in die GKV?",
        answer:
          "Als Selbstständiger oder Freiberufler ist der Rückwechsel in die GKV sehr schwierig. Als Angestellter ist er möglich, wenn das Einkommen unter die Jahresarbeitsentgeltgrenze fällt.",
      },
    ],
    ctaText: "PKV-Vergleich kostenlos anfordern",
  },
  {
    slug: "vermoegensaufbau",
    title: "Vermögensaufbau & Kapitalanlage",
    icon: "💰",
    heroHeadline: "Geld arbeiten lassen — von Anfang an",
    heroSubtext:
      "ETFs, Depot-Aufbau, Anlagestrategien. Einfach erklärt, konsequent umgesetzt.",
    description:
      "Ob Berufseinsteiger oder Student — Vermögensaufbau fängt früh an. Ich zeige dir, wie du dein erstes Depot aufbaust, welche ETFs Sinn machen und wie du eine Anlagestrategie findest, die zu deinem Leben passt.",
    benefits: [
      { icon: "✅", text: "Depot-Eröffnung Schritt für Schritt erklärt" },
      { icon: "✅", text: "ETF-Auswahl und Portfolio-Aufbau" },
      { icon: "✅", text: "Sparplan-Optimierung für jeden Geldbeutel" },
      { icon: "✅", text: "Risikoprofil und Anlagehorizont bestimmen" },
      { icon: "✅", text: "Steuereffiziente Anlagestrategie" },
      { icon: "✅", text: "Rebalancing und langfristige Strategie" },
    ],
    faqItems: [
      {
        question: "Welche ETFs empfiehlst du?",
        answer:
          "Das hängt von deinem Anlagehorizont, Risikobereitschaft und Ziel ab. Als Basis empfehle ich häufig breit diversifizierte Welt-ETFs. Im Gespräch schauen wir gemeinsam, was zu dir passt.",
      },
      {
        question: "Wie viel sollte ich monatlich anlegen?",
        answer:
          "Die Faustregel: 10-20% des Nettoeinkommens. Aber auch 25€/Monat sind besser als nichts. Wichtiger ist die Konsequenz als der Betrag.",
      },
      {
        question: "Ist Aktienanlage nicht zu riskant?",
        answer:
          "Langfristig (10+ Jahre) hat der globale Aktienmarkt noch jede Krise überstanden und neue Höchststände erreicht. Das Risiko liegt eher im zu frühen Verkaufen.",
      },
    ],
    ctaText: "Anlagestrategie kostenlos besprechen",
  },
  {
    slug: "immobilienfinanzierung",
    title: "Immobilienfinanzierung",
    icon: "🏠",
    heroHeadline: "Dein Weg zur eigenen Immobilie",
    heroSubtext:
      "Eigenkapital planen, Finanzierung vergleichen, den richtigen Zeitpunkt finden.",
    description:
      "Eine Immobilie ist oft die größte finanzielle Entscheidung im Leben. Ich begleite dich von der ersten Idee bis zur Finanzierungsentscheidung — und danach. Gemeinsam finden wir die Finanzierung, die zu dir und deiner Lebenssituation passt.",
    benefits: [
      { icon: "✅", text: "Eigenkapital-Planung und Finanzierungsstrategie" },
      { icon: "✅", text: "Vergleich von Banken und Finanzierungsmodellen" },
      { icon: "✅", text: "KfW-Förderung und Sonderprogramme" },
      { icon: "✅", text: "Tilgungsplan und Zinsrisiko-Analyse" },
      { icon: "✅", text: "Immobilie als Kapitalanlage vs. Eigennutzung" },
      { icon: "✅", text: "Vollständige Begleitung bis zur Schlüsselübergabe" },
    ],
    faqItems: [
      {
        question: "Wie viel Eigenkapital brauche ich?",
        answer:
          "Grundsätzlich gilt: 20-30% des Kaufpreises plus Kaufnebenkosten (Notar, Grunderwerbsteuer, Makler). Mit weniger ist eine Finanzierung oft teurer oder gar nicht möglich.",
      },
      {
        question: "Kaufen oder mieten — was ist besser?",
        answer:
          "Das hängt von vielen Faktoren ab: Standort, Laufzeit, Zinsniveau, persönlicher Flexibilität. Ich rechne beide Szenarien durch und helfe dir bei der Entscheidung.",
      },
      {
        question: "Wann ist der richtige Zeitpunkt für den Kauf?",
        answer:
          "Der beste Zeitpunkt hängt von deiner persönlichen Situation ab, nicht vom Markt. Wenn Eigenkapital, Einkommen und Lebenssituation stimmen, ist der Zeitpunkt gut.",
      },
    ],
    ctaText: "Immobilienfinanzierung kostenlos besprechen",
  },
  {
    slug: "karriere-finanzplanung",
    title: "Karriere & Finanzplanung für Studis",
    icon: "🎓",
    heroHeadline: "Finanzielle Basics für deinen Karrierestart",
    heroSubtext:
      "Brutto/Netto, Steuererklärung, Gehalt verhandeln — alles, was sie dir im Studium nicht beibringen.",
    description:
      "Das Studium ist vorbei, der erste Job wartet — und plötzlich stellt sich die Frage: Was bleibt überhaupt von meinem Gehalt? Und was mache ich damit? Ich helfe dir, die finanziellen Grundlagen zu verstehen und von Anfang an richtig zu starten.",
    benefits: [
      { icon: "✅", text: "Brutto/Netto-Rechner und Gehaltsverhandlung" },
      { icon: "✅", text: "Steuererklärung als Berufseinsteiger" },
      { icon: "✅", text: "Erste Absicherungen (BU, Haftpflicht)" },
      { icon: "✅", text: "Aufbau eines Notgroschens und ersten Depots" },
      { icon: "✅", text: "Betriebliche Altersvorsorge richtig nutzen" },
      { icon: "✅", text: "Budgetplanung und Ausgaben optimieren" },
    ],
    faqItems: [
      {
        question: "Wann sollte ich anfangen, mich um Finanzen zu kümmern?",
        answer:
          "Sofort — und am besten noch im Studium. Je früher du anfängst, desto mehr profitierst du vom Zinseszinseffekt und desto günstiger sind Versicherungen.",
      },
      {
        question: "Muss ich als Student schon eine Steuererklärung machen?",
        answer:
          "Nicht unbedingt, aber es lohnt sich oft. Gerade Arbeitnehmerpauschbetrag, Studienkosten und Werbungskosten können zu einer Rückerstattung führen.",
      },
      {
        question: "Wie verhandle ich mein erstes Gehalt?",
        answer:
          "Recherchiere Marktgehälter für deine Position und Region, kenne deinen Wert und hab keine Angst zu verhandeln. Ich gebe dir konkrete Strategien und Zahlen an die Hand.",
      },
    ],
    ctaText: "Finanzstart kostenlos besprechen",
  },
];

export function getLeistungBySlug(slug: string): LeistungContent | undefined {
  return leistungenContent.find((l) => l.slug === slug);
}
