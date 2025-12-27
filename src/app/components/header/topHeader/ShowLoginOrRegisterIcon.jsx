"use client";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box } from "@mui/material";
import NextLink from "next/link";

export default function ShowLoginOrRegisterIcon({ color }) {
    return (
        <>
            <Box
                component={NextLink} sx={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", m: 1 }}
                href={"/login"}
            >
                <PersonOutlineOutlinedIcon

                    sx={{
                        fontSize: "26px",
                        color: { color }, "&:hover": {
                            color: "tomato",
                            transition: "all 0.4s"
                        }
                    }}
                />
            </Box>
        </>
    )
}