import { Box, Container } from "@mui/material";
import OurCatergoriesHeader from "./ourCategoriesHeader";
import OurCategoriesSlider from "./ourCategoriesSlider";

import ApiSSRForOurCategories from "@/utils/GetSSRForOurCategories";

export default async function OurCategories() {
    const myData = await ApiSSRForOurCategories().then((res) => res.json())

    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <OurCatergoriesHeader />
                <Box sx={{ width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <OurCategoriesSlider categoryData={myData} />
                </Box>
            </Container>

        </>
    )
}