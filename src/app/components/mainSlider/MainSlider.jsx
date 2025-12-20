


import GetSSRForSlider from "@/utils/GetSSRForSlider";

import TemplateComponentForShowSlider from "./TemplateComponentForShowSlider";



export default async function MainSlider() {

    const myData = await GetSSRForSlider().then((res) => res.json());

    return (
        <TemplateComponentForShowSlider sliders={myData} />
    )
}
