import { NextResponse } from "next/server";
import { z } from "zod";

const webhookSchema = z.object({
  title: z.string(),
  excerpt: z.string().optional(),
  slug: z.string(),
  publishedAt: z.string().optional(),
  linkedinAutoPost: z.boolean().optional(),
});

function buildLinkedInText(
  title: string,
  excerpt: string | undefined,
  slug: string
): string {
  const url = `https://levi-rudolph.de/blog/${slug}`;
  const excerptText = excerpt
    ? `\n${excerpt}\n`
    : "";

  return `Hi zusammen 👋

Neuer Blogpost ist live: "${title}"
${excerptText}
Schaut doch gerne auf meiner Website vorbei! 🔗
${url}

#Finanzplanung #MLP #Kammerberufler #YoungProfessionals`;
}

export async function POST(req: Request) {
  try {
    // Verify webhook secret
    const secret = req.headers.get("x-webhook-secret");
    if (
      process.env.WEBHOOK_SECRET &&
      secret !== process.env.WEBHOOK_SECRET
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data = webhookSchema.parse(body);

    // Only generate LinkedIn post if flag is set (or not specified)
    if (data.linkedinAutoPost === false) {
      return NextResponse.json({
        success: true,
        linkedinPostText: null,
        message: "LinkedIn auto-post disabled for this article",
      });
    }

    const linkedinPostText = buildLinkedInText(data.title, data.excerpt, data.slug);

    return NextResponse.json({
      success: true,
      linkedinPostText,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ungültige Payload", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Serverfehler" }, { status: 500 });
  }
}
