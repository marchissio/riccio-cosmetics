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
import logo from "../assets/buba.jpg";
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
                                    letterSpacing: "0.50px",
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
                                letterSpacing: "0.50px",
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
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
            <CartModal open={isCartModalOpen} onClose={handleCloseCartModal} />
        </AppBar>
    );
};

export default Navbar;
