"use client";

import { MenuList, Paper } from "@mui/material";


import MenuTemplateWithoutSubMenu from './MenuTemplateWithoutSubMenu';
import MenuTemplateWithSubMenu from './MenuTemplateWithSubMenu';

export default function ShowSubMenuFromHamburgerMenuIcon() {

    return (
        <>

            <Paper elevation={"1"} sx={{
                width: "300px",
                maxWidth: "100%", transform: "translateX(-18px) translateY(-2px)", display: {
                    xs: "none",
                    sm: "none",
                    md: "flex"
                },

            }}>

                <MenuList sx={{ width: "100%" }}>
                    {/* شروع قسمت اولین منو به همراه زیر منو */}
                    <MenuTemplateWithSubMenu whichPart={"part1"} text={" فروشگاه"} myHref={"/emall"} />
                    {/* پایان قسمت اولین منو به همراه زیر منو */}
                    {/* شروع قسمت دومین منو به همراه زیر منو */}
                    <MenuTemplateWithSubMenu whichPart={"part2"} text={"لباس مردانه"} myHref={"/emall/men"} />

                    {/* پایان قسمت دوم منو به همراه زیر منو */}
                    {/* شروع قسمت سوم منو به همراه زیر منو */}
                    <MenuTemplateWithSubMenu whichPart={"part3"} text={"لباس زنانه"} myHref={"/emall/women"} />
                    {/* پایان قسمت سوم منو به همراه زیر منو */}
                    {/* شروع قسمت چهارم منو  */}
                    <MenuTemplateWithoutSubMenu text={"کالکشن جدید"} myHref={"/"} LastChild={false} />
                    {/* پایان قسمت چهارم منو */}
                    {/* شروع قسمت پنجم منو  */}
                    <MenuTemplateWithoutSubMenu text={"اکسسوری ها"} myHref={"/emall/accessory"} LastChild={false} />
                    {/* پایان قسمت پنجم منو */}
                    {/* شروع قسمت ششم منو  */}
                    <MenuTemplateWithoutSubMenu text={"شلوار"} myHref={"/emall/trouser"} LastChild={false} />
                    {/* پایان قسمت شمم منو */}
                    {/* شروع قسمت هفتم منو  */}
                    <MenuTemplateWithoutSubMenu text={"ترندهای این هفته"} myHref={"/"} LastChild={false} />
                    {/* پایان قسمت هفتم منو */}
                    {/* شروع قسمت هشتم منو  */}
                    <MenuTemplateWithoutSubMenu text={"صندل"} myHref={"/emall/sneakers"} LastChild={false} />
                    {/* پایان قسمت هشتم منو */}
                    {/* شروع قسمت نهم منو  */}
                    <MenuTemplateWithoutSubMenu text={"کیف چرمی"} myHref={"/emall/women"} LastChild={true} />
                    {/* پایان قسمت نهم منو */}
                </MenuList>

            </Paper>

        </>
    )
}