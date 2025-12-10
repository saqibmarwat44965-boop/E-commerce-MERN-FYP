import React from 'react'
import HeaderTop from "./home-sub-components/HeaderTop.js";
import HeaderBottom from "./home-sub-components/HeaderBottom.js";
import Slider from "./home-sub-components/Slider.js";
import Main_Products from "./home-sub-components/MainProducts.js";
import ImageFilter from "./home-sub-components/ImageFilter.js";
import FeatureProduct from "./home-sub-components/FeatureProduct.js";
import ScrollButton from "./home-sub-components/ScrollButton.js";
import Footer from "./home-sub-components/Footer.js";

function Home(props) {
  return (
    <div>

        <HeaderTop />
        <HeaderBottom />
        <Slider />
        <Main_Products />
        <ImageFilter addToCart={props.addToCart} addToWishlist={ props.addToWishlist} />
        <FeatureProduct />
        <ScrollButton />
        <Footer />

    </div>
  )
}

export default Home