"use client";
import React, { useRef, useState } from 'react';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules"
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image';
import ShowNameAndPriceProductInNavbar from './ShowNameAndPriceProductInNavbar';

export default function ShowProductWithSliderInNavbar() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);
    const IconsRef = useRef(null);


    const clothesInfoForProducts = [
        { id: 1, name: "boy", title: "تی شرت آستین بلند مردانه", price: "250000", src: { srcOfFrontPicture: "/images/productNavbarImages/boy.jpg", srcOfBackPicture: "/images/productNavbarImages/backboy.jpg" }, myHref: "" },
        { id: 2, name: "firstGirl", title: "تی شرت آستین کوتاه دخترانه مشکی", price: "380000", src: { srcOfFrontPicture: "/images/productNavbarImages/firstGirl.jpg", srcOfBackPicture: "/images/productNavbarImages/firstGirlBack.jpg" }, myHref: "" },
        { id: 3, name: "secondGirl", title: "تی شرت آستین کوتاه دخترانه ", price: "280000", src: { srcOfFrontPicture: "/images/productNavbarImages/secondGirl.jpg", srcOfBackPicture: "/images/productNavbarImages/secondGirlBack.jpg" }, myHref: "" },
        { id: 4, name: "thirdGirl", title: "کراپ زنانه نخی", price: "580000", src: { srcOfFrontPicture: "/images/productNavbarImages/thirdGirl.jpg", srcOfBackPicture: "/images/productNavbarImages/thirdGirlBack.jpg" }, myHref: "" },


    ]
    return (
        <>

            <Box sx={{
                width: {
                    md: "300px", lg: "350px", xl: "400px"
                }, position: "relative", overflow: "visible", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" 
            }}>
                <Box sx={{
                    position: "absolute", width: "50%", height: "5vh", display: "flex", justifyContent: "center", top: "0px", left: "0px", alignItems: "center", zIndex: 999,  transform: {
                        md: "translateY(100%)",
                        lg: "translateY(60%)",

                    }
                }}>
                    <Button
                        onClick={() => swiperRef?.slidePrev()}

                    >
                        <KeyboardArrowRightRoundedIcon />

                    </Button>
                    <Button
                        onClick={() => swiperRef?.slideNext()}

                    >
                        <KeyboardArrowLeftRoundedIcon />

                    </Button>
                </Box>
                <Typography
                    component={"h6"}
                    color='#000' sx={{
                        position: "absolute",
                        width: "50%",
                        height: "5vh",
                        top: "0px",
                        right: "0px",
                        zIndex: 500,
                        p: 2,
                        fontSize: "16px",
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        transform: {
                            md: "translateY(100%)",
                            lg: "translateY(60%)",
                        }
                        
                    }}
                >
                    بهترین فروشنده

                </Typography>
                <Swiper
                    onSwiper={setSwiperRef}
                    sx={{ width: "300px", height: "300px", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "brown" }}
                    slidesPerView={2}
                    dir='rtl'


                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Navigation]}
                    className="mySwiper"
                >



                    {clothesInfoForProducts.length > 0 && clothesInfoForProducts.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Box sx={{ width: "100%", height: "100%", position: "relative" }}
                                    onMouseEnter={() => { setHoveredId(item.id) }}
                                    onMouseLeave={() => { setHoveredId(null) }}
                                >
                                    <Link href={item.myHref}>
                                        <Box sx={{ width: "100%", height: "100%" }}

                                        >
                                            <Image

                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    borderRadius: "8px",
                                                    transition: "opacity 0.3s ease-in-out",

                                                }}
                                                src={hoveredId === item.id ? item.src.srcOfBackPicture : item.src.srcOfFrontPicture}
                                                alt={item.title}
                                                width={0}
                                                height={0}
                                                sizes="200vw"
                                            />
                                        </Box>
                                    </Link>

                                    {/* آیکون‌ها */}
                                    <Box
                                        ref={IconsRef}
                                        sx={{
                                            display: hoveredId === item.id ? "flex" : "none",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "absolute",
                                            top: "10%",
                                            left: "5%",
                                            zIndex: 10, // 👈 مهم!
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                        >
                                            <Tooltip title={"اضافه کردن به سبد خرید"} arrow placement='left'>
                                                <IconButton sx={{
                                                    color: "gray", backgroundColor: "white", "&:hover": {
                                                        color: "white", backgroundColor: "#000"
                                                    }
                                                }}>
                                                    <LocalMallOutlinedIcon sx={{ fontSize: "14px" }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={"اضافه کردن به علاقمندی ها"} arrow placement='left'>
                                                <IconButton
                                                    sx={{
                                                        color: "gray", backgroundColor: "white", "&:hover": {
                                                            color: "white", backgroundColor: "#000"
                                                        }
                                                    }}
                                                >
                                                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "14px" }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={"نمایش کامل جزئیات"} arrow placement='left'>
                                                <IconButton
                                                    sx={{
                                                        color: "gray", backgroundColor: "white", "&:hover": {
                                                            color: "white", backgroundColor: "#000"
                                                        }
                                                    }}
                                                >
                                                    <SearchOutlinedIcon sx={{ fontSize: "14px" }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title={"تصویر تمام صفحه"} arrow placement='left'>
                                                <IconButton
                                                    sx={{
                                                        color: "gray", backgroundColor: "white", "&:hover": {
                                                            color: "white", backgroundColor: "#000"
                                                        }
                                                    }}
                                                >
                                                    <FullscreenOutlinedIcon sx={{ fontSize: "14px" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>

                                    </Box>
                                    {/* کامپوننت در برگیرنده قیمت محصولات و نام آنها */}
                                    <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", flexWrap: "wrap" }}>
                                        <ShowNameAndPriceProductInNavbar nameOfProduct={item.title} price={item.price} />
                                    </Box>
                                    {/* کامپوننت در برگیرنده قیمت محصولات و نام آنها */}
                                </Box>
                            </SwiperSlide>

                        )
                    })}



                </Swiper>
            </Box >

        </>
    )
}