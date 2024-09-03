import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/buba.jpg";

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: "#bf9b5c",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
            }}
        >
            <Toolbar
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "80px",
                }}
            >
                <Box style={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "45px", cursor: "pointer" }}
                        onClick={() => {}}
                    />
                </Box>

                <Box
                    style={{
                        display: "flex",
                        gap: "2rem",
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {["HOME", "ABOUT", "SHOP", "BLOG", "PAGES", "CONTACT"].map(
                        (text) => (
                            <Button
                                key={text}
                                color="inherit"
                                onClick={handleMenuClick}
                                style={{
                                    fontWeight: "bold",
                                    color: "black",
                                    fontFamily: "Libel Suit, sans-serif",
                                }}
                            >
                                {text}
                            </Button>
                        )
                    )}
                </Box>

                <Box style={{ display: "flex", gap: "1rem" }}>
                    <IconButton style={{ color: "black" }}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton style={{ color: "black" }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    {["HOME", "ABOUT", "SHOP", "BLOG", "PAGES", "CONTACT"].map(
                        (text) => (
                            <MenuItem key={text} onClick={handleMenuClose}>
                                {text}
                            </MenuItem>
                        )
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
