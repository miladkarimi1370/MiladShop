"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from "react";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";


export default function TemplateComponentForPictures({ href, mySrc, title }) {
    const [isBlock, setIsBlock] = useState(null);

    return (
        <>
            <Box sx={{ width: { xs: "100%", md: "33%" }, display: "flex", my: 2, position: "relative", flexWrap: "wrap" }}
                onMouseEnter={() => setIsBlock(true)}
                onMouseLeave={() => setIsBlock(false)}

            >
                <Link href={href} style={{ display: "block", width: "100%" }} target="_blank">
                    <Box sx={{ width: "100%", height: "30vh", position: "relative", overflow: "hidden" }}>
                        <Image
                            src={mySrc}
                            alt={title}
                            fill
                            style={{
                                objectFit: "cover",
                                transform: isBlock ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                                transition: "all 0.2s ease"
                            }}
                        />
                    </Box>

                    <Box sx={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50% , -50%)"
                        , p: 2,
                        display: isBlock ? "flex" : "none",
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                        <ArrowRightAltIcon sx={{ color: "#000", fontWeight: "light", transition: "all 0.4s ease" }} />
                    </Box>

                    <Typography href={mySrc} variant="subtitle1" sx={{
                        transition: "0.3s",
                        color: "grey", mt: 1, display: "flex", justifyContent: "center", alignItems: "center", "&:hover": {
                            color: "tomato",
                            fontWeight: "bold",
                            mt: 1,
                        },

                    }}>{ChangeNumberToPersianForPhone(title)} </Typography>

                </Link>

            </Box>
        </>
    )
}