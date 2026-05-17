import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  topic: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "E-Mail-Dienst nicht konfiguriert" }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Kontaktformular <noreply@levi-rudolph.de>",
      to: ["levi.rudolph@mlp.de"],
      replyTo: data.email,
      subject: `Neue Anfrage: ${data.topic}`,
      text: `
Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone ?? "Nicht angegeben"}
Thema: ${data.topic}

Nachricht:
${data.message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Ungültige Eingabe" }, { status: 400 });
    }
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
