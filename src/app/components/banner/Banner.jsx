"use client"

import theme from "@/app/theme/theme";
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    const downMd = useMediaQuery(theme.breakpoints.down("md"));
    const upMd = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <>
            <Container maxWidth={"lg"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }}>
                <Box sx={{
                    width: "100%",
                    height: downMd ? "50vh" : "20vh",
                    backgroundColor: "#F9F0F1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: downMd ? "wrap" : "nowrap",
                    overflow: "hidden"
                }}>
                    <Box component={"div"} sx={{ order: 1,  width: downMd ? "100%" : "33%", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="h5" sx={{ color: "#000", textAlign: "center", width: "100%" }}>فروش بزرگ</Typography>
                        <Typography variant="subtitle2" sx={{ color: "grey", fontSize: "12px", textAlign: "center", width: "100%" }}>تا {ChangeNumberToPersianForPhone(40)} درصد تخفیف بر روی تمامی آیتم ها تا آخر این هفته</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: downMd ? "100%" : "33%", order: downMd ? 3 : 2 }}>
                        <Image
                            src={"/images/bannerPart/banner-1.jpg"}
                            alt="Big Sale"
                            width={200}
                            height={200}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                    <Box sx={{ width: downMd ? "100%" : "33%", justifyContent: 'center', alignItems: "center", order: downMd ? 2 : 3 }}>
                        <Typography variant="body1" sx={{ fontSize: "30px", textAlign: "center" }}>
                            از{" "}
                            <Typography
                                variant="h3"
                                component="span"
                                sx={{ color: "tomato", fontSize: "30px", display: "inline", fontWeight: "bold" }}
                            >
                                {ChangeNumbersToPersina(400)}
                            </Typography>
                        </Typography>

                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="body1" color="#000" component={Link} href={""} sx={{ borderBottom: "1px solid #000", textAlign: "center" }}>همین الان خرید کنید</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </>
    )
}