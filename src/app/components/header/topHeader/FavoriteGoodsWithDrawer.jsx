"use client";
import { Badge, Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useState } from "react";
import { CloseRounded } from "@mui/icons-material";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
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
            <Badge
            color="success"
                badgeContent={ChangeNumberToPersianForPhone(0)}
                showZero
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


