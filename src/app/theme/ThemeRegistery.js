"use client";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import theme from "@/app/theme/theme";

const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function ThemeRegistry({ children }) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
