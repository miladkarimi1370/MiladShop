"use client"
import { Box, Container, Divider, Typography } from "@mui/material";

import BreadCrumbsComponents from "@/app/components/breadCrumbsComponent/BreadCrumbsComponent";
import FilterInMdDown from "../FilterInMdDown";
import FilterInMdUp from "../FilterInMdUp";
import SelectionComponent from "../SelectionComponent";
import TemplateComponentForShowCardWithPicture from "../TemplateComponentsForShowCardWithPicture/TemplateComponentForShowCardWithPicture";
import AccordionMenu from "../accordionMenuInCategories/AccordionMenu";
import AverageRating from "../averageRating/AverageRating";

import PriceFilter from "../priceFilter/PriceFilter";
import ColorFilter from "../colorFilter/ColorFilter";
import BrandsFilter from "../brandsFilter/BrandsFilter";
import SizeFilter from "../sizeFilter/SizeFilter";
import Tags from "../tags/Tags";
import { useMyPagination } from "@/store/useMyPagination";



export default function ShowProductsAsClientComponent({ data, allProducts, allPages }) {
    const { currentPage, setCurrentPage } = useMyPagination();
    const startItem = (currentPage - 1) * 18;
    const endItem = (currentPage * 18) - 1
    return (
        <>
            <Container maxWidth="lg" disableGutters>
                <Box component="section" sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "10vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "22px",
                                color: "#000",
                                width: "100%",
                                textAlign: "center",
                                p: 1.5,
                            }}
                        >
                            فروشگاه
                        </Typography>

                        {/* شروع بریدکرامپ */}
                        <BreadCrumbsComponents arrayOfPath={[{ id: 1, name: "صفحه اصلی", myHref: "/" }, { id: 2, name: "فروشگاه", myHref: "/emall" }]} />
                        {/* پایان بریدکرامپ */}
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            mt: 4,
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                width: { xs: "100%", md: "70%" },
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <Divider sx={{ width: "100%", display: { xs: "flex", md: "none" } }} />

                            <Box
                                sx={{
                                    width: "100%",
                                    height: "7vh",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }}
                            >
                                {/* نمایش قسمت فیلتر */}
                                <Box sx={{ display: { xs: "none", md: "block" } }}>
                                    <FilterInMdUp />
                                </Box>
                                <Box sx={{ display: { xs: "block", md: "none" } }}>
                                    <FilterInMdDown />
                                </Box>

                                {/* کامپوننت سلکشن برای فیلتر */}
                                <SelectionComponent />
                            </Box>

                            <Divider sx={{ width: "100%", display: { xs: "flex", md: "none" } }} />

                            <TemplateComponentForShowCardWithPicture
                                myData={data}
                                startItem={startItem}
                                endItem={endItem}
                                allProducts={allProducts}
                                allPages={allPages}
                            />
                        </Box>

                        {/* ستون فیلتر سمت راست */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                width: "30%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "80%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                <AccordionMenu />
                                <PriceFilter />
                                <ColorFilter />
                                <BrandsFilter />
                                <SizeFilter />
                                <Tags />
                                < AverageRating />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </>
    )
}