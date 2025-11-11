import { Box, Container } from "@mui/material";
import OurCatergoriesHeader from "./ourCategoriesHeader";
import OurCategoriesSlider from "./ourCategoriesSlider";

export default function OurCategories() {
    return (
        <>
            <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <OurCatergoriesHeader />
                <Box sx={{ width: "100%", height: "30vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <OurCategoriesSlider />
                </Box>
            </Container>

        </>
    )
}