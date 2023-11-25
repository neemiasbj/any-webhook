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

  if (error) return NextResponse.json({ error });
  else if (data.length) return NextResponse.json({ data });
  else return NextResponse.json({ message: "No data found." });
}
