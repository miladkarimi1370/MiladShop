"use client"
import { Box } from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

export default function ShowNeedHelp() {
    return (
        <>
            <Box
                sx={{

                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    width: {
                        md: "40%"
                    }
                }}
            >

                <MuiLink
                    component={NextLink}
                    href=""
                    underline="none"
                    color="white"
                    variant="subtitle2"
                    sx={{
                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}

                >
                    کمک لازم دارم
                </MuiLink>
                <PriorityHighIcon
                    sx={{
                        color: "white",
                        marginRight: "0.5rem",
                        padding: "0",
                        "&:hover": {
                            color: "grey",
                            transition: "all 0.4s"
                        }
                    }}
                />
            </Box>
        </>
    )
}