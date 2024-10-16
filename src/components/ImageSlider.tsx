import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const images = [
    "https://mrbeard-egypt.com/cdn/shop/products/BENG0114_1445x.jpg?v=1687129139",
    "https://purador.com/cdn/shop/products/BeardOilLifestyle3.jpg?v=1685227061",
    "https://unclejimmyproducts.com/cdn/shop/products/UncleJimmylifestyleBeardOil-min_2048x2048.jpg?v=1630615395",
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        startSliderInterval();
        return () => stopSliderInterval();
    }, []);

    const startSliderInterval = () => {
        stopSliderInterval();
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
    };

    const stopSliderInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        startSliderInterval();
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        startSliderInterval();
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "calc(100vh - 80px)", // Full screen minus the height of the Navbar
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginTop: "80px", // Adjust to match your Navbar height
            }}
        >
            {images.map((image, index) => (
                <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`Slide ${index}`}
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: index === currentIndex ? 3 : 0,
                        transition: "opacity 1s ease-in-out",
                        zIndex: index === currentIndex ? 3 : 0, // Set z-index for images
                    }}
                />
            ))}

            <IconButton
                onClick={handlePrevClick}
                sx={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#bf9b5c",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "60px",
                    height: "60px",
                    zIndex: 2, // Ensure buttons are above images
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    "& .MuiSvgIcon-root": {
                        fontSize: "2.5rem",
                    },
                }}
            >
                <ChevronLeftIcon />
            </IconButton>

            <IconButton
                onClick={handleNextClick}
                sx={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#bf9b5c",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "60px",
                    height: "60px",
                    zIndex: 2, // Ensure buttons are above images
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    },
                    "& .MuiSvgIcon-root": {
                        fontSize: "2.5rem",
                    },
                }}
            >
                <ChevronRightIcon />
            </IconButton>
        </Box>
    );
};

export default ImageSlider;
