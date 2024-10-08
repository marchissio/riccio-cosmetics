import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartTable from "../components/CartTable";
import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";

const CartPage: React.FC = () => {
    // Access cart items from the Redux store
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <Box>
            <PageHeader title="Cart" subtitle="Home - Cart" />

            <Box sx={{ marginTop: "100px" }}>
                {cartItems.length > 0 ? (
                    // Render CartTable without the cart prop
                    <CartTable />
                ) : (
                    <h2
                        style={{
                            textAlign: "center",
                            fontFamily: '"Oswald", sans-serif',
                            fontSize: "2rem",
                            marginTop: "180px",
                        }}
                    >
                        No items in your cart.
                    </h2>
                )}
            </Box>
        </Box>
    );
};

export default CartPage;
