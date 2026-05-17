import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
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
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Kurzbeschreibung (für LinkedIn!)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "mainImage",
      title: "Hauptbild",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt-Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Inhalt",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", title: "Alt-Text" })],
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Titel",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Beschreibung",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "linkedinAutoPost",
      title: "Automatisch auf LinkedIn posten",
      type: "boolean",
      initialValue: true,
      description: "Aktiviert den n8n Webhook für automatischen LinkedIn-Post",
    }),
  ],
  orderings: [
    {
      title: "Veröffentlichungsdatum, neueste zuerst",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "mainImage",
    },
  },
});
