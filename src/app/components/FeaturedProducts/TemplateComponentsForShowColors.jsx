"use client";
import { IconButton } from "@mui/material";

export default function TemplateComponentsForShowColors({ color, selectPictures }) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectPictures(color)


    }
    return (
        <IconButton
            sx={{
                backgroundColor: color,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                    backgroundColor: color,
                    transform: "scale(1.2)",
                    boxShadow: "0 0 0 2px #000",
                },
            }}

            onClick={(e) => handleClick(e)}
        />

    );
}
