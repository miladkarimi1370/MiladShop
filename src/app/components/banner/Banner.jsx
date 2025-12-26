
import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

import NextLink from "../nextLink/NextLink";
import { createClient } from "@supabase/supabase-js";

export default async function Banner() {


    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data: myData } = await supabase.from("banner").select("*");




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
                    <Typography variant="h5" sx={{ color: "#000" }}>{myData[0].title}</Typography>
                    <Typography variant="subtitle2" sx={{ color: "grey", fontSize: "12px" }}>
                        {ChangeNumberToPersianForPhone(myData[0].subTitle)}
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
                        src={myData[0].image_url}
                        alt={myData[0].title}
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
                    <Typography variant="body1" sx={{ fontSize: "20px" }}>
                        حداقل مبلغ خرید از {" "}
                        <Typography
                            variant="h3"
                            component="span"
                            sx={{ color: "tomato", fontSize: "30px", fontWeight: "bold" }}
                        >
                            {ChangeNumbersToPersina(myData[0].price)}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="body1"
                        component={NextLink}
                        href={"/emall"}
                        target="_blank"
                        sx={{ borderBottom: "1px solid #000", textAlign: "center", mt: 1 }}
                    >
                        {myData[0].button_text}
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
