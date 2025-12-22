"use client"
// app/loading.js
import { Box, Container, Skeleton, Grid } from "@mui/material";

export default function Loading() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            {/* اسلایدر اصلی */}
            <Skeleton variant="rectangular" sx={{ borderRadius: 2, mb: 6, height: "60vh" }} />

            {/* پیشنهاد ویژه */}
            <Skeleton variant="text" sx={{ mb: 4, height: "10vh" }} />

            {/* دسته‌بندی‌ها */}
            <Grid container spacing={3} sx={{ mb: 6, height: "10vh" }}>
                {[...Array(6)].map((_, i) => (
                    <Grid item xs={6} sm={4} md={2} key={i}>
                        <Skeleton variant="circular" width={100} height={100} sx={{ mx: "auto" }} />
                        <Skeleton variant="text" sx={{ mt: 1 }} />
                    </Grid>
                ))}
            </Grid>

            {/* محصولات محبوب */}
            <Skeleton variant="text" height={60} sx={{ mb: 4 }} />
            <Grid container spacing={3}>
                {[...Array(8)].map((_, i) => (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                        <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} />
                        <Skeleton variant="text" sx={{ mt: 2 }} />
                        <Skeleton variant="text" width="60%" />
                    </Grid>
                ))}
            </Grid>

            {/* بقیه بخش‌ها هم می‌تونی skeleton بذاری */}
        </Container>
    );
}