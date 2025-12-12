import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import OpacityIcon from '@mui/icons-material/Opacity';
import MotionPhotosOffSharpIcon from '@mui/icons-material/MotionPhotosOffSharp';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import theme from "@/app/theme/theme";

export default function Descriptions() {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ width: "100%", px: 2 }}>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: mdDown ? "column" : "row",
                    gap: 4,
                    py: 4,
                    alignItems: "flex-start",
                }}
            >

                {/* ستون چپ */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        width: mdDown ? "100%" : "50%",
                    }}
                >
                    {/* جزئیات + جنس محصول + پوشش */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: mdDown ? "column" : "row",
                            gap: 4,
                        }}
                    >
                        {/* جزئیات */}
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                جزئیات
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "grey" }}>
                                <Typography sx={{ fontSize: "14px" }}>یقهٔ باز در پیراهن مردانه</Typography>
                                <Typography sx={{ fontSize: "14px" }}>لباس دکمه دار</Typography>
                                <Typography sx={{ fontSize: "14px" }}>جیب دوختی روی سینه</Typography>
                                <Typography sx={{ fontSize: "14px" }}>آستین بلند</Typography>
                            </Box>
                        </Box>

                        {/* جنس + پوشش */}
                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                    جنس محصول
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "grey" }}>
                                    {ChangeNumberToPersianForPhone(100)} % نخ
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                    پوشش
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "grey" }}>این مدل از سایز متوسط تا سایز بزرگ</Typography>
                                <Typography sx={{ fontSize: "14px", color: "grey" }}>سایز متوسط</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* نکات مهم در نگهداری — همیشه width:100% */}
                    <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                            نکات مهم در نگهداری
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, alignItems: "center", py: 2, color: "grey", flexWrap: "wrap" }}>
                            <OpacityIcon />
                            <DoNotDisturbIcon />
                            <MotionPhotosOffSharpIcon />
                            <SignalWifiStatusbarConnectedNoInternet4Icon />
                            <DoNotTouchIcon />
                        </Box>

                        <Typography sx={{ fontSize: "14px", color: "grey" }}>
                            همواره برای شستشو لباس های خود از ماشین لباسشوئی استفاده نمائید...
                        </Typography>
                    </Box>
                </Box>

                {/* ستون راست — عکس‌ها و متن */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: mdDown ? "100%" : "50%",
                    }}
                >

                    {/* متن بالای عکس‌ها در حالت دسکتاپ */}
                    {!mdDown && (
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "grey",
                                textAlign: "center",
                                px: 2,
                            }}
                        >
                            همواره برای شستشو لباس های خود از ماشین لباسشوئی استفاده نمائید...
                        </Typography>
                    )}

                    {/* عکس‌ها */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: mdDown ? "column" : "row",
                            gap: 2,
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/imageForShopRoute/41-1.jpg"
                            sx={{
                                width: mdDown ? "100%" : "50%",
                                borderRadius: 1,
                                objectFit: "cover",
                            }}
                        />

                        <Box
                            component="img"
                            src="/images/imageForShopRoute/44-1.jpg"
                            sx={{
                                width: mdDown ? "100%" : "50%",
                                borderRadius: 1,
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* متن زیر عکس‌ها در حالت موبایل */}
                    {mdDown && (
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "grey",
                                textAlign: "center",
                                px: 2,
                            }}
                        >
                            همواره برای شستشو لباس های خود از ماشین لباسشوئی استفاده نمائید...
                        </Typography>
                    )}

                </Box>

            </Box>
        </Box>
    );
}
