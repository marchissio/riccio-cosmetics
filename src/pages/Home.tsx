import React from "react";
import ImageSlider from "../components/ImageSlider";
import NewArrivals from "../components/NewArrivals";
import RandomText from "../components/RandomText";

const Home: React.FC = () => {
    return (
        <>
            <ImageSlider />
            <RandomText />
            <NewArrivals />
        </>
    );
};

export default Home;
