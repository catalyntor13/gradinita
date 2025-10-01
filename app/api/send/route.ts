// app/api/send/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/send";

const ContactSchema = z.object({
  name: z.string(),
  telefon: z.string(),
  email: z.string().email(),
  childAge: z.string(),
  message: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.parse(body);

    await sendContactEmail(parsed);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Eroare necunoscută" },
      { status: 400 }
    );
  }
}
