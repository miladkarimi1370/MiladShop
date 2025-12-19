import { Skeleton, Box, CircularProgress } from "@mui/material";

export default function MyLoading() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {/* Skeleton کل فضا */}
            <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "100%" }}
            />

            {/* Spinner وسط Skeleton */}
            <CircularProgress
                sx={{ position: "absolute" }}
                color="inherit"
                size={"3rem"}
            />
        </Box>
    )
}
