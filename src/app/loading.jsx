"use client";
import { Box, Skeleton, Container } from "@mui/material";

export default function Loading() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>

            {/* اسلایدر */}
            <Box sx={{ width: "100%", height: { xs: 310, md: 420, lg: 520, xl: 600 }, mb: 4, position: "relative" }}>
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{ borderRadius: 3 }}
                />
            </Box>

            {/* سه مربع بخش OfferForSale */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "space-between" }, flexWrap: "wrap" }}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        variant="rectangular"
                        width={{ xs: "30vw", sm: "32%", md: "32%" }}
                        height={200}
                        animation="wave"
                        sx={{ borderRadius: 2 }}
                    />
                ))}
            </Box>
        </Container>
    );
}
