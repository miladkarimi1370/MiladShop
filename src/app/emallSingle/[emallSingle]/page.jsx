
import { Box, Container } from "@mui/material";
import ShowPictureInEmallSingle from "./showPictureInEmallSingle/ShowPictureInEmallSingle";
import ShowRating from "./showRating.jsx/ShowRating";
import ShowTitle from "./showTitle/ShowTitle";
import ShowBuyPartWhenMdDown from "./showBuyPart/ShowBuyPart";
import ShowInformation from "./showInformation/ShowInformation";
import ShowTabs from "./showTabs/ShowTabs";

import InfoBeforeBuyWithTitle from "./inforBeforeBuyWithTitle/InfoBeforeBuyWithTitle";
import BreadCrumbsComponents from "@/app/components/breadCrumbsComponent/BreadCrumbsComponent";
import { supabase } from "@/utils/supabaseKey";
import { calcualteAvgRate } from "@/tools/calculateAvgRate";
import NavigateUpButton from "@/app/components/navigateUpButton/NavigateUpButton";

export default async function EMallSingle({ params }) {
    const { emallSingle } = await params;



    const { data: myData } = await supabase
        .from("milad-shop-products")
        .select(`* , 
        milad-shop-product-images(
        id ,  image_url , alt_text , is_main
                 )
        `)
        .eq("id", emallSingle);



    const { count, data: reviewsData } = await supabase
        .from("reviews")
        .select(`
    id,
    rate,
    comment,
    created_at,
    customer_id ,
    "milad-shop-customers"(
      id, full_name, email , customer_image
    )
  ` , { count: "exact" })
        .eq("product_id", myData[0].id);




    const result = calcualteAvgRate(reviewsData);



    return (
        <Container maxWidth={"lg"}>
            <Box sx={{ width: "100%", display: 'flex', flexWrap: "wrap", justifyContent: "center", alignContent: "center" }}>
                <BreadCrumbsComponents arrayOfPath={[{ id: 1, name: "صفحه اصلی", myHref: "/" }, { id: 2, name: "فروشگاه ", myHref: "/emall" }]} />

                <Box sx={{ display: { xs: "block", lg: "flex" } }}>
                    <ShowPictureInEmallSingle
                        srcOfImages={myData[0]["milad-shop-product-images"]}
                    />

                    <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                        <ShowRating rate={result} electedCount={count} />
                        <ShowTitle title={myData[0].name} price={myData[0].price} description={myData[0].descriptions} />
                        <ShowBuyPartWhenMdDown
                            image={myData[0]["milad-shop-product-images"][0].image_url}
                            name={myData[0].name}
                            price={myData[0].price}
                            colors={myData[0].colors}
                            min={0}
                            max={4}
                            idNumberOfProduct={myData[0].id}
                        />
                        <ShowInformation
                            id={myData[0].id}
                            name={myData[0].name}
                            price={myData[0].price}
                            image={myData[0]["milad-shop-product-images"][0].image_url}
                        />
                    </Box>
                </Box>

                <ShowTabs
                    allReviews={reviewsData}
                    details={myData[0].details}
                    meterial={myData[0].material}
                    sizes={myData[0].sizes}
                />

                <InfoBeforeBuyWithTitle />
            </Box>
            <NavigateUpButton />
        </Container>
    );
}
