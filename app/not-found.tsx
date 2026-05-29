import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-navy text-warmwhite">
      {/* Brand Bar */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] md:h-[80px] flex items-center">
          <Link href="/" className="flex flex-col leading-none" aria-label="Levi Rudolph — Startseite">
            <span className="font-heading text-2xl font-bold text-warmwhite tracking-tight">
              Levi Rudolph
            </span>
            <span className="text-[11px] text-gold tracking-widest uppercase font-medium mt-0.5">
              Financial Advisor
            </span>
          </Link>
        </div>
      </header>

      {/* 404 Hero */}
      <section className="flex-1 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto w-full py-24 flex flex-col gap-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold">
            Fehler 404
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-warmwhite leading-[1.05]">
            Diese Seite existiert nicht
          </h1>
          <p className="text-warmwhite/60 text-lg max-w-xl leading-relaxed">
            Der Link ist veraltet oder die Adresse stimmt nicht. Kein Problem —
            zurück zur Startseite und du findest dich wieder zurecht.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              render={<Link href="/" />}
              variant="gold"
              className="w-full sm:w-auto outline-none focus:outline-none rounded-none px-8 py-5 text-sm tracking-wide gap-2"
            >
              <ArrowLeft size={14} />
              Zurück zur Startseite
            </Button>
            <Button
              render={<Link href="/kontakt" />}
              variant="ghost"
              className="w-full sm:w-auto text-warmwhite hover:bg-white/10 hover:text-warmwhite border border-white/30 hover:border-white/60 outline-none focus:outline-none rounded-none px-8 py-5 text-sm tracking-wide"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-warmwhite/30 text-center">
          © {new Date().getFullYear()} Levi Rudolph · Frankfurt am Main
        </p>
      </footer>
    </main>
  );
}
