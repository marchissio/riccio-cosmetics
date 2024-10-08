import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import HeartIcon from "../components/HeartIcon";
import CartModal from "./CartModal";
import logo from "../assets/buba.jpg";
import { Routes } from "../enums/routes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { loadFavorites } from "../store/favoriteSlice";
import { loadCart } from "../store/cartSlice";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isCartModalOpen, setCartModalOpen] = useState(false);

    useEffect(() => {
        if (isCartModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isCartModalOpen]);

    useEffect(() => {
        if (location.pathname === "/cart") {
            setCartModalOpen(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        dispatch(loadFavorites());
        dispatch(loadCart());
    }, [dispatch]);

    const favoriteProducts = useSelector(
        (state: RootState) => state.favorites.items
    );
    const favoriteCount = favoriteProducts.length;

    const cartItems = useSelector((state: RootState) => state.cart.items);

    // Calculate total quantity instead of price
    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleOpenWishlist = () => navigate("/wishlist");
    const handleCartClick = () => setCartModalOpen(true);
    const handleCloseCartModal = () => setCartModalOpen(false);

    return (
        <AppBar
            position="absolute"
            sx={{
                backgroundColor: "#bf9b5c",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                fontFamily: '"Oswald", sans-serif',
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "80px",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "45px", cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "2rem",
                        flexGrow: 1,
                        justifyContent: "center",
                        fontFamily: '"Oswald", sans-serif',
                    }}
                >
                    {Object.keys(Routes).map((key) => (
                        <Button
                            key={key}
                            color="inherit"
                            component={Link}
                            to={Routes[key as keyof typeof Routes]}
                            sx={{
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "30px",
                                letterSpacing: "0.50px",
                                color: "black",
                                fontFamily: '"Oswald", sans-serif',
                                padding: "25px 0",
                            }}
                            onClick={() => setCartModalOpen(false)}
                        >
                            {key}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <IconButton onClick={handleOpenWishlist}>
                        <Badge badgeContent={favoriteCount} color="error">
                            <HeartIcon
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    fill: "transparent",
                                    stroke: "black",
                                    strokeWidth: "2",
                                }}
                            />
                        </Badge>
                    </IconButton>
                    <IconButton
                        sx={{ color: "black" }}
                        onClick={handleCartClick}
                    >
                        <Badge badgeContent={totalQuantity} color="error">
                            {" "}
                            {/* Update to show quantity */}
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
            {/* Cart Modal */}
            <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />
        </AppBar>
    );
};

export default Navbar;
