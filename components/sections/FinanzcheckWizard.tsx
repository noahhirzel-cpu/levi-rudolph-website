"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Situation = "student" | "angestellt" | "selbststaendig" | "kammerberufler" | "";
type Thema = "bu" | "altersvorsorge" | "pkv" | "vermoegen" | "immobilien" | "karriere";
type Alter = "unter25" | "25bis30" | "31bis35" | "ueber35" | "";

interface FormData {
  situation: Situation;
  themen: Thema[];
  alter: Alter;
  name: string;
  email: string;
  telefon: string;
}

const situationOptions: { value: Situation; label: string; desc: string }[] = [
  { value: "student", label: "Student / Studentin", desc: "Ich studiere gerade oder bin kurz vor dem Abschluss." },
  { value: "angestellt", label: "Angestellt", desc: "Ich arbeite als Angestellter, stehe am Anfang meiner Karriere." },
  { value: "kammerberufler", label: "Kammerberufler", desc: "Arzt, Anwalt, Steuerberater, Architekt o.ä." },
  { value: "selbststaendig", label: "Selbstständig", desc: "Ich arbeite freiberuflich oder habe ein eigenes Unternehmen." },
];

const themenOptions: { value: Thema; label: string; desc: string }[] = [
  { value: "bu", label: "Berufsunfähigkeit", desc: "Absicherung meiner Arbeitskraft" },
  { value: "altersvorsorge", label: "Altersvorsorge", desc: "ETF, Rente, langfristig sparen" },
  { value: "pkv", label: "Krankenversicherung", desc: "GKV vs. PKV — was lohnt sich?" },
  { value: "vermoegen", label: "Vermögensaufbau", desc: "Depot aufbauen, investieren" },
  { value: "immobilien", label: "Immobilien", desc: "Kaufen, finanzieren, planen" },
  { value: "karriere", label: "Karriere & Finanzen", desc: "Gehalt, Steuern, Brutto/Netto" },
];

const alterOptions: { value: Alter; label: string }[] = [
  { value: "unter25", label: "Unter 25" },
  { value: "25bis30", label: "25 – 30" },
  { value: "31bis35", label: "31 – 35" },
  { value: "ueber35", label: "Über 35" },
];

const TOTAL_STEPS = 4;

export function FinanzcheckWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    situation: "",
    themen: [],
    alter: "",
    name: "",
    email: "",
    telefon: "",
  });

  const canNext = () => {
    if (step === 1) return form.situation !== "";
    if (step === 2) return form.themen.length > 0;
    if (step === 3) return form.alter !== "";
    if (step === 4) return form.name.trim() !== "" && form.email.includes("@");
    return false;
  };

  const toggleThema = (t: Thema) => {
    setForm((f) => ({
      ...f,
      themen: f.themen.includes(t) ? f.themen.filter((x) => x !== t) : [...f.themen, t],
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const situationLabel = situationOptions.find((s) => s.value === form.situation)?.label ?? form.situation;
    const themenLabels = form.themen.map((t) => themenOptions.find((o) => o.value === t)?.label ?? t).join(", ");
    const alterLabel = alterOptions.find((a) => a.value === form.alter)?.label ?? form.alter;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.telefon,
          topic: "360° Finanzcheck",
          message: `Finanzcheck Ergebnisse:\n\nLebenssituation: ${situationLabel}\nThemen: ${themenLabels}\nAlter: ${alterLabel}`,
        }),
      });
    } catch {
      // Weiterleiten auch bei Fehler
    }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 flex flex-col items-center gap-6">
        <CheckCircle2 size={56} className="text-gold" strokeWidth={1.5} />
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-darktext">
          Alles angekommen!
        </h2>
        <p className="text-gray-subtle text-lg max-w-md leading-relaxed">
          Danke, {form.name.split(" ")[0]}. Ich melde mich persönlich bei dir — meist innerhalb von 24 Stunden.
        </p>
        <Button
          render={<Link href="/termin" />}
          className="bg-gold text-navy font-semibold hover:brightness-110 active:brightness-125 outline-none focus:outline-none rounded-none px-10 py-5 text-sm tracking-wide gap-2 mt-4"
        >
          Direkt Termin buchen
          <ArrowRight size={14} />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Schritt {step} von {TOTAL_STEPS}
          </span>
          <span className="text-xs text-gray-subtle">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
        </div>
        <div className="h-0.5 bg-border">
          <motion.div
            className="h-full bg-gold"
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mb-2">
              Was beschreibt dich am besten?
            </h2>
            <p className="text-gray-subtle mb-8 text-base">Damit ich deine Situation richtig einschätzen kann.</p>
            <div className="flex flex-col gap-3">
              {situationOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setForm((f) => ({ ...f, situation: opt.value }))}
                  className={`text-left p-5 border transition-all duration-200 ${
                    form.situation === opt.value
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-darktext/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-darktext text-base">{opt.label}</p>
                      <p className="text-sm text-gray-subtle mt-0.5">{opt.desc}</p>
                    </div>
                    {form.situation === opt.value && (
                      <CheckCircle2 size={20} className="text-gold shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mb-2">
              Was möchtest du angehen?
            </h2>
            <p className="text-gray-subtle mb-8 text-base">Mehrere Themen möglich — wähle alles, was dich interessiert.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {themenOptions.map((opt) => {
                const selected = form.themen.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    onClick={() => toggleThema(opt.value)}
                    className={`text-left p-5 border transition-all duration-200 ${
                      selected ? "border-gold bg-gold/5" : "border-border hover:border-darktext/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-darktext text-sm">{opt.label}</p>
                        <p className="text-xs text-gray-subtle mt-0.5">{opt.desc}</p>
                      </div>
                      {selected && <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mb-2">
              Wie alt bist du?
            </h2>
            <p className="text-gray-subtle mb-8 text-base">Das Alter beeinflusst, welche Strategien für dich am sinnvollsten sind.</p>
            <div className="grid grid-cols-2 gap-3">
              {alterOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setForm((f) => ({ ...f, alter: opt.value }))}
                  className={`p-6 border text-center transition-all duration-200 ${
                    form.alter === opt.value
                      ? "border-gold bg-gold/5"
                      : "border-border hover:border-darktext/30"
                  }`}
                >
                  <p className="font-heading text-2xl font-bold text-darktext">{opt.label}</p>
                  {form.alter === opt.value && (
                    <CheckCircle2 size={18} className="text-gold mx-auto mt-2" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-darktext mb-2">
              Wie kann ich dich erreichen?
            </h2>
            <p className="text-gray-subtle mb-8 text-base">Ich melde mich persönlich — kein Callcenter, kein Skript.</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-darktext">Name <span className="text-gold">*</span></label>
                <input
                  type="text"
                  placeholder="Max Mustermann"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="px-4 py-3 border border-border bg-white text-darktext placeholder:text-gray-subtle/70 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-darktext">E-Mail <span className="text-gold">*</span></label>
                <input
                  type="email"
                  placeholder="max@beispiel.de"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="px-4 py-3 border border-border bg-white text-darktext placeholder:text-gray-subtle/70 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition text-base"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-darktext">Telefon <span className="text-gray-subtle font-normal">(optional)</span></label>
                <input
                  type="tel"
                  placeholder="+49 151 23456789"
                  value={form.telefon}
                  onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))}
                  className="px-4 py-3 border border-border bg-white text-darktext placeholder:text-gray-subtle/70 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition text-base"
                />
              </div>
              <p className="text-xs text-gray-subtle">
                Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer{" "}
                <a href="/datenschutz" className="text-gold underline">Datenschutzerklärung</a> zu.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-subtle hover:text-darktext transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Zurück
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className="bg-gold text-navy font-semibold hover:brightness-110 active:brightness-125 outline-none focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed rounded-none px-8 py-4 text-sm tracking-wide gap-2 transition-all"
          >
            Weiter
            <ArrowRight size={14} />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canNext() || loading}
            className="bg-gold text-navy font-semibold hover:brightness-110 active:brightness-125 outline-none focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed rounded-none px-8 py-4 text-sm tracking-wide gap-2 transition-all"
          >
            {loading ? "Wird gesendet…" : "Finanzcheck abschicken"}
            {!loading && <Send size={14} />}
          </Button>
        )}
      </div>
    </div>
  );
}
