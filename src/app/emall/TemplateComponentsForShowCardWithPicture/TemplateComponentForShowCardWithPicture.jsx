"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import TemplateComponentForShowCardSingle from "./TemplateComponentForShowCardSingle";
import MyPagination from "../ShowPagination";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

export default function TemplateComponentForShowCardWithPicture({ myData, allProducts, startItem, endItem, allPages }) {



    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
                <Box sx={{ width: "100%" }}>

                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {myData.map((item) => {
                            return (
                                <TemplateComponentForShowCardSingle product_id={item.id} key={item.id} title={item.name}  price={item.price} src={item["milad-shop-product-images"]} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                    <Divider />
                    {/* شروع pagination */}
                    <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="subtitle2" sx={{ width: "100%", color: "grey", textAlign: "center", my: 2 }}>
                            تعداد  {" "}
                            {ChangeNumberToPersianForPhone(startItem + 1)} {" "}
                            الی {(endItem + 1) < allProducts ? ChangeNumberToPersianForPhone(endItem + 1) : ChangeNumberToPersianForPhone(allProducts)} {" "}
                            محصول از {ChangeNumberToPersianForPhone(allProducts)} {" "}
                            محصول
                        </Typography>
                        <MyPagination allPages={allPages} />
                    </Box>
                    {/* پایان pagination */}
                </Box>
            </Container >

        </>
    )
}