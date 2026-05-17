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
    <section className="bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warmwhite leading-tight">
          {heading}
        </h2>
        <p className="text-warmwhite/70 text-lg max-w-xl">{subtext}</p>
        <Button
          render={<Link href={buttonHref} />}
          size="lg"
          className="mt-2 bg-gold text-navy font-semibold hover:bg-gold-light transition-colors rounded-full px-8 py-6 text-base gap-2"
        >
          {buttonText}
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}
