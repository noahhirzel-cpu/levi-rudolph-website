import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Danke!",
  description: "Vielen Dank für deine Nachricht. Levi meldet sich innerhalb von 24 Stunden.",
  robots: { index: false },
};

export default function DankePage() {
  return (
    <section className="min-h-[80vh] flex items-center bg-navy text-warmwhite px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto w-full py-24 flex flex-col items-center text-center gap-8">
        <CheckCircle2 size={64} className="text-gold" strokeWidth={1.5} />

        <p className="text-xs font-semibold tracking-widest uppercase text-gold">
          Bestätigung
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warmwhite leading-[1.05]">
          Danke für deine Nachricht!
        </h1>

        <p className="text-warmwhite/70 text-lg max-w-xl leading-relaxed">
          Ich melde mich persönlich bei dir — meist innerhalb von 24 Stunden.
          Bei dringenden Fragen kannst du mich auch direkt anrufen.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            render={<Link href="/" />}
            variant="gold"
            className="w-full sm:w-auto outline-none focus:outline-none rounded-none px-8 py-5 text-sm tracking-wide gap-2"
          >
            <ArrowLeft size={14} />
            Zurück zur Startseite
          </Button>
          <Button
            render={<a href="tel:+4917640729893" />}
            variant="ghost"
            className="w-full sm:w-auto text-warmwhite hover:bg-white/10 hover:text-warmwhite border border-white/30 hover:border-white/60 outline-none focus:outline-none rounded-none px-8 py-5 text-sm tracking-wide"
          >
            +49 176 40729893
          </Button>
        </div>
      </div>
    </section>
  );
}
