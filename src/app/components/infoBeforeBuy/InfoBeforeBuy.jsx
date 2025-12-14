import { Box, Container, Divider, Typography } from "@mui/material";
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

export default function InfoBeforeBuy() {
    return (
        <>
            <Divider
                variant="middle"
                sx={{ display: { xs: "block", md: "none" } }}
            />
            <Container
                maxWidth="xl"
                sx={{ py: 4 }}  // فاصله برابر بالا و پایین
            >
                <Box sx={{
                    width: '100%',
                    display: "flex",
                    justifyContent: { xs: "start", md: "center" },
                    alignItems: "center",
                    flexWrap: { xs: "wrap", md: "nowrap" }
                }}>

                    {/* ارسال رایگان */}
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <ViewInArSharpIcon sx={{
                            display: "flex",
                            alignSelf: "start",
                            fontSize: 50,
                            fontWeight: "lighter",
                            mx: 2,
                            width: { xs: "auto", md: "100%" },
                            transition: "all 0.2s",
                            "&:hover": { color: "grey", transform: "scale(0.9)" }
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", textAlign: { xs: "start", md: "center" }, my: { xs: "auto", md: 1 } }}>
                                ارسال رایگان ، مرجوعی
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: { xs: "start", md: "center" } }}>
                                ارسال رایگان برای تمامی خریدهای بالای {ChangeNumbersToPersina(300)}
                            </Typography>
                        </Box>
                    </Box>

                    {/* پشتیبانی */}
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <SupportAgentRoundedIcon sx={{
                            display: "flex",
                            alignSelf: "start",
                            fontSize: 50,
                            fontWeight: "lighter",
                            mx: 2,
                            width: { xs: "auto", md: "100%" },
                            transition: "all 0.2s",
                            "&:hover": { color: "grey", transform: "scale(0.9)" }
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", textAlign: { xs: "start", md: "center" }, my: { xs: "auto", md: 1 } }}>
                                پشتیبانی {ChangeNumberToPersianForPhone(24)} ساعته
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: { xs: "start", md: "center" } }}>
                                دسترسی آسان به پشتیبانی در هر ساعت از شبانه روز
                            </Typography>
                        </Box>
                    </Box>

                    {/* پرداخت امن */}
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <ShieldOutlinedIcon sx={{
                            display: "flex",
                            alignSelf: "start",
                            fontSize: 50,
                            fontWeight: "lighter",
                            mx: 2,
                            width: { xs: "auto", md: "100%" },
                            transition: "all 0.2s",
                            "&:hover": { color: "grey", transform: "scale(0.9)" }
                        }} />
                        <Box>
                            <Typography sx={{ fontSize: "16px", color: "#000", textAlign: { xs: "start", md: "center" }, my: { xs: "auto", md: 1 } }}>
                                {ChangeNumberToPersianForPhone(100)} % پرداخت امن
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: { xs: "start", md: "center" } }}>
                                پرداخت از طریق درگاه رسمی بانک های کشور
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </>
    )
}
