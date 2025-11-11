"use client";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import ShowDeadLinesTimer from "./ShowDeadLinesTimer";
import Link from "next/link";
import Image from "next/image";
import theme from "@/app/theme/theme";

export default function DeadLine() {
    const mdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Box sx={{ width: "100%", backgroundColor: "#E8E6DA" }}>
                <Container sx={{ width: "100%" }}>
                    <Box sx={{ width: "100%", position: "relative", display: "flex", justifyContent: !mdUp ? "center" : "space-evenly", alignItems: "center", flexDirection: !mdUp ? "column" : "row"  }}>
                        <Box>
                            <Typography variant="h3" sx={{ color: "#000", fontSize: "24px", textAlign: "center", fontWeight: "bolder", my: 2 }}>{ChangeNumberToPersianForPhone(20)} روز تا شروع فروش بزرگ</Typography>
                            <Typography variant="subtitle2" sx={{ color: "grey", fontSize: "14px", textAlign: "center" }}>تا {ChangeNumberToPersianForPhone(70)} % تخفیف برای شما</Typography>
                            <Box sx={{ my: 2 }}>
                                <ShowDeadLinesTimer />
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 2 }}>
                                <Link href={""} passHref>
                                    <Button variant="contained" sx={{
                                        transition: "all 0.3s",
                                        backgroundColor: "#000", "&:hover": {
                                            backgroundColor: "tomato"
                                        }
                                    }} size="medium">
                                        برای اطلاع از جزئیات کلیک کنید
                                    </Button>
                                </Link>
                            </Box>
                        </Box>



                        <Image
                            src={"/images/deadLine/deadline.png"}
                            alt="deadline"
                            width={400}
                            height={300}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                </Container>
            </Box>
        </>
    )
}