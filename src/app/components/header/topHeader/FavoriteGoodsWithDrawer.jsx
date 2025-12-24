"use client";
import { Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
export default function FavoriteGoodsWithDrawer({ color }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }
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
            <Box sx={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    <FavoriteBorderRoundedIcon sx={{ color: "#cecece", fontSize: "100px", width: "100%" }} />
                    <Typography variant="body2" color="#cecece">لیست علاقه مندی های شما خالی است</Typography>
                </Box>
            </Box>

        </Box>
    )
    return (
        <Box component={"span"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
            <FavoriteBorderRoundedIcon
                onClick={toggleDrawer(true)}
                sx={{
                    color:  color , "&:hover": {
                        color: "grey",
                        transition: "all 0.4s"
                    }
                }} />

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {myDrawer}
            </Drawer>
        </Box>
    )
}