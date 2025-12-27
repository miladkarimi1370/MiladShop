"use client";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Checkbox, Divider, FormControlLabel, Snackbar } from "@mui/material";
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import DirectionsBoatFilledOutlinedIcon from '@mui/icons-material/DirectionsBoatFilledOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
import { Button, Typography } from "@mui/material";

import ChangeNumbersToPersina, { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { FavoriteProducts } from "@/store/FavoriteProducts";
import { useEffect, useState } from "react";

export default function ShowInformation({ id, name, image, price }) {

    const { myFavoriteProducts, setMyFavoriteProducts } = FavoriteProducts();
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [commentOfSnackbar, setCommentOfSnackbar] = useState("");
    const [currentChecked, setCurrentChecked] = useState(false);
    const [bgColorOfSnackbar, setBgColorOfSnackbar] = useState("")
    const getDataFromLocalStorage = () => {
        const myF = JSON.parse(localStorage.getItem("myF")) || [];
        return myF
    }

    useEffect(() => {
        const myF = getDataFromLocalStorage();
        let result;
        if (myF.length > 0) {
            result = myF.findIndex((item) => {
                return item.id === id
            })

        }


    }, [])

    const handleClick = (id) => {
        let myData = getDataFromLocalStorage();
        if (myData.length === 0) {
            setCurrentChecked(true)
            localStorage.setItem("myF", JSON.stringify([{ id, name, price, image }]));
            setMyFavoriteProducts([{ id, name, price, image }]);
            setCommentOfSnackbar("یک محصول به علاقمندی های شما اضافه شد");
            setBgColorOfSnackbar("green");
            setShowSnackbar(true)
        } else {
            let result = myData.findIndex((item) => {
                return item.id === id;
            })
            if (result !== -1) {
                myData = myData.filter((item) => {
                    return item.id !== id
                })
                localStorage.setItem("myF", JSON.stringify(myData));
                setMyFavoriteProducts(myData);
                setCurrentChecked(false);
                setCommentOfSnackbar("این مورد از علاقمندی های شما حذف شد");
                setBgColorOfSnackbar("red")
                setShowSnackbar(true)
            } else {
                localStorage.setItem("myF", JSON.stringify([...myData, { id, name, price, image }]));
                setMyFavoriteProducts([...myData, { id, name, price, image }]);
                setCurrentChecked(true);
                setCommentOfSnackbar("یک مورد به علاقمندی های شما اضافه شد");
                setBgColorOfSnackbar("green")
                setShowSnackbar(true)
            }

        }

    }

    return (
        <>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ pt: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={currentChecked}          // حالت کنترل شده
                                onChange={() => handleClick(id)} // بروزرسانی state
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite color="error" />}
                                sx={{ px: 1 }}
                            />
                        }
                        slotProps={{
                            typography: {
                                fontSize: "12px",

                            }
                        }}
                        sx={{
                            px: 2,
                            transition: "all 0.3s",
                            "&:hover": {
                                color: "tomato"
                            }
                        }}
                        label="اضافه کردن به علاقه‌مندی‌ها"
                    />
                    <Button component={Link} href="/" variant="text" sx={{
                        color: "#000", fontSize: "12px", fontWeight: 200, transition: "all 0.3s", "&:hover": {
                            color: "tomato"
                        }
                    }}>
                        سوالات متداول{<PriorityHighRoundedIcon />}
                    </Button>
                </Box>
                <Box sx={{ py: 2 }}>
                    <Divider sx={{ fontSize: "12px", transform: "translateY(9px)" }}  >خرید امن & از طریق درگاه های معتبر بانکی</Divider>
                    <Box sx={{ display: "flex", justifyContent: 'center', gap: 2, alignItems: "center", p: 3, borderInline: "0.5px solid #cecece", borderBottom: "0.5px solid #cecece" }}>
                        <Box
                            component={"img"}
                            src="/images/imagesForBanks/logo-shora.png"
                            width={50}
                            height={50}
                        />
                        <Box
                            component={"img"}
                            src="/images/imagesForBanks/logo-nezam-senfi.png"
                            width={50}
                            height={50}
                        />
                        <Box
                            component={"img"}
                            src="/images/imagesForBanks/logo-shora.png"
                            width={50}
                            height={50}
                        />
                        <Box
                            component={"img"}
                            src="/images/imagesForBanks/shaparak1.png"
                            width={50}
                            height={50}
                        />
                    </Box>
                </Box>
                <Box sx={{ pb: 2 }}>
                    <Typography variant="subtitle2" sx={{
                        color: "#000", fontSize: "12px", fontWeight: 200, transition: "all 0.3s", display: "flex", justifyContent: "start", alignItems: "center", paddingBlock: 2
                    }}>
                        <DirectionsBoatFilledOutlinedIcon sx={{ marginInline: 1 }} />
                        زمان بندی ارسال محصولات : {ChangeNumberToPersianForPhone(12)} آبان - {ChangeNumberToPersianForPhone(15)} آبان
                    </Typography>
                    <Typography variant="subtitle2" sx={{
                        color: "#000", fontSize: "12px", fontWeight: 200, transition: "all 0.3s", display: "flex", justifyContent: "start", alignItems: "center"
                    }}>
                        <LocalShippingOutlinedIcon sx={{ marginInline: 1 }} />
                        هزینه ارسال عودت مشتری : همگی رایگان برای خریدهای بالای {ChangeNumbersToPersina(700)}
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{ py: 2, display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <Typography variant="subtitle2" sx={{ color: "#000", fontSize: "12px", fontWeight: "bold", px: 2 }}>شبکه های اجتماعی : </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, alignItems: "center" }}>
                        <InstagramIcon />
                        <WhatsAppIcon />
                        <TelegramIcon />
                        <PinterestIcon />
                        <YouTubeIcon />
                    </Box>
                </Box>

                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={2000}
                    onClose={() => setShowSnackbar(false)}
                    message={commentOfSnackbar}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    slotProps={{
                        root: {
                            sx: {
                                backgroundColor: bgColorOfSnackbar,
                            }
                        },
                        content: {
                            sx: {
                                backgroundColor: bgColorOfSnackbar
                            }
                        }
                    }}
                />

            </Box>
        </>
    )
}