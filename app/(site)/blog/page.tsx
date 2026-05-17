import type { Metadata } from "next";
import Image from "next/image";
import { client } from "@/lib/sanity/client";
import { blogPostsQuery } from "@/lib/sanity/queries";
import { BlogCard } from "@/components/ui/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Finanzwissen für Kammerberufler und Ingenieure — Altersvorsorge, BU, ETFs, Karriere und mehr von Levi Rudolph.",
};

export const revalidate = 60;

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  tags?: string[];
}

async function getPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(blogPostsQuery);
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero mit Hintergrundbild */}
      <section className="relative pt-[72px] lg:pt-[80px] min-h-[50vh] flex items-end overflow-hidden bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1400&q=80&fit=crop"
          alt="Finanzwissen Blog von Levi Rudolph"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
            Blog
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-warmwhite leading-[1.05] mb-6">
            Finanzwissen, das wirklich hilft
          </h1>
          <p className="text-warmwhite/70 text-lg max-w-2xl leading-relaxed">
            Kein Bullshit, kein Verkaufstext. Nur echte Insights zu Finanzen,
            Karriere und Vermögensaufbau.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-warmwhite">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="font-heading text-2xl font-bold text-darktext mb-3">
                Erste Artikel kommen bald
              </h2>
              <p className="text-gray-subtle">
                Folge mir auf LinkedIn für aktuelle Beiträge.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
