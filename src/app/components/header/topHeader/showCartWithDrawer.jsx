"use client";
import { AddShoppingCart, CloseRounded } from "@mui/icons-material";
import { Badge, Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useEffect, useState } from "react";
import { CartProduct } from "@/store/CardProduct";
import ShowListItemOfProduct from "./ShowListItemOfProducts";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";


export default function ShowCartWithDrawer({ color }) {
    const [openCart, setOpenCart] = useState(false);
    const { myBasket, setMyBasket } = CartProduct();
    const [currentProducts, setCurrentProducts] = useState([])
    const [countOfBadge, setCountOfBadge] = useState(0)
    const toggleDrawerForCart = (newOpen) => () => {
        setOpenCart(newOpen);
    }

    const getDataFromLocalStorage = () => {
        const myProducts = JSON.parse(localStorage.getItem("myBasket"));
        return myProducts
    }

    useEffect(() => {
        const products = getDataFromLocalStorage() || [];

        setCurrentProducts(products)


        setCountOfBadge(products.length)

    }, [openCart, myBasket])



    const CartDrawer = (
        <Box
            role="presentation" sx={{
                width: { xs: 400, sm: 400, md: 500 }, height: "100vh",

            }}
        >
            <List >
                <ListItemButton
                    component={"button"}
                    onClick={toggleDrawerForCart(false)}
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
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 1, flexDirection: "column" }}>
                    <Box component="img" src="/images/logo.png" width={70} height={70} />
                    <Typography variant="h2" sx={{ fontSize: "14px", color: "black", fontWeight: "bold" }}>سبد محصولات</Typography>
                </Box>

                {currentProducts.length > 0 ? <ShowListItemOfProduct allProducts={currentProducts} changeallProducts={setCurrentProducts} /> : (
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <ShoppingBasketRoundedIcon sx={{ color: "#cecece", fontSize: "100px", width: "100%" }} />
                        <Typography variant="body2" color="#cecece">سبد خرید شما خالی است</Typography>
                    </Box>
                )}

            </Box>

        </Box>
    )
    return (
        <>
            <Badge color="error" badgeContent={ChangeNumberToPersianForPhone(countOfBadge) ?? ChangeNumberToPersianForPhone(0)}
                showZero={countOfBadge === 0 ? true : false}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <AddShoppingCart
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
                    onClick={toggleDrawerForCart(true)}
                />
            </Badge>
            <Drawer open={openCart} onClose={toggleDrawerForCart(false)} anchor="right" SlideProps={{
                direction: "left"
            }}>
                {CartDrawer}
            </Drawer>
        </>
    )
}