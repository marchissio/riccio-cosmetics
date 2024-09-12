import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeartIcon from "../components/HeartIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/buba.jpg";
import { Routes } from "../enums/routes";

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
            sx={{
                backgroundColor: "#bf9b5c",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                fontFamily: '"Bebas Neue", sans-serif', 
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
                    fontFamily: '"Bebas Neue", sans-serif', 
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: "45px", cursor: "pointer" }}
                        onClick={() => {}}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "2rem",
                        flexGrow: 1,
                        justifyContent: "center",
                        fontFamily: '"Bebas Neue", sans-serif', 
                    }}
                >
                    {Object.keys(Routes).map((key) => (
                        <Button
                            key={key}
                            color="inherit"
                            component={Link}
                            to={Routes[key as keyof typeof Routes]}
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.2rem", 
                                color: "black",
                                fontFamily: '"Bebas Neue", sans-serif', 
                            }}
                        >
                            {key}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <IconButton>
                        <HeartIcon
                            style={{
                                width: "24px",
                                height: "24px",
                                fill: "transparent",
                                stroke: "black",
                                strokeWidth: "2",
                            }}
                        />
                    </IconButton>
                    <IconButton sx={{ color: "black" }}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    {Object.keys(Routes).map((key) => (
                        <MenuItem key={key} onClick={handleMenuClose}>
                            <Link
                                to={Routes[key as keyof typeof Routes]}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontFamily: '"Bebas Neue", sans-serif',  
                                }}
                            >
                                {key}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
