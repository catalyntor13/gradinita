"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const MailContact = process.env.EMAIL_RESEND;

type Payload = {
  name: string;
  telefon: string;
  email: string;
  childAge: string;
  message: string;
};

export async function sendContactEmail({ name, telefon, email, childAge, message }: Payload) {
  if (!process.env.RESEND_API_KEY) throw new Error("Lipsește RESEND_API_KEY");
  if (!MailContact) throw new Error("Lipsește EMAIL_RESEND");

  try {
    return await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [MailContact],
      replyTo: email,
      subject: `Cerere vizită de la ${name}`,
      html: `
        <h2>Ai primit un nou mesaj de la formularul de contact</h2>
        <p><strong>Nume părinte:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Vârsta copilului:</strong> ${childAge}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });
  } catch (err) {
    console.error("Resend email error:", err);
    throw new Error("Eroare la trimiterea emailului: " + (err instanceof Error ? err.message : "Unknown error"));
  }
}
