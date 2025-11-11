import { Box } from "@mui/material";

export default function ShowLogo() {
    return (
        <Box
            component={"img"}
            src={"images/logo.png"}
            alt="logo.jpg"
            sx={{
                height: "80%",

            }}
        />
    )
}