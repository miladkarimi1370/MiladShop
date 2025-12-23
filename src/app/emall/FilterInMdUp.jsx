"use client";
import { Checkbox, Box, FormControlLabel, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import { useTheShapeOfShowCards } from "@/store/useTheShapeOfShowCards";
import { useCheckBoxForDiscountProducts } from "@/store/useCheckBoxForDiscountProducts";

export default function FilterInMdUp() {

    let { currentColumnBase, setCurrentColumnBase } = useTheShapeOfShowCards()
    const { currentStatusForCheckBox, setCurrentStatusForCheckBox } = useCheckBoxForDiscountProducts();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
            {/* آیکون‌ها */}
            <Box sx={{

                display: { xs: "none", lg: "flex" },  // مخفی در XS تا MD، فقط در LG+ نمایش داده شود
                justifyContent: "center",
                alignItems: "center",
                gap: 1
            }}>

                <IconButton aria-label="drag" sx={{ border: currentColumnBase === 2 ? "1px solid grey" : "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} onClick={() => setCurrentColumnBase(currentColumnBase = 2)}>
                    <DragHandleIcon />
                </IconButton>
                <IconButton aria-label="menu" sx={{ border: currentColumnBase === 3 ? "1px solid grey" : "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} onClick={() => setCurrentColumnBase(currentColumnBase = 3)}>
                    <MenuIcon />
                </IconButton>
                <IconButton aria-label="align" sx={{ border: currentColumnBase === 4 ? "1px solid grey" : "1px solid #cecece", borderRadius: "2px", transform: "rotate(90deg)" }} onClick={() => setCurrentColumnBase(currentColumnBase = 4)}>
                    <FormatAlignJustifyIcon />
                </IconButton>
            </Box>

            {/* چک‌باکس */}
            <FormControlLabel
                labelPlacement="start"
                control={
                    <Checkbox
                        checked={currentStatusForCheckBox}
                        onChange={() => setCurrentStatusForCheckBox(!currentStatusForCheckBox)}
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
