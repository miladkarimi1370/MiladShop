import { ListItemButton, ListItemText } from "@mui/material";
import NextLink from "next/link";
export default function TemplateComponentForSubMenuInNavbarMenu({ text, myHref }) {
    return (
        <ListItemButton component={NextLink} href={myHref} sx={{
            "&:hover": {
                backgroundColor: "inherit",
                color: "tomato",
            }
        }}>
            <ListItemText primary={text} slotProps={{
                primary: {
                    sx: {
                        fontSize: "14px"
                    }
                }
            }} />
        </ListItemButton>
    )
}