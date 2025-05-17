import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const { error } = await supabase
    .from("PER_Persona")
    .update(body)
    .eq("IdPersona", Number(params.id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const { error } = await supabase
    .from("PER_Persona")
    .delete()
    .eq("IdPersona", Number(params.id));

  if (error)  {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}