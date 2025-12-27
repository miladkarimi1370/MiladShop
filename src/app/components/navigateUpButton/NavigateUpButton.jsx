"use client"
import { Fab } from "@mui/material";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { useEffect, useState } from "react";
export default function NavigateUpButton() {
    const [displayOfFab, setDisplayOfFab] = useState(false);
    const handleClick = () => {
        if (window === undefined) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {


        const handleScroll = () => {
            if (window.scrollY >= 800) {
                setDisplayOfFab(true)
            } else {
                setDisplayOfFab(false)
            }
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <Fab variant="circular" color="primary" size="small" sx={{ position: "fixed", bottom: { xs: "40px", sm: "50px" }, right: { xs: "30px", sm: "40px" , lg : "50px" }, display: displayOfFab ? "block" : "none" }} onClick={() => handleClick()}>
                <KeyboardArrowUpRoundedIcon sx={{ mt: 1 }} />
            </Fab>
        </>
    )
}