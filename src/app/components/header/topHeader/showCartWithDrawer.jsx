"use client";
import { AddShoppingCart, CloseRounded } from "@mui/icons-material";
import { Badge, Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useState } from "react";

export default function ShowCartWithDrawer({ color }) {
    const [openCart, setOpenCart] = useState(false);
    const toggleDrawerForCart = (newOpen) => () => {
        setOpenCart(newOpen);
    }

    const CartDrawer = (
        <Box
            role="presentation" sx={{
                width: 400, height: "100vh",
       
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
            <Box sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <ShoppingBasketRoundedIcon sx={{ color: "#cecece", fontSize: "100px", width: "100%" }} />
                    <Typography variant="body2" color="#cecece">سبد خرید شما خالی است</Typography>
                </Box>
            </Box>

        </Box>
    )
    return (
        <>
            <Badge color="error" badgeContent={0}
                showZero
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <AddShoppingCart
                    sx={{
                        color:  color ,
                        marginInline: "0.5rem",
                        fontSize : "23px" ,
                 
                        "&:hover": {
                            color: "grey",
                            cursor: "pointer",
                            transition: "all 0.4s"
                        }
                    }}
                    onClick={toggleDrawerForCart(true)}
                />
            </Badge>
            <Drawer open={openCart} onClose={toggleDrawerForCart(false)}>
                {CartDrawer}
            </Drawer>
        </>
    )
}