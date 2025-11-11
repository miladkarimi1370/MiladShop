import { Box, Container } from "@mui/material"
import FeaturedHeader from "./FeaturedHeader"
import TemplateComponentForShowFeaturedCards from "./TemplateComponentForShowFeaturedCard"

export default function FeaturedProducts() {

    const inforPopularity = [
        { id: 1, title: "اوت فیت مردانه", price: "4700000", colors: ["burlywood", "burlywood", "brown"], src: ["/images/featuredProducts/1-1.jpg", "images/featuredProducts/1-2.jpg", "images/featuredProducts/1-3.jpg"], myHref: "" },
        { id: 2, title: "عینک دودی گالانت ", price: "1350000", colors: ["green", "brown"], src: ["/images/featuredProducts/2-1.jpg", "images/featuredProducts/2-2.jpg"], myHref: "" },
        { id: 3, title: "اوت فیت لانگ زنانه", price: "3200000", colors: ["skyblue", "green"], src: ["/images/featuredProducts/3-1.jpg", "images/featuredProducts/3-2.jpg"], myHref: "" },
        { id: 4, title: "شلوار اسلیم فیت", price: "900000", colors: ["skyblue", "brown"], src: ["/images/featuredProducts/4-1.jpg", "images/featuredProducts/4-2.jpg"], myHref: "" },


    ]

    return (
        <>
            <Container maxWidth={"xl"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 10 }}>
                <Box sx={{ width: "100%" }}>
                    <FeaturedHeader />
                    <Box sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        {/* کامپونتنت اصلی  */}
                        {inforPopularity.map((item) => {
                            return (
                                <TemplateComponentForShowFeaturedCards key={item.id} title={item.title} href={item.myHref} price={item.price} colorsOfProduct={item.colors} src={item.src} />
                            )
                        })}

                        {/* کامپونتنت اصلی  */}

                    </Box>

                </Box>
            </Container >

        </>
    )
}