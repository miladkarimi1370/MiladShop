"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { fadeSlide } from "./animationForSlidersTitle";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules"
import { Box, Card, Typography } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Image from 'next/image';
import Link from 'next/link';
import ChangeNumbersToPersina from '@/tools/changeNumbersToPersian';


export default function TemplateComponentForShowSlider({ sliders }) {

    console.log(sliders);

    return (
        <>
            <Box sx={{
                width: "100vw",
                height: { xs: "35vh", md: "40vh", lg: "50vh", xl: "60vh" },
                cursor: "pointer",
                position: "relative"
            }}>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 5500, disableOnInteraction: false }}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    dir='rtl'
                    style={{ width: "100%", height: "100%", backgroundColor: "tomato" }}
                >

                    {/* شروع آرایه اسلایدرها */}
                    {
                        sliders && sliders.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
                                        <Image
                                            src={item.image_url}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                        <Box sx={{
                                            width: { xs: "70vw", md: "70vw" },
                                            height: "15vh",
                                            position: "absolute",
                                            top: "50%",
                                      
                                            left: { xs: "50%", sm: "60%", md: "70%" },
                                            transform: (item.order_number % 2 === 0 ? "translate(-20%, -50%)" : "translate(-70%, -50%)"),
                                            flexDirection: "column",
                                            justifyContent: "space-evenly",
                                            alignItems: "start",
                                            display: "flex"
                                        }}>
                                            <Typography variant='subtitle2' sx={{ color: "grey", ...fadeSlide }}>
                                                {ChangeNumbersToPersina(item.descriptions)}
                                            </Typography>
                                            <Typography variant='h2' sx={{
                                                fontSize: { xs: "40px", sm: "50px", lg: "50px", xl: "50px" },
                                                fontWeight: "bold",
                                                width: { xs: "50vw" },
                                                ...fadeSlide
                                            }}>
                                                {item.title}
                                            </Typography>
                                            <Link href={""}>
                                                <Typography sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    transition: "all 0.1s ease-in-out",
                                                    "&:hover": { color: "tomato", fontWeight: "bold" },
                                                    ...fadeSlide
                                                }}>
                                                    {item.button_text}
                                                    <ArrowCircleRightRoundedIcon sx={{ color: "green", px: 1 }} />
                                                </Typography>
                                            </Link>
                                        </Box>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                    {/* پایان آرایه اسلایدرها */}


                </Swiper>

                {/* Navigation buttons – فقط روی lg به بالا نمایش داده میشه */}
                <Box className="swiper-button-next" sx={{ display: { xs: "none", lg: "block" }, right: "100px !important", transform: "translateY(-50%)", color: "#000", "&::after": { fontSize: "30px" } }} />
                <Box className="swiper-button-prev" sx={{ display: { xs: "none", lg: "block" }, left: "100px !important", transform: "translateY(-50%)", color: "#000", "&::after": { fontSize: "30px" } }} />

            </Box>

        </>
    )
}