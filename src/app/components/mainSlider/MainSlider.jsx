
import TemplateComponentForShowSlider from "./TemplateComponentForShowSlider";
import { supabase } from "@/utils/supabaseKey";

export default async function MainSlider() {
 

    const { data: myData } = await supabase.from("sliders").select("*");

    return <TemplateComponentForShowSlider sliders={myData} />;
}
