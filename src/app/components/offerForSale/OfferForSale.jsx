"use client"
import { Box, Container } from "@mui/material";


import TemplateComponentForPictures from "./TemplateComponentForPictures";

export default function OfferForSale() {
    const infoOffer = [
        { id: 1, myHref: "", mySrc: "/images/offerForSale/banner-1.jpg", title: "تا 30 درصد تخیف برای بانوان" },
        { id: 2, myHref: "", mySrc: "/images/offerForSale/banner-2.jpg", title: "فروش ویژه کتانی ، شروع قیمت از 400000  تومان" },
        { id: 3, myHref: "", mySrc: "/images/offerForSale/banner-3.jpg", title: "کالکشن پائیزه برای آقایان" },


    ]
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
                            infoOffer.map((item) => {
                                return (
                                    <TemplateComponentForPictures key={item.id} href={item.myHref} title={item.title} mySrc={item.mySrc} />
                                )
                            })
                        }



                    </Box>
                </Box>
            </Container>
        </>
    )
}