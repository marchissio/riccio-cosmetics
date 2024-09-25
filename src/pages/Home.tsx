import React from "react";
import ImageSlider from "../components/ImageSlider";
import NewArrivals from "../components/NewArrivals";
import RandomText from "../components/RandomText";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import FooterInfo from "../components/FooterInfo";

const Home: React.FC = () => {
    return (
        <>
            <ImageSlider />
            <RandomText />
            <NewArrivals />
            <Banner />
            <ProductGrid />
            <FooterInfo />
        </>
    );
};

export default Home;
