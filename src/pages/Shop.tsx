import React, { useState } from "react";
import {
    Box,
    Typography,
    Snackbar,
    Pagination,
    PaginationItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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

    const itemsPerPage = 4;
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

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
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
                    textAlign: "center",
                }}
            >
                {/* Sort and Filter */}
                <SortFilterShop
                    sortOrder={sortOrder}
                    onSortChange={handleSortChange}
                />

                {/* Product Grid */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {displayedProducts.map((product) => (
                        <Box
                            key={product.id}
                            sx={{
                                flex: "1 0 23%",
                                margin: "0 0.3rem 1rem",
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
                                    "&:hover .overlay": { opacity: 1 },
                                }}
                            >
                                {/* Product Card */}
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
                                            fontFamily: '"Oswald", sans-serif',
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            marginTop: "10px",
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: '"Oswald", sans-serif',
                                            fontWeight: "normal",
                                            fontSize: "0.875rem",
                                            marginTop: "5px",
                                            color: "#000",
                                        }}
                                    >
                                        {`$${(product.price ?? 0).toFixed(2)}`}
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
                        </Box>
                    ))}
                </Box>

                {/* Pagination */}
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    sx={{
                        display: "flex",
                        marginTop: "80px",
                        justifyContent: "center",
                        "& .MuiPaginationItem-root": {
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#000",
                        },
                        "& .Mui-selected": {
                            backgroundColor: "#000",
                            color: "#fff",
                        },
                    }}
                    renderItem={(item) => {
                        if (item.type === "previous") {
                            return (
                                <PaginationItem {...item}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "#000",
                                        }}
                                    >
                                        <ArrowBackIcon />
                                        <Typography
                                            variant="body2"
                                            sx={{ marginLeft: "4px" }}
                                        >
                                            Back
                                        </Typography>
                                    </Box>
                                </PaginationItem>
                            );
                        }
                        if (item.type === "next") {
                            return (
                                <PaginationItem {...item}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: "#000",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                marginLeft: "4px",
                                                color: "#000 !important",
                                            }}
                                        >
                                            Next
                                        </Typography>
                                        <ArrowForwardIcon />
                                    </Box>
                                </PaginationItem>
                            );
                        }
                        return <PaginationItem {...item} />;
                    }}
                />

                {/* Snackbar for notifications */}
                <Snackbar
                    open={Boolean(notification)}
                    message={notification}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={() => setNotification(null)}
                    autoHideDuration={3000}
                />
            </Box>
        </>
    );
};

export default Shop;
