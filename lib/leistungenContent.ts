export interface LeistungContent {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubtext: string;
  description: string;
  benefits: string[];
  faqItems: { question: string; answer: string }[];
  ctaText: string;
}

export const leistungenContent: LeistungContent[] = [
  {
    slug: "berufsunfaehigkeit",
    title: "Berufsunfähigkeitsversicherung",
    heroHeadline: "Deine Arbeitskraft ist dein größtes Kapital",
    heroSubtext:
      "Jeder vierte Arbeitnehmer wird vor Renteneintritt berufsunfähig. Die richtige Absicherung entscheidet.",
    description:
      "Die Berufsunfähigkeitsversicherung schützt das, was dir wirklich gehört — deine Fähigkeit zu arbeiten. Gerade als Kammerberufler oder Ingenieur, der Jahre in seine Ausbildung investiert hat, ist eine BU keine Option, sondern Notwendigkeit.",
    benefits: [
      "Absicherung bei Burnout, psychischen Erkrankungen und Unfällen",
      "Individuelle Bedarfsanalyse statt Standardlösungen",
      "Vergleich aller relevanten Anbieter für deinen Beruf",
      "Klauseln und Feinheiten verständlich erklärt",
      "Günstige Einstiegstarife für Studenten und Berufseinsteiger",
      "Nachversicherungsgarantie bei Lebensereignissen",
    ],
    faqItems: [
      {
        question: "Ab wann brauche ich eine BU?",
        answer:
          "Je früher, desto besser — und desto günstiger. Als Student oder Berufseinsteiger bist du in der Regel noch gesund, zahlst weniger Beitrag und kannst dir später höhere Renten nachversichern.",
      },
      {
        question: "Was kostet eine gute BU?",
        answer:
          "Das hängt von Beruf, Alter, Gesundheitszustand und gewünschter Rentenhöhe ab. Als grobe Orientierung: 20–80 € monatlich für eine solide BU-Rente von 2.000 €. Im Gespräch rechnen wir das konkret durch.",
      },
      {
        question: "Ist eine BU auch bei psychischen Erkrankungen relevant?",
        answer:
          "Absolut — psychische Erkrankungen sind inzwischen die häufigste BU-Ursache. Deshalb ist es so wichtig, frühzeitig abzusichern, bevor eventuelle Vorerkrankungen entstehen.",
      },
      {
        question: "Kann ich die BU steuerlich absetzen?",
        answer:
          "In vielen Konstellationen ja, teilweise über die Sonderausgaben (§ 10 EStG) oder wenn sie als Schicht-2-Produkt abgeschlossen wird. Das klären wir gemeinsam im Detail.",
      },
    ],
    ctaText: "BU-Bedarf kostenlos analysieren",
  },
  {
    slug: "altersvorsorge",
    title: "Altersvorsorge & Ruhestandsplanung",
    heroHeadline: "Im Alter wirklich frei sein",
    heroSubtext:
      "ETFs, Entnahmestrategien, Sequence-of-Return-Risiko — Altersvorsorge neu gedacht.",
    description:
      "Altersvorsorge ist mehr als ein Sparplan. Es geht um die Frage: Wie viel Kapital brauche ich wann, und wie nehme ich es im Alter klug heraus? Ich zeige dir, wie du heute anfängst und welche Risiken du dabei im Blick behalten musst.",
    benefits: [
      "ETF-Depot als Kerninstrument der Altersvorsorge",
      "Sequence-of-Return-Risiko verstehen und absichern",
      "Betriebliche Altersvorsorge optimal nutzen",
      "Riester und Rürup — wann es sich lohnt und wann nicht",
      "Steueroptimierte Entnahmestrategien",
      "Frühzeitig starten — den Zinseszins für sich arbeiten lassen",
    ],
    faqItems: [
      {
        question: "Mit welchem Betrag sollte ich anfangen?",
        answer:
          "Jeder Betrag hilft. Schon 50 € monatlich in ein ETF-Depot können nach 30 Jahren zu einem bedeutenden Kapitalstock werden. Der Zinseszinseffekt belohnt frühes Starten überproportional.",
      },
      {
        question: "Was ist das Sequence-of-Return-Risiko?",
        answer:
          "Das ist das Risiko, dass schlechte Börsenjahre ausgerechnet zu Beginn deiner Entnahmephase auftreten und dein Kapital überproportional verringern. Ich zeige dir, wie du dich dagegen absicherst.",
      },
      {
        question: "ETF oder klassische Rentenversicherung?",
        answer:
          "Das hängt von deiner Situation ab. ETFs bieten mehr Flexibilität und historisch bessere Renditen, klassische Rentenversicherungen bieten Garantien. Oft ist eine Kombination sinnvoll.",
      },
    ],
    ctaText: "Altersvorsorge kostenlos planen",
  },
  {
    slug: "krankenversicherung",
    title: "Private Krankenversicherung",
    heroHeadline: "PKV — Chance oder Risiko?",
    heroSubtext:
      "Für Kammerberufler oft die bessere Wahl. Eine ehrliche Einschätzung, wann PKV wirklich sinnvoll ist.",
    description:
      "Private Krankenversicherung ist komplex — und genau deshalb braucht es eine unabhängige, ehrliche Beratung. Als zukünftiger Arzt, Anwalt oder Ingenieur hast du oft die Wahl. Ich zeige dir die Vor- und Nachteile ohne Schönfärberei.",
    benefits: [
      "Individuelle Tarifanalyse für deinen Beruf und deine Situation",
      "Direkter Arztzugang ohne Überweisungen",
      "Besondere Leistungen: Einbettzimmer, Chefarztbehandlung",
      "Beitragsrückerstattung bei Nicht-Inanspruchnahme",
      "Langfristiger Beitragsvergleich mit der GKV",
      "Risikobewertung bei Vorerkrankungen",
    ],
    faqItems: [
      {
        question: "Ab wann lohnt sich die PKV?",
        answer:
          "Die PKV lohnt sich für Selbstständige und Freiberufler oft deutlich. Angestellte müssen die Einkommensgrenze überschreiten. Im Studium ist die PKV als Student besonders günstig.",
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
    heroHeadline: "Geld arbeiten lassen — von Anfang an",
    heroSubtext:
      "ETFs, Depot-Aufbau, Anlagestrategien. Einfach erklärt, konsequent umgesetzt.",
    description:
      "Ob Berufseinsteiger oder Student — Vermögensaufbau fängt früh an. Ich zeige dir, wie du dein erstes Depot aufbaust, welche ETFs Sinn machen und wie du eine Anlagestrategie entwickelst, die zu deinem Leben passt.",
    benefits: [
      "Depot-Eröffnung Schritt für Schritt erklärt",
      "ETF-Auswahl und Portfolio-Aufbau",
      "Sparplan-Optimierung für jeden Geldbeutel",
      "Risikoprofil und Anlagehorizont bestimmen",
      "Steuereffiziente Anlagestrategie",
      "Rebalancing und langfristige Begleitung",
    ],
    faqItems: [
      {
        question: "Welche ETFs empfiehlst du?",
        answer:
          "Das hängt von deinem Anlagehorizont, deiner Risikobereitschaft und deinem Ziel ab. Als Basis empfehle ich häufig breit diversifizierte Welt-ETFs. Im Gespräch schauen wir gemeinsam, was zu dir passt.",
      },
      {
        question: "Wie viel sollte ich monatlich anlegen?",
        answer:
          "Die Faustregel: 10–20 % des Nettoeinkommens. Aber auch 25 € monatlich sind besser als nichts. Wichtiger ist die Konsequenz als der Betrag.",
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
    heroHeadline: "Dein Weg zur eigenen Immobilie",
    heroSubtext:
      "Eigenkapital planen, Finanzierung vergleichen, den richtigen Zeitpunkt finden.",
    description:
      "Eine Immobilie ist oft die größte finanzielle Entscheidung im Leben. Ich begleite dich von der ersten Idee bis zur Finanzierungsentscheidung — und danach. Gemeinsam finden wir die Finanzierung, die zu dir und deiner Lebenssituation passt.",
    benefits: [
      "Eigenkapital-Planung und Finanzierungsstrategie",
      "Vergleich von Banken und Finanzierungsmodellen",
      "KfW-Förderung und Sonderprogramme",
      "Tilgungsplan und Zinsrisiko-Analyse",
      "Immobilie als Kapitalanlage vs. Eigennutzung",
      "Vollständige Begleitung bis zur Schlüsselübergabe",
    ],
    faqItems: [
      {
        question: "Wie viel Eigenkapital brauche ich?",
        answer:
          "Grundsätzlich gilt: 20–30 % des Kaufpreises plus Kaufnebenkosten (Notar, Grunderwerbsteuer, Makler). Mit weniger ist eine Finanzierung oft teurer oder gar nicht möglich.",
      },
      {
        question: "Kaufen oder mieten — was ist besser?",
        answer:
          "Das hängt von Standort, Laufzeit, Zinsniveau und persönlicher Flexibilität ab. Ich rechne beide Szenarien durch und helfe dir bei der Entscheidung.",
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
    title: "Karriere & Finanzplanung",
    heroHeadline: "Finanzielle Basics für deinen Karrierestart",
    heroSubtext:
      "Brutto/Netto, Steuererklärung, Gehalt verhandeln — alles, was sie dir im Studium nicht beibringen.",
    description:
      "Das Studium ist vorbei, der erste Job wartet — und plötzlich stellt sich die Frage: Was bleibt überhaupt von meinem Gehalt? Und was mache ich damit? Ich helfe dir, die finanziellen Grundlagen zu verstehen und von Anfang an richtig zu starten.",
    benefits: [
      "Brutto/Netto-Analyse und Gehaltsverhandlung",
      "Steuererklärung als Berufseinsteiger",
      "Erste Absicherungen — BU, Haftpflicht, Rechtsschutz",
      "Aufbau eines Notgroschens und ersten Depots",
      "Betriebliche Altersvorsorge richtig nutzen",
      "Budgetplanung und Ausgaben optimieren",
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
