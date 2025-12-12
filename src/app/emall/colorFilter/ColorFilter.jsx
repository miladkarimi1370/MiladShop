import { Box, FormGroup, Typography } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

export default function ColorFilter() {
    const [selectedColor, setSelectedColor] = useState(null);

    const colors = ["tomato", "blue", "green", "orange", "black", "grey", "yellow", "red", "silver", "gold", "pink", "brown", "darkblue", "indigo"];

    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>
                 رنگ
            </Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        </>
    );
}
