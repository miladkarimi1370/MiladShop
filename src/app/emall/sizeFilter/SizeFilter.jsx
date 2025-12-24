import { useSizeFilter } from "@/store/useSizeFilter";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

export default function SizeFilter() {

    const { currentSize, setCurrentSize } = useSizeFilter();

    const sizeLists = [
        { id: 1, sizeName: "S", countOfProducts: 10, value: "small" },
        { id: 2, sizeName: "M", countOfProducts: 15, value: "medium" },
        { id: 3, sizeName: "L", countOfProducts: 9, value: "large" },
        { id: 4, sizeName: "XL", countOfProducts: 3, value: "Xl" },
        { id: 5, sizeName: "XXL", countOfProducts: 7, value: "XXl" },

    ]
    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mb: 3, mt: 6 }}>سایز</Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <FormGroup sx={{ width: "90%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <FormControlLabel
                            control={
                                <Checkbox

                                    checked={currentSize === "all" ? true : false}
                                    onChange={() => setCurrentSize("all")}
                                    sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                                />
                            }
                            label={
                                <span>
                                    {"همه"}
                                </span>
                            }
                            sx={{

                                "& .MuiFormControlLabel-label": { fontSize: "14px" },
                                "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                                "&:hover .MuiCheckbox-root": { color: "tomato" }
                            }}
                        />

                    </Box>
                    {sizeLists.map((item) => {
                        return (
                            <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox

                                            checked={currentSize === item.value ? true : false}
                                            onChange={() => setCurrentSize(item.value)}
                                            sx={{ color: "#000", '& .MuiSvgIcon-root': { fontSize: 22 } }}
                                        />
                                    }
                                    label={
                                        <span>
                                            {item.sizeName}
                                        </span>
                                    }
                                    sx={{

                                        "& .MuiFormControlLabel-label": { fontSize: "14px" },
                                        "&:hover .MuiFormControlLabel-label": { color: "tomato" },
                                        "&:hover .MuiCheckbox-root": { color: "tomato" }
                                    }}
                                />
                                <Typography variant="subtitle2" >({ChangeNumberToPersianForPhone(item.countOfProducts)})</Typography>
                            </Box>
                        )
                    })}


                </FormGroup>
            </Box>
        </>
    )
}