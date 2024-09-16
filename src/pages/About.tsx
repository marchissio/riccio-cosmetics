import React, { useEffect } from "react";
import RandomText from "../components/RandomText";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <RandomText />
        </>
    );
};

export default About;
