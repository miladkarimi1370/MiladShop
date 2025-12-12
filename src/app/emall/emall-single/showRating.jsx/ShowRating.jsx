import { Box, Rating, Typography } from "@mui/material";

export default function ShowRating({ rate, electedCount }) {
    
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "start", gap: 1, alignItems: "center", width: "100%", height: "5vh" }}>
                <Rating name="read-only" value={rate} readOnly precision={"0.5"}  sx={{color : "#000" }} />
                <Typography variant="subtitle2" sx={{ color: "#000", display: "flex", transform : "translateY(2px)" }}>( {electedCount} )</Typography>
            </Box>
        </>
    )
}