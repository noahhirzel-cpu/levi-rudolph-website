import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  tags?: string[];
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post, className }: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(340).url()
    : null;

  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/blog/${post.slug.current}`}
        className="flex flex-col h-full bg-white rounded-2xl border border-border hover:border-gold/30 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-48 bg-secondary overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt ?? post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-heading text-lg font-bold text-darktext mb-2 group-hover:text-gold transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-gray-subtle text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="flex items-center gap-1.5 text-xs text-gray-subtle">
              <Calendar size={12} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Lesen <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
