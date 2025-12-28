"use client";
import { AccountCircle, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Checkbox, Container, Divider, FormControl, IconButton, InputAdornment, Snackbar, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/tools/zodSchema";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { supabase } from "@/utils/supabaseKey";
import { useRouter } from "next/navigation";
export default function Login() {
    const [showCharacterOfPassword, setShowCharacterOfPassword] = useState(false)
    const [commentOfSnackBar, setCommentOfSnackBar] = useState("");
    const [bgColorOfSnackBar, setBgColorOfSnackBar] = useState("")
    const [showSnackBar, setShowSnackBar] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(loginSchema)
    })
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width : 600px)")
    const recaptchaRef = useRef();

    const setUserIdForMiladShopCustomers = async (loginData) => {
        const user = loginData.user || loginData.session?.user;

        const { data: existing, error: fetchError } = await supabase
            .from("milad-shop-customers")
            .select("*")
            .eq("email", user.email)
            .single();

        if (existing) {
            // آپدیت کن
            await supabase
                .from("milad-shop-customers")
                .update({ user_id: user.id })
                .eq("email", user.email);
        } else {
            // ایجاد کن
            await supabase
                .from("milad-shop-customers")
                .insert({ email: user.email, user_id: user.id });
        }

        localStorage.setItem("person_log", JSON.stringify(existing))


        setTimeout(() => {
            router.push("/")
        }, 1500);


    }


    const onSubmit = async (data) => {

        try {
            const token = recaptchaRef.current.getValue();
            if (!token) {
                alert("لطفا تائید ربات را انجام دهید");
                return;
            }


            const { data: loginData, error } = await supabase.auth.signInWithPassword({
                email: "milad@gmail.com",
                password: "123456789Milad",
            });

            if
                (error) {
                setCommentOfSnackBar("متاسفانه خطائی رخ داده است !!!!!!");
                setBgColorOfSnackBar("red");
                setShowSnackBar(true)
                return
            }

         
            setCommentOfSnackBar("ورود موفقیت آمیز بود");
            setBgColorOfSnackBar("green");
            setShowSnackBar(true)
            setUserIdForMiladShopCustomers(loginData)



        } catch (err) {
            console.log(err);

        }


    }
    return (
        <>
            <Box sx={{
                background: "#283048", background: "-webkit-linear-gradient(to right, #859398, #283048)", background: "linear-gradient(to right, #859398, #283048)", width: "100%",
                height: { xs: "85vh", lg: "82vh" }
            }}>
                <Container maxWidth={"xl"} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl component={"section"} sx={{ backgroundColor: "white", width: { xs: "300px", sm: "400px", md: "450px", lg: "550px", xl: "600px" }, py: 3, borderRadius: "10px" }}>
                            <Stack spacing={2} direction={"column"} sx={{ justifyContent: "space-evenly", alignItems: "center" }}>
                                <Box sx={{ width: "100%", }}>
                                    <Typography variant="body2" sx={{ color: "#000", fontSize: "16px", textAlign: "center", fontWeight: "bold" }}>فرم ورود</Typography>
                                </Box>
                                <Divider flexItem sx={{ width: "100%" }} />
                                {/* شروع ایمیل  */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                    <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}> ایمیل : </Typography>
                                    <TextField
                                        {...register("email")}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                        required
                                        autoComplete={"milad@gmail.com"}
                                        id="inputEmail"
                                        placeholder="milad@gmail.com"
                                        size="small"
                                        name="email"
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
                                {/* پایان ایمیل  */}
                                <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                                {/* شروع پسورد */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                    <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>رمز عبور : </Typography>
                                    <TextField
                                        type={showCharacterOfPassword ? "text" : "password"}

                                        {...register("password")}
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                        required
                                        autoComplete={"123456789Milad"}
                                        id="inputPassword"
                                        placeholder="*************"
                                        size="small"
                                        name="password"
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton onClick={() => setShowCharacterOfPassword(prev => !prev)}>
                                                        {showCharacterOfPassword ? <VisibilityOff /> : <VisibilityIcon />}
                                                    </IconButton>

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
                                {/* پایان پسورد */}
                                <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%" }}>
                                    <Typography variant="caption" sx={{ color: "grey", fontSize: "12px", width: "30%" }}>مرا به خاطر بسپار : </Typography>
                                    <Checkbox {...register("remember_me")} defaultChecked />
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
                                    <Button variant="contained" color="success" fullWidth sx={{ width: "80%" }} type="submit">ورود</Button>
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


                    </form>
                    <Snackbar
                        open={showSnackBar}
                        autoHideDuration={2000}
                        onClose={() => setShowSnackBar(false)}
                        message={commentOfSnackBar}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        slotProps={{
                            root: {
                                sx: {
                                    backgroundColor: bgColorOfSnackBar,
                                }
                            },
                            content: {
                                sx: {
                                    backgroundColor: bgColorOfSnackBar
                                }
                            }
                        }}
                    />
                </Container>
            </Box >
        </>
    )
}


