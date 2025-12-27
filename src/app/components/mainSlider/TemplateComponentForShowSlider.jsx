"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { Box, Card, Typography } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Link from "next/link";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";

export default function TemplateComponentForShowSlider({ sliders }) {
    return (
        <Box
            sx={{
                width: "100vw",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Swiper
                spaceBetween={0}
                effect="fade"
                loop
                dir="rtl"
                pagination={{ clickable: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                style={{ width: "100%", height: "100%" }}
            >
                {sliders?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card
                            sx={{
                                width: "100%",
                                borderRadius: 0,
                                height: {
                                    xs: "260px",
                                    sm: "340px",
                                    md: "440px",
                                    lg: "520px",
                                    xl: "620px",
                                },
                                position: "relative",
                            }}
                        >
                            {/* تصویر */}
                            <img
                                src={item.image_url}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />

                            {/* باکس متن + شرط‌های قبلیت */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",

                                    left: {
                                        xs: "50%",
                                        sm: "60%",
                                        md: "70%",
                                    },

                                    transform: {
                                        xs:
                                            item.order_number % 2 === 0
                                                ? "translate(-80%, -50%)"
                                                : "translate(-45%, -50%)",
                                        sm:
                                            item.order_number % 2 === 0
                                                ? "translate(-105%, -50%)"
                                                : "translate(-75%, -50%)",
                                        md:
                                            item.order_number % 2 === 0
                                                ? "translate(-120%, -50%)"
                                                : "translate(-80%, -50%)",
                                        lg:
                                            item.order_number % 2 === 0
                                                ? "translate(-120%, -50%)"
                                                : "translate(-90%, -50%)",
                                        xl:
                                            item.order_number % 2 === 0
                                                ? "translate(-130%, -50%)"
                                                : "translate(-85%, -50%)",
                                    },

                                    width: { xs: "70vw", md: "70vw" },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    alignItems: "start",
                                    gap: 1,
                                }}
                            >
                                {/* subtitle خاکستری */}
                                <Typography variant="subtitle2" sx={{ color: "grey" }}>
                                    {ChangeNumbersToPersina(item.descriptions)}
                                </Typography>

                                {/* title مشکی */}
                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: "#000",
                                        fontWeight: "bold",
                                        fontSize: {
                                            xs: "20px",
                                            sm: "25px",
                                            md: "30px",
                                            xl: "40px",
                                        },
                                        width: {
                                            xs: "200px",
                                            sm: "300px",
                                            md: "400px",
                                            lg: "400px",
                                            xl: "550px",
                                        },
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* 🔙 دکمه + متن + آیکن برگشت */}
                                <Link target="_blank" href="/emall">
                                    <Typography
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                            transition: "all .15s ease",
                                            "&:hover": { color: "tomato", fontWeight: "bold" },
                                        }}
                                    >
                                        {item.button_text}
                                        <ArrowCircleRightRoundedIcon sx={{color : "green"}} />
                                    </Typography>
                                </Link>
                            </Box>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* دکمه‌های ناوبری */}
            <Box
                className="swiper-button-next"
                sx={{
                    display: { xs: "none", lg: "block" , transform : "translateX(50px)" },
                    "&::after": { fontSize: "30px", fontWeight: "bold" },
                }}
            />
            <Box
                className="swiper-button-prev"
                sx={{
                    display: { xs: "none", lg: "block" , transform : "translateX(-50px)" },
                    "&::after": { fontSize: "30px", fontWeight: "bold" },
                }}
            />
        </Box>
    );
}
