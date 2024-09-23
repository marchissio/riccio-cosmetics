import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductActions from "./ProductActions";

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

const ProductGrid = () => {
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
                        fontFamily: '"Oswald", sans-serif',
                        fontSize: "1rem",
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
                    maxWidth: "100%",
                    margin: "0 auto",
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            flexBasis: "calc(25% - 20px)",
                            margin: "10px",
                            position: "relative",
                        }}
                    >
                        {/* Grey Container */}
                        <Box
                            sx={{
                                width: "80%",
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
                                    width: "80%",
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

                                {/* Overlay with buttons */}
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
                                    <ProductActions />
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
