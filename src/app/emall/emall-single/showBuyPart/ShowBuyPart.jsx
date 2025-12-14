"use client";
import { Box, Button, FormGroup, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";

export default function ShowBuyPartWhenMdDown({ min, max, colors, idNumberOfProduct }) {
    const [selectedColor, setSelectedColor] = useState(null);
    const [countOfProduct, setCountOfProduct] = useState(0);

    const handleClicked = (sign) => {
        if (sign === "Plus") {
            if (countOfProduct < max) setCountOfProduct(countOfProduct + 1);
        } else {
            if (countOfProduct > min) setCountOfProduct(countOfProduct - 1);
        }
    };

    return (
        <Box sx={{
            width: "100%",
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            position: { xs: "fixed", md: "static" },
            bottom: { xs: 0, md: "auto" },
            left: { xs: 0, md: "auto" },
            zIndex: 99,
            backgroundColor: "white"
        }}>
            {/* انتخاب رنگ */}
            <Box sx={{
                width: { xs: "80%", md: "100%" },
                display: "flex",
                justifyContent: "start",
                alignItems: "center"
            }}>
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
        </Box>
    );
}
