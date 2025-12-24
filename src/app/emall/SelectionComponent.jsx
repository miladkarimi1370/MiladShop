"use client";
import { useSortEmallProducts } from "@/store/sortEmallProducts";
import { ArrowDropDown } from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";


export default function SelectionComponent() {

    const { currentSort, setCurrentSortDefault } = useSortEmallProducts()



    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label" size="small" sx={{ fontSize: "12px" }}>نمایش  </InputLabel>
                    <Select
                        IconComponent={ArrowDropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentSort}
                        label="Age"
                        MenuProps={{ disableScrollLock: true, disablePortal: true }}

                        onChange={(e) => setCurrentSortDefault(e.target.value)}
                        sx={{
                            "& .MuiSelect-select": {
                                fontSize: "12px",   // 👈 متن انتخاب‌شده
                            }
                        }}
                    >
                        <MenuItem value={"all"} sx={{ fontSize: "12px" }}>همه</MenuItem>
                        <MenuItem value={"latest"} sx={{ fontSize: "12px" }}>جدیدترین</MenuItem>

                        <MenuItem value={"cheapest"} sx={{ fontSize: "12px" }}>کمترین قیمت</MenuItem>
                        <MenuItem value={"expensive"} sx={{ fontSize: "12px" }}>بیشترین قیمت</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </>
    )
}