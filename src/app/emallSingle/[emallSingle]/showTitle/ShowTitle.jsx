"use client"
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Divider, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ShowTitle() {
    return (
        <>
            <Box>
                <Typography variant="h2" sx={{ fontSize: "16px", color: "#000", fontWeight: "bold", py: 1 }}>شال صورتی زنانه مدل گوچی</Typography>
                <Typography variant="subtitle1" sx={{ fontSize: "16px", color: "#000", py: 1 }}>{ChangeNumbersToPersina(790000)}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "grey", py: 1 }}>جنس کت کرپ درجه یک میباشد. جلوی لباس لایه کشی شده دارای دکمه و جیب کاربردی و سرشانه اپل دار می باشد. سایزبندی فری سایز و مناسب برای</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: "12px", color: "#cecece", py: 2 }}>{ChangeNumberToPersianForPhone(1)}  شخص در حال تماشای  این محصول هست در حال حاضر {<VisibilityIcon sx={{ fontSize: "medium", transform: "translateY(5px)" }} />}</Typography>
                <Divider />
            </Box>

        </>
    )
}