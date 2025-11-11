"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from '@mui/material';

import theme from '@/app/theme/theme';
import TemplateComponentForShowClothes from './TemplateComponentForShowClothes';




const OurCategoriesSlider = () => {

    const infoCategories = [
        { id: 1, title: "آقایان ", count: 31, srcOur: "/images/ourCategoriesImages/4-cat.jpg", myHref: "" },
        { id: 2, title: "بانوان ", count: 38, srcOur: "/images/ourCategoriesImages/1-cat.jpg", myHref: "" },
        { id: 3, title: "لباس راحتی و خواب ", count: 5, srcOur: "/images/ourCategoriesImages/6-cat.jpg", myHref: "" },
        { id: 4, title: "اکسسوری ها ", count: 15, srcOur: "/images/ourCategoriesImages/5-cat.jpg" },
        { id: 5, title: "دورس و البسه نخی ", count: 9, srcOur: "/images/ourCategoriesImages/3-cat.jpg", myHref: "" },
        { id: 6, title: "کفش و کتانی ", count: 2, srcOur: "/images/ourCategoriesImages/2-cat.jpg", myHref: "" },
        { id: 7, title: "آقایان ", count: 31, srcOur: "/images/ourCategoriesImages/4-cat.jpg", myHref: "" },
        { id: 8, title: "بانوان ", count: 38, srcOur: "/images/ourCategoriesImages/1-cat.jpg", myHref: "" },
        { id: 9, title: "لباس راحتی و خواب ", count: 5, srcOur: "/images/ourCategoriesImages/6-cat.jpg", myHref: "" },
        { id: 10, title: "اکسسوری ها ", count: 15, srcOur: "/images/ourCategoriesImages/5-cat.jpg" },
        { id: 11, title: "دورس و البسه نخی ", count: 9, srcOur: "/images/ourCategoriesImages/3-cat.jpg", myHref: "" },
        { id: 12, title: "کفش و کتانی ", count: 2, srcOur: "/images/ourCategoriesImages/2-cat.jpg", myHref: "" },
    ]

    const isXs = useMediaQuery(theme.breakpoints.only("xs"));
    const isSm = useMediaQuery(theme.breakpoints.only("sm"));
    const isMd = useMediaQuery(theme.breakpoints.only("md"));
    const isXl = useMediaQuery(theme.breakpoints.only("xl"));

    return (
        <>
            <Swiper

                slidesPerView={isXs ? 3 : isSm ? 4 : isMd ? 5 : isXl ? 6 : 6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                modules={[Autoplay]}
                dir='rtl'
                className="mySwiper"
                style={{ cursor: "pointer", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            >

                {[...infoCategories].map((item) => {
                    return <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TemplateComponentForShowClothes key={item.id} href={item.myHref} mySrc={item.srcOur} title={item.title} count={item.count} />
                    </SwiperSlide>

                })}
            </Swiper>

        </>
    )
}

export default OurCategoriesSlider;