"use client";
import { FavoriteBorderRounded, SearchOutlined } from "@mui/icons-material";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import { Box, Card, CardActionArea, CardMedia, IconButton, Tooltip, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import theme from "@/app/theme/theme";
import { useRouter } from "next/navigation";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { useState } from "react";
import TemplateComponentsForShowColors from "./TemplateComponentsForShowColors";


export default function TemplateComponentForShowFeaturedCards({ title, href, src, price, colorsOfProduct }) {

    const [isHover, setIsHover] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    
    const currentIndex = isHover
        ? 1 // وقتی موس روی کارت هست
        : selectedIndex !== null
            ? selectedIndex // اگر قبلاً انتخاب شده
            : 0; // حالت پیش‌فرض

    const selectPictures = (color) => {
        const idx = colorsOfProduct.indexOf(color);
        setSelectedIndex(idx >= 0 ? idx : null);
    };

    const router = useRouter()
    const isXs = useMediaQuery(theme.breakpoints.only("xs"));
    const isMd = useMediaQuery(theme.breakpoints.only("md"));
    const isLg = useMediaQuery(theme.breakpoints.only("lg"));
    const isXl = useMediaQuery(theme.breakpoints.only("xl"));
    return (
        <>
            <Box sx={{ width: isXs ? "48%" : isMd ? "33%" : isLg ? "25%" : "25%", height: "100%", my: 1, p: isXl ? 1 : 0 }}>
                <Card component={Link} href={href} sx={{ textDecoration: "none", color: "inherit", position: "relative", width: "50%" }}>
                    <CardActionArea
                        disableRipple
                        component={"div"} sx={{

                            "&:hover": {
                                backgroundColor: "transparent !important"
                            },
                            "& .MuiCardActionArea-focusHighlight": {
                                backgroundColor: "transparent"
                            }
                        }}>
                        <Box sx={{ position: "relative" }}>
                            <CardMedia
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                component="img"
                                image={src[currentIndex].image_url}
                                alt={title}
                                sx={{ objectFit: "cover", transition: "all 0.3s ease" }}
                            />

                            <Box sx={{
                                position: "absolute",
                                top: "5%",
                                left: "5%",

                                display: "flex",
                                flexDirection: "column",
                                gap: 1
                            }}>
                                <Tooltip title="اضافه کردن به علاقمندی ها" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": {
                                            color: "#fff", backgroundColor: "#000"
                                        }
                                    }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FavoriteBorderRounded sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="دیدن جزئیات" placement="left-start">
                                    <IconButton

                                        size="small" sx={{
                                            backgroundColor: "#fff", color: "grey", "&:hover": {
                                                color: "#fff", backgroundColor: "#000"
                                            }
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            router.push("/basket");
                                        }}
                                    >
                                        <ShoppingBasketOutlinedIcon sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="دیدن سریع جزئیات" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": {
                                            color: "#fff", backgroundColor: "#000"
                                        }
                                    }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <SearchOutlined sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="مقایسه" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": {
                                            color: "#fff", backgroundColor: "#000"
                                        }
                                    }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <CompareArrowsRoundedIcon sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Box>
                        <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant="subtitle1" sx={{

                                textAlign: "center",
                                transition: "all linear 0.2s",
                                color: "#000", fontSize: "14px", "&:hover": {
                                    color: "tomato"
                                },

                            }}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{
                                textAlign: "center",
                                transition: "all linear 0.2s",
                                color: "grey", fontSize: "14px", "&:hover": {
                                    color: "tomato"
                                },

                            }}

                            >
                                {ChangeNumbersToPersina(price)}
                            </Typography>
                            <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", gap: 2, my: 1 }}>
                                {
                                    colorsOfProduct && colorsOfProduct.map((item, index) => {
                                        return (
                                            <TemplateComponentsForShowColors key={index} color={item} selectPictures={selectPictures} />
                                        )
                                    })
                                }

                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>

            </Box>

        </>
    )
}