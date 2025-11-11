import { ListItemButton, ListItemText } from "@mui/material";
import NextLink from "next/link";
export default function TemplateComponentForListItemButton({ myHref, myPrimary }) {
    return (
        <>
            <ListItemButton component={NextLink} href={myHref} sx={{
                "&:hover": {
                    backgroundColor: "inherit",
                    color: "tomato"
                }
            }}>
                <ListItemText primary={myPrimary} slotProps={{
                    primary: {
                        sx: {
                            fontSize: "14px"
                        }
                    }
                }} />
            </ListItemButton>
        </>
    )
}