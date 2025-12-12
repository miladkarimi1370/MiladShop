import { Box } from "@mui/material";

export default function ShowBigLogo() {
    return (
        <Box
            component={"img"}
            src="/images/logo.png"
            alt="logo.png"
            sx={{ width: "60px" , height : "60px" }}
        >

        </Box>
    )
}