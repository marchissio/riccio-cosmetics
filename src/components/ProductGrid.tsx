import { Box, Typography, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductActions from "./ProductActions";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "./interface/types.ts";
import { useState } from "react";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const products: Product[] = [
    { id: 1, name: "Product 1", price: 10, quantity: 1, img: product1 },
    { id: 2, name: "Product 2", price: 15, quantity: 1, img: product2 },
    { id: 3, name: "Product 3", price: 20, quantity: 1, img: product3 },
    { id: 4, name: "Product 4", price: 25, quantity: 1, img: product4 },
    { id: 5, name: "Product 5", price: 30, quantity: 1, img: product5 },
    { id: 6, name: "Product 6", price: 35, quantity: 1, img: product6 },
    { id: 7, name: "Product 7", price: 40, quantity: 1, img: product7 },
    { id: 8, name: "Product 8", price: 45, quantity: 1, img: product8 },
];

const ProductGrid = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const [notification, setNotification] = useState<string | null>(null);

    const isProductFavorited = (id: number) => {
        return favorites.some((item) => item.id === id);
    };

    const handleToggleFavorite = (product: any) => {
        dispatch(toggleFavorite(product));
    };

    const handleAddToCart = (product: Product) => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price || 0,
                quantity: 1,
                img: product.img,
            })
        );
        setNotification(`Added ${product.name} to cart!`);
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    return (
        <Box
            sx={{
                padding: "250px",
                paddingBottom: 0,
                backgroundColor: "#fff",
                textAlign: "center",
                marginLeft: "90px",
            }}
        >
            <Box
                sx={{
                    marginTop: "40px",
                    marginLeft: "30px",
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: '"Oswald", sans-serif',
                        fontWeight: "bold",
                        borderBottom: "4px solid #f5c242",
                        display: "inline-block",
                        marginBottom: "10px",
                    }}
                >
                    Popular Products
                </Typography>
                <Typography
                    sx={{
                        fontFamily: '"Open-sans", sans-serif',
                        fontSize: "15px",
                        lineHeight: "1.5",
                        marginBottom: "60px",
                    }}
                >
                    Some of our customers say that they trust us and buy our
                    product without any <br /> hesitation because they believe
                    in us and are always happy to buy our products.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px", // Use a smaller gap between products
                    marginLeft: "calc(2rem)", // Adjust side margins if necessary
                    marginRight: "calc(2rem)", // Adjust side margins if necessary
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            flex: "1 0 21%",
                            margin: "0 calc(0.25rem) 0.5rem",
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                border: "1px solid #ebebeb",
                                width: "270px",
                                height: "370px", // Increased height to fit footer
                                backgroundColor: "#f4f4f4",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                overflow: "hidden",
                                position: "relative",
                                paddingTop: "20px",
                                transition: "transform 0.3s ease",
                                "&:hover .overlay": {
                                    opacity: 1,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "85%",
                                    height: "85%",
                                    backgroundColor: "#fff",
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
                            </Box>
                            {/* Name and Price Section */}
                            <Box
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                    backgroundColor: "#f4f4f4",
                                    padding: "10px 0",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Oswald",
                                        fontWeight: "400",
                                        fontSize: "18px",
                                        color: "#22222",
                                    }}
                                >
                                    {product.name}
                                </Typography>

                                {/* White Divider Line */}
                                <Box
                                    sx={{
                                        width: "100%", // Adjust width as needed
                                        height: "1px",
                                        backgroundColor: "#fff",
                                        margin: "8px auto", // Centered and with margin
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontFamily: '"Open-sans", sans-serif',
                                        fontSize: "18px",
                                        paddingBottom: "10px",
                                        lineHeight: "21px",
                                        color: "#22222",
                                        fontWeight: "500",
                                    }}
                                >
                                    $
                                    {product.price
                                        ? product.price.toFixed(2)
                                        : "0.00"}
                                </Typography>
                            </Box>

                            <Box
                                className="overlay"
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
                                    isFavorited={isProductFavorited(product.id)}
                                    onToggleFavorite={handleToggleFavorite}
                                    onAddToCart={handleAddToCart}
                                />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Snackbar
                open={Boolean(notification)}
                message={notification}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setNotification(null)}
                autoHideDuration={3000}
            />
        </Box>
    );
};

export default ProductGrid;
