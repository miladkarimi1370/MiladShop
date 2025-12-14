"use client"
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

export default function MainSlider() {

    return (
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

                <SwiperSlide>
                    <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
                        <Image
                            src={"/images/sliderImages/01.jpg"}
                            alt='picture'
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <Box sx={{
                            width: { xs: "70vw", md: "70vw" },
                            height: "15vh",
                            position: "absolute",
                            top: "50%",
                            left: { xs: "50%", sm: "60%", md: "70%" },
                            transform: "translate(-20%, -50%)",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "start",
                            display: "flex"
                        }}>
                            <Typography variant='subtitle2' sx={{ color: "grey", ...fadeSlide }}>
                                شروع قیمت ها از 399 هزار تومان
                            </Typography>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: "40px", sm: "50px", lg: "60px", xl: "70px" },
                                fontWeight: "bold",
                                width: { xs: "50vw" },
                                ...fadeSlide
                            }}>
                                کالکشن جدید
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
                                    همین الان خرید کنید
                                    <ArrowCircleRightRoundedIcon sx={{ color: "green", px: 1 }} />
                                </Typography>
                            </Link>
                        </Box>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
                        <Image
                            src={"/images/sliderImages/02.jpg"}
                            alt='picture'
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <Box sx={{
                            width: "70vw",
                            height: "15vh",
                            position: "absolute",
                            top: "50%",
                            left: { xs: "25%", sm: "30%", md: "30%" },
                            transform: "translate(-20%, -50%)",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            alignItems: "start",
                            display: "flex"
                        }}>
                            <Typography variant='subtitle2' sx={{ color: "grey", ...fadeSlide }}>
                                شروع قیمت ها از 599 هزار تومان
                            </Typography>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: "30px", sm: "40px", lg: "50px", xl: "60px" },
                                fontWeight: "bold",
                                width: { xs: "50vw", sm: "45vw", md: "40vw", xl: "30vw" },
                                ...fadeSlide
                            }}>
                                کالکشن جدید مخصوص بانوان
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
                                    همین الان خرید کنید
                                    <ArrowCircleRightRoundedIcon sx={{ color: "green", px: 1 }} />
                                </Typography>
                            </Link>
                        </Box>
                    </Card>
                </SwiperSlide>

            </Swiper>

            {/* Navigation buttons – فقط روی lg به بالا نمایش داده میشه */}
            <Box className="swiper-button-next" sx={{ display: { xs: "none", lg: "block" }, right: "100px !important", transform: "translateY(-50%)", color: "#000", "&::after": { fontSize: "30px" } }} />
            <Box className="swiper-button-prev" sx={{ display: { xs: "none", lg: "block" }, left: "100px !important", transform: "translateY(-50%)", color: "#000", "&::after": { fontSize: "30px" } }} />

        </Box>
    )
}
