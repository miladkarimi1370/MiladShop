"use client";
import { Box, Skeleton, CircularProgress, Container } from "@mui/material";

export default function Loading() {
    return (
        <Container maxWidth={"md"}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 2,
                    py: 2,
                }}
            >
                {Array.from({ length: 18 }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 220,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        {/* تصویر کارت */}
                        <Box sx={{ position: "relative" }}>
                            <Skeleton
                                variant="rectangular"
                                height={260}
                                animation="wave"
                                sx={{ borderRadius: 2 }}
                            />

                            {/* spinner وسط کارت */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <CircularProgress size={28} />
                            </Box>
                        </Box>

                        {/* عنوان */}
                        <Skeleton height={24} />

                        {/* قیمت */}
                        <Skeleton width="60%" height={24} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
}
