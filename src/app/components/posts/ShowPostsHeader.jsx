"use client"
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function ShowPostsHeader() {
    return (
        <>
            <Box sx={{ width: "100%", height: "5vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h6" sx={{ color: "#000", fontWeight: "light" }}>پست ها</Typography>
                <Typography component={Link} href={""} variant="subtitle2" sx={{
                    transition: "all ease-in-out 0.3s",
                    borderBottom: "1px solid #000", "&:hover": {
                        borderBottom: "none",
                        color: "tomato"
                    }
                }}>دیدن همه</Typography>
            </Box>
        </>
    )
}