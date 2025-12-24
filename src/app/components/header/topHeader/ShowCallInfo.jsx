"use client";
import Link from "next/link";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import Typography from '@mui/material/Typography'
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box } from "@mui/material";


export default function ShowCallInfo() {
    return (

        <Link
            href={"tel:+989123456789"}
            underline="none"
        
        >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", "&:hover .child1": { color: "tomato" }, "&:hover .child2": { color: "tomato" } }}>
                <Typography variant="caption" color="#000" className="child1" sx={{
                    direction: "ltr", fontSize: "14px"
                    , transition: "all 0.4s",
                    fontWeight: "bold"
                }}

                >

                    {ChangeNumberToPersianForPhone("989122223420")}+
                </Typography>
                <PhoneRoundedIcon sx={{
                    color: "#000", transition: "all 0.4s"
                }} fontSize="small" className="child2" />

            </Box>


        </Link>

    )
}