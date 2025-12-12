"use client";
import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
export default function BreadCrumbsComponents({ arrayOfPath }) {
    function handleClick(event) {
        event.preventDefault();

    }
    const breadcrumbs = [

        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
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
                صفحه اصلی
            </Box>
        </Link>,
        <Typography key="2" sx={{ color: 'text.primary', fontSize: "14px" }}>
            فروشگاه
        </Typography>,
        <Typography key="2" sx={{ color: 'text.primary', fontSize: "14px" }}>
            لباس بانوان
        </Typography>,
        <Typography key="2" sx={{ color: 'text.primary', fontSize: "14px" }}>
            دورس
        </Typography>,
    ]
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