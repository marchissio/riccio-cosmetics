// WishlistPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WishlistTable from "../components/WishlistTable";
import { Box, Typography } from "@mui/material";
import { Product } from "../components/interface/types"; // Adjust the import based on your structure

const WishlistPage: React.FC = () => {
    const wishlistItems = useSelector(
        (state: RootState) => state.favorites.items
    );

    // Convert products to wishlist items
    const wishlistItemsMapped = wishlistItems.map((item: Product) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity || 1, // Provide a default value if necessary
        image: item.img, // Assuming `img` is the correct property
    }));

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
                Your Wishlist
            </Typography>
            {wishlistItemsMapped.length > 0 ? (
                <WishlistTable wishlist={wishlistItemsMapped} />
            ) : (
                <Typography>No items in your wishlist.</Typography>
            )}
        </Box>
    );
};

export default WishlistPage;
