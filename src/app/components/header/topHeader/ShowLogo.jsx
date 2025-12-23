"use client";

import { Box } from "@mui/material";

export default function ShowLogo() {
    return (
        <Box sx={{ width: 150, height: 50 , display : "flex" , justifyContent : "center" , alignItems : "center" }}>
            <img
                src="/images/logo.png"
                alt="logo"
                style={{
                    width: "150px",
                    height: "47px",
                    objectFit: "contain",
                    display: "block",
                }}
            />
        </Box>
    );
}
