import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  heading = "Bereit für deinen ersten Schritt?",
  subtext = "Buche jetzt dein kostenloses 30-Minuten Erstgespräch — ohne Verpflichtung.",
  buttonText = "Kostenloses Erstgespräch buchen",
  buttonHref = "/termin",
}: CTABannerProps) {
  return (
    <section className="bg-navy py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-8">
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-warmwhite leading-tight max-w-2xl">
          {heading}
        </h2>
        <p className="text-warmwhite/70 text-lg max-w-xl">{subtext}</p>
        <Button
          render={<Link href={buttonHref} />}
          className="bg-gold text-navy font-semibold hover:bg-gold-light transition-colors duration-200 rounded-none px-10 py-5 text-sm tracking-wide gap-2"
        >
          {buttonText}
          <ArrowRight size={14} />
        </Button>
      </div>
    </section>
  );
}
