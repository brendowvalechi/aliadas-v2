import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body as { name?: string; email?: string };

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // TODO: integrar com serviço de e-mail (Resend, Mailchimp, etc.)
    console.log(`[Aliadas] Nova inscrição: ${name.trim()} <${email.trim()}>`);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
