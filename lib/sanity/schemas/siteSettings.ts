import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website Einstellungen",
  type: "document",
  // Singleton — only one document of this type
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      initialValue: "Finanzielle Klarheit für Kammerberufler & Ingenieure",
    }),
    defineField({
      name: "heroSubline",
      title: "Hero Subline",
      type: "text",
      rows: 2,
      initialValue:
        "Von 'Ich mach das später' zu 'Hab ich geregelt' — mit maßgeschneiderten Finanzstrategien, die zu deinem Leben passen.",
    }),
    defineField({
      name: "aboutText",
      title: "Über-mich Teaser Text",
      type: "text",
      rows: 3,
      initialValue:
        "Ich bin Levi — Finanz- und Karriereplaner aus Frankfurt. Kein Versicherungsblabla, keine 08/15-Lösungen. Beratung auf Augenhöhe, die wirklich zu dir passt.",
    }),
    defineField({
      name: "contactEmail",
      title: "Kontakt E-Mail",
      type: "string",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn Profil URL",
      type: "url",
      initialValue: "https://de.linkedin.com/in/levi-rudolph-dh-student",
    }),
    defineField({
      name: "calcomUrl",
      title: "Cal.com Buchungs-URL",
      type: "url",
      initialValue: "https://cal.com/levi-rudolph/erstgespraech",
    }),
  ],
  preview: {
    select: { title: "heroHeadline" },
  },
});
