"use client";
import { Box, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import theme from "@/app/theme/theme";

export default function InfoBeforeBuy() {
    const mdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Divider variant="middle" sx={{ display: !mdUp ? "block" : "none" }} />
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: '100%', display: "flex", justifyContent: !mdUp ? "start" : "center", alignItems: "center", flexWrap: !mdUp ? "wrap" : "nowrap" }}>
                    <Box component={'div'} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <ViewInArSharpIcon sx={{
                            display: "flex", alignSelf: "start", fontSize: 50, fontWeight: "lighter", mx: 2, width: !mdUp ? "auto" : "100%", transition: "all 0.2s", "&:hover": {
                                color: "grey", transform: "scale(0.9)"
                            }
                        }} />
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000", textAlign: !mdUp ? "start" : "center", my: !mdUp ? "auto" : 1 }} >ارسال رایگان ، مرجوعی</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: !mdUp ? "start" : "center" }}>ارسال رایگان برای تمامی  خریدهای بالای {ChangeNumbersToPersina(300)}</Typography>
                        </Box>
                    </Box>
                    <Box component={'div'} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <SupportAgentRoundedIcon sx={{
                            display: "flex", alignSelf: "start", fontSize: 50, fontWeight: "lighter", mx: 2, width: !mdUp ? "auto" : "100%", transition: "all 0.2s", "&:hover": {
                                color: "grey", transform: "scale(0.9)"
                            }
                        }} />
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000", textAlign: !mdUp ? "start" : "center", my: !mdUp ? "auto" : 1 }} >پشتیبانی {ChangeNumberToPersianForPhone(24)} ساعته</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: !mdUp ? "start" : "center" }}>دسترسی آسان به پشتیبانی در هر ساعت از شبانه روز</Typography>
                        </Box>
                    </Box>
                    <Box component={'div'} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, flexWrap: "wrap" }}>
                        <ShieldOutlinedIcon sx={{
                            display: "flex", alignSelf: "start", fontSize: 50, fontWeight: "lighter", mx: 2, width: !mdUp ? "auto" : "100%", transition: "all 0.2s", "&:hover": {
                                color: "grey", transform: "scale(0.9)"
                            }
                        }} />
                        <Box>
                            <Typography variant="h3" sx={{ fontSize: "16px", color: "#000", textAlign: !mdUp ? "start" : "center", my: !mdUp ? "auto" : 1 }} >{ChangeNumberToPersianForPhone(100)} % پرداخت امن</Typography>
                            <Typography variant="subtitle2" sx={{ fontSize: "14px", color: "grey", fontWeight: 200, textAlign: !mdUp ? "start" : "center" }}>پرداخت از طریق درگاه رسمی بانک های کشور</Typography>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </>
    )
}