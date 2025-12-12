"use client";
import { ArrowDropDown } from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function SelectionComponent() {

        const [filter, setFilter] = useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label" size="small" sx={{fontSize : "14px"}}>نمایش  </InputLabel>
                    <Select
                        IconComponent={ArrowDropDown}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"latest"}>جدیدترین</MenuItem>
                        <MenuItem value={"popular"}>محبوب ترین</MenuItem>
                        <MenuItem value={"most-visited"}>پربازدید ترین</MenuItem>
                        <MenuItem value={"most-selling"}>پرفروش ترین</MenuItem>
                        <MenuItem value={"cheapest"}>کمترین قیمت</MenuItem>
                        <MenuItem value={"expensive"}>بیشترین قیمت</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </>
    )
}