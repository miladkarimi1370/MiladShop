"use client";

import {
    Box,
    Container,
    Divider,
    Typography,
} from "@mui/material";

import { useEffect, useState } from "react";


import BreadCrumbsComponents from "../components/breadCrumbsComponent/BreadCrumbsComponent";
import FilterInMdDown from "./FilterInMdDown";
import FilterInMdUp from "./FilterInMdUp";
import SelectionComponent from "./SelectionComponent";
import TemplateComponentForShowCardWithPicture from "./TemplateComponentsForShowCardWithPicture/TemplateComponentForShowCardWithPicture";
import AccordionMenu from "./accordionMenuInCategories/AccordionMenu";
import PriceFilter from "./priceFilter/PriceFilter";
import ColorFilter from "./colorFilter/ColorFilter";
import BrandsFilter from "./brandsFilter/BrandsFilter";
import SizeFilter from "./sizeFilter/SizeFilter";
import Tags from "./tags/Tags";
import AverageRating from "./averageRating/AverageRating";
import Loading from "../loading";

import { useMyPagination } from "@/store/useMyPagination";
import { useTheShapeOfShowCards } from "@/store/useTheShapeOfShowCards";
import { useCheckBoxForDiscountProducts } from "@/store/useCheckBoxForDiscountProducts";
import { useSortEmallProducts } from "@/store/sortEmallProducts";
import { supabase } from "@/utils/supabaseKey";
import { usePriceFilter } from "@/store/usePriceFilter";

export default function EMall() {
    const [storeData, setStoreData] = useState([]);

    const [allProducts, setAllProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 18;

    const { currentPage, setCurrentPage } = useMyPagination();
    const { currentColumnBase } = useTheShapeOfShowCards();
    const { currentStatusForCheckBox } = useCheckBoxForDiscountProducts();

    const startItem = (currentPage - 1) * limit;
    const endItem = startItem + limit - 1;
    const allPages = Math.ceil(allProducts / limit);


    const { currentSort } = useSortEmallProducts(state => state)

    const { currentPriceFilter } = usePriceFilter(state => state)
    console.log(currentPriceFilter);


    /* 🔹 وقتی فیلتر تخفیف تغییر می‌کنه → صفحه برگرده 1 */
    useEffect(() => {
        setCurrentPage(1);
    }, [currentStatusForCheckBox, setCurrentPage]);

    /* 🔹 گرفتن تعداد کل محصولات */
    useEffect(() => {
        const fetchAllDataCount = async () => {
            const query = supabase
                .from("milad-shop-products")
                .select("*", { count: "exact", head: true });

            if (currentStatusForCheckBox) {
                query.eq("discount", true);
            }

            const { count } = await query;
            setAllProducts(count || 0);
        };



        fetchAllDataCount();

    }, [currentStatusForCheckBox]);

    /* 🔹 گرفتن دیتا بر اساس page */
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            let query = supabase
                .from("milad-shop-products")
                .select(`
          id,
          name,
          price,
          colors,
          discount,
          created_at ,
          milad-shop-product-images (
            id,
            image_url
          )  
        ` , { count: "exact" })
                .range(startItem, endItem);

            if (currentStatusForCheckBox) {
                query = query.eq("discount", true);
            }

            // شروع قسمت فیلتر کردن بر اساس قیمت
            switch (currentPriceFilter) {
                case "less200":
                    query = query.lt("price", 200);
                    break;
                case "200to399":
                    query = query.gte("price", 200).lt("price", 400)
                    break;
                case "400to599":
                    query = query.gte("price", 400).lt("price", 600)
                    break;
                case "600to899":
                    query = query.gte("price", 600).lt("price", 900)
                    break;
                case "more900":
                    query = query.gte("price", 900)
                    break;

            }

            // پایان قسمت فیلتر کردن بر اساس قیمت

            const { data, count } = await query;
            setAllProducts(count || 0)

            // شروع قسمت سورت کردن محصولات

            if (data) {
                switch (currentSort) {
                    case "latest":
                        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                        break;
                    case "cheapest":
                        data.sort((a, b) => a.price - b.price)
                        break;
                    case "expensive":
                        data.sort((a, b) => b.price - a.price)
                        break;

                }
            }

            // پایان قسمت سورت کردن محصولات





            setStoreData(data || []);
            setLoading(false);
        };

        fetchData();
    }, [currentPage, currentStatusForCheckBox, currentColumnBase, currentSort, currentPriceFilter]);

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
