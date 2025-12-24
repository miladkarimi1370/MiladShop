
import { Box, Container, Divider } from "@mui/material";
import ShowHamburgerMenuIconWithTitle from "./MainHeader/ShowHamburgerMenuIconWithTitle";
import TemplateComponentForNavbarMenu from "./MainHeader/navbarMenu/homeTemplate/TemplateComponentForHomeNavbarMenu";
import TemplateComponentForShopNavbarMenu from "./MainHeader/navbarMenu/shopTemplate/TemplateComponentForShopNavbarMenu";
import TemplateComponentForProductsNavbarMenu from "./MainHeader/navbarMenu/productsTemplate/TemplateComponentForProductsNavbarMenu";
import TemplateComponentBlogMenu from "./MainHeader/navbarMenu/blogTemplate/TemplateComponentBlogMenu";
import TemplateComponentPagesMenu from "./MainHeader/navbarMenu/pagesTemplate/TemplateComponentPagesMenu";


export default function MyMainHeader() {

    return (
        <>
            <Container sx={{
                maxWidth: "lg", display: {
                    xs: "none", sm: "none", md: "flex"
                }

            }} component={"section"} >
                <Box component={"div"} sx={{ width: "100%", display: "flex", height: "50px"  }}>
                    <Box sx={{

                        display: "flex",
                        width: "30%", height: "100%", justifyContent: {
                            xs: "start", sm: "start", md: "start", lg: "center"
                        }, alignItems: "center", gap: 2
                    }}>

                        <ShowHamburgerMenuIconWithTitle />

                    </Box>
                    <Box sx={{
                        display: "flex",
                        width: "50%",
                        height: "100%", justifyContent: {
                            xs: "start", sm: "start", md: "start", lg: "center"
                        },
                        alignItems: "center", gap: 2,
                    }}>
                        {/* کامپوننت دربرگیرندهر کدام از آیتم های منوی ناوبری */}

                        <TemplateComponentForNavbarMenu myTitle={"خانه"} />
                        <TemplateComponentForShopNavbarMenu myTitle={"فروشگاه"} />
                        <TemplateComponentForProductsNavbarMenu myTitle={"محصولات"} />
                        <TemplateComponentBlogMenu myTitle={"بلاگ "} />
                        <TemplateComponentPagesMenu myTitle={"صفحات"} />
                    </Box>

                    <Box>

                    </Box>
                </Box>
                <Divider sx={{ opacity: "0.6" }} />
            </Container>
            <Divider />
        </>
    )
}