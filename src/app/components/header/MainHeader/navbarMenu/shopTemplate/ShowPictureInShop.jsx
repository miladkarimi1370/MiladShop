"use client"
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
export default function ShowPictureInShop({ myHref, mySrc }) {
    return (
        <>
            <Link href={myHref} passHref>
                <Box component="div"
                    sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        overflow: "hidden",
                        "&:hover": {
                            ":first-of-type": {
                                transform: "scale(1.2)"
                            },

                            transition: "all 0.4s"
                        }
                    }}
                >
                    <Image
                        src={mySrc}
                        alt="manPicture"
                        width={225}
                        height={280}
                    />
                </Box>
            </Link>
        </>
    )
}