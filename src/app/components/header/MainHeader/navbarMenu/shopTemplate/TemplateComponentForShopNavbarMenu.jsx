
"use client";
import { Box, Button, Paper, Popper, Fade } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useState } from "react";

import TemplateComponentForShopSubMenu from "./TemplateComponentForShopSubMenu";
import ShowPictureInShop from "./ShowPictureInShop";
import { useMenuStore } from "@/store/useMenuStore";

export default function TemplateComponentForShopNavbarMenu({ myTitle }) {
    const { myAnchorEl, myActiveMenu, myHandleClose, openMenu } = useMenuStore();
    const [state, setState] = useState({
        boxStatus: false,
        popperStatus: false
    });

    const isOpen = myActiveMenu === "shop" && (state.boxStatus || state.popperStatus);

    const shopInfo = [
        {
            subHeader: "لباس زنانه",
            subSubHeaders: [
                { id: 1, title: "شلوار جین", myHref: "" },
                { id: 2, title: "پیراهن یا شومیز", myHref: "" },
                { id: 3, title: "پالتو", myHref: "" },
                { id: 4, title: "جوراب", myHref: "" },
                { id: 5, title: "کلاه و دستکش", myHref: "" },
                { id: 6, title: "اسکارف", myHref: "" },
                { id: 7, title: "ست اداری", myHref: "" },
                { id: 8, title: "دورس", myHref: "" },
            ]
        },
        {
            subHeader: "لباس مردانه",
            subSubHeaders: [
                { id: 1, title: "شلوار جین", myHref: "" },
                { id: 2, title: "پیراهن", myHref: "" },
                { id: 3, title: "کت و شلوار", myHref: "" },
                { id: 4, title: "جوراب", myHref: "" },
            ]
        },
        {
            subHeader: "لباس بچه گانه",
            subSubHeaders: [
                { id: 1, title: "لباس نوزادی", myHref: "" },
                { id: 2, title: "پیراهن", myHref: "" },
                { id: 3, title: "لوازم سیسمونی", myHref: "" },
                { id: 4, title: "اسباب بازی", myHref: "" },
            ]
        },
    ];

    return (
        <Box
            sx={{ cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
            onMouseEnter={(e) => {
                setState(prev => ({ ...prev, boxStatus: true }));
                openMenu(e.currentTarget, "shop");
            }}
            onMouseLeave={() => {
                setState(prev => ({ ...prev, boxStatus: false }));
                myHandleClose();
            }}
        >
            <Button
                component={"button"}
                disableRipple
                sx={{
                    cursor: "pointer",
                    color: "#000",
                    "&:hover": { backgroundColor: "inherit" }
                }}
            >
                {myTitle}
                <KeyboardArrowDownRoundedIcon
                    sx={{
                        transition: "transform .25s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                />
            </Button>

            <Popper
                open={isOpen}
                anchorEl={myAnchorEl}
                placement="bottom-start"
                transition
                disablePortal
                modifiers={[
                    { name: 'offset', options: { offset: [0, 6] } },
                    {
                        name: "zIndex",
                        enabled: true,
                        phase: "write",
                        fn: ({ state }) => {
                            state.styles.popper.zIndex = 2000;
                        }
                    }
                ]}
                onMouseEnter={() => setState(prev => ({ ...prev, popperStatus: true }))}
                onMouseLeave={() => setState(prev => ({ ...prev, popperStatus: false }))}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={200}>
                        <Paper
                            elevation={1}
                            sx={{
                                width: "100vw",
                                minWidth: 150,
                                borderRadius: 2,

                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "start",
                                height: "auto", // dynamic height
                                p: 1,
                                transform: "translateY(-5px)"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "start",
                                    width: { md: "100%", lg: "100%", xl: "65%" },
                                    gap: 2
                                }}
                            >
                                {/* ستون های منو */}
                                {shopInfo.map((subMenu, index) => (
                                    <TemplateComponentForShopSubMenu
                                        key={index}
                                        mySubHeader={subMenu.subHeader}
                                        mySubSubHeader={subMenu.subSubHeaders}
                                    />
                                ))}

                                {/* تصاویر */}
                                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, alignItems: "center" }}>
                                    <ShowPictureInShop myHref={""} mySrc={"/images/manPictureForShopMenu.jpg"} />
                                    <ShowPictureInShop myHref={""} mySrc={"/images/womenPictureForShopMenu.jpg"} />
                                </Box>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Box>
    );
}
