
import { Box, Container } from "@mui/material";
import ShowPictureInEmallSingle from "./showPictureInEmallSingle/ShowPictureInEmallSingle";
import ShowRating from "./showRating.jsx/ShowRating";
import ShowTitle from "./showTitle/ShowTitle";
import ShowBuyPartWhenMdDown from "./showBuyPart/ShowBuyPart";
import ShowInformation from "./showInformation/ShowInformation";
import ShowTabs from "./showTabs/ShowTabs";

import InfoBeforeBuyWithTitle from "./inforBeforeBuyWithTitle/InfoBeforeBuyWithTitle";
import BreadCrumbsComponents from "@/app/components/breadCrumbsComponent/BreadCrumbsComponent";

export default async function EMallSingle({ params }) {
    const { emallSingle } = await params;
    console.log(emallSingle);

    return (
        <Container maxWidth={"lg"}>
            <Box sx={{ width: "100%", display: 'flex', flexWrap: "wrap", justifyContent: "center", alignContent: "center" }}>
                <BreadCrumbsComponents arrayOfPath={[{ id: 1, name: "صفحه اصلی", myHref: "/" }, { id: 2, name: "فروشگاه ", myHref: "/emall" }]} />

                <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                    <ShowPictureInEmallSingle
                        srcOfImages={[
                            "/images/imageForShopRoute/1-1.jpg",
                            "/images/imageForShopRoute/1-2.jpg",
                            "/images/imageForShopRoute/2-1.jpg",
                            "/images/imageForShopRoute/2-2.jpg"
                        ]}
                    />

                    <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                        <ShowRating rate={2.5} electedCount={44} />
                        <ShowTitle />
                        <ShowBuyPartWhenMdDown
                            colors={["green", "red", "blue", "pink"]}
                            min={0}
                            max={4}
                            idNumberOfProduct={"123%234#"}
                        />
                        <ShowInformation />
                    </Box>
                </Box>

                <ShowTabs />
                <InfoBeforeBuyWithTitle />
            </Box>
        </Container>
    );
}
