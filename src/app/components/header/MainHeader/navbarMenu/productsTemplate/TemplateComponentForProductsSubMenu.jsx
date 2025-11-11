import { List, ListSubheader } from "@mui/material";
import TemplateComponentForListItemButton from "../shopTemplate/TemplateComponentForListItemButton";


export default function TemplateComponentForProductsSubMenu({ mySubHeader, mySubSubHeader }) {


    return (
        <>
            <List
                subheader={
                    <ListSubheader sx={{ color: "#000", fontWeight: "bold", fontSize: "16px" }} component={"div"} id="nestedShopSubHeader" >
                        {mySubHeader}
                    </ListSubheader>
                }
                disablePadding sx={{

                    width: {
                        md: "100%", lg: "100%", xl: "65%"
                    }, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap", height: "100%"
                }}>
                {mySubSubHeader.length > 0 && mySubSubHeader.map((item) => {
                    return <TemplateComponentForListItemButton key={item.id} myHref={item.myHref} myPrimary={item.title} />
                })}


            </List>
        </>
    )
}