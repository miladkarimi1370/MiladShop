import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export default async function ApiSSRForOurCategories() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data } = await supabase.from("milad-shop-category").select("*");
    return NextResponse.json(data);
}
