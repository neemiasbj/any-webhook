import { supabaseInitialized } from "@/lib/supabase";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: Request, context: any) {
  const {
    params: { id: webhookId },
  } = context;

  if (!webhookId) {
    const id = crypto.randomUUID();
    const { data, error } = await supabaseInitialized
      .from("webhookId")
      .insert({ id });

    if (error) return NextResponse.json({ error });
  }

  const { data, error } = await supabaseInitialized
    .from("webhookData")
    .select()
    .eq("webhookId", webhookId);
  console.log({ data });
  if (error) return NextResponse.json({ error });
  else if (data.length)
    return NextResponse.json(data.map((d) => d.data) || null);
  else return NextResponse.json({ message: "No data found." });
}

export async function POST(request: Request, context: any) {
  const data = await request.json();
  const {
    params: { id: webhookId },
  } = context;
  console.log({ webhookId, data });

  const { error } = await supabaseInitialized
    .from("webhookData")
    .insert({ webhookId, data });

  if (error)
    return NextResponse.json({ error: true, message: JSON.stringify(error) });
  else return NextResponse.json({ message: "Data created." });
}
