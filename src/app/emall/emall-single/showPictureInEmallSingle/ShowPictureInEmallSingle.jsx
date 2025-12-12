"use client"
import { Box, Fade, IconButton, useMediaQuery } from "@mui/material";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useRef, useState } from "react";
import FullScreenPicture from "./FullScreenPicture";
import theme from "@/app/theme/theme";
export default function ShowPictureInEmallSingle({ srcOfImages }) {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const [showNavigator, setShowNavigator] = useState(false)
    const [changeSrcOfPicture, setChangeSrcOfPicture] = useState(srcOfImages[0]);
    const myRefIndex = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);


    const [positionOfImg, setPositionOfImg] = useState({
        position: "static",
        cursor: null,
        transform: "scale(1)"
    })




    const handleMouseenter = (e) => {
        setShowNavigator(true)

        setPositionOfImg({
            position: "absolute",
            transform: "scale(1.6) translate(0px, 0px)",
            cursor: "zoom-in"
        })
    }

    const handleMouseLeave = () => {
        setShowNavigator(false)
        if (myRefIndex.current !== null) {
            setChangeSrcOfPicture(srcOfImages[myRefIndex.current])
        } else {
            setChangeSrcOfPicture(srcOfImages[0])
        }

        setPositionOfImg({
            position: "static",
            transform: "scale(1) translate(0px,0px)",
            cursor: "pointer"
        })
    }

    const handleMove = (e) => {

        const rect = e.currentTarget.getBoundingClientRect();

        // موقعیت موس نسبت به عکس
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // خلاف جهت حرکت موس
        const moveX = (rect.width / 2 - x) * 0.15;
        const moveY = (rect.height / 2 - y) * 0.15;

        setPositionOfImg({
            position: "absolute",
            cursor: "zoom-in",
            transform: `scale(1.6) translate(${moveX}px, ${moveY}px)`
        });
    };

    const handleChangePicture = (number) => {

        myRefIndex.current = number;
        setSelectedIndex(number)
        setChangeSrcOfPicture(srcOfImages[number])

    }
    const handleChangePictureWithArrow = (direction) => {
        let newIndex;

        if (direction === "forward") {
            newIndex = selectedIndex !== null ? selectedIndex + 1 : 0;
            if (newIndex > srcOfImages.length - 1) newIndex = 0;
        } else { // backward
            newIndex = selectedIndex !== null ? selectedIndex - 1 : srcOfImages.length - 1;
            if (newIndex < 0) newIndex = srcOfImages.length - 1;
        }

        setSelectedIndex(newIndex);             // مهم: بروزرسانی selectedIndex
        myRefIndex.current = newIndex;          // بروزرسانی ref
        setChangeSrcOfPicture(srcOfImages[newIndex]);  // تغییر src
    };


    return (
        <>
            <Box component={"section"} sx={{ width: "100%", display: "flex", justifyContent: "start", alignItems: "start", gap: mdDown ? 0 : 1, flexWrap: mdDown ? "wrap" : "nowrap" }}>
                <Box component={"div"} sx={{ width: "100%", position: "relative", overflow: "hidden", order: mdDown ? 1 : 2, flexShrink: 1 }}
                    onMouseEnter={handleMouseenter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMove}
                >
                    <Fade in={true} timeout={200}>
                        <Box
                            component="img"
                            src={changeSrcOfPicture}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: positionOfImg.transform,
                                cursor: positionOfImg.cursor,
                                transition: "transform 0.35s ease-out"
                            }}
                        />
                    </Fade>
                    {/* شروع کامپوننت فول اسکرین کردن تصویر */}
                    <FullScreenPicture srcOfImg={srcOfImages[selectedIndex]} />
                    {/* پایان کامپوننت فول اسکرین کردن تصویر */}
                    {
                        !showNavigator ? null : (
                            <>
                                <IconButton sx={{ display: "flex", position: "absolute", top: "50%", left: "5%" }}
                                    onClick={() => handleChangePictureWithArrow("forward")}
                                >
                                    <ArrowForwardIosRoundedIcon />
                                </IconButton>
                                <IconButton sx={{ display: "flex", position: "absolute", top: "50%", right: "5%" }}
                                    onClick={() => handleChangePictureWithArrow("backward")}
                                >
                                    <ArrowBackIosRoundedIcon />
                                </IconButton>
                            </>
                        )
                    }
                </Box>
                <Box component={"div"} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 1, my: 1, flexDirection: mdDown ? "row" : "column", order: mdDown ? 2 : 1, flexShrink: 3 }}>
                    {
                        srcOfImages && srcOfImages.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    component={"img"}
                                    src={item}
                                    sx={{
                                        border: selectedIndex === index ? "1px solid black" : "none",
                                        width: "23%", "&:hover": {
                                            border: "0.5px solid #000"
                                        },
                                        cursor: "pointer"
                                    }}
                                    onClick={() => handleChangePicture(index)}

                                />
                            )
                        })
                    }



                </Box>
            </Box>

        </>
    )
}