
import { Box, Container } from "@mui/material";

import PopularityHeader from "./PopularityHeader";


import TemplateComponentForShowCard from "./TemplateComponentForShowCard";

export default function Popularity() {

    const inforPopularity = [
        { id: 1, title: "تی شرت مردانه ( کژوال )", price: "300000", colors: ["white", "grey"], src: ["/images/popularity/1-1.jpg", "images/popularity/1-2.jpg"], myHref: "" },
        { id: 2, title: "ژاکت مردانه ", price: "800000", colors: ["#FFFDD0", "#8E8C97"], src: ["/images/popularity/2-1.jpg", "images/popularity/2-2.jpg"], myHref: "" },
        { id: 3, title: "شال زنانه ( گالانت )", price: "1500000", colors: ["pink", "black", "green"], src: ["/images/popularity/3-1.jpg", "images/popularity/3-2.jpg", "images/popularity/3-3.jpg"], myHref: "" },
        { id: 4, title: "دورس زنانه", price: "900000", colors: ["brown", "grey", "blueviolet"], src: ["/images/popularity/4-1.jpg", "images/popularity/4-2.jpg", "images/popularity/4-3.jpg"], myHref: "" },
        { id: 5, title: "هودی (# 04 )", price: "22000000", colors: ["black", "aqua", "grey"], src: ["/images/popularity/5-1.jpg", "images/popularity/5-2.jpg", "images/popularity/5-3.jpg"], myHref: "" },
        { id: 6, title: "تی شرت دخترانه عکس دار ", price: "750000", colors: ["red", "purple", "green"], src: ["/images/popularity/6-1.jpg", "images/popularity/6-2.jpg", "images/popularity/6-3.jpg"], myHref: "" },
        { id: 7, title: "دورس مردانه", price: "175000", colors: ["greenyellow", "skyblue", "green"], src: ["/images/popularity/7-1.jpg", "images/popularity/7-2.jpg", "images/popularity/7-3.jpg"], myHref: "" },
        { id: 8, title: "شلوار اورجینال مردانه", price: "1950000", colors: ["#007598", "grey", "brown"], src: ["/images/popularity/8-1.jpg", "images/popularity/8-2.jpg", "images/popularity/8-3.jpg"], myHref: "" },

    ]


    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
                <Box sx={{ width: "100%" }}>
                    <PopularityHeader />
                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap"  }}>
                        {/* کامپونتنت اصلی  */}
                        {inforPopularity.map((item) => {
                            return (
                                <TemplateComponentForShowCard key={item.id} title={item.title} href={item.myHref} price={item.price} colorsOfProduct={item.colors} src={item.src} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                </Box>
            </Container >

        </>
    )
}