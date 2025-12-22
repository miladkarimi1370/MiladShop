import { createClient } from "@supabase/supabase-js";
import TemplateComponentForShowSlider from "./TemplateComponentForShowSlider";

export default async function MainSlider() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data: myData } = await supabase.from("sliders").select("*");

    return <TemplateComponentForShowSlider sliders={myData} />;
}
