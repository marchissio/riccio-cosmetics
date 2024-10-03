import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";
import ProductTable from "./ProductTable"; // Import the ProductTable component

interface WishlistTableProps {
    wishlist: Product[];
}

const WishlistTable: React.FC<WishlistTableProps> = ({ wishlist }) => {
    const dispatch = useDispatch();

    const [quantities, setQuantities] = useState<{ [id: number]: number }>(
        wishlist.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );

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

    return (
        <div>
            {/* Use the ProductTable component here */}
            <ProductTable
                products={wishlist}
                quantities={quantities}
                onAddToCart={handleAddToCart}
                onRemove={handleRemoveFromWishlist}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                isWishlist={false} // Pass true for wishlist
            />
        </div>
    );
};

export default WishlistTable;
