"use client"
import { Box, Container, Divider, Typography, useMediaQuery } from "@mui/material";

import BreadCrumbsComponents from "../components/breadCrumbsComponent/BreadCrumbsComponent";
import theme from "../theme/theme";

import FilterInMdDown from "./FilterInMdDown";
import SelectionComponent from "./SelectionComponent";
import TemplateComponentForShowCardWithPicture from "./TemplateComponentsForShowCardWithPicture/TemplateComponentForShowCardWithPicture";
import FilterInMdUp from "./FilterInMdUp";
import AccordionMenu from "./accordionMenuInCategories/AccordionMenu";
import PriceFilter from "./priceFilter/PriceFilter";
import ColorFilter from "./colorFilter/ColorFilter";
import BrandsFilter from "./brandsFilter/BrandsFilter";
import SizeFilter from "./sizeFilter/SizeFilter";
import Tags from "./tags/Tags";
import AverageRating from "./averageRating/AverageRating";




export default function EMall() {


    const upMd = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Container maxWidth={"lg"} disableGutters>
                <Box component={"section"} sx={{
                    width: "100%"
                }}>
                    <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="h2" sx={{ fontSize: "22px", color: "#000", width: "100%", textAlign: "center", p: 1.5 }}>فروشگاه</Typography>
                        {/* شروع بریدکرامپ */}
                        <BreadCrumbsComponents />
                        {/* پایان بریدکرامپ */}
                    </Box>
                    <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'start', mt: 4 }}>
                        <Box sx={{ display: "flex", width: upMd ? "70%" : "100%", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <Divider sx={{ width: "100%", display: upMd ? "none" : "flex" }} />
                            <Box sx={{ width: "100%", height: "7vh", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                {/* نمایش قسمت فیلتر زمانی که زیر md هست  */}
                                {upMd ? <FilterInMdUp /> : <FilterInMdDown />}
                                {/* نمایش قسمت فیلتر زمانی که زیر md هست  */}
                                {/* شروع کامپوننت سلکشن برای فیلتر */}
                                <SelectionComponent />
                                {/* شروع کامپوننت سلکشن برای فیلتر */}
                            </Box>
                            <Divider sx={{ width: "100%", display: upMd ? "none" : "flex" }} />
                            <TemplateComponentForShowCardWithPicture />
                        </Box>
                        <Box sx={{ display: upMd ? "flex" : "none", width: "30%", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                                <AccordionMenu />
                                <PriceFilter />
                                <ColorFilter />
                                <BrandsFilter />
                                <SizeFilter />
                                <Tags />
                                <AverageRating />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}