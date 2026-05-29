"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Send, AlertCircle, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  topic: z.string().min(1, "Bitte wähle ein Thema"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const topics = [
  "Berufsunfähigkeitsversicherung",
  "Altersvorsorge",
  "Private Krankenversicherung",
  "Vermögensaufbau",
  "Immobilienfinanzierung",
  "Karriere & Finanzplanung",
  "Sonstiges",
];

export function ContactForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/danke");
        return;
      }
      const body = await res.json().catch(() => ({}));
      setErrorMsg(
        body?.error ??
          "Senden hat nicht geklappt. Bitte schreib mir direkt eine E-Mail.",
      );
    } catch {
      setErrorMsg(
        "Verbindung zum Server fehlgeschlagen. Bitte schreib mir direkt eine E-Mail.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const mailtoFallback = () => {
    const { name = "", email = "", topic = "", message = "" } = getValues();
    const subject = encodeURIComponent(`Anfrage: ${topic || "Beratung"}`);
    const body = encodeURIComponent(
      `Hallo Levi,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:levi.rudolph@mlp.de?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-darktext">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="Max Mustermann"
            className="px-4 py-3 border border-border rounded-none bg-white text-darktext placeholder:text-gray-subtle focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-darktext">
            E-Mail <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="max@beispiel.de"
            className="px-4 py-3 border border-border rounded-none bg-white text-darktext placeholder:text-gray-subtle focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-darktext">
          Telefon (optional)
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="+49 151 23456789"
          className="px-4 py-3 border border-border rounded-none bg-white text-darktext placeholder:text-gray-subtle focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="topic" className="text-sm font-medium text-darktext">
          Thema <span className="text-gold">*</span>
        </label>
        <select
          id="topic"
          {...register("topic")}
          className="px-4 py-3 border border-border rounded-none bg-white text-darktext focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition appearance-none"
        >
          <option value="">Bitte wählen...</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p className="text-xs text-destructive">{errors.topic.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-darktext">
          Nachricht <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Beschreib kurz deine Situation und was dich bewegt..."
          className="px-4 py-3 border border-border rounded-none bg-white text-darktext placeholder:text-gray-subtle focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition resize-none"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <p className="text-xs text-gray-subtle">
        Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer{" "}
        <a href="/datenschutz" className="text-gold underline">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>

      {errorMsg && (
        <div className="flex items-start gap-3 p-4 border border-destructive/40 bg-destructive/5 text-destructive">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <div className="flex-1 text-sm">
            <p className="font-semibold mb-2">{errorMsg}</p>
            <button
              type="button"
              onClick={mailtoFallback}
              className="inline-flex items-center gap-2 text-xs font-semibold underline hover:no-underline"
            >
              <Mail size={14} />
              Stattdessen per E-Mail senden
            </button>
          </div>
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        variant="gold"
        className="w-full sm:w-fit outline-none focus:outline-none rounded-none px-8 py-6 text-base gap-2"
      >
        {isLoading ? (
          "Wird gesendet..."
        ) : (
          <>
            <Send size={18} />
            Nachricht senden
          </>
        )}
      </Button>
    </form>
  );
}
