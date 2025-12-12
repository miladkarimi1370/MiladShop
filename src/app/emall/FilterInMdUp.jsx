"use client";
import { Checkbox, Box, FormControlLabel, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useState } from "react";
import theme from "../theme/theme";

export default function FilterInMdUp() {
    const [isChecked, setIsChecked] = useState(false);
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: isLgUp ? "flex" : "none", justifyContent: "center", alignItems: "center", gap: 1 }}>
                <IconButton aria-label="delete" sx={{ border: "1px solid #cecece", borderRadius: "2px" }} >
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} >
                    <DragHandleIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} >
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} >
                    <FormatAlignJustifyIcon />
                </IconButton>
            </Box>
            <FormControlLabel
                labelPlacement="start"
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                }
                slotProps={{
                    typography: {
                        fontSize: "14px",
                        px: "5px"
                    }
                }}
                label="نمایش فقط محصولات تخفیف دار"
            />

        </Box>
    );
}
