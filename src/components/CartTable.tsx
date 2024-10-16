import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { CartProduct } from "../store/cartSlice";
import ProductTable from "./ProductTable";
import { Box, Typography, Divider, Button } from "@mui/material";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const CartTable: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const handleRemoveFromCart = (item: CartProduct) => {
        dispatch(removeFromCart(item.id));
    };

    const handleIncrement = (id: number) => {
        const product = cart.find((item) => item.id === id);
        if (product) {
            dispatch(
                addToCart({
                    ...product,
                    quantity: 1,
                })
            );
        }
    };

    const handleDecrement = (id: number) => {
        const product = cart.find((item) => item.id === id);
        if (product) {
            if (product.quantity > 1) {
                dispatch(
                    addToCart({
                        ...product,
                        quantity: -1,
                    })
                );
            } else {
                handleRemoveFromCart(product);
            }
        }
    };

    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate("/checkout");
    };

    const quantities = cart.reduce((acc, item) => {
        acc[item.id] = item.quantity;
        return acc;
    }, {} as { [key: number]: number });

    const subtotal = cart
        .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
        .toFixed(2);

    const shippingCost = 0.0;
    const grandTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

    const typographyStyles = {
        fontSize: "20px",
        lineHeight: "23px",
        textDecoration: "underline",
        textTransform: "capitalize",
        fontWeight: 700,
        color: "#d0a97e",
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "1200px",
                    }}
                >
                    <ProductTable
                        products={cart}
                        quantities={quantities}
                        onRemove={handleRemoveFromCart}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                </Box>

                {/* Cart Summary Section */}
                <Box
                    className="cart-summary-wrap"
                    sx={{
                        backgroundColor: "#222222",
                        padding: "45px 50px",
                        marginTop: "50px",
                        color: "white",
                        width: "100%",
                        maxWidth: "300px",
                        textAlign: "left",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ ...typographyStyles, marginBottom: "30px" }}
                    >
                        Cart Summary
                    </Typography>

                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography>Sub Total</Typography>
                        <Typography>${subtotal}</Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Typography>Shipping Cost</Typography>
                        <Typography>${shippingCost.toFixed(2)}</Typography>
                    </Box>

                    <Divider sx={{ borderColor: "#ffff", margin: "20px 0" }} />

                    <Box display="flex" justifyContent="space-between">
                        <Typography sx={typographyStyles}>
                            Grand Total
                        </Typography>
                        <Typography sx={typographyStyles}>
                            ${grandTotal}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Update Count and Checkout Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "30px",
                    marginLeft: "120px",
                }}
            >
                {/* Checkout Button */}
                <Button
                    variant="contained"
                    sx={{
                        width: "140px",
                        borderRadius: "50px",
                        height: "36px",
                        lineHeight: "24px",
                        padding: "5px 20px",
                        fontWeight: 700,
                        backgroundColor: "#d0a97e",
                        borderColor: "#d0a97e",
                        color: "#222222",
                        "&:hover": {
                            backgroundColor: "#222222",
                            borderColor: "#222222",
                            color: "#d0a97e",
                        },
                    }}
                    onClick={handleCheckout}
                >
                    Checkout
                </Button>
            </Box>
        </>
    );
};

export default CartTable;
