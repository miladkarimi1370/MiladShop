import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Typography } from "@mui/material";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import OpacityIcon from '@mui/icons-material/Opacity';
import MotionPhotosOffSharpIcon from '@mui/icons-material/MotionPhotosOffSharp';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';

export default function Descriptions({ details, meterial, sizes, }) {


    return (
        <Box sx={{ width: "100%", px: 2 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
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
                        width: { xs: "100%", md: "50%" },
                    }}
                >
                    {/* جزئیات + جنس محصول + پوشش */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 4,
                        }}
                    >
                        {/* جزئیات */}
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                جزئیات
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, color: "grey" }}>
                                {details.map((item, index) => {
                                    return (<Typography key={index} sx={{ fontSize: "14px" }}>{item}</Typography>)
                                })}

                            </Box>
                        </Box>

                        {/* جنس + پوشش */}
                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                    جنس محصول
                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "grey" }}>
                                    {meterial}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography sx={{ fontSize: "16px", fontWeight: "bold", py: 1 }}>
                                    پوشش
                                </Typography>
                                {sizes.map((item, index) => {
                                    return (<Typography key={index} sx={{ fontSize: "14px", color: "grey" }}>{item}</Typography>)
                                })}


                            </Box>
                        </Box>
                    </Box>

                    {/* نکات مهم در نگهداری */}
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

                {/* ستون راست */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: { xs: "100%", md: "50%" },
                    }}
                >
                    {/* متن بالای عکس‌ها در دسکتاپ */}
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "grey",
                            textAlign: "center",
                            px: 2,
                            display: { xs: "none", md: "block" }
                        }}
                    >
                        همواره برای شستشو لباس های خود از ماشین لباسشوئی استفاده نمائید...
                    </Typography>

                    {/* عکس‌ها */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2,
                            width: "100%",
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/imageForShopRoute/41-1.jpg"
                            sx={{
                                width: { xs: "100%", md: "50%" },
                                borderRadius: 1,
                                objectFit: "cover",
                            }}
                        />
                        <Box
                            component="img"
                            src="/images/imageForShopRoute/44-1.jpg"
                            sx={{
                                width: { xs: "100%", md: "50%" },
                                borderRadius: 1,
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* متن زیر عکس‌ها در موبایل */}
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "grey",
                            textAlign: "center",
                            px: 2,
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        همواره برای شستشو لباس های خود از ماشین لباسشوئی استفاده نمائید...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
