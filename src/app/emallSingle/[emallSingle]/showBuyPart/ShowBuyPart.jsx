"use client";
import { Box, Button, FormGroup, IconButton, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { CartProduct } from "@/store/CardProduct";

export default function ShowBuyPartWhenMdDown({ min, max, colors, idNumberOfProduct, price, image, name }) {
    const [selectedColor, setSelectedColor] = useState(null);
    const [countOfProduct, setCountOfProduct] = useState(0);
    const { myBasket, setMyBasket } = CartProduct();
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [commentOfSnackBar, setCommentOfSnackBar] = useState("");



    const handleClicked = (sign) => {

        if (sign === "Plus") {
            setCountOfProduct((prev) => {
                const newCount = Math.min(prev + 1, max)
                return newCount
            })
        } else {
            setCountOfProduct((prev) => {
                const newCount = Math.max(prev - 1, min);
                if (newCount === 0) {
                    const previous = JSON.parse(localStorage.getItem("myBasket")) || [];
                    const results = previous.filter(item => item.idNumberOfProduct !== idNumberOfProduct);
                    localStorage.setItem("myBasket", JSON.stringify(results));
                    setCommentOfSnackBar("این مورد از سبد خرید شما حذف شد");
                    setShowSnackbar(true);


                }
                return newCount
            })


        }


    };
    const handleBasket = () => {

        if (selectedColor && countOfProduct) {
            const previous = JSON.parse(localStorage.getItem("myBasket")) || [];
            if (previous.length === 0) {
                localStorage.setItem("myBasket", JSON.stringify([{ idNumberOfProduct, selectedColor, countOfProduct, price, image, name }]))
                setMyBasket({ idNumberOfProduct, selectedColor, countOfProduct, price, image, name });
                setCommentOfSnackBar("یک مورد به سبد خرید شما اضافه شد")
                setShowSnackbar(true);

            } else {
                const result = previous.findIndex((item) => {
                    return item.idNumberOfProduct === idNumberOfProduct
                })


                if (result !== -1) {
                    setCommentOfSnackBar("این محصول از قبل در سبد خرید شما وجود دارد")
                    setShowSnackbar(true)

                } else {
                    localStorage.setItem("myBasket", JSON.stringify([...previous, { idNumberOfProduct, selectedColor, countOfProduct, price, image, name }]))
                    setMyBasket({ idNumberOfProduct, selectedColor, countOfProduct, price, image, name });
                    setCommentOfSnackBar("این محصول به سبد خرید شما اضافه شد")
                    setShowSnackbar(true);
                }
            }


        }
    }


    return (
        <Box sx={{
            width: "100%",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",

            position: { xs: "fixed", md: "static" },
            bottom: { xs: 1, md: "auto" },
            left: { xs: 0, md: "auto" },
            zIndex: 99,
            backgroundColor: "whitesmoke"
        }}>
            {/* انتخاب رنگ */}
            <Box sx={{
                width: { xs: "80%", md: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1
            }}>
                <FormGroup sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1 }}>
                    {colors?.map((color, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "inline-flex",

                                cursor: "pointer",
                                borderRadius: "50%",
                                border: selectedColor === color ? "2px solid #000" : "2px solid transparent",
                                transition: "all 0.2s",
                                "&:hover": { borderColor: "orange" }
                            }}
                            onClick={() => setSelectedColor(color)}
                        >
                            <CircleIcon sx={{ color: color, fontSize: 32 }} />
                        </Box>
                    ))}
                </FormGroup>
            </Box>

            {/* تعداد محصول و دکمه‌ها */}
            <Box sx={{
                width: { xs: "80%", md: "100%" },
                display: "flex",
                justifyContent: "space-evenly",
                gap: 1,
                alignItems: "center",
                flexWrap: { xs: "wrap", md: "nowrap" }
            }}>
                {/* تعداد محصول */}
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: "#cecece",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "5px",
                    gap: 1
                }}>
                    <IconButton sx={{ color: "#000", fontSize: "large" }}
                        onClick={() => handleClicked("Minus")}
                    >
                        <RemoveRoundedIcon />
                    </IconButton>

                    <TextField
                        value={ChangeNumberToPersianForPhone(countOfProduct)}
                        variant="outlined"
                        id="showBuyPart"
                        slotProps={{
                            input: {
                                sx: {
                                    textAlign: "center",
                                    padding: "0 !important",
                                    height: "32px",
                                    fontSize: "1.1rem",
                                }
                            },
                            htmlInput: { style: { textAlign: "center", padding: 0 } }
                        }}
                        sx={{ "& fieldset": { border: "none" }, width: "40px" }}
                    />

                    <IconButton sx={{ color: "#000", fontSize: "large" }}
                        onClick={() => handleClicked("Plus")}
                    >
                        <AddRoundedIcon />
                    </IconButton>
                </Box>

                {/* دکمه اضافه کردن به سبد */}
                <Box sx={{ flexGrow: 10, py: 1 }}>
                    <Button disabled={countOfProduct === 0} variant="contained"
                        sx={{ backgroundColor: "tomato", color: "white", width: "100%" }}
                        onClick={() => handleBasket()}
                    >
                        اضافه کردن
                    </Button>
                </Box>

                {/* دکمه خرید */}
                <Box sx={{ flexGrow: 10, py: 1 }}>
                    <Button variant="outlined" sx={{ width: "100%" }}>
                        خرید
                    </Button>
                </Box>
            </Box>
            <Box>
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={2000}
                    onClose={() => setShowSnackbar(false)}
                    message={commentOfSnackBar}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    slotProps={{
                        root: {
                            sx: {
                                backgroundColor: "green",
                            }
                        },
                        content: {
                            sx: {
                                backgroundColor: "green"
                            }
                        }
                    }}
                />
            </Box>
        </Box>
    );
}
