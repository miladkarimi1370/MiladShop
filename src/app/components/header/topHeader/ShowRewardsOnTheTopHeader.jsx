"use client";
import ChangeNumbersToPersina from "@/tools/changeNumbersToPersian";
import { Typography } from "@mui/material";
export default function ShowRewardsOnTheTopHeader() {
    return (
        <>
            <Typography variant="subtitle2" color="white" sx={{
                display: "flex",
                Width: {
                    md: "100%"
                },

            }}>هزینه بازگشت رایگان ، با خرید بالای {ChangeNumbersToPersina(400)} از ارسال رایگان به سراسر ایران بهرهمند شوید </Typography>
        </>
    )
}