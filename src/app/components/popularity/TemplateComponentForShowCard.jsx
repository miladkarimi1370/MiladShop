"use client"

import { FavoriteBorderRounded, SearchOutlined } from "@mui/icons-material";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import { Box, Card, CardActionArea, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import ColorsForProducts from "./ColorsForProducts";
import { useState } from "react";

export default function TemplateComponentForShowCard({ id, title, src, price, colorsOfProduct }) {
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

    const router = useRouter();

    return (
        <Box sx={{
            width: { xs: "48%", sm: "33%", md: "25%" },
            height: "100%",
            my: 1,
            p: { xs: 0, xl: 1 }
        }}>
            <Card component={Link} href={`/emallSingle/${id}`} sx={{ textDecoration: "none", color: "inherit", position: "relative", width: "100%" }}>
                <CardActionArea
                    disableRipple
                    component="div"
                    sx={{
                        "&:hover": { backgroundColor: "transparent !important" },
                        "& .MuiCardActionArea-focusHighlight": { backgroundColor: "transparent" }
                    }}
                >
                    <Box sx={{ position: "relative"  }}>
                        <CardMedia
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                            component="img"
                            key={id}
                            image={src[currentIndex].image_url}
                            alt={title}
                            sx={{ objectFit: "cover", transition: "all 0.3s ease"  }}
                        />

                        {/* آیکون‌ها */}
                        <Box sx={{

                            position: "absolute",
                            top: "10%",
                            left: "4%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 1
                        }}>
                            {[
                                { icon: <FavoriteBorderRounded sx={{ transform: "scale(0.5)" }} />, title: "اضافه کردن به علاقمندی ها", onClick: e => e.stopPropagation() },
                                { icon: <ShoppingBasketOutlinedIcon sx={{ transform: "scale(0.5)" }} />, title: "دیدن جزئیات", onClick: e => { e.preventDefault(); e.stopPropagation(); router.push("/basket"); } },
                                { icon: <SearchOutlined sx={{ transform: "scale(0.5)" }} />, title: "دیدن سریع جزئیات", onClick: e => e.stopPropagation() },
                                { icon: <CompareArrowsRoundedIcon sx={{ transform: "scale(0.5)" }} />, title: "مقایسه", onClick: e => e.stopPropagation() },
                            ].map((item, idx) => (
                                <Tooltip key={idx} title={item.title} placement="left-start">
                                    <IconButton
                                        size="small"
                                        sx={{
                                            backgroundColor: "#fff",
                                            color: "grey",
                                            "&:hover": { color: "#fff", backgroundColor: "#000" }
                                        }}
                                        onClick={item.onClick}
                                    >
                                        {item.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>

                    {/* متن و رنگ‌ها */}
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"  }}>
                        <Typography variant="subtitle1" sx={{
                            textAlign: "center",
                            transition: "all linear 0.2s",
                            color: "#000",
                            fontSize: { xs: "12px", sm: "12px", md: "14px" },
                            width: "80%",
                            my: 1,
                            "&:hover": { color: "tomato" }
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{
                            textAlign: "center",
                            transition: "all linear 0.2s",
                            color: "grey",
                            fontSize: "14px",
                            "&:hover": { color: "tomato" }
                        }}>
                            {ChangeNumbersToPersina(price)}
                        </Typography>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 2, my: 1 }}>
                            {colorsOfProduct && colorsOfProduct.map((item, index) => (
                                <ColorsForProducts key={index} color={item} selectPictures={selectPictures} />
                            ))}
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </Box>
    )
}
