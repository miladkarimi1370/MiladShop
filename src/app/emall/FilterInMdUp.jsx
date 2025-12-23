"use client";
import { Checkbox, Box, FormControlLabel, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { useState } from "react";

export default function FilterInMdUp() {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            {/* آیکون‌ها */}
            <Box sx={{
                
                display: { xs: "none", lg: "flex" },  // مخفی در XS تا MD، فقط در LG+ نمایش داده شود
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>
                <IconButton aria-label="menu" sx={{ border: "1px solid #cecece", borderRadius: "2px"  }}>
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label="drag" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }}>
                    <DragHandleIcon />
                </IconButton>
                <IconButton aria-label="menu" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }}>
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label="align" sx={{ border: "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }}>
                    <FormatAlignJustifyIcon />
                </IconButton>
            </Box>

            {/* چک‌باکس */}
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
