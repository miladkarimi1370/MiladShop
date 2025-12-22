
import { Box, Container } from "@mui/material"
import FeaturedHeader from "./FeaturedHeader"
import TemplateComponentForShowFeaturedCards from "./TemplateComponentForShowFeaturedCard"
import { createClient } from "@supabase/supabase-js"

export default async function FeaturedProducts() {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )


    const { data, error } = await supabase
        .from('milad-shop-products')
        .select(`
            id ,
            name , 
            price , 
            colors ,
            milad-shop-product-images (
            id , 
            image_url
            ) 
            `)
        .eq("discount", true)


    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
                <Box sx={{ width: "100%" }}>
                    <FeaturedHeader />
                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {data.map((item) => {
                            return (
                                <TemplateComponentForShowFeaturedCards key={item.id} title={item.name} href={"milad"} price={item.price} colorsOfProduct={item.colors} src={item['milad-shop-product-images']} />
                            )
                        })}


                        {/* کامپونتنت اصلی  */}

                    </Box>

                </Box>
            </Container >

        </>
    )
}