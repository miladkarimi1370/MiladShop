"use client";
import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function BreadCrumbsComponents({ arrayOfPath }) {


    const breadcrumbs = arrayOfPath.map((item) => {
        return (
            <Link underline="hover" key={item.id} color="inherit" href={item.myHref} >
                <Box
                    sx={{
                        fontSize: "14px",
                        p: 1.5,
                        transition: "all .3s",
                        "&:hover": {
                            transform: "scale(1.05)",
                            color: "red",
                        },
                    }}
                >
                    {item.name}
                </Box>
            </Link>
        )
    })

    return (
        <>
            <Stack spacing={2} sx={{ width: "100%" }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>


            </Stack>
        </>
    )
}