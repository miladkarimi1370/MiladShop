"use client";

import { Box } from "@mui/material";

export default function ShowLogo() {
    return (
        <Box sx={{ width: 150, height: 50 }}>
            <img
                src="/images/logo.png"
                alt="logo"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                }}
            />
        </Box>
    );
}
