import { Divider, ListItemText, MenuItem } from "@mui/material";
import NextLink from "next/link";
export default function MenuTemplateWithoutSubMenu({ text, myHref, LastChild }) {
    return (
        <>
            <MenuItem disableRipple component={NextLink} href={myHref} sx={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBlock: "0px", "&:hover": {
                    backgroundColor: "inherit"
                }
            }}>

                <ListItemText primary={text} slotProps={{
                    primary: {
                        sx: {
                            fontSize: "14px"
                        }
                    }
                }} />

            </MenuItem>
            {!LastChild ? <Divider /> : null}

        </>
    )
}