import { Box, Container } from "@mui/material";
import OurCatergoriesHeader from "./ourCategoriesHeader";
import OurCategoriesSlider from "./ourCategoriesSlider";
import { createClient } from "@supabase/supabase-js";



export default async function OurCategories() {


    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const { data, error } = await supabase
        .from('milad-shop-category')
        .select('*')


    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <OurCatergoriesHeader />
                <Box sx={{ width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <OurCategoriesSlider categoryData={data} />
                </Box>
            </Container>

        </>
    )
}