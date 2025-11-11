"use client"
import { createTheme } from "@mui/material";


const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazirmatn, sans-serif",
    },
    palette: {
        myWhite: {
            main: "#ffff"
        }
    }
});



export default theme;