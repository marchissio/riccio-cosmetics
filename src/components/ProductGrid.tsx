import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProductActions from "./ProductActions";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoriteSlice";
import { Product } from "./interface/types.ts";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";

const products: Product[] = [
    { id: 1, name: "Product1", price: 10, quantity: 1, img: product1 },
    { id: 2, name: "Product2", price: 15, quantity: 1, img: product2 },
    { id: 3, name: "Product3", price: 20, quantity: 1, img: product3 },
    { id: 4, name: "Product4", price: 25, quantity: 1, img: product4 },
    { id: 5, name: "Product5", price: 30, quantity: 1, img: product5 },
    { id: 6, name: "Product6", price: 35, quantity: 1, img: product6 },
    { id: 7, name: "Product7", price: 40, quantity: 1, img: product7 },
    { id: 8, name: "Product8", price: 45, quantity: 1, img: product8 },
];

const ProductGrid = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);

    const isProductFavorited = (id: number) => {
        return favorites.some((item) => item.id === id);
    };

    const handleToggleFavorite = (product: any) => {
        dispatch(toggleFavorite(product));
    };
    return (
        <Box
            sx={{
                padding: "50px",
                backgroundColor: "#fff",
                textAlign: "center",
                marginLeft: "90px",
            }}
        >
            {/* Popular Products Section */}
            <Box
                sx={{
                    marginTop: "40px",
                    marginLeft: "0px",
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
                <Box
                    sx={{
                        width: "100%",
                        height: "4px",
                    }}
                />
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
                    marginLeft: "calc(-1rem / 2)",
                    marginRight: "calc(-1rem / 2)",
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            flex: "1 0 21%",
                            margin: "0 calc(1rem / 2) 1rem",
                            position: "relative",
                        }}
                    >
                        {/* Grey Container */}
                        <Box
                            sx={{
                                width: "280px",
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
                            {/* Product Card */}
                            <Box
                                sx={{
                                    width: "75%",
                                    height: "90%",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
                                        fontFamily: '"Oswald", sans-serif',
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        marginTop: "10px",
                                    }}
                                >
                                    {product.name}
                                </Typography>

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
                                        isFavorited={isProductFavorited(
                                            product.id
                                        )}
                                        onToggleFavorite={handleToggleFavorite}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProductGrid;
