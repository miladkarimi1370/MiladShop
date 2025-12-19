"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from '@mui/material';

import theme from '@/app/theme/theme';
import TemplateComponentForShowClothes from './TemplateComponentForShowClothes';





const OurCategoriesSlider = ({ categoryData }) => {


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
                
                {[...categoryData].map((item) => {
                    return <SwiperSlide style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TemplateComponentForShowClothes key={item.id} href={"milad"} mySrc={item.image_url} title={item.title} count={item.category_count} />
                    </SwiperSlide>

                })}
            </Swiper>

        </>
    )
}

export default OurCategoriesSlider;