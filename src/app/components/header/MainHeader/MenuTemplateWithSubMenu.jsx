"use client";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Divider, ListItemIcon, ListItemText, MenuItem, Box } from "@mui/material";
import NextLink from "next/link";
import ShowSecondNestedMenuFromHamburgerMenu from './ShowSecondNestedMenuFromHamburgerMenu';
import { useEffect, useRef, useState } from 'react';

export default function MenuTemplateWithSubMenu({ text, myHref, whichPart }) {
    const myAnchor = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (myAnchor.current) setAnchorEl(myAnchor.current);
    }, []);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{ position: "relative" }}
        >
            <MenuItem
                ref={myAnchor}
                disableRipple
                component={NextLink}
                href={myHref}
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBlock: "0px",
                    "&:hover": { backgroundColor: "inherit"  },
                }}
            >
                <ListItemText
                    primary={text}
                    slotProps={{
                        primary: { sx: { fontSize: "14px" } },
                    }}
                />
                <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KeyboardArrowLeftRoundedIcon />
                </ListItemIcon>
            </MenuItem>

            <Divider />

            {anchorEl && (
                <ShowSecondNestedMenuFromHamburgerMenu
                    desAncho={anchorEl}
                    part={whichPart}
                    open={hovered}
                />
            )}
        </Box>
    );
}
