"use client";
import { Box, Button, Fade, List, ListSubheader, Paper, Popper } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useMenuStore } from "@/store/useMenuStore";
import { useState } from "react";
import TemplateComponentPagesSubMenu from "./TemplateComponentPagesSubMenu";


export default function TemplateComponentPagesMenu({ myTitle }) {
    const infoPages = [
        { id: 1, title: "ارتباط با ما", desHref: "" },
        { id: 2, title: "درباره ما", desHref: "" },
        { id: 3, title: "به زودی", desHref: "" },


    ]

    const { myAnchorEl, myActiveMenu, myHandleClose, openMenu } = useMenuStore();
    const [state, setState] = useState({
        boxStatus: null,
        popperStatus: null
    })
    const isOpen = myActiveMenu === "pages" && state.boxStatus === true || state.popperStatus === true;
    return (
        <>
            <Box sx={{ cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                onMouseEnter={(e) => {
                    setState(prev => ({ ...prev, boxStatus: true }));
                    openMenu(e.currentTarget, "pages");
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
                    modifiers={[
                        { name: "offset", options: { offset: [0, 6] } },
                        {
                            name: "zIndex",
                            enabled: true,
                            phase: "write",
                            fn: ({ state }) => {
                                state.styles.popper.zIndex = 2000
                            }
                        }
                    ]}
                    onMouseEnter={() =>
                        setState(prev => ({ ...prev, popperStatus: true }))
                    }
                    onMouseLeave={() =>
                        setState(prev => ({ ...prev, popperStatus: false }))
                    }
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={200}>
                            <Paper

                                onMouseLeave={myHandleClose}

                                sx={{
                                    width: "10vw",
                                    borderRadius: 2,
                                    minWidth: 150,
                                    mt: 1,
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    height: "20vh",
                                    transform: "translateY(-13px)",
                                    p: 1,

                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 2,
                                    alignItems: "center",
                                    width: {
                                        md: "100%", lg: "100%", xl: "65%"
                                    },
                                    height: "100%"
                                }}>

                                    <Box sx={{ width: "100%", height: "100%" }}>
                                        <List


                                            disablePadding sx={{

                                                width: {
                                                    md: "100%"
                                                }, display: "flex", flexDirection: "column", justifyContent: "stretch", alignItems: "center", flexWrap: "wrap", height: "100%"
                                            }}>

                                            {
                                                infoPages.map((item) => {
                                                    return <TemplateComponentPagesSubMenu key={item.id} title={item.title} href={item.desHref} />
                                                })
                                            }

                                        </List>
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