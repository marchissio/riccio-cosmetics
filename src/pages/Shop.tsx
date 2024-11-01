import React, { useState } from "react";
import { Box, Typography, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductActions from "../components/ProductActions";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import PageHeader from "../components/PageHeader";
import SortFilterShop from "../components/SortFilterShop";
import ViewToggleShop from "../components/ViewToggleShop";

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

const Shop: React.FC = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const [notification, setNotification] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [sortOrder, setSortOrder] = useState<string>("newest");
    const [view, setView] = useState<"grid" | "list">("grid");

    const itemsPerPage = 8;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handleToggleFavorite = (product: Product) => {
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

    const handleSortChange = (order: string) => {
        setSortOrder(order);
    };

    const handlePageChange = (value: number) => {
        setPage(value);
    };

    const handleViewChange = (viewType: "grid" | "list") => {
        setView(viewType);
    };

    const sortedProducts = [...products].sort((a, b) => {
        const aPrice = a.price || 0;
        const bPrice = b.price || 0;

        if (sortOrder === "priceAsc") return aPrice - bPrice;
        if (sortOrder === "priceDesc") return bPrice - aPrice;
        return 0;
    });

    const displayedProducts = sortedProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <PageHeader title="Shop" subtitle="Home - Shop" />

            <Box
                sx={{
                    padding: "20px",
                    backgroundColor: "#fff",

                    // textAlign: "center",
                }}
            >
                <SortFilterShop
                    sortOrder={sortOrder}
                    onSortChange={handleSortChange}
                />

                {/* View Toggle */}
                <ViewToggleShop
                    currentView={view}
                    onChangeView={handleViewChange}
                />

                {/* Product List View */}
                {view === "list" ? (
                    <Box
                        sx={{
                            maxWidth: "1170px",
                            margin: "0 auto",
                           
                        }}
                    >
                        {displayedProducts.map((product) => (
                            <Box
                                key={product.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    backgroundColor: "#f0f0f0",
                                    margin: "30px 0", 
                                    border: "1px solid #ebebeb",
                                    padding: "25px",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                }}
                            >
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        width: "300px",
                                        height: "363px",
                                        objectFit: "cover",
                                        marginRight: "20px",
                                    }}
                                />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontFamily: '"Oswald", sans-serif',
                                            fontSize: "24px",
                                            fontWeight: 400,
                                            marginBottom: "15px",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: '"Oswald", sans-serif',
                                            color: "#22222",
                                            marginBottom: "15px",
                                            fontSize: "24px",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        $
                                        {product.price
                                            ? product.price.toFixed(2)
                                            : "0.00"}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            marginBottom: "15px",
                                            fontStyle: "normal",
                                            fontWeight: "normal",
                                            lineHeight: "28px",
                                            fontFamily:
                                                '"Open-sans", sans-serif',
                                            fontSize: "15px",
                                            color: "#22222",
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        We provide the best Beard oil all over
                                        the world. We are the best store for
                                        Beard Oil. You can buy our product
                                        without any hesitation because we always
                                        care about our product quality and
                                        maintain it properly, so you can trust
                                        us.
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            marginTop: "85px", 
                                            marginLeft: "1rem",
                                        }}
                                    >
                                        <ProductActions
                                            product={product}
                                            isFavorited={favorites.some(
                                                (item) => item.id === product.id
                                            )}
                                            onToggleFavorite={
                                                handleToggleFavorite
                                            }
                                            onAddToCart={handleAddToCart}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    // Product Grid View
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            maxWidth: "1200px",
                            margin: "0 auto",
                        }}
                    >
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <Box
                                    key={product.id}
                                    sx={{
                                        flex: "1 0 23%",
                                        margin: "0 0.3rem 1rem",
                                        position: "relative",
                                    }}
                                >
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
                                            "&:hover .overlay": { opacity: 1 },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "80%",
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
                                            <Typography
                                                sx={{
                                                    fontFamily:
                                                        '"Oswald", sans-serif',
                                                    fontWeight: "normal",
                                                    fontSize: "0.875rem",
                                                    marginTop: "5px",
                                                    color: "#000",
                                                }}
                                            >
                                                {`$${(
                                                    product.price ?? 0
                                                ).toFixed(2)}`}
                                            </Typography>
                                            <Box
                                                className="overlay"
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor:
                                                        "rgba(0, 0, 0, 0.5)",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    opacity: 0,
                                                    transition:
                                                        "opacity 0.3s ease",
                                                }}
                                            >
                                                <ProductActions
                                                    product={product}
                                                    isFavorited={favorites.some(
                                                        (item) =>
                                                            item.id ===
                                                            product.id
                                                    )}
                                                    onToggleFavorite={
                                                        handleToggleFavorite
                                                    }
                                                    onAddToCart={
                                                        handleAddToCart
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography>No products found</Typography>
                        )}
                    </Box>
                )}
                {/* Pagination */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "40px",
                    }}
                >
                    <Box
                        onClick={() => handlePageChange(Math.max(page - 1, 1))}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            marginRight: "20px",
                            opacity: page === 1 ? 0.5 : 1,
                            fontFamily: "Oswald",
                            fontSize: "16px",
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <Typography
                            variant="body2"
                            sx={{ marginLeft: "4px", fontFamily: "Oswald" }}
                        >
                            Back
                        </Typography>
                    </Box>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <Box
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            sx={{
                                margin: "0 5px",
                                cursor: "pointer",
                                fontWeight:
                                    page === index + 1 ? "bold" : "normal",
                                textDecoration:
                                    page === index + 1 ? "underline" : "none",
                                fontFamily: '"Oswald", sans-serif',
                                fontSize: "16px",
                            }}
                        >
                            {index + 1}
                        </Box>
                    ))}

                    <Box
                        onClick={() =>
                            handlePageChange(Math.min(page + 1, totalPages))
                        }
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            opacity: page === totalPages ? 0.5 : 1,
                            fontFamily: '"Oswald", sans-serif',
                            fontSize: "16px",
                            marginLeft: "20px",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                marginRight: "4px",
                                fontFamily: "Oswald",
                                font: "16px",
                            }}
                        >
                            Next
                        </Typography>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Box>
                </Box>
            </Box>
            {/* Snackbar for notifications */}
            <Snackbar
                open={!!notification}
                message={notification}
                autoHideDuration={3000}
                onClose={() => setNotification(null)}
            />
        </>
    );
};

export default Shop;
