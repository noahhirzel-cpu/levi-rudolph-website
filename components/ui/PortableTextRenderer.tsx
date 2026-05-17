import { PortableText, type PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";
import type { PortableTextBlock } from "sanity";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-darktext leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl font-bold text-darktext mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-6 italic text-gray-subtle my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-6">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-darktext">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2 text-darktext">
        <span className="text-gold mt-1 shrink-0">→</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-darktext">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-gold underline underline-offset-2 hover:text-gold-light transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? "Blog Bild"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.alt && (
            <figcaption className="text-center text-xs text-gray-subtle mt-2">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextBlock[];
  className?: string;
}

export function PortableTextRenderer({ value, className }: PortableTextRendererProps) {
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  );
}
