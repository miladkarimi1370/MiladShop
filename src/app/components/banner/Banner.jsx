import theme from "@/app/theme/theme";
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box sx={{
                width: "100%",
                minHeight: { xs: "50vh", md: "20vh" },
                backgroundColor: "#F9F0F1",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 0 },
                py: { xs: 3, md: 0 },
                px: 2,
                overflow: "hidden",
            }}>
                {/* متن */}
                <Box sx={{
                    width: { xs: "100%", md: "30%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 1
                }}>
                    <Typography variant="h5" sx={{ color: "#000" }}>فروش بزرگ</Typography>
                    <Typography variant="subtitle2" sx={{ color: "grey", fontSize: "12px" }}>
                        تا {ChangeNumberToPersianForPhone(40)} درصد تخفیف بر روی تمامی آیتم ها تا آخر این هفته
                    </Typography>
                </Box>

                {/* تصویر */}
                <Box sx={{
                    width: { xs: "100%", md: "30%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        src={"/images/bannerPart/banner-1.jpg"}
                        alt="Big Sale"
                        width={200}
                        height={200}
                        style={{ objectFit: "cover" }}
                    />
                </Box>

                {/* قیمت */}
                <Box sx={{
                    width: { xs: "100%", md: "30%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 1
                }}>
                    <Typography variant="body1" sx={{ fontSize: "30px" }}>
                        از{" "}
                        <Typography
                            variant="h3"
                            component="span"
                            sx={{ color: "tomato", fontSize: "30px", fontWeight: "bold" }}
                        >
                            {ChangeNumbersToPersina(400)}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="body1"
                        component={Link}
                        href={""}
                        sx={{ borderBottom: "1px solid #000", textAlign: "center", mt: 1 }}
                    >
                        همین الان خرید کنید
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
