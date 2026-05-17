# CLAUDE.md — Levi Rudolph Website Projekt

> Diese Datei ist die zentrale Wissensbasis für Claude Code.
> Lies sie vollständig bevor du irgendetwas im Projekt anfasst.

---

## 👤 Der Kunde: Levi Rudolph

**Name:** Levi Rudolph  
**Beruf:** Financial Advisor bei MLP Finanzberatung SE  
**Standort:** Frankfurt am Main, Hessen, Deutschland  
**Status:** Selbstständig (seit Okt. 2025), arbeitet unter dem Dach von MLP  
**LinkedIn:** https://de.linkedin.com/in/levi-rudolph-dh-student  
**Follower:** 10.200+ auf LinkedIn (stark wachsend)  
**Kontakte:** 500+

---

## 🎯 Levis Positionierung & Zielgruppe

**Sein Headline-Statement:**
> "Maßgeschneiderte Lösungen für angehende Kammerberufler und Ingenieure. Lass uns gemeinsam finanzielle Angst in finanzielles Selbstbewusstsein verwandeln."

**Primäre Zielgruppe:**
- Angehende **Kammerberufler** (Ärzte, Zahnärzte, Rechtsanwälte, Notare, Steuerberater, Wirtschaftsprüfer, Architekten)
- **Ingenieure** im Studium oder Berufseinstieg
- **Studierende** an Hochschulen und Universitäten
- **Young Professionals** in der Orientierungsphase (22–35 Jahre)

**Sein Tonfall / Brand Voice:**
- Direkt, klar, ehrlich — kein "Versicherungsblabla"
- Auf Augenhöhe, nicht belehrend
- Mutig und modern (schreibt über Trump-Steuerpolitik, Sequence-of-Return-Risiko, Brutto-Netto etc.)
- Persönlich und zugänglich ("Ich male nicht den Teufel an die Wand")
- Ziel-Statement: Von "Ich mach das später" → "Hab ich geregelt"

**Top-Kenntnisse (aus LinkedIn):**
- Finanzplanung
- Kapitalmärkte
- Nachhaltigkeitsberatung
- Vermögensallokation
- Versicherungen für vermögende Privatkunden
- Finanzimmobilien

---

## 📚 Levis Ausbildung & Hintergrund

- **Abitur:** Max-Weber-Schule Sinsheim, Note 1,3, Schwerpunkt VBWL
- **Studium:** DHBW Mannheim — B.A. Banking and Financial Support Services, Note **1,5** (2022–2025)
- **Duales Studium:** MLP Finanzberatung SE (Produktmanagement, MLP Banking, Beratungssegment)
- **Praktikum:** Volksbank Neckartal eG (Feb. 2018), Individualkundenberatung
- **Sprachen:** Deutsch (Muttersprache), Englisch (verhandlungssicher)
- **Sonstiges:** Jugend- und Auszubildendenvertretung, Sustainable Finance – Finanzforum

---

## 💼 Levis Beratungsthemen (Unterseiten der Website)

Diese Themen postet Levi aktiv auf LinkedIn und berät dazu:

1. **Berufsunfähigkeitsversicherung (BU)** — sein emotionalstes Thema ("persönlicher Bodyguard für deine Arbeitskraft"), Burnout-Kontext
2. **Altersvorsorge & Ruhestandsplanung** — Sequence-of-Return-Risiko, Entnahmestrategien, ETF-Depots
3. **Private Krankenversicherung (PKV)** — Zweiklassenmedizin, Vorteile für Kammerberufler
4. **Vermögensaufbau & Kapitalanlage** — ETFs, Geldanlage, Depot-Aufbau für Studis und Berufseinsteiger
5. **Immobilienfinanzierung** — Interhyp-Daten, Eigenkapital-Planung, Erstgespräch-Angebot
6. **Karriere & Finanzplanung für Studis** — Brutto/Netto, Steuererklärung, Gehalt verhandeln

---

## 🗺️ Website-Architektur

```
/ (Startseite)
├── /ueber-mich
├── /leistungen
│   ├── /berufsunfaehigkeit
│   ├── /altersvorsorge
│   ├── /krankenversicherung
│   ├── /vermoegensaufbau
│   ├── /immobilienfinanzierung
│   └── /karriere-finanzplanung
├── /blog
│   └── /blog/[slug]        ← dynamisch aus Sanity
├── /termin                 ← Cal.com Embed
├── /impressum
└── /datenschutz
```

---

## 🎨 Design-Vorgaben

**Stil:** Premium, seriös, modern — wie ein Top-Finanzberater der neuen Generation.
Nicht altbacken (kein Sparkassen-Blau), nicht überladen.
Inspiration: Notion-ähnliche Klarheit trifft Goldman Sachs Profis.

**Farbpalette:**
- Primär: **Deep Navy** `#0A1628` (Haupt-Hintergrund/CTA)
- Sekundär: **Warm White** `#F8F6F2` (Seitenbackground)
- Akzent: **Gold** `#C9A84C` (Headlines, CTAs, Hover-States)
- Text: `#1A1A2E` auf hellem BG, `#F8F6F2` auf dunklem BG
- Grau: `#6B7280` für Subtexte

**Typografie:**
- Headlines: **Playfair Display** (elegant, vertrauenswürdig)
- Body: **Inter** (modern, lesbar)
- Akzent/Quotes: **Lato Italic**

**Animationen:** Sanfte Framer Motion Einblendungen (fade-up beim Scrollen).
Keine Overload-Animationen — professionell, nicht verspielt.

**UI-Bibliotheken:**
- **shadcn/ui** — Basis-Komponenten (Buttons, Cards, Forms, Nav)
- **Magic UI** — Animierte Elemente (Typing-Effekt im Hero, shimmer Borders)
- **Aceternity UI** — Sparsam für WOW-Momente (z.B. Hero Background, Feature Cards)

---

## ⚙️ Tech Stack

| Layer | Tool | Warum |
|---|---|---|
| Framework | **Next.js 15** (App Router) | SSR/ISR für SEO, schnell, modern |
| Styling | **Tailwind CSS v4** | Utility-first, konsistent |
| UI Basis | **shadcn/ui** | Accessible, anpassbar |
| Animationen | **Framer Motion** + Magic UI | Premium-Feel |
| CMS | **Sanity.io** (Free Tier) | WYSIWYG-Editor für Levi |
| Bilder | **Next/Image** + Sanity CDN | Optimiert, schnell |
| Formular | **React Hook Form** + Zod | Typsicher, validiert |
| Email | **Resend** | Kontaktformular E-Mails |
| Kalender | **Cal.com** (Embed) | Terminbuchung |
| Deployment | **Vercel** (Free Tier) | Zero-Config, auto-deploy |
| Automation | **n8n** (Webhook → LinkedIn) | Blog-Post → LinkedIn |
| Analytics | **Vercel Analytics** | DSGVO-konform, kostenlos |

---

## 📝 Sanity CMS Schema (Anforderungen)

### Blog Post Schema:
```
- title (string, required)
- slug (slug, auto-generated from title)
- publishedAt (datetime)
- excerpt (text, max 200 chars — für LinkedIn-Automation!)
- mainImage (image, mit alt-text)
- body (Portable Text / Rich Text)
- tags (array of strings)
- seoTitle (string)
- seoDescription (string)
- linkedinAutoPost (boolean, default: true — triggert n8n!)
```

### Leistungs-Seiten Schema:
```
- title
- slug
- heroHeadline
- heroSubtext
- benefits (array: icon + text)
- faqItems (array: question + answer)
- ctaText
```

---

## 🤖 n8n LinkedIn Automation

**Webhook Flow:**
```
Levi publisht Blogpost in Sanity
    → Sanity sendet Webhook an n8n
    → n8n liest: title, excerpt, URL
    → n8n postet auf LinkedIn:
      
      "Hi zusammen, 👋
       ich habe einen neuen Beitrag geschrieben: [TITEL]
       
       [EXCERPT — erste 2 Sätze]
       
       Schaut doch gerne mal auf meiner Website rein! 🔗
       [URL]
       
       #Finanzplanung #Kammerberufler #MLP #[TAG1] #[TAG2]"
    
    → Done ✅
```

**n8n Webhook URL:** `/api/webhook/sanity-new-post`
**Sanity Webhook:** Trigger on: `_type == "blogPost" && publishedAt != null`

---

## 📌 Wichtige Texte / Copy (für Startseite)

**Hero Headline:**
> "Finanzielle Klarheit für Kammerberufler & Ingenieure"

**Hero Subline:**
> "Von 'Ich mach das später' zu 'Hab ich geregelt' — mit maßgeschneiderten Finanzstrategien, die zu deinem Leben passen."

**CTA Button:**
> "Kostenloses Erstgespräch buchen"

**About Teaser:**
> "Ich bin Levi — Finanz- und Karriereplaner aus Frankfurt. Kein Versicherungsblabla, keine 08/15-Lösungen. Beratung auf Augenhöhe, die wirklich zu dir passt."

**Vertrauens-Elemente:**
- 🎓 B.A. DHBW Mannheim, Note 1,5
- 🏢 MLP Finanzberatung SE — 50+ Jahre Marktführer
- 📍 Frankfurt am Main
- 💬 10.000+ LinkedIn Follower
- ✅ Zertifizierter Financial Advisor

---

## ⚠️ WICHTIGE REGELN FÜR DAS PROJEKT

1. **DSGVO-konform:** Kein Google Analytics — nur Vercel Analytics. Cookie-Banner notwendig.
2. **Impressumspflicht:** Impressum und Datenschutz sind Pflicht (deutsches Recht).
3. **Keine Finanzberatungs-Versprechen** auf der Website (regulatorisch heikel). Immer: "unverbindliches Erstgespräch".
4. **Mobile First:** Levis Zielgruppe (Studis, Young Profs) ist auf Mobile — alles mobile-optimiert bauen.
5. **SEO:** Alle Seiten mit `generateMetadata()`, strukturierte Daten (Schema.org: Person, LocalBusiness, BlogPosting).
6. **Performance:** Lighthouse Score > 90 anstreben. Next/Image immer nutzen.
7. **Sanity Studio:** Unter `/studio` erreichbar — nur für Levi (Password protected oder über Sanity Dashboard).

---

## 🏁 Projekt-Status

- [ ] Next.js Projekt initialisiert
- [ ] Sanity Projekt erstellt & Schema definiert
- [ ] Design System (Farben, Fonts, shadcn config)
- [ ] Startseite
- [ ] Über-mich Seite
- [ ] Leistungsseiten (6x)
- [ ] Blog (Liste + Einzelartikel)
- [ ] Terminbuchung (Cal.com)
- [ ] Kontaktformular (Resend)
- [ ] Impressum / Datenschutz
- [ ] n8n Webhook Endpoint
- [ ] Vercel Deployment
- [ ] Domain-Verknüpfung


## 🎨 UI-Bibliotheken & Design-Referenzen

Für alle UI-Komponenten IMMER diese Bibliotheken nutzen:
- shadcn/ui: https://ui.shadcn.com/docs
- Magic UI: https://magicui.design/docs
- Aceternity UI: https://ui.aceternity.com/components

Komponenten NICHT selbst neu bauen — immer aus der 
jeweiligen Doku copy-pasten und anpassen.

Design-Referenz-Sites (analysieren für den Look):
- https://linear.app
- https://stripe.com  
- https://vercel.com

Ziel: Fühlt sich an wie eine 10.000€ Agentur-Website.
Kein WordPress-Look. Klarer Rhythmus, Weißraum, Wow-Momente.

## 🎨 UI-Bibliotheken

shadcn/ui:
- Docs: https://ui.shadcn.com/docs
- GitHub: https://github.com/shadcn-ui/ui

Magic UI:
- Docs: https://magicui.design/docs
- GitHub: https://github.com/magicuidesign/magicui

Aceternity UI:
- Docs: https://ui.aceternity.com/components
- GitHub: https://github.com/aceternity/ui


21st.dev (fertige Blocks):
- https://21st.dev
---

*Letzte Aktualisierung: Mai 2026*
*Projekt von: [Noah]*
