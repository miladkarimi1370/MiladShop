"use client";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import styled from "@emotion/styled";
import { CloudUpload } from "@mui/icons-material";
import {
    Box,
    Button,
    Rating,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";

export default function SayReview() {
    const [rateOfProduct, setRateOfProduct] = useState(0);
    const [state, setState] = useState({
        firstName: "",
        lastName: ""
    });

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1
    });

    return (
        <Box sx={{ width: "100%", py: 3 }}>
            {/* عنوان */}
            <Typography
                variant="h2"
                sx={{
                    color: "#000",
                    fontSize: "20px",
                    textAlign: { xs: "center", md: "start" },
                    mb: 1
                }}
            >
                برای تی شرت دخترانه نظر خود را ثبت نمائید
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    color: "#000",
                    fontSize: "14px",
                    textAlign: { xs: "center", md: "start" },
                    mb: 2
                }}
            >
                آدرس ایمیل شما به هیچ عنوان منتشر نخواهد شد ، ما اطلاعات شما را منتشر نخواهیم کرد *
            </Typography>

            {/* امتیاز */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "start" },
                    alignItems: "center",
                    mb: 2,
                    flexWrap: "wrap"
                }}
            >
                <Typography
                    component="legend"
                    sx={{ color: "grey", fontSize: "14px", px: 2 }}
                >
                    لطفا به کالای تی شرت دخترانه امتیاز دهید :
                </Typography>

                <Rating
                    value={rateOfProduct}
                    onChange={(event, newValue) => setRateOfProduct(newValue || 0)}
                    sx={{ color: "#000" }}
                />
            </Box>

            {/* متن نظر */}
            <Box sx={{ width: "100%", mb: 2 }}>
                <TextareaAutosize
                    minRows={12}
                    placeholder="لطفا نظر خود را درباره کالا ثبت نمائید . . ."
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        fontFamily: "Vazir",
                        borderColor: "#cecece",
                        padding: "10px",
                        maxHeight: "400px",
                        overflowY: "auto"
                    }}
                />
            </Box>

            {/* آپلود عکس */}
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        color: "grey",
                        fontSize: "14px",
                        textAlign: { xs: "center", md: "start" },
                        mb: 1
                    }}
                >
                    بارگذاری تصویر ( حداکثر حجم {ChangeNumberToPersianForPhone(250)} کیلوبایت)
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            border: "1px solid #cecece",
                            borderRadius: "7px",
                            alignItems: "center"
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/avatar/1.png"
                            sx={{ width: 40, height: 40, objectFit: "cover" }}
                        />

                        <Button
                            sx={{ m: 1, color: "grey", border: "1px solid #cecece" }}
                            component="label"
                            variant="outlined"
                            startIcon={<CloudUpload />}
                        >
                            آپلود عکس
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(e) => console.log(e.target.files)}
                                multiple
                            />
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* نام و نام خانوادگی */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 1,
                    py: 3,
                    width: "100%"
                }}
            >
                <TextField
                    required
                    label="نام"
                    placeholder="نام خود را وارد کنید"
                    value={state.firstName}
                    onChange={(e) =>
                        setState((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                    variant="filled"
                    size="small"
                    sx={{
                        flex: 1,

                        '& .MuiFilledInput-root': {
                            backgroundColor: 'white',
                            border: '1px solid #cecece',
                            borderRadius: '5px',

                            // ❌ حذف hover
                            '&:hover': {
                                backgroundColor: 'white',
                            },

                            // ❌ حذف focus
                            '&.Mui-focused': {
                                backgroundColor: 'white',
                                border: '1px solid #cecece',
                            },
                        },

                        // ❌ حذف underline پیش‌فرض MUI
                        '& .MuiFilledInput-underline:before': {
                            borderBottom: 'none',
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottom: 'none',
                        },

                        // ❌ حذف افکت hover روی underline
                        '& .MuiFilledInput-underline:hover:before': {
                            borderBottom: 'none',
                        },
                    }}

                />

                <TextField
                    required
                    label="نام خانوادگی"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    value={state.lastName}
                    onChange={(e) =>
                        setState((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                    variant="filled"
                    size="small"
                    sx={{
                        flex: 1,

                        '& .MuiFilledInput-root': {
                            backgroundColor: 'white',
                            border: '1px solid #cecece',
                            borderRadius: '5px',

                            // ❌ حذف hover
                            '&:hover': {
                                backgroundColor: 'white',
                            },

                            // ❌ حذف focus
                            '&.Mui-focused': {
                                backgroundColor: 'white',
                                border: '1px solid #cecece',
                            },
                        },

                        // ❌ حذف underline پیش‌فرض MUI
                        '& .MuiFilledInput-underline:before': {
                            borderBottom: 'none',
                        },
                        '& .MuiFilledInput-underline:after': {
                            borderBottom: 'none',
                        },

                        // ❌ حذف افکت hover روی underline
                        '& .MuiFilledInput-underline:hover:before': {
                            borderBottom: 'none',
                        },
                    }}

                />
            </Box>
        </Box>
    );
}
