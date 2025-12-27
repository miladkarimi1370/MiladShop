"use client";
import { AccountCircle, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, Divider, FormControl, InputAdornment, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
    const isMobile = useMediaQuery("(max-width : 600px)")
    const recaptchaRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = recaptchaRef.current.getValue();
        if (!token) {
            alert("لطفا تائید ربات را انجام دهید");
            return;
        }
    }
    return (
        <>
            <Box sx={{
                background: "#283048", background: "-webkit-linear-gradient(to right, #859398, #283048)", background: "linear-gradient(to right, #859398, #283048)", width: "100%",
                height: { xs: "85vh", lg: "82vh" }
            }}>
                <Container maxWidth={"xl"} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <FormControl onSubmit={handleSubmit} component={"section"} sx={{ backgroundColor: "white", width: { xs: "300px", sm: "400px", md: "450px", lg: "550px", xl: "600px" }, py: 3, borderRadius: "10px" }}>
                        <Stack spacing={2} direction={"column"} sx={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <Box sx={{ width: "100%", }}>
                                <Typography variant="body2" sx={{ color: "#000", fontSize: "16px", textAlign: "center", fontWeight: "bold" }}>فرم ورود</Typography>
                            </Box>
                            <Divider flexItem sx={{ width: "100%" }} />
                            {/* شروع نام کاربری  */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>نام کاربری / ایمیل : </Typography>
                                <TextField
                                    required
                                    id="user_name"
                                    placeholder="mili_1370"
                                    size="small"
                                    name="user_nameOrEmail"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: "50px",
                                            "& fieldset": {
                                                borderRadius: "50px",
                                            },
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            textAlign: "right",  // متن و placeholder راست‌چین
                                            direction: "rtl",    // تایپ از راست شروع میشه
                                        },
                                    }}
                                    slotProps={{
                                        root: {
                                            dir: "ltr"
                                        }
                                    }}
                                />



                            </Box>
                            {/* پایان نام کاربری  */}
                            <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                            {/* شروع پسورد */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>رمز عبور : </Typography>
                                <TextField
                                    required
                                    id="password"
                                    placeholder="*************"
                                    size="small"
                                    name="password"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <RemoveRedEye />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: "50px",
                                            "& fieldset": {
                                                borderRadius: "50px",
                                            },
                                        },
                                    }}
                                    inputProps={{
                                        style: {
                                            textAlign: "right",  // متن و placeholder راست‌چین
                                            direction: "rtl",    // تایپ از راست شروع میشه
                                        },
                                    }}
                                    slotProps={{
                                        root: {
                                            dir: "ltr"
                                        }
                                    }}
                                />



                            </Box>
                            {/* شروع پسورد */}
                            <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>مرا به خاطر بسپار : </Typography>
                                <Checkbox defaultChecked />
                            </Box>
                            <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "70%" }}>
                                <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>اعتبار سنجی گوگل :</Typography>

                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    size={isMobile ? "compact" : "normal"}
                                />

                            </Box>
                            <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <Button variant="contained" color="success" fullWidth sx={{ width: "80%" }}>ورود</Button>
                            </Box>
                            <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="subtitle2" component={"span"} sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" }, fontWeight: "light" }}>هنوز ثبت نام نکرده اید ؟</Typography>
                                <Typography variant="subtitle2" component={"a"} href="" sx={{ fontSize: "12px", fontWeight: "bold", color: "blue" }}>لینک ثبت نام</Typography>
                            </Box>
                            <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                            <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="subtitle2" component={"span"} sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" }, fontWeight: "light" }}>رمز عبور خود را فراموش کرده اید ؟</Typography>
                                <Typography variant="subtitle2" component={"a"} href="" sx={{ fontSize: "12px", fontWeight: "bold", color: "blue" }}>فراموشی رمز عبور</Typography>
                            </Box>
                        </Stack>

                    </FormControl>
                </Container>
            </Box >
        </>
    )
}


