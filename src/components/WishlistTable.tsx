import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";
import ProductTable from "./ProductTable";
import { Snackbar } from "@mui/material";

interface WishlistTableProps {
    wishlist: Product[];
}

const WishlistTable: React.FC<WishlistTableProps> = ({ wishlist }) => {
    const dispatch = useDispatch();

    const [quantities, setQuantities] = useState<{ [id: number]: number }>(
        wishlist.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );

    const [notification, setNotification] = useState<string | null>(null);

    const handleAddToCart = (item: Product) => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price || 0,
                quantity: quantities[item.id],
                img: item.img,
            })
        );
        setNotification(`Added ${item.name} to cart!`);

        if (quantities[item.id] > 1) {
            setQuantities((prev) => ({
                ...prev,
                [item.id]: 1,
            }));
        }
    };

    const handleRemoveFromWishlist = (item: Product) => {
        dispatch(
            toggleFavorite({
                id: item.id,
                name: item.name,
                price: item.price || 0,
                img: item.img,
            })
        );
    };

    const handleIncrement = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const handleDecrement = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 1,
        }));
    };

    const cartProducts = wishlist.map((item) => ({
        ...item,
        quantity: quantities[item.id],
    }));

    return (
        <div>
            <ProductTable
                products={cartProducts}
                quantities={quantities}
                onAddToCart={handleAddToCart}
                onRemove={handleRemoveFromWishlist}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                isWishlist={false}
            />

            {/* Snackbar for notifications */}
            <Snackbar
                open={Boolean(notification)}
                message={notification}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setNotification(null)}
                autoHideDuration={3000}
            />
        </div>
    );
};

export default WishlistTable;
