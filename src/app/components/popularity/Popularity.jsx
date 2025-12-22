
import { Box, Container } from "@mui/material";

import PopularityHeader from "./PopularityHeader";


import TemplateComponentForShowCard from "./TemplateComponentForShowCard";
import { createClient } from "@supabase/supabase-js";

export default async function Popularity() {


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
            ) , 
             reviews(
             rate
             ) 
            `)
      



    if (error) {
        console.error("error : ", error)
        return (
            <div>
                خطایی رخ داده است
            </div>
        )
    }
    if (!data) {
        return (
            <div>
                محصولی یافت نشد
            </div>
        )
    }

    const popularProducts = data.filter((item) => {
        const myReviews = item.reviews || [];

        if (myReviews.length === 0) return false;


        const avgRate = myReviews.reduce((sum, review) => sum + (review.rate || 0), 0) / myReviews.length;



        return avgRate >= 4 && avgRate <= 5
    })



    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
                <Box sx={{ width: "100%" }}>
                    <PopularityHeader />
                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {popularProducts.map((item) => {
                            return (
                                <TemplateComponentForShowCard id={item.id} key={item.id} title={item.name} href={"milad"} price={item.price} colorsOfProduct={item.colors} src={item['milad-shop-product-images']} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                </Box>
            </Container >

        </>
    )
}