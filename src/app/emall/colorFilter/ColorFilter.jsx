import { Box, FormGroup, ToggleButton, Typography } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import { FormatColorFill } from "@mui/icons-material";
import { useColorFilter } from "@/store/colorFilter";

export default function ColorFilter() {
    const { currentColor, setCurrentColorFilter } = useColorFilter()

    const colors = [" tomato", "blue", "green", "orange", "black", "grey", "yellow", "red", "silver", "gold", "pink", "brown", "darkblue", "indigo" , "white"];

    return (
        <>
            <Typography component={"h3"} sx={{ fontSize: "16px", color: "#000", width: "100%", display: "flex", justifyContent: "start", mt: 6, mb: 3 }}>
                رنگ
            </Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FormGroup sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1 }}>
                    <ToggleButton sx={{ width: "100%", height: "5vh" }} color="primary" disabled={currentColor === "all" ? true : false} onClick={() => setCurrentColorFilter("all")}>
                        <FormatColorFill />
                    </ToggleButton>
                    {colors.map((color, index) => (
                        <Box
                            key={index}

                            sx={{
                                display: "inline-flex",
                                cursor: "pointer",
                                borderRadius: "50%",
                                border: currentColor === color ? "2px solid #000" : "2px solid transparent",
                                transition: "all 0.2s",
                                "&:hover": {
                                    borderColor: "orange"
                                }
                            }}
                            onClick={() => setCurrentColorFilter(color)}
                        >
                            <CircleIcon sx={{ color: color, fontSize: 32 }} />
                        </Box>
                    ))}
                </FormGroup>

            </Box>
        </>
    );
}
