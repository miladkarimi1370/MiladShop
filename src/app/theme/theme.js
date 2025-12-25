
import { createTheme } from "@mui/material";
import NextLink from "../components/nextLink/NextLink";

const theme = createTheme({
    direction: "rtl",

    typography: {
        fontFamily: "Vazirmatn, sans-serif",
    },

    palette: {
        // رنگ‌ های سفارشی را اینطوری اضافه کن
        myWhite: { main: "#ffffff" },
        myGrey: { main: "#cecece" },
    },

    components: {
        MuiLink: {
            defaultProps: {
                component: NextLink,
            },
        },

        MuiButtonBase: {
            defaultProps: {
                LinkComponent: NextLink,
            },
        },
    },
});

export default theme;
