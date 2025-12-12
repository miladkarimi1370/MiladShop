"use client";
import BreadCrumbsComponents from "@/app/components/breadCrumbsComponent/BreadCrumbsComponent";
import { Box, Container, useMediaQuery } from "@mui/material";
import ShowPictureInEmallSingle from "./showPictureInEmallSingle/ShowPictureInEmallSingle";
import ShowRating from "./showRating.jsx/ShowRating";
import ShowTitle from "./showTitle/ShowTitle";
import ShowBuyPartWhenMdDown from "./showBuyPart/ShowBuyPart";
import ShowInformation from "./showInformation/ShowInformation";
import ShowTabs from "./showTabs/ShowTabs";
import theme from "@/app/theme/theme";

export default function EMallSingle() {
    const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <>
            <Container maxWidth={"lg"}>
                <Box sx={{ width: "100%", display: 'flex', flexWrap: "wrap", justifyContent: "center", alignContent: "center"   }}>
                    <BreadCrumbsComponents />
                    <Box sx={{ display: lgUp ? "flex" : "block" }}>
                        <ShowPictureInEmallSingle srcOfImages={["/images/imageForShopRoute/1-1.jpg", "/images/imageForShopRoute/1-2.jpg", "/images/imageForShopRoute/2-1.jpg", "/images/imageForShopRoute/2-2.jpg"]} />
                        <Box sx={{ width: lgUp ? "50%" : "100%" }}>
                            <ShowRating rate={2.5} electedCount={44} />
                            <ShowTitle />
                            <ShowBuyPartWhenMdDown colors={["green", "red", "blue", "pink"]} min={0} max={4} idNumberOfProduct={"123%234#"} />
                            <ShowInformation />
                        </Box>
                    </Box>



                    <ShowTabs />
                </Box>
            </Container>
        </>
    )
}