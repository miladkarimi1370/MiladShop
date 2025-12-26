"use client";
import { Box, Container, Divider } from "@mui/material";
import TemplateComponentForShowCardSingle from "./TemplateComponentForShowCardSingle";

import { useEffect, useState } from "react";
import PaginationComponent from "./PaginationComponent";

export default function TemplateComponentForShowCardWithPicture({ myData, allProducts, startItem, endItem, allPages }) {

    const [showLoading, setShowLoading] = useState(true)
    useEffect(() => {
        if (!allPages && !allProducts && !startItem && !endItem) {
            setShowLoading(false)
        } else {
            setShowLoading(true)
        }
    })
    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
                <Box sx={{ width: "100%" }}>

                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {myData.map((item) => {
                            return (
                                <TemplateComponentForShowCardSingle product_id={item.id} key={item.id} title={item.name} price={item.price} src={item["milad-shop-product-images"]} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                    <Divider />
                    {/* شروع pagination */}
                    {showLoading ? <PaginationComponent allPages={allPages} allProducts={allProducts} startItem={startItem} endItem={endItem} /> : (
                        <Stack spacing={1}>



                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="circular" width={40} height={40} />

                        </Stack>
                    )}
                    {/* پایان pagination */}
                </Box>
            </Container >

        </>
    )
}