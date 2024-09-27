import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WishlistTable from "../components/WishlistTable";
import { Box, Typography } from "@mui/material";
import { Product } from "../components/interface/types";

const WishlistPage: React.FC = () => {
    const wishlistItems = useSelector(
        (state: RootState) => state.favorites.items
    );

    return (
        <Box sx={{ padding: "0px", paddingTop: "55px" }}>
            {/* Navbar - Always visible */}
            <Box
                sx={{
                    backgroundColor: "#0b1521",
                    color: "#fff",
                    padding: "100px",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontFamily: '"Oswald", sans-serif !important',
                    marginBottom: "5rem",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{ fontFamily: '"Oswald", sans-serif' }}
                >
                    Wishlist
                </Typography>
                <Typography variant="body1">Home - Wishlist</Typography>
            </Box>

            {wishlistItems.length > 0 ? (
                <WishlistTable wishlist={wishlistItems as Product[]} />
            ) : (
                <Typography>No items in your wishlist.</Typography>
            )}
        </Box>
    );
};

export default WishlistPage;
