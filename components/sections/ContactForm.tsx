"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
        reset();
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-16">
        <CheckCircle2 size={48} className="text-gold" />
        <h2 className="font-heading text-2xl font-bold text-darktext">
          Nachricht erhalten!
        </h2>
        <p className="text-gray-subtle">
          Vielen Dank! Ich melde mich zeitnah bei dir.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-4 rounded-none"
        >
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

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

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-fit bg-gold text-navy font-semibold hover:bg-gold-light rounded-none px-8 py-6 text-base gap-2"
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
