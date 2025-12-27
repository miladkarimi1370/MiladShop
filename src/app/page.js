import Banner from "./components/banner/Banner";
import ShowBrands from "./components/brands/ShowBrands";
import DeadLine from "./components/deadline/Deadline";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import InfoBeforeBuy from "./components/infoBeforeBuy/InfoBeforeBuy";
import MainSlider from "./components/mainSlider/MainSlider";
import NavigateUpButton from "./components/navigateUpButton/NavigateUpButton";

import OfferForSale from "./components/offerForSale/OfferForSale";
import OurCategories from "./components/ourCategories/OurCategories";
import Popularity from "./components/popularity/Popularity";
import ShowPosts from "./components/posts/ShowPosts";

export default function Home() {



  return (
    <>

      <MainSlider />
      <OfferForSale />
      <OurCategories />
      <Banner />
      <Popularity />
      <InfoBeforeBuy />
      <DeadLine />
      <FeaturedProducts />
      <ShowBrands />
      <ShowPosts />
      <NavigateUpButton />
    </>

  )
}