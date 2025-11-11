"use client"
import { Box, Button, Divider, Popper, styled } from "@mui/material";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useRef, useState } from "react";
import ShowSubMenuFromHamburgerMenuIcon from "./ShowSubMenuFromHamburgerMenuIcon";

export default function ShowHamburgerMenuIconWithTitle() {
    const [open, setOpen] = useState(false);
    const ancherRef = useRef(null)

    const NoHoverButton = styled(Button)(({ theme }) => ({
        "&:hover": {
            backgroundColor: "inherit"
        },
        color: "black",

    }))
    return (
        <>
            <Divider orientation="vertical" />
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", cursor: "pointer" }}
                ref={ancherRef}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >

                <MenuRoundedIcon sx={{
                    boxSizing: "content-box",

                    p: {
                        xs: 1,

                    },

                }} />
                <NoHoverButton sx={{
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block"
                    },
                }}>
                    منوی ناوبری
                </NoHoverButton>
                {!open ?
                    <ExpandMoreRoundedIcon sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "none",
                            lg: "block"
                        },
                        transition: "all 0.2s"
                    }} />
                    :
                    <ExpandLessRoundedIcon sx={{
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "none",
                            lg: "block"
                        },
                        transition: "all 0.2s"
                    }} />
                }


                <Popper open={open} anchorEl={ancherRef.current}
                    modifiers={[
                        { name: "offset", options: { offset: [0, 6] } },
                        {
                            name: "zIndex",
                            enabled: true,
                            phase: "write",
                            fn: ({ state }) => {
                                state.styles.popper.zIndex = 2000;
                            }
                        }
                    ]}
                    placement="bottom-start"

                >
                    <ShowSubMenuFromHamburgerMenuIcon />
                </Popper>
            </Box >
            <Divider orientation="vertical" flexItem />


        </>
    )
}