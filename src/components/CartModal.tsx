import React, { useEffect } from "react";
import { Box, Modal, Typography, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeFromCart } from "../store/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

interface CartModalProps {
    open: boolean;
    onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const subtotal = cartItems.reduce(
        (total, item) => total + (item.price || 0) * item.quantity,
        0
    );

    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(removeFromCart(id));
    };

    useEffect(() => {
        if (open) {
            // Add a class to lock body scroll
            document.body.classList.add("body-scroll-lock");
        } else {
            // Remove the scroll lock class when modal closes
            document.body.classList.remove("body-scroll-lock");
        }

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove("body-scroll-lock");
        };
    }, [open]);  

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "60px",
                    right: "180px",
                    width: 320,
                    bgcolor: "#222222",
                    border: "2px solid #3c3c3c",
                    boxShadow: 24,
                    color: "white",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px 30px",
                        borderBottom: "1px solid #3c3c3c",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontSize: "18px", fontFamily: "Oswald" }}
                    >
                        Your Cart
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon sx={{ color: "white" }} />
                    </IconButton>
                </Box>

                {/* Body */}
                <Box
                    sx={{
                        maxHeight: "220px",
                        overflowY: "auto",
                        padding: "20px",
                        borderBottom: "1px solid #3c3c3c",
                        ml: "30px",

                        "&::-webkit-scrollbar": {
                            width: "12px",
                        },
                        "&::-webkit-scrollbar-track": {
                            backgroundColor: "#2b2b2b",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#555555",
                            borderRadius: "10px",
                            border: "2px solid #2b2b2b",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#d0a97e",
                        },
                    }}
                >
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "15px",
                                        position: "relative",
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            top: "-5px",
                                            left: "-14px",
                                            color: "white",
                                            backgroundColor: "black",
                                            "&:hover": {
                                                backgroundColor: "#2b362e",
                                            },
                                        }}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            marginRight: "15px",
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontFamily: "Oswald",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontFamily: "Oswald",
                                            }}
                                        >
                                            Quantity: {item.quantity}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontFamily: "Oswald",
                                            }}
                                        >
                                            Price: ${item.price || 0}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </>
                    ) : (
                        <Typography sx={{ fontSize: "14px" }}>
                            Your cart is empty.
                        </Typography>
                    )}
                </Box>

                {/* Footer */}
                <Box
                    sx={{
                        padding: "15px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: "18px",
                            ml: "30px",
                            fontFamily: "Oswald",
                        }}
                    >
                        Subtotal: ${subtotal.toFixed(2)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        padding: "15px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            width: "43%",
                            backgroundColor: "#090909",
                            color: "#d0a97e",
                            lineHeight: "20px",
                            padding: "8px 15px",
                            textAlign: "center",
                            fontSize: "12px",
                            fontFamily: '"Oswald", sans-serif',
                            letterSpacing: "0.25px",
                            "&:hover": {
                                backgroundColor: "#d0a97e",
                                color: "#000000",
                            },
                        }}
                    >
                        <Link
                            to="/cart"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            View Cart
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            width: "43%", // Reduced button width
                            backgroundColor: "#090909",
                            color: "#d0a97e",
                            lineHeight: "20px", // Reduced line height
                            padding: "8px 15px", // Reduced padding
                            textAlign: "center",
                            fontSize: "12px", // Reduced font size
                            fontFamily: '"Oswald", sans-serif',
                            letterSpacing: "0.25px",
                            "&:hover": {
                                backgroundColor: "#d0a97e",
                                color: "#000000",
                            },
                            ml: "10px", // Reduced margin-left
                        }}
                    >
                        <Link
                            to="/checkout"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            Checkout
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default CartModal;
