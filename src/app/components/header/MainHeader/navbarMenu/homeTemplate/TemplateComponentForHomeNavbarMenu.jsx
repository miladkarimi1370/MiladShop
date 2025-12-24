"use client"
import { Box, Button, Fade, List, Paper, Popper } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


import TemplateComponentForSubMenuInNavbarMenu from "./TemplateComponentForHomeSubMenuInNavbarMenu";
import { useMenuStore } from "@/store/useMenuStore";
import { useState } from "react";







export default function TemplateComponentForHomeNavbarMenu({ myTitle }) {
    const { myAnchorEl, myActiveMenu, myHandleClose, openMenu } = useMenuStore();
    const [state, setState] = useState({
        boxStatus: null,
        popperStatus: null
    })



    const isOpen = myActiveMenu === "home" && state.boxStatus === true || state.popperStatus === true;

    const HomeMenuNavbar = [
        { id: 1, title: "منوی شماره 1", desHref: "" },
        { id: 2, title: "منوی شماره 2", desHref: "" },
        { id: 3, title: "منوی شماره 3", desHref: "" },
        { id: 4, title: "منوی شماره 4", desHref: "" },
        { id: 5, title: "منوی شماره 5", desHref: "" },
        { id: 6, title: "منوی شماره 6", desHref: "" },
        { id: 7, title: "منوی شماره 7", desHref: "" },
        { id: 8, title: "منوی شماره 8", desHref: "" },
        { id: 9, title: "منوی شماره 9", desHref: "" },
        { id: 10, title: " منوی شماره10", desHref: "" },
        { id: 11, title: "منوی شماره11", desHref: "" },
        { id: 12, title: "منوی شماره12", desHref: "" },
        { id: 13, title: "منوی شماره13", desHref: "" },
        { id: 14, title: "منوی شماره14", desHref: "" },
        { id: 15, title: "منوی شماره15", desHref: "" },
        { id: 16, title: "منوی شماره16", desHref: "" },
        { id: 17, title: "منوی شماره17", desHref: "" },
        { id: 18, title: "منوی شماره18", desHref: "" },
        { id: 19, title: "منوی شماره19", desHref: "" },
        { id: 20, title: "منوی شماره20", desHref: "" },
        { id: 21, title: "منوی شماره21", desHref: "" },
        { id: 22, title: "منوی شماره22", desHref: "" },
        { id: 23, title: "منوی شماره23", desHref: "" },
        { id: 24, title: "منوی شماره24", desHref: "" },
        { id: 25, title: "منوی شماره25", desHref: "" },
        { id: 26, title: "منوی شماره26", desHref: "" },
        { id: 27, title: "منوی شماره27", desHref: "" },
        { id: 28, title: "منوی شماره28", desHref: "" },
        { id: 29, title: "منوی شماره29", desHref: "" },
        { id: 30, title: "منوی شماره30", desHref: "" },
        { id: 31, title: "منوی شماره31", desHref: "" },

    ]

    return (
        <>
            <Box sx={{ cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}

                onMouseEnter={(e) => {
                    setState(prev => ({ ...prev, boxStatus: true }));
                    openMenu(e.currentTarget, "home");
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
                    placement="bottom-start"
                    modifiers={[
                        { name: "offset", options: { offset: [0, 6] } },
                        {
                            name: "zIndex",
                            enabled: true,
                            phase : "write" ,
                            fn : ({state}) => {
                                state.styles.popper.zIndex = 2000
                            }
                        }
                    ]}
                    transition

                    onMouseEnter={() =>
                        setState(prev => ({ ...prev, popperStatus: true }))
                    }
                    onMouseLeave={() =>
                        setState(prev => ({ ...prev, popperStatus: false }))
                    }


                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                            <Paper
                                elevation={1}


                                sx={{
                                    width: "100vw",
                                    borderRadius: 2,
                                    minWidth: 150,
                                    mt: 1,
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    height: "400px",
                                    transform: "translateY(-13px)",
                                    p: 2,
                                    
                                }}
                            >
                                <List disablePadding sx={{
                                    width: {
                                        md: "100%", lg: "100%", xl: "65%"
                                    }, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", height: "100%"
                                }}>
                                    {HomeMenuNavbar.map((item) => {
                                        return (
                                            <TemplateComponentForSubMenuInNavbarMenu key={item.id} text={item.title} myHref={item.desHref} />
                                        )
                                    })}
                                    {/* این قسمت خانه منوی ناوبری بود باید بقیه موارد رو هم پیاده کرد */}

                                </List>
                            </Paper>
                        </Fade>
                    )}


                </Popper>
            </Box >
        </>
    )
}