"use client";
import { Badge, Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useEffect, useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { FavoriteProducts } from "@/store/FavoriteProducts";
import ShowListItemOfFavoriteProducts from "./ShowListItemOfFavoriteProducts";
export default function FavoriteGoodsWithDrawer({ color }) {
    const [open, setOpen] = useState(false);
    const [currentFavoriteProducts, setCurrentFavoriteProducts] = useState([])
    const [countOfBadge, setCountOfBadge] = useState(0);
    const { myFavoriteProducts, setMyFavoriteProducts } = FavoriteProducts();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const getDataFromLocalStorage = () => {
        const myFav = JSON.parse(localStorage.getItem("myF"));
        return myFav;
    }
    useEffect(() => {
        const myFavoriteProducts = getDataFromLocalStorage() || [];
        setCurrentFavoriteProducts(myFavoriteProducts);
        setCountOfBadge(myFavoriteProducts.length);

    }, [open, myFavoriteProducts])

    const myDrawer = (
        <Box
            role="presentation" sx={{
                width: 400, height: "100vh",

            }}
        >
            <List >
                <ListItemButton
                    component={"button"}
                    onClick={toggleDrawer(false)}
                    sx={{

                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                >
                    <ListItemIcon>
                        <CloseRounded />
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <Box sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 1, flexDirection: "column" , width : "100%" }}>
                    <Box component="img" src="/images/logo.png" width={70} height={70} />
                    <Typography variant="h2" sx={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>لیست علاقمندی ها</Typography>
                </Box>
                {currentFavoriteProducts.length > 0 ? <ShowListItemOfFavoriteProducts allProducts={currentFavoriteProducts} changeallProducts={setCurrentFavoriteProducts} /> : (
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <FavoriteBorderRoundedIcon sx={{ color: "#cecece", fontSize: "100px", width: "100%" }} />
                        <Typography variant="body2" color="#cecece">لیست علاقه مندی های شما خالی است</Typography>
                    </Box>
                )}

            </Box>

        </Box>
    )
    return (
        <Box component={"span"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <Badge
                color="success"
                badgeContent={ChangeNumberToPersianForPhone(countOfBadge)}
                showZero={countOfBadge === 0 ? true : false}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <FavoriteBorderRoundedIcon
                    sx={{
                        color: color,
                        marginInline: "0.5rem",
                        fontSize: "23px",

                        "&:hover": {
                            color: "grey",
                            cursor: "pointer",
                            transition: "all 0.4s"
                        }
                    }}
                    onClick={toggleDrawer(true)}
                />
            </Badge>

            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right" SlideProps={{
                direction: "left"
            }}>
                {myDrawer}
            </Drawer>
        </Box>
    )
}


