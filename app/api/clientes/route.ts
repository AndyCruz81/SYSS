import { createClient } from "@supabase/supabase-js";
import { Console } from "console";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET: listar clientes
export async function GET() {
  const { data, error } = await supabase.from("PER_Persona").select("*");
  console.log(data);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST: crear cliente
export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("clientes").insert([body]);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  if (!data) {
    return NextResponse.json(
      { error: "No se pudo insertar el cliente." },
      { status: 500 }
    );
  }
  return NextResponse.json(data[0]);
}
