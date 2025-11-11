import { ListItemButton, ListItemText } from "@mui/material";
import NextLink from "next/link";

export default function TemplateComponentPagesSubMenu({ title, href }) {
    return (
        <ListItemButton component={NextLink} href={href} sx={{
            "&:hover": {
                backgroundColor: "inherit",
                color: "tomato"
            }
        }}>
            <ListItemText primary={title} slotProps={{
                primary: {
                    sx: {
                        fontSize: "14px"
                    }
                }
            }} />
        </ListItemButton>
    )
}