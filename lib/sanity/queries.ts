import { groq } from "next-sanity";

export const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    tags
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    tags,
    seoTitle,
    seoDescription
  }
`;

export const recentBlogPostsQuery = groq`
  *[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    tags
  }
`;

export const allBlogSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const leistungsseiteBySlugQuery = groq`
  *[_type == "leistungsseite" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heroHeadline,
    heroSubtext,
    benefits,
    faqItems,
    ctaText
  }
`;

export const allLeistungsSlugsQuery = groq`
  *[_type == "leistungsseite" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    heroHeadline,
    heroSubline,
    aboutText,
    contactEmail,
    linkedinUrl,
    calcomUrl
  }
`;
