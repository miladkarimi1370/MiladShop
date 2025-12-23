"use client"
import { Box, Container, Divider, Typography } from "@mui/material";

import BreadCrumbsComponents from "../components/breadCrumbsComponent/BreadCrumbsComponent";

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
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useMyPagination } from "@/store/useMyPagination";
import Loading from "../loading";

export default function EMall() {
    const [storeData, setStoreData] = useState([]);
    const { currentPage } = useMyPagination(state => state);
    const [allProducts, setAllProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 18;

    const startItem = (currentPage - 1) * limit;
    const endItem = (currentPage * limit) - 1;
    const allPages = Math.ceil(allProducts / limit)

    useEffect(() => {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )

        const fetchAllData = async () => {

            const { count } = await supabase
                .from("milad-shop-products")
                .select("*", { count: "exact", head: true });

            setAllProducts(count || 0);
        };


        const fetchData = async () => {
            setLoading(true)
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
                .range(startItem, endItem)
            if (data) {
                setLoading(false);
                setStoreData(data)
            }

        }
        fetchAllData();
        fetchData();
    }, [currentPage])




    return (
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

                        {loading ? <Loading /> :
                            <TemplateComponentForShowCardWithPicture myData={storeData} startItem={startItem} endItem={endItem} allProducts={allProducts} allPages={allPages} />
                        }
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
                            <AverageRating />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
