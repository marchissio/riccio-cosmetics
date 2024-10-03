import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";
import ProductTable from "./ProductTable";

interface CartTableProps {
    cart: Product[];
}

const CartTable: React.FC<CartTableProps> = ({ cart }) => {
    const dispatch = useDispatch();

    const [quantities, setQuantities] = useState<{ [id: number]: number }>(
        cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );

    const handleRemoveFromCart = (item: Product) => {
        dispatch(removeFromCart(item.id));
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
                products={cart}
                quantities={quantities}
                onRemove={handleRemoveFromCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                isWishlist={true}
            />
        </div>
    );
};

export default CartTable;
