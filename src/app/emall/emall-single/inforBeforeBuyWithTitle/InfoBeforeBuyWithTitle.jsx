"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

export default function InfoBeforeBuyWithTitle() {
    return (
        <>
            <Divider variant="middle" sx={{ display: { xs: "block", md: "none" } }} />

            <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
                {/* ===== Title ===== */}
                <Typography
                    variant="h2"
                    sx={{
                        color: "#000",
                        fontSize: "25px",
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 4
                    }}
                >
                    چرا فروشگاه آنلاین میلاد شاپ
                </Typography>

                {/* ===== Items ===== */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "stretch",
                        flexWrap: { xs: "wrap", md: "nowrap" }
                    }}
                >
                    {/* آیتم ۱ */}
                    <Box sx={{ flex: 1, display: "flex", p: 2 }}>
                        <ViewInArSharpIcon
                            sx={{
                                fontSize: 50,
                                mx: 2,
                                transition: "all 0.2s",
                                "&:hover": {
                                    color: "grey",
                                    transform: "scale(0.9)"
                                }
                            }}
                        />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", mb: 1 }}>
                                ارسال رایگان ، مرجوعی
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200 }}>
                                ارسال رایگان برای تمامی خریدهای بالای {ChangeNumbersToPersina(300)}
                            </Typography>
                        </Box>
                    </Box>

                    {/* آیتم ۲ */}
                    <Box sx={{ flex: 1, display: "flex", p: 2 }}>
                        <SupportAgentRoundedIcon
                            sx={{
                                fontSize: 50,
                                mx: 2,
                                transition: "all 0.2s",
                                "&:hover": {
                                    color: "grey",
                                    transform: "scale(0.9)"
                                }
                            }}
                        />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", mb: 1 }}>
                                پشتیبانی {ChangeNumberToPersianForPhone(24)} ساعته
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200 }}>
                                دسترسی آسان به پشتیبانی در هر ساعت از شبانه روز
                            </Typography>
                        </Box>
                    </Box>

                    {/* آیتم ۳ */}
                    <Box sx={{ flex: 1, display: "flex", p: 2 }}>
                        <ShieldOutlinedIcon
                            sx={{
                                fontSize: 50,
                                mx: 2,
                                transition: "all 0.2s",
                                "&:hover": {
                                    color: "grey",
                                    transform: "scale(0.9)"
                                }
                            }}
                        />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", mb: 1 }}>
                                {ChangeNumberToPersianForPhone(100)}٪ پرداخت امن
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200 }}>
                                پرداخت از طریق درگاه رسمی بانک‌های کشور
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
