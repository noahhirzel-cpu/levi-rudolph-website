import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity/client";
import {
  blogPostBySlugQuery,
  allBlogSlugsQuery,
} from "@/lib/sanity/queries";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import type { PortableTextBlock } from "sanity";

export const revalidate = 60;

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: PortableTextBlock[];
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(allBlogSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post: BlogPost | null = await client
    .fetch(blogPostBySlugQuery, { slug })
    .catch(() => null);

  if (!post) return { title: "Artikel nicht gefunden" };

  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined;

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: BlogPost | null = await client
    .fetch(blogPostBySlugQuery, { slug })
    .catch(() => null);

  if (!post) notFound();

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  const shareUrl = `https://levi-rudolph.de/blog/${post.slug.current}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Levi Rudolph",
    },
    publisher: {
      "@type": "Organization",
      name: "Levi Rudolph — Financial Advisor",
    },
    image: imageUrl,
    url: shareUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-warmwhite">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-subtle hover:text-darktext text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Artikel
          </Link>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-darktext leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm shrink-0">
                LR
              </div>
              <div>
                <p className="font-semibold text-darktext text-sm">Levi Rudolph</p>
                <p className="text-gray-subtle text-xs flex items-center gap-1">
                  <Calendar size={11} />
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </div>

            {/* LinkedIn Share */}
            <Button
              render={<a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" />}
              variant="outline"
              size="sm"
              className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white rounded-full gap-2"
            >
              <LinkedInIcon size={14} />
              Teilen
            </Button>
          </div>
        </div>
      </section>

      {/* Main Image */}
      {imageUrl && (
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 pb-20">
        {post.body && (
          <PortableTextRenderer
            value={post.body}
            className="prose-lg max-w-none"
          />
        )}

        {/* Footer share */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-gray-subtle hover:text-darktext transition-colors"
          >
            <ArrowLeft size={16} />
            Zurück zum Blog
          </Link>
          <Button
            render={<a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" />}
            variant="outline"
            size="sm"
            className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white rounded-full gap-2"
          >
            <LinkedInIcon size={14} />
            Auf LinkedIn teilen
          </Button>
        </div>
      </article>
    </>
  );
}
