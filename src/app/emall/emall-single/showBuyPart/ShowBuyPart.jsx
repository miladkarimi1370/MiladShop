"use client"
import { Box, Button, FormGroup, IconButton, TextField, useMediaQuery } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import theme from "@/app/theme/theme";





export default function ShowBuyPartWhenMdDown({ min, max, colors, idNumberOfProduct }) {
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const [selectedColor, setSelectedColor] = useState(null)

    const [countOfProduct, setCountOfProduct] = useState(0);
    const handleClicked = (sign) => {

        if (sign === "Plus") {
            if (countOfProduct < max) {
                setCountOfProduct(countOfProduct + 1)
            } else return


        } else {
            if (countOfProduct > min) {
                setCountOfProduct(countOfProduct - 1)
            } else return
        }
    }
    return (
        <>

            <Box sx={{ width: "100%", height: "15vh", display: "flex", position: mdDown ? "fixed" : "static", justifyContent: "center", flexDirection: "column", alignItems: "center", zIndex: 99, gap: 2, bottom: "0px", left: "0px", backgroundColor: "white" }}>
                <Box sx={{ width: mdDown ? "80%" : "100%", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <FormGroup sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1 }}>
                        {colors.map((color, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "inline-flex",
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                    border: selectedColor === color ? "2px solid #000" : "2px solid transparent",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        borderColor: "orange"
                                    }
                                }}
                                onClick={() => setSelectedColor(color)}
                            >
                                <CircleIcon sx={{ color: color, fontSize: 32 }} />
                            </Box>
                        ))}
                    </FormGroup>

                </Box>

                <Box sx={{ width: mdDown ? "80%" : "100%", display: "flex", justifyContent: "space-evenly", gap: 1, alignItems: "center" }}>
                    {/* شروع قسمت تعداد محصول */}
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
                            onClick={(e) => handleClicked("Minus")}
                        >
                            <RemoveRoundedIcon />
                        </IconButton>

                        <TextField
                            value={ChangeNumberToPersianForPhone(countOfProduct)}
                            variant="outlined"

                            slotProps={{
                                input: {
                                    sx: {
                                        textAlign: "center",
                                        padding: "0 !important",
                                        height: "32px",
                                        fontSize: "1.1rem",
                                    }
                                },
                                htmlInput: {
                                    style: {
                                        textAlign: "center",
                                        padding: 0,
                                    }
                                }
                            }}
                            sx={{
                                "& fieldset": { border: "none" },   // حذف border
                                width: "40px",                      // کنترل عرض
                            }}
                        />

                        <IconButton sx={{ color: "#000", fontSize: "large" }}
                            onClick={() => handleClicked("Plus")}
                        >
                            <AddRoundedIcon />
                        </IconButton>
                    </Box>

                    {/* پایان قسمت تعداد محصول */}
                    {/* شروع قسمت دکمه اضافه شدن به سبد خرید  */}
                    <Box sx={{ flexGrow: 10, py: 1 }}>
                        <Button disabled={countOfProduct === 0 ? true : false} variant="contained" sx={{ backgroundColor: "tomato", color: "white", width: "100%" }}>اضافه کردن</Button>
                    </Box>
                    {/* پایان قسمت دکمه اضافه شدن به سبد خرید  */}
                    {/* شروع قسمت رفتن به صفحه درگاه خرید */}
                    <Box sx={{ flexGrow: 10, py: 1 }}>
                        <Button variant="outlined" sx={{   width: "100%" }}>
                            خرید
                        </Button>
                    </Box>
                    {/* شروع قسمت رفتن به صفحه درگاه خرید */}


                </Box>
            </Box>




        </>
    )
}


