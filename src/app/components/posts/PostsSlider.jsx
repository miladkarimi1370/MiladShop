"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from '@mui/material';

import theme from '@/app/theme/theme';

import TemplateComponentsForShowPosts from './TemplateComponentsForShowPosts';




const PostsSlider = () => {

    const infoCategories = [
        { id: 1, title: "افراد لاغر بخوانند ", srcOur: "/images/posts/01.jpg", myHref: "", description: "تمامی افراد لاغر برای ست کردن لباس خود مشکل دارند", date: "1404/08/18" },
        { id: 2, title: "افراد چاق بخوانند ", srcOur: "/images/posts/02.jpg", myHref: "", description: "تمامی افراد چاق برای ست کردن لباس خود مشکل دارند", date: "1404/08/18" },
        { id: 3, title: "بانوان بخوانند", srcOur: "/images/posts/03.jpg", myHref: "", description: "بانوان با یک شکل کردن لباس و شال خود میتوانند", date: "1404/08/18" },
        { id: 4, title: "افراد لاغر بخوانند ", srcOur: "/images/posts/01.jpg", myHref: "", description: "تمامی افراد لاغر برای ست کردن لباس خود مشکل دارند", date: "1404/08/18" },
        { id: 5, title: "افراد چاق بخوانند ", srcOur: "/images/posts/02.jpg", myHref: "", description: "تمامی افراد چاق برای ست کردن لباس خود مشکل دارند", date: "1404/08/18" },
        { id: 6, title: "بانوان بخوانند", srcOur: "/images/posts/03.jpg", myHref: "", description: "بانوان با یک شکل کردن لباس و شال خود میتوانند", date: "1404/08/18" },


    ]

    const isXs = useMediaQuery(theme.breakpoints.only("xs"));
    const isSm = useMediaQuery(theme.breakpoints.only("sm"));
    const isMd = useMediaQuery(theme.breakpoints.only("md"));
    const isXl = useMediaQuery(theme.breakpoints.only("xl"));

    return (
        <>
            <Swiper

                slidesPerView={isXs ? 1 : isSm ? 2 : isMd ? 3 : isXl ? 4 : 4}
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
                        <TemplateComponentsForShowPosts key={item.id} href={item.myHref} mySrc={item.srcOur} title={item.title} date={item.date} description={item.description} />
                    </SwiperSlide>

                })}
            </Swiper>

        </>
    )
}

export default PostsSlider;