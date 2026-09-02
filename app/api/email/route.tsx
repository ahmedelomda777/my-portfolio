import { Resend } from 'resend';
import { Receiver } from '@/components/receiver';
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>", 
    to: "ahmedabs777@gmail.com",
    subject: `New message from ${name}`,
    react: <Receiver name={name} email={email} message={message} />  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
