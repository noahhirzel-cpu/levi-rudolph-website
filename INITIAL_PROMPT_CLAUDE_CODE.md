# 🚀 INITIAL PROMPT — Levi Rudolph Website (Claude Code)

Kopiere alles zwischen den --- Linien und gib es Claude Code als erste Nachricht.

---


Lies die CLAUDE.md vollständig.
Dann besuche die UI-Library-Docs und Design-Referenz-Sites aus der CLAUDE.md.
Danach baue das Projekt Phase für Phase wie beschrieben.
Starte mit Phase 1.

Du baust eine professionelle Persönlichkeits-Website für **Levi Rudolph**, Financial Advisor bei MLP Finanzberatung SE in Frankfurt. Alle Projekt-Details stehen in der `CLAUDE.md` — lies sie als allererstes, bevor du irgendetwas tust.

## Deine Aufgabe (Schritt für Schritt):

### PHASE 1 — Setup (mach das zuerst)
1. Erstelle ein neues Next.js 15 Projekt mit App Router, TypeScript, Tailwind CSS v4
2. Installiere und konfiguriere: shadcn/ui (new-york theme, dark mode support), Framer Motion, next-sanity, @sanity/image-url, react-hook-form, zod, resend
3. Erstelle die `tailwind.config.ts` mit Levis Farbpalette:
   - navy: `#0A1628`
   - warmwhite: `#F8F6F2`
   - gold: `#C9A84C`
   - darktext: `#1A1A2E`
4. Konfiguriere die `globals.css` mit CSS-Variablen für das Theme
5. Füge Google Fonts ein: Playfair Display (700, 900) + Inter (400, 500, 600)

### PHASE 2 — Sanity CMS
1. Initialisiere Sanity im Projekt (`next-sanity`)
2. Erstelle das Schema für `blogPost` (title, slug, publishedAt, excerpt, mainImage, body als Portable Text, tags, seoTitle, seoDescription, linkedinAutoPost boolean)
3. Erstelle das Schema für `leistungsseite` (title, slug, heroHeadline, heroSubtext, benefits array mit icon+text, faqItems array, ctaText)
4. Erstelle das Schema für `siteSettings` (heroHeadline, heroSubline, aboutText, contactEmail, linkedinUrl, calcomUrl)
5. Sanity Studio unter `/studio` einrichten

### PHASE 3 — Komponenten-Bibliothek

Erstelle diese wiederverwendbaren Komponenten (alle in `components/`):

**Layout:**
- `Navbar` — sticky, transparent → solid beim Scrollen, Logo links, Navigation rechts, CTA-Button "Termin buchen" mit Gold-Akzent
- `Footer` — dunkel (navy), Links, Social Icons (LinkedIn), rechtliche Links

**UI-Elemente:**
- `AnimatedHero` — Vollbild Hero mit subtiler Hintergrund-Animation (Aceternity UI "Background Beams" oder ähnlich), Typing-Effekt für den Headline-Text (Magic UI), großer CTA-Button
- `ServiceCard` — Leistungskarte mit Icon, Headline, Kurztext, Hover-Animation (lift + gold border)
- `BlogCard` — Blog-Vorschau mit Bild, Datum, Titel, Excerpt, Read More Link
- `TestimonialCard` — Kundenstimme mit Foto-Placeholder, Name, Zitat
- `SectionHeading` — Wiederverwendbare Abschnitts-Überschrift mit optionalem Gold-Underline
- `CTABanner` — Dunkelblauer Banner mit Gold-Text und Button ("Kostenloses Erstgespräch")
- `PortableTextRenderer` — Rendert Sanity Portable Text zu HTML

### PHASE 4 — Seiten

**Startseite** (`app/page.tsx`):
- AnimatedHero: "Finanzielle Klarheit für Kammerberufler & Ingenieure" + Subline + CTA
- Trust-Bar: Logos/Icons (MLP, DHBW, 10k Follower, Frankfurt)
- Über-mich Teaser: Foto-Placeholder links, Text rechts, Link zur /ueber-mich
- Leistungs-Grid: 6 ServiceCards (BU, Altersvorsorge, PKV, Vermögensaufbau, Immobilien, Karriere)
- Wie es funktioniert: 3 Schritte (Erstgespräch → Analyse → Strategie)
- Blog-Preview: Letzte 3 Artikel aus Sanity
- CTABanner: "Bereit für deinen ersten Schritt?"
- Vertrauens-Elemente: Note 1,5 DHBW, MLP Badge, Jahre Erfahrung

**Über-mich** (`app/ueber-mich/page.tsx`):
- Großes Profilfoto (Placeholder mit `/public/levi-placeholder.jpg`)
- Headline: "Ich bin Levi — Finanzberater auf Augenhöhe"
- Persönliche Geschichte / Motivation (aus LinkedIn-Bio)
- Ausbildung Timeline (Abitur 1,3 → DHBW 1,5 → MLP)
- Top-Kenntnisse als Badge-Grid
- Persönliches Statement-Quote (gold, kursiv): "Kein Versicherungsblabla. Echte Beratung, die zu deinem Leben passt."
- CTA: Lern mich kennen → Termin

**Leistungen Overview** (`app/leistungen/page.tsx`):
- Hero mit Headline "Was ich für dich tue"
- 6 große Service-Karten mit je Kurzbeschreibung und Link zur Unterseite

**Leistungs-Unterseiten** (`app/leistungen/[slug]/page.tsx`):
- Dynamisch aus Sanity oder als statische Seiten
- Hero, Benefits-Liste, FAQ-Accordion (shadcn/ui Accordion), CTA
- Erstelle statische Content-Dateien für alle 6 Leistungen mit Levi-spezifischem Text

**Blog** (`app/blog/page.tsx` + `app/blog/[slug]/page.tsx`):
- Übersichtsseite: Grid aller BlogCards aus Sanity
- Einzelartikel: Header mit Bild, Datum, Tags, PortableText Body, Share-Button (LinkedIn!), zurück-Link
- generateStaticParams für Static Generation
- generateMetadata für SEO

**Termin** (`app/termin/page.tsx`):
- Einfache Seite mit Cal.com Embed (`<iframe>`) — Placeholder URL: `https://cal.com/levi-rudolph/erstgespraech`
- Kurzer Text: "Buche jetzt dein kostenloses 30-Minuten Erstgespräch"

**Kontakt** (eingebaut in Footer oder eigene Seite):
- React Hook Form + Zod Validierung
- Felder: Name, E-Mail, Telefon (optional), Nachricht, Thema (Dropdown)
- Submit → Resend API (Placeholder API Key in .env.local)

**Impressum** + **Datenschutz** — Placeholder-Seiten mit korrekter deutscher Struktur

### PHASE 5 — SEO & Performance

1. `app/layout.tsx` — Root Metadata mit Open Graph, Twitter Card
2. `generateMetadata()` für alle dynamischen Seiten (Blog, Leistungen)
3. Schema.org JSON-LD für: Person (Levi), LocalBusiness (MLP Frankfurt), BlogPosting
4. `sitemap.ts` — automatische Sitemap Generation
5. `robots.ts` — robots.txt
6. `next.config.ts` — Image Domains für Sanity CDN

### PHASE 6 — n8n Webhook Endpoint

Erstelle `app/api/webhook/sanity-new-post/route.ts`:
```typescript
// POST endpoint für n8n
// Empfängt: { title, excerpt, slug, publishedAt, linkedinAutoPost }
// Gibt zurück: { success: true, linkedinPostText: "..." }
// Der LinkedIn Post Text wird fertig formatiert zurückgegeben
// n8n nimmt diesen Text und postet ihn auf LinkedIn
```

Der LinkedIn-Text soll so aussehen:
```
Hi zusammen 👋

Neuer Blogpost ist live: "[TITEL]"

[EXCERPT]

Schaut doch gerne auf meiner Website vorbei! 🔗
https://levi-rudolph.de/blog/[SLUG]

#Finanzplanung #MLP #Kammerberufler #YoungProfessionals
```

### PHASE 7 — Environment & Deployment

Erstelle `.env.local.example`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
NEXT_PUBLIC_CAL_COM_URL=https://cal.com/levi-rudolph/erstgespraech
WEBHOOK_SECRET=
```

Erstelle `vercel.json` für optimales Deployment.

---

## Qualitäts-Standards

- **TypeScript strict mode** überall
- **Keine any-Types** — alles sauber typisiert
- **Responsive** — Mobile First, Breakpoints: sm/md/lg/xl
- **Accessibility** — aria-labels, semantic HTML, Keyboard-Navigation
- **Performance** — Bilder immer als next/image, lazy loading, font preload
- **Animationen** — `prefers-reduced-motion` Media Query respektieren
- **Fehlerbehandlung** — Loading States, Error Boundaries für Sanity Fetches

## Finale Struktur

```
levi-rudolph-website/
├── app/
│   ├── (site)/
│   │   ├── page.tsx              # Startseite
│   │   ├── ueber-mich/
│   │   ├── leistungen/
│   │   │   └── [slug]/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── termin/
│   │   ├── impressum/
│   │   └── datenschutz/
│   ├── studio/[[...tool]]/       # Sanity Studio
│   ├── api/webhook/
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   ├── ui/                       # shadcn + custom
│   └── sections/                 # Seitenabschnitte
├── lib/
│   ├── sanity/
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── schemas/
│   └── utils.ts
├── public/
├── CLAUDE.md                     ← DIESE DATEI
├── .env.local.example
└── vercel.json
```

Starte mit Phase 1. Berichte kurz wenn eine Phase abgeschlossen ist und fahre dann automatisch mit der nächsten fort. Wenn du dir bei etwas unsicher bist, schaue in die CLAUDE.md.

---
