"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from '@mui/material';

import theme from '@/app/theme/theme';

import TemplateComponentsForShowPosts from './TemplateComponentsForShowPosts';




const PostsSlider = ({information}) => {



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

                {[...information].map((item) => {
                    return <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TemplateComponentsForShowPosts key={item.id} href={"milad"} mySrc={item.image_url} title={item.title} date={item.created_at} description={item.description} />
                    </SwiperSlide>

                })}
            </Swiper>

        </>
    )
}

export default PostsSlider;