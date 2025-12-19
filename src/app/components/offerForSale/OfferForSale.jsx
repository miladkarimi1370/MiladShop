
import { Box, Container } from "@mui/material";


import TemplateComponentForPictures from "./TemplateComponentForPictures";
import { createClient } from "@supabase/supabase-js";


export default async function OfferForSale() {


    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )



    const { data, error } = await supabase
        .from('offer_for_sale')
        .select('*')
  


    return (
        <>
            <Container maxWidth={"fluid"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "3vh" }}>
                <Box sx={{
                    width: {
                        xs: "85%", sm: "60%", md: "95%", lg: "90%", xl: "65%"
                    }, position: "relative", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <Box component={"div"} sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {
                            data.map((item) => {
                                return (
                                    <TemplateComponentForPictures key={item.id} href={item.myHref} title={item.title} mySrc={item.image_url} />
                                )
                            })
                        }



                    </Box>
                </Box>
            </Container>
        </>
    )
}