import { supabaseInitialized } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const id = crypto.randomUUID();
  console.log({ id });
  const { error } = await supabaseInitialized.from("webhookId").insert({ id });

  if (error)
    return NextResponse.json({ error: true, message: JSON.stringify(error) });

  return NextResponse.json({ id });
}
