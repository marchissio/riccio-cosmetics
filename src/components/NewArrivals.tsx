import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Example product images (replace these with actual product images)
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const products = [
    { id: 1, img: product1, name: "Product 1" },
    { id: 2, img: product2, name: "Product 2" },
    { id: 3, img: product3, name: "Product 3" },
    { id: 4, img: product4, name: "Product 4" },
    { id: 5, img: product5, name: "Product 5" },
    { id: 6, img: product6, name: "Product 6" },
    { id: 7, img: product7, name: "Product 7" },
    { id: 8, img: product8, name: "Product 8" },
];

const ITEMS_PER_PAGE = 4; // Number of products to display per page

const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, products.length - ITEMS_PER_PAGE)
        );
    };

    return (
        <Box
            sx={{
                padding: "50px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
                position: "relative",
            }}
        >
            {/* New Arrivals Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                New Arrivals
            </Typography>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "1.1rem",
                    marginBottom: "40px",
                }}
            >
                Some of our customers say that they trust us and buy our product
                without any hesitation because they believe in us and are always
                happy to buy our products.
            </Typography>

            {/* Product Container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    maxWidth: "100%",
                    margin: "0 auto",
                    overflow: "hidden",
                }}
            >
                {/* Left Arrow */}
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    sx={{
                        position: "absolute",
                        left: 0,
                        zIndex: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        "&:disabled": { color: "#ccc" },
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Products Grid */}
                <Box
                    sx={{
                        display: "flex",
                        width: "80%",
                        overflowX: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            transition: "transform 0.3s ease-in-out",
                            transform: `translateX(-${
                                currentIndex * (100 / ITEMS_PER_PAGE)
                            }%)`,
                            width: `calc(${ITEMS_PER_PAGE * 100}% + ${
                                products.length - ITEMS_PER_PAGE
                            } * ${100 / ITEMS_PER_PAGE}%)`,
                        }}
                    >
                        {products.map((product) => (
                            <Box
                                key={product.id}
                                sx={{
                                    width: "25%", // 100% divided by 4 items
                                    flexShrink: 0,
                                    padding: "0 10px",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "60%",
                                        height: "250px",
                                        borderRadius: "10px",
                                        backgroundColor: "#fff",
                                        boxShadow:
                                            "0 4px 12px rgba(0, 0, 0, 0.1)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        style={{
                                            width: "70%",
                                            height: "150px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: '"Oswald", sans-serif',
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Arrow */}
                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex >= products.length - ITEMS_PER_PAGE}
                    sx={{
                        position: "absolute",
                        right: 0,
                        zIndex: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        "&:disabled": { color: "#ccc" },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default NewArrivals;
