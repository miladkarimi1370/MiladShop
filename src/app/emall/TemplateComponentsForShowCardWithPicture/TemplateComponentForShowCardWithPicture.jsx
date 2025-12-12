"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import TemplateComponentForShowCardSingle from "./TemplateComponentForShowCardSingle";
import MyPagination from "../ShowPagination";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";






export default function TemplateComponentForShowCardWithPicture() {

    const inforPopularity = [
        { id: 1, title: "تی شرت دخترانه عکس دار ( 1 )", price: "450000", colors: ["red", "green"], src: ["/images/imageForShopRoute/1-1.jpg", "images/imageForShopRoute/1-2.jpg"], myHref: "" },
        { id: 2, title: "دورس بافتنی دخترانه اورجینال", price: "3750000", colors: ["#FFFDD0", "#8E8C97"], src: ["/images/imageForShopRoute/2-1.jpg", "images/imageForShopRoute/2-2.jpg"], myHref: "" },
        { id: 3, title: "کیف چرمی زنانه", price: "8500000", colors: ["black"], src: ["/images/imageForShopRoute/3-1.jpg", "images/imageForShopRoute/3-2.jpg"], myHref: "" },
        { id: 4, title: "تاپ و دامن ورساچه", price: "3750000", colors: ["black"], src: ["/images/imageForShopRoute/4-1.jpg", "images/imageForShopRoute/4-2.jpg"], myHref: "" },
        { id: 5, title: "تی شرت مردانه ", price: "1150000", colors: ["blue", "green"], src: ["/images/imageForShopRoute/5-1.jpg", "images/imageForShopRoute/5-2.jpg"], myHref: "" },
        { id: 6, title: "اوت فیت زنانه ورساچه", price: "2150000", colors: ["yellow", "green"], src: ["/images/imageForShopRoute/6-1.jpg", "images/imageForShopRoute/6-2.jpg"], myHref: "" },
        { id: 7, title: "عینک اورجینال مدل اسکالا", price: "4550000", colors: ["black", "green"], src: ["/images/imageForShopRoute/7-1.jpg", "images/imageForShopRoute/7-2.jpg"], myHref: "" },
        { id: 8, title: "شلوار اورجینال مردانه", price: "1950000", colors: ["#007598", "brown"], src: ["/images/imageForShopRoute/8-1.jpg", "images/imageForShopRoute/8-2.jpg"], myHref: "" },
        { id: 9, title: "تی شرت مخصوص بدنسازی", price: "1050000", colors: ["yellow", "skyblue"], src: ["/images/imageForShopRoute/9-1.jpg", "images/imageForShopRoute/9-2.jpg"], myHref: "" },
        { id: 10, title: "پولوشرت مردانه مارک پولو", price: "1380000", colors: ["white", "grey"], src: ["/images/imageForShopRoute/10-1.jpg", "images/imageForShopRoute/10-2.jpg"], myHref: "" },
        { id: 11, title: "کراپ دخترانه عکس دار", price: "890000", colors: ["white"], src: ["/images/imageForShopRoute/11-1.jpg", "images/imageForShopRoute/11-2.jpg"], myHref: "" },
        { id: 12, title: "کراپ مشکی دخترانه اورجینال", price: "950000", colors: ["black"], src: ["/images/imageForShopRoute/12-1.jpg", "images/imageForShopRoute/12-2.jpg"], myHref: "" },
        { id: 13, title: "کفش پاشنه بلند چرمی اورجینال", price: "8350000", colors: ["grey", "black"], src: ["/images/imageForShopRoute/13-1.jpg", "images/imageForShopRoute/13-2.jpg"], myHref: "" },
        { id: 14, title: "لباس مجلسی مشکی زنانه", price: "7320000", colors: ["black"], src: ["/images/imageForShopRoute/14-1.jpg", "images/imageForShopRoute/14-2.jpg"], myHref: "" },
        { id: 15, title: "اوت فیت مردانه اورجینال", price: "3450000", colors: ["whitesmoke", "skyblue"], src: ["/images/imageForShopRoute/15-1.jpg", "images/imageForShopRoute/15-2.jpg"], myHref: "" },
        { id: 16, title: "تی شرت اسلیو مردانه", price: "1800000", colors: ["red"], src: ["/images/imageForShopRoute/16-1.jpg", "images/imageForShopRoute/16-2.jpg"], myHref: "" },
        { id: 17, title: "شال زنانه", price: "750000", colors: ["pink", "black"], src: ["/images/imageForShopRoute/17-1.jpg", "images/imageForShopRoute/17-2.jpg"], myHref: "" },
        { id: 18, title: "پولوشرت زنانه مدل گوچی", price: "2750000", colors: ["brown"], src: ["/images/imageForShopRoute/18-1.jpg", "images/imageForShopRoute/18-2.jpg"], myHref: "" },

    ]


    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
                <Box sx={{ width: "100%" }}>

                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {inforPopularity.map((item) => {
                            return (
                                <TemplateComponentForShowCardSingle key={item.id} title={item.title} href={item.myHref} price={item.price} src={item.src} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                    <Divider />
                    {/* شروع pagination */}
                    <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="subtitle2" sx={{ width: "100%", color: "grey", textAlign: "center", my: 2 }}>تعداد {ChangeNumberToPersianForPhone(1)} الی {ChangeNumberToPersianForPhone(18)} محصول از {ChangeNumberToPersianForPhone(93)}  محصول</Typography>
                        <MyPagination />
                    </Box>
                    {/* پایان pagination */}
                </Box>
            </Container >

        </>
    )
}