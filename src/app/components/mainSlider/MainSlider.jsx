"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { fadeSlide } from "./animationForSlidersTitle";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules"
import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Image from 'next/image';
import Link from 'next/link';
export default function MainSlider() {
    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <>
            <Box sx={{
                width: "100vw", height: {
                    xs: "35vh",
                    md: "40vh",
                    lg: "50vh",
                    xl: "60vh"
                },
                cursor: "pointer"
            }}>
                <Swiper

                    spaceBetween={30}
                    effect={"fade"}

                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,

                    }}
                    navigation={isLgUp ? { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } : false}
                    dir='rtl'
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "tomato"
                    }}
                >


                    <SwiperSlide>
                        <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
                            <Image
                                src={"/images/sliderImages/01.jpg"}
                                alt='picture'
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <Box component={"div"} sx={{
                                width: "70vw",
                                height: "15vh",

                                position: "absolute",
                                display: "flex",
                                top: "50%",
                                left: {
                                    xs: "50%",
                                    sm: "60%",
                                    md: "70%"
                                },
                                transform: "translate(-20% , -50%)",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "start"
                            }}>
                                <Typography variant='subtitle2' sx={{ display: "flex", justifyContent: "start", alignItems: "center", color: "grey", ...fadeSlide }}>شروع قیمت ها از 399 هزار تومان</Typography>
                                <Typography variant='h2' sx={{
                                    fontSize: {
                                        xs: "40px",
                                        sm: "50px",
                                        lg: "60px",
                                        xl: "70px"
                                    }, display: "flex", justifyContent: "start", alignItems: "center", fontWeight: "bold", ...fadeSlide, width: "50vw"
                                }}>کالکشن جدید</Typography>
                                <Link href={""} >
                                    <Typography sx={{
                                        ...fadeSlide, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.1s ease-in-out ", "&:hover": {
                                            color: "tomato", fontWeight: "bold"
                                        }
                                    }}>همین الان خرید کنید
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
                                alt='picuture'
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            <Box component={"div"} sx={{
                                width: "70vw",
                                height: "15vh",

                                position: "absolute",
                                display: "flex",
                                top: "50%",
                                left: {
                                    xs: "25%",
                                    sm: "30%",
                                    md: "30%"
                                },
                                transform: "translate(-20% , -50%)",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "start"
                            }}>
                                <Typography variant='subtitle2' sx={{ display: "flex", justifyContent: "start", alignItems: "center", color: "grey", ...fadeSlide }}>شروع قیمت ها از 599 هزار تومان</Typography>
                                <Typography variant='h2' sx={{
                                    fontSize: {
                                        xs: "30px",
                                        sm: "40px",
                                        lg: "50px",
                                        xl: "60px"
                                    }, display: "flex", justifyContent: "start", alignItems: "center", fontWeight: "bold", ...fadeSlide, width: {
                                        xs: "50vw", sm: "45vw", md: "40vw", xl: "30vw"
                                    }
                                }}>کالکشن جدید مخصوص بانوان</Typography>
                                <Link href={""} >
                                    <Typography sx={{
                                        ...fadeSlide, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.1s ease-in-out ", "&:hover": {
                                            color: "tomato", fontWeight: "bold"
                                        }
                                    }}>همین الان خرید کنید
                                        <ArrowCircleRightRoundedIcon sx={{ color: "green", px: 1 }} />

                                    </Typography>
                                </Link>
                            </Box>
                        </Card>
                    </SwiperSlide>

                </Swiper >
                {isLgUp && (
                    <>
                        <Box
                            component="div"
                            className="swiper-button-next"
                            sx={{

                                right: "100px !important",          // مقدار کمتر = نزدیک‌تر به داخل
                                transform: "translateY(-50%)",
                                color: "#000",
                                "&::after": {
                                    fontSize: "30px"     // بزرگتر خواستی اینو تغییر بده
                                }
                            }}
                        />
                        <Box
                            component="div"
                            className="swiper-button-prev"
                            sx={{
                                left: "100px !important",
                                transform: "translateY(-50%)",
                                color: "#000",
                                "&::after": {
                                    fontSize: "30px"
                                }
                            }}
                        />
                    </>
                )}

            </Box>
        </>
    )
}