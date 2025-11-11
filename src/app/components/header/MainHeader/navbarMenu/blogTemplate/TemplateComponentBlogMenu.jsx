"use client";
import { Box, Button, List, ListSubheader, Paper, Popper } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useMenuStore } from "@/store/useMenuStore";
import { useState } from "react";
import { Fade } from "@mui/material";

import TemplateComponentBlogSubMenu from "./TemplateComponentBlogSubMenu";

import TemplateComponentForShowImageOfBlog from "./TemplateComponentForShowImageOfBlog";


export default function TemplateComponentBlogMenu({ myTitle }) {
    const infoBlogs = [
        { id: 1, title: "استایل تابستانی", desHref: "" },
        { id: 2, title: "استایل زمستانی", desHref: "" },
        { id: 3, title: "استایل پائیزه", desHref: "" },
        { id: 4, title: "استایل بهاری", desHref: "" },
        { id: 5, title: "ترکیب هودی و شلوار بگ", desHref: "" },

    ]
    const infoBlogsWithImg = [
        { id: 1, title: "ترکیب رنگ های روشن", myHref: "", imgSrc: "/images/womenPictureForShopMenu.jpg", dayAndMonth: "بیست و دوم مهر", year: "1404" },
        { id: 2, title: "ترکیب رنگ های تیره", myHref: "", imgSrc: "/images/productNavbarImages/boy.jpg", dayAndMonth: "سوم آبان", year: "1404" },
        { id: 3, title: "ترکیب رنگ های پاستیلی", myHref: "", imgSrc: "/images/productNavbarImages/thirdGirl.jpg", dayAndMonth: "هشتم مهر", year: "1404" },

    ]
    const { myAnchorEl, myActiveMenu, myHandleClose, openMenu } = useMenuStore();
    const [state, setState] = useState({
        boxStatus: null,
        popperStatus: null
    })
    const isOpen = myActiveMenu === "blog" && state.boxStatus === true || state.popperStatus === true;
    return (
        <>
            <Box sx={{ cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                onMouseEnter={(e) => {
                    setState(prev => ({ ...prev, boxStatus: true }));
                    openMenu(e.currentTarget, "blog");
                }}
                onMouseLeave={() => {
                    setState(prev => ({ ...prev, boxStatus: false }));
                    myHandleClose();
                }}
            >
                <Button component={"button"} disableRipple sx={{
                    cursor: "pointer",
                    color: "#000",
                    "&:hover": {
                        backgroundColor: "inherit"
                    }

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
                    placement="bottom"
                    modifiers={[{ name: "offset", options: { offset: [0, 6] } },

                    {
                        name: "zIndex",
                        enabled: true,
                        phase: "write",
                        fn: ({ state }) => {
                            state.styles.popper.zIndex = 2000
                        }
                    }]}
                    onMouseEnter={() =>
                        setState(prev => ({ ...prev, popperStatus: true }))
                    }
                    onMouseLeave={() => {
                        setState(prev => ({ ...prev, popperStatus: false }));
                        setTimeout(() => {
                            if (!state.boxStatus) myHandleClose();
                        }, 120);
                    }}
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                            <Paper
                                elevation={1}
                                sx={{
                                    width: { md: "70vw", lg: "50vw", xl: "35vw" },
                                    borderRadius: 2,
                                    minWidth: 150,
                                    mt: 1,
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    height: "60vh",
                                    transform: isOpen ? "translateY(-13px)" : "translateY(-10px)",
                                    transition: "transform .25s ease",
                                    p: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: 2,
                                        alignItems: "center",
                                        width: { md: "100%", lg: "100%", xl: "65%" },
                                        height: "100%"
                                    }}
                                >
                                    <Box sx={{ width: "100%", height: "100%" }}>
                                        <List
                                            subheader={
                                                <ListSubheader sx={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}>
                                                    مد و فشن
                                                </ListSubheader>
                                            }
                                            disablePadding
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "stretch",
                                                alignItems: "center",
                                                flexWrap: "wrap",
                                                height: "100%"
                                            }}
                                        >
                                            {infoBlogs.map(item => (
                                                <TemplateComponentBlogSubMenu
                                                    key={item.id}
                                                    title={item.title}
                                                    href={item.desHref}
                                                />
                                            ))}
                                        </List>
                                    </Box>

                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            gap: 2,
                                            alignContent: "center"
                                        }}
                                    >
                                        {infoBlogsWithImg.map(item => (
                                            <TemplateComponentForShowImageOfBlog
                                                key={item.id}
                                                title={item.title}
                                                myHref={item.myHref}
                                                dayAndMonth={item.dayAndMonth}
                                                srcOfIImg={item.imgSrc}
                                                year={item.year}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Paper>
                        </Fade>
                    )}
                </Popper>

            </Box>
        </>
    )
}