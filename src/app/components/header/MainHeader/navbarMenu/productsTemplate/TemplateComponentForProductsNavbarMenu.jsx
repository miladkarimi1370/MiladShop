"use client";
import { Box, Button, Paper, Popper } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Fade } from "@mui/material";


import TemplateComponentForProductsSubMenu from "./TemplateComponentForProductsSubMenu";
import ShowProductWithSliderInNavbar from "./ShowProductWithSliderInNavbar";
import { useMenuStore } from "@/store/useMenuStore";
import { useState } from "react";


export default function TemplateComponentForProductsNavbarMenu({ myTitle }) {
    const { myAnchorEl, myActiveMenu, myHandleClose, openMenu } = useMenuStore();
    const [state, setState] = useState({
        boxStatus: null,
        popperStatus: null
    })
    const isOpen = myActiveMenu === "product" && state.boxStatus === true || state.popperStatus === true;
    const ProductsInfo = [
        {
            subHeader: "کالکشن بهاره",
            subSubHeaders: [
                { id: 1, title: "شلوار زنانه نخی", myHref: "" },
                { id: 2, title: "پیراهن نخی زنانه ", myHref: "" },
                { id: 3, title: "لباس راحتی", myHref: "" },
                { id: 4, title: "تاپ و کراپ", myHref: "" },

                { id: 5, title: "تی شرت ", myHref: "" },
                { id: 6, title: "پیراهن نخی", myHref: "" },
                { id: 7, title: "کلاه ورزشی", myHref: "" },
                { id: 8, title: "کفش و کتانی", myHref: "" },


            ]
        },
        {
            subHeader: "کالکشن تابستان",
            subSubHeaders: [
                { id: 1, title: "تی شرت مردانه", myHref: "" },
                { id: 2, title: "تاپ و کراپ زنانه ", myHref: "" },
                { id: 3, title: "مانتو نخی زنانه", myHref: "" },
                { id: 4, title: "اسکارف", myHref: "" },
            ]
        },
        {
            subHeader: "کالکشن زمستان",
            subSubHeaders: [
                { id: 1, title: "کاپشن مردانه", myHref: "" },
                { id: 2, title: "پالتو زنانه ", myHref: "" },
                { id: 3, title: "کاپشن زنانه", myHref: "" },
                { id: 4, title: "کلاه و دستکش چرمی", myHref: "" },
            ]
        },
    ]

    return (
        <>
            <Box sx={{ cursor: "pointer", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}

                onMouseEnter={(e) => {
                    setState(prev => ({ ...prev, boxStatus: true }));
                    openMenu(e.currentTarget, "product");
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
                    modifiers={[{ name: "offset", options: { offset: [0, 6] } },
                
                    {
                        name: "zIndex",
                        enabled: true,
                        phase: "write",
                        fn: ({ state }) => {
                            state.styles.popper.zIndex = 2000
                        }
                    }
                    ]}
                    onMouseEnter={() => setState(prev => ({ ...prev, popperStatus: true }))}
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
                                    width: "100vw",
                                    borderRadius: 2,
                                    minWidth: 150,
                                    mt: 1,
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    height: "45vh",
                                    transform: isOpen ? "translateY(-13px)" : "translateY(-10px)",
                                    transition: "transform .25s ease",
                                    p: 1
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        alignItems: "start",
                                        width: {
                                            md: "100%", lg: "100%", xl: "65%"
                                        },
                                    }}
                                >
                                    <TemplateComponentForProductsSubMenu mySubHeader={ProductsInfo[0].subHeader} mySubSubHeader={ProductsInfo[0].subSubHeaders} />
                                    <TemplateComponentForProductsSubMenu mySubHeader={ProductsInfo[1].subHeader} mySubSubHeader={ProductsInfo[1].subSubHeaders} />
                                    <TemplateComponentForProductsSubMenu mySubHeader={ProductsInfo[2].subHeader} mySubSubHeader={ProductsInfo[2].subSubHeaders} />

                                    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, alignItems: "center", height: '100%' }}>
                                        <ShowProductWithSliderInNavbar />
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