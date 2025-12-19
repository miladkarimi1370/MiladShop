



import { createClient } from "@supabase/supabase-js";
import TemplateComponentForShowSlider from "./TemplateComponentForShowSlider";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, 5000));
}

export default async function MainSlider() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    await sleep();

    const { data, error } = await supabase
        .from('sliders')
        .select('*')





    return (
        <TemplateComponentForShowSlider sliders={data} />
    )
}
