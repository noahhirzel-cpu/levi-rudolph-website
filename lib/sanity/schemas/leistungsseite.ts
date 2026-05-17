import { defineField, defineType } from "sanity";

export const leistungsseite = defineType({
  name: "leistungsseite",
  title: "Leistungsseite",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Untertext",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "benefits",
      title: "Vorteile",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (Emoji)", type: "string" }),
            defineField({ name: "text", title: "Text", type: "string" }),
          ],
          preview: { select: { title: "text" } },
        },
      ],
    }),
    defineField({
      name: "faqItems",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Frage", type: "string" }),
            defineField({ name: "answer", title: "Antwort", type: "text" }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Kostenloses Erstgespräch buchen",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "heroHeadline" },
  },
});
