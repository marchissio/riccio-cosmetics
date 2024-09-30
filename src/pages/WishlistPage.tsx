import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WishlistTable from "../components/WishlistTable";
import { Box } from "@mui/material";
import { Product } from "../components/interface/types";
import PageHeader from "../components/PageHeader"; 

const WishlistPage: React.FC = () => {
    const wishlistItems = useSelector(
        (state: RootState) => state.favorites.items
    );

    return (
        <Box>
            <PageHeader title="Wishlist" subtitle="Home - Wishlist" />

            <Box sx={{ marginTop: "100px" }}>
                {wishlistItems.length > 0 ? (
                    <WishlistTable wishlist={wishlistItems as Product[]} />
                ) : (
                    <h2
                        style={{
                            textAlign: "center",
                            fontFamily: '"Oswald", sans-serif',
                            fontSize: "2rem",
                            marginTop: "180px",
                        }}
                    >
                        No items in your wishlist.
                    </h2>
                )}
            </Box>
        </Box>
    );
};

export default WishlistPage;
