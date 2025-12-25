"use client"
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Divider, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ShowTitle({ title, price, description }) {
    return (
        <>
            <Box>
                <Typography variant="h2" sx={{ fontSize: "16px", color: "#000", fontWeight: "bold", py: 1 }}>{title}</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: "16px", color: "#000", py: 1 }}>{ChangeNumbersToPersina(price)}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "grey", py: 1 }}>{description}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "12px", color: "#cecece", py: 2 }}>{ChangeNumberToPersianForPhone(1)}  شخص در حال تماشای  این محصول هست در حال حاضر {<VisibilityIcon sx={{ fontSize: "medium", transform: "translateY(5px)" }} />}</Typography>
                <Divider />
            </Box>

        </>
    )
}