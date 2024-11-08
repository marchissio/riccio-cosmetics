import React, { useState, useEffect } from "react";
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
import logo from "../assets/beardLogo.webp";
import { Routes } from "../enums/routes";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { loadFavorites } from "../store/favoriteSlice";
import { loadCart } from "../store/cartSlice";
import Menu from "@mui/material/Menu";
import Pages from "../pages/Pages";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handlePagesClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePagesClose = () => {
        setAnchorEl(null);
    };

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
                backgroundColor: "#d0a97e",
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
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        background: "transparent",
                    }}
                >
                    <picture>
                        <source srcSet={logo} type="image/webp" />
                        <img
                            // src="/path/to/fallback/logo.png"
                            alt="Logo"
                            style={{
                                height: "45px",
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                border: "none",
                                boxShadow: "none",
                                display: "block",
                                WebkitAppearance: "none",
                            }}
                            onClick={() => navigate("/")}
                        />
                    </picture>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "3rem",
                        flexGrow: 1,
                        justifyContent: "center",
                        fontFamily: '"Oswald", sans-serif',
                    }}
                >
                    {Object.keys(Routes).map((key) => {
                        if (key === "PAGES") return null;

                        return (
                            <Button
                                key={key}
                                color="inherit"
                                component={Link}
                                to={Routes[key as keyof typeof Routes]}
                                sx={{
                                    fontWeight: "600",
                                    fontSize: "16px",
                                    lineHeight: "30px",
                                    letterSpacing: "0.25px",
                                    color: "black",
                                    fontFamily: '"Oswald", sans-serif',
                                    padding: "25px 0",
                                }}
                                onClick={() => {
                                    setCartModalOpen(false);
                                    handlePagesClose();
                                }}
                            >
                                {key}
                            </Button>
                        );
                    })}

                    <Box sx={{ position: "relative" }}>
                        <Button
                            onClick={handlePagesClick}
                            sx={{
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "30px",
                                letterSpacing: "0.25px",
                                color: "black",
                                fontFamily: '"Oswald", sans-serif',
                                padding: "25px 0",
                            }}
                        >
                            Pages
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handlePagesClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                        >
                            <Pages onClose={handlePagesClose} />{" "}
                            {/* Pass close handler */}
                        </Menu>
                    </Box>
                </Box>

                <Box
                    sx={{ display: "flex", gap: "1rem", position: "relative" }}
                >
                    {/* Wishlist Icon */}
                    <IconButton onClick={handleOpenWishlist}>
                        <HeartIcon
                            style={{
                                width: "24px",
                                height: "24px",
                                fill: "transparent",
                                stroke: "black",
                                strokeWidth: "2",
                            }}
                        />
                        {/* Count in a smaller circle */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-4px",
                                right: "-4px",
                                backgroundColor: "#f4f4f4",
                                borderRadius: "100%",
                                padding: "2px 5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "12px",
                                lineHeight: "16px",
                                fontWeight: 600,
                                letterSpacing: "0.25px",
                                fontFamily: '"Oswald", sans-serif',
                                color: "#222222",
                                border: "2px solid #d0a97e",
                            }}
                        >
                            {favoriteCount}
                        </Box>
                    </IconButton>

                    {/* Shopping Cart Icon with Count and Price */}
                    <IconButton
                        sx={{ color: "black" }}
                        onClick={handleCartClick}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ShoppingCartIcon
                                sx={{ width: "24px", height: "24px" }}
                            />
                            {/* Display count and price next to the cart icon */}
                            <Box
                                sx={{
                                    marginLeft: "8px",
                                    fontSize: "16px",
                                    lineHeight: "30px",
                                    fontWeight: 600,
                                    letterSpacing: "0.25px",
                                    fontFamily: '"Oswald", sans-serif',
                                    color: "#222222",
                                }}
                            >
                                <span>
                                    {totalQuantity} - $
                                    {cartItems
                                        .reduce(
                                            (total, item) =>
                                                total +
                                                (item.price || 0) *
                                                    item.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                </span>
                            </Box>
                        </Box>
                    </IconButton>
                </Box>
            </Toolbar>
            <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />
        </AppBar>
    );
};

export default Navbar;
