"use client"
import { createTheme } from "@mui/material";
import NextLink from "../components/nextLink/NextLink";


const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazirmatn, sans-serif",
    },
    palette: {
        myWhite: {
            main: "#ffff"
        },
        myGrey: {
            main: "#cecece"
        }
    },
    MuiLink: {
        defaultProps: {
            component: NextLink,  // <--- این همه Typography با component={Link} رو فیکس می‌کنه
        },
    },
    MuiButtonBase: {
        defaultProps: {
            LinkComponent: NextLink,  // <--- این برای Button با href رو فیکس می‌کنه
        },
    },
});



export default theme;