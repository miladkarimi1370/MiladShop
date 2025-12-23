"use client"
import { FavoriteBorderRounded, SearchOutlined } from "@mui/icons-material";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import { Box, Card, CardActionArea, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { useState } from "react";

export default function TemplateComponentForShowCardSingle({ title, href, src, price }) {

    
    const [isHover, setIsHover] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const currentIndex = isHover
        ? 1 // وقتی موس روی کارت هست
        : selectedIndex !== null
            ? selectedIndex // اگر قبلاً انتخاب شده
            : 0; // حالت پیش‌فرض

    const router = useRouter();

    return (
        <>
            <Box sx={{
                width: { xs: "48%", sm: "48%", md: "33%", lg: "33%" },
                height: "100%",
                my: 1,
                p: { xl: 1, default: 0 }
            }}>
                <Card component={Link} href={href} sx={{ textDecoration: "none", color: "inherit", position: "relative", width: "100%" }}>
                    <CardActionArea
                        disableRipple
                        component={"div"}
                        sx={{
                            "&:hover": { backgroundColor: "transparent !important" },
                            "& .MuiCardActionArea-focusHighlight": { backgroundColor: "transparent" }
                        }}
                    >
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
                                        backgroundColor: "#fff", color: "grey", "&:hover": { color: "#fff", backgroundColor: "#000" }
                                    }} onClick={(e) => e.stopPropagation()}>
                                        <FavoriteBorderRounded sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="دیدن جزئیات" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": { color: "#fff", backgroundColor: "#000" }
                                    }} onClick={(e) => { e.preventDefault(); e.stopPropagation(); router.push("/basket"); }}>
                                        <ShoppingBasketOutlinedIcon sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="دیدن سریع جزئیات" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": { color: "#fff", backgroundColor: "#000" }
                                    }} onClick={(e) => e.stopPropagation()}>
                                        <SearchOutlined sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="مقایسه" placement="left-start">
                                    <IconButton size="small" sx={{
                                        backgroundColor: "#fff", color: "grey", "&:hover": { color: "#fff", backgroundColor: "#000" }
                                    }} onClick={(e) => e.stopPropagation()}>
                                        <CompareArrowsRoundedIcon sx={{ transform: "scale(0.7)" }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box sx={{ width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant="subtitle1" sx={{
                                textAlign: "center",
                                transition: "all linear 0.2s",
                                color: "#000", fontSize: "14px", "&:hover": { color: "tomato" }
                            }}>
                                {title}
                            </Typography>
                            <Typography variant="subtitle2" sx={{
                                textAlign: "center",
                                transition: "all linear 0.2s",
                                color: "grey", fontSize: "14px", "&:hover": { color: "tomato" }
                            }}>
                                {ChangeNumbersToPersina(price)}
                            </Typography>
                        </Box>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    )
}
