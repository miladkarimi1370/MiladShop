"use client";

import {
    Box,
    Container,
    Divider,
    Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";



import { useMyPagination } from "@/store/useMyPagination";
import { useTheShapeOfShowCards } from "@/store/useTheShapeOfShowCards";
import { useCheckBoxForDiscountProducts } from "@/store/useCheckBoxForDiscountProducts";
import BreadCrumbsComponents from "@/app/components/breadCrumbsComponent/BreadCrumbsComponent";
import FilterInMdUp from "../FilterInMdUp";
import FilterInMdDown from "../FilterInMdDown";
import SelectionComponent from "../SelectionComponent";
import Loading from "../loading";
import TemplateComponentForShowCardWithPicture from "../TemplateComponentsForShowCardWithPicture/TemplateComponentForShowCardWithPicture";
import AccordionMenu from "../accordionMenuInCategories/AccordionMenu";
import PriceFilter from "../priceFilter/PriceFilter";
import ColorFilter from "../colorFilter/ColorFilter";
import BrandsFilter from "../brandsFilter/BrandsFilter";
import SizeFilter from "../sizeFilter/SizeFilter";
import Tags from "../tags/Tags";
import AverageRating from "../averageRating/AverageRating";

export default function ShowProductsAsClientComponent({ category }) {
    const [storeData, setStoreData] = useState([]);
    const [allProducts, setAllProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    console.log(category);

    const limit = 18;

    const { currentPage, setCurrentPage } = useMyPagination();
    const { currentColumnBase } = useTheShapeOfShowCards();
    const { currentStatusForCheckBox } = useCheckBoxForDiscountProducts();

    const startItem = (currentPage - 1) * limit;
    const endItem = startItem + limit - 1;
    const allPages = Math.ceil(allProducts / limit);

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    /* 🔹 وقتی فیلتر تخفیف تغییر می‌کنه → صفحه برگرده 1 */
    useEffect(() => {
        setCurrentPage(1);
    }, [currentStatusForCheckBox, setCurrentPage, category]);

    /* 🔹 گرفتن تعداد کل محصولات */
    useEffect(() => {
        const fetchAllDataCount = async () => {
            setLoading(true);
            const query = supabase
                .from("milad-shop-products")
                .select("*", { count: "exact", head: true })




            if (currentStatusForCheckBox) {
                query.eq("discount", true);
            }

            const { count } = await query;
            setAllProducts(count || 0);
        };

        fetchAllDataCount();
    }, [currentStatusForCheckBox, category]);

    /* 🔹 گرفتن دیتا بر اساس page */
    useEffect(() => {
        const fetchData = async () => {


            let query = supabase
                .from("milad-shop-products")
                .select(`
          id,
          name,
          price,
          colors,
          discount,
          milad-shop-product-images (
            id,
            image_url
          ), 
          milad-shop-category!inner(
          id ,
           slug
          )
        ` , { count: "exact"})
                .eq("milad-shop-category.slug", category)
                .range(startItem, endItem);

            if (currentStatusForCheckBox) {
                query = query.eq("discount", true);
            }

            const { count, data } = await query;
            console.log(count);
            
            setAllProducts(count || 0)
            setStoreData(data || []);
            setLoading(false);
        };

        fetchData();
    }, [currentPage, currentStatusForCheckBox, currentColumnBase, category ]);

    return (
        <Container maxWidth="lg" disableGutters>
            <Box component="section" sx={{ width: "100%" }}>
                {/* Header */}
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

                    <BreadCrumbsComponents
                        arrayOfPath={[
                            { id: 1, name: "صفحه اصلی", myHref: "/" },
                            { id: 2, name: "فروشگاه", myHref: "/emall" },
                        ]}
                    />
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
                    {/* Products */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "70%" },
                            display: "flex",
                            justifyContent: "center",
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
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <FilterInMdUp />
                            </Box>

                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <FilterInMdDown />
                            </Box>

                            <SelectionComponent />
                        </Box>

                        <Divider sx={{ width: "100%", display: { xs: "flex", md: "none" } }} />

                        {loading ? (
                            <Loading />
                        ) : (
                            <TemplateComponentForShowCardWithPicture
                                myData={storeData}
                                startItem={startItem}
                                endItem={endItem}
                                allProducts={allProducts}
                                allPages={allPages}
                            />
                        )}
                    </Box>

                    {/* Filters */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            width: "30%",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                justifyContent: "center",
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
