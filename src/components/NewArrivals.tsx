import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import ProductActions from "./ProductActions";
import { Product } from "./interface/types";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import { RootState } from "../store/store";

const products: Product[] = [
    { id: 1, name: "Product 1", price: 10, img: product1 },
    { id: 2, name: "Product 2", price: 15, img: product2 },
    { id: 3, name: "Product 3", price: 20, img: product3 },
    { id: 4, name: "Product 4", price: 25, img: product4 },
    { id: 5, name: "Product 5", price: 30, img: product5 },
    { id: 6, name: "Product 6", price: 35, img: product6 },
    { id: 7, name: "Product 7", price: 40, img: product7 },
    { id: 8, name: "Product 8", price: 45, img: product8 },
];

const ITEMS_PER_PAGE = 4;

const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const dispatch = useDispatch();

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, products.length - ITEMS_PER_PAGE)
        );
    };

    const handleToggleFavorite = (product: Product) => {
        dispatch(toggleFavorite(product));
    };

    return (
        <Box
            sx={{
                padding: "50px",
                paddingLeft: "100px",
                paddingRight: "100px",
                backgroundColor: "#fff",
                textAlign: "left",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontFamily: '"Oswald", sans-serif',
                    fontWeight: "bold",
                    marginBottom: "20px",
                    marginLeft: "15%",
                }}
            >
                New Arrivals
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontFamily: '"Open-sans", sans-serif',
                    fontSize: "15px",
                    marginBottom: "40px",
                    marginLeft: "15%",
                }}
            >
                Some of our customers say that they trust us and buy our product
                without any <br /> hesitation because they believe in us and are
                always happy to buy our products.
            </Typography>

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
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    sx={{
                        position: "absolute",
                        left: "100px",
                        zIndex: 1,
                        backgroundColor: "#fff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        "&:disabled": { color: "#ccc" },
                    }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                <Box
                    sx={{
                        display: "flex",
                        width: "75%",
                        overflow: "hidden",
                        marginLeft: "4%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            transition: "transform 0.3s ease-in-out",
                            transform: `translateX(-${
                                (currentIndex / ITEMS_PER_PAGE) * 100
                            }%)`, // Adjust calculation for exact cube sizing
                            width: `${
                                (products.length / ITEMS_PER_PAGE) * 100
                            }%`, // Ensure the total width fits all items
                        }}
                    >
                        {products.map((product) => (
                            <Box
                                key={product.id}
                                sx={{
                                    flexBasis: "calc(100% / 4)", 
                                    flexShrink: 0,
                                    position: "relative",
                                   
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "87%", 
                                        height: "350px",
                                        backgroundColor: "#f4f4f4",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "relative",
                                        overflow: "hidden",
                                        transition: "transform 0.3s ease",
                                        "&:hover .overlay": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "77%",
                                            height: "90%",
                                            backgroundColor: "#fff",
                                            boxShadow:
                                                "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "relative",
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
                                                fontFamily:
                                                    '"Oswald", sans-serif',
                                                fontWeight: "bold",
                                                fontSize: "1rem",
                                                marginTop: "10px",
                                            }}
                                        >
                                            {product.name}
                                        </Typography>
                                        {product.price && (
                                            <Typography
                                                sx={{
                                                    fontFamily:
                                                        '"Open-sans", sans-serif',
                                                    fontSize: "0.9rem",
                                                    color: "#333",
                                                    marginTop: "5px",
                                                }}
                                            >
                                                ${product.price.toFixed(2)}
                                            </Typography>
                                        )}

                                        <Box
                                            className="overlay"
                                            sx={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.6)",
                                                color: "#fff",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                opacity: 0,
                                                transition: "opacity 0.3s ease",
                                            }}
                                        >
                                            <ProductActions
                                                product={product}
                                                isFavorited={favorites.some(
                                                    (item) =>
                                                        item.id === product.id
                                                )}
                                                onToggleFavorite={
                                                    handleToggleFavorite
                                                }
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex >= products.length - ITEMS_PER_PAGE}
                    sx={{
                        position: "absolute",
                        right: "100px",
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
