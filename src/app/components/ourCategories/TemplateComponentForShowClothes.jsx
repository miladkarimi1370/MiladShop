import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import Image from 'next/image';
import Link from 'next/link';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

import { Box, Card, Typography } from "@mui/material";



export default function TemplateComponentForShowClothes({ mySrc, href, title, count }) {
    return (
        <>
      
                <Link href={""} passHref style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ width: "100%", aspectRatio: "1/1", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Card

                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                overflow: "hidden",
                                position: "relative",
                                border: "1px solid #cecece",
                                transition: "transform 0.3s ease-in-out",

                                "&:hover": {
                                    transform: "scale(1.01)",
                                },

                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "rgba(0,0,0,0)",
                                    transition: "background-color 0.3s ease-in-out",
                                },

                                "&:hover::after": {
                                    backgroundColor: "rgba(0,0,0,0.45)",
                                },
                                "&:hover .icon": {
                                    opacity: 1,

                                }
                            }}
                        >
                            <Image
                                src={mySrc}
                                alt={title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes='100%'
                                priority

                            />
                            <EastRoundedIcon
                                className='icon'
                                sx={{ position: "absolute", top: "50%", left: "50%", color: "#fff", transform: "translate(-50% , -50%)", opacity: 0, fontSize: "40px", zIndex: 2 }}
                            />
                        </Card>
                        <Typography variant='subtitle2' sx={{
                            py: 2,
                            transition: "all ease-in-out 0.3s",
                            fontSize: "12px", color: "#grey", "&:hover": {
                                color: "tomato"

                            }
                        }}>{title} ({ChangeNumberToPersianForPhone(count)})</Typography>
                    </Box>
                </Link>
   
        </>
    )
}