import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PageHeader from "../components/PageHeader";

const Checkout: React.FC = () => {
    // Fetching cart from the store
    const cart = useSelector((state: RootState) => state.cart.items);

    // Calculating subtotal and grand total
    const subtotal = cart
        .reduce((total, item) => total + (item.price || 0) * item.quantity, 0)
        .toFixed(2);
    const shippingCost = 0.0;
    const grandTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);

    // Style for the rounded input fields
    const inputStyle = {
        borderRadius: "30px", // Rounded sides
        lineHeight: "23px",
        fontSize: "14px",
        color: "#222222",
    };

    return (
        <Box>
            {/* Page Title */}
            <PageHeader title="Checkout" subtitle="Home - Checkout" />

            {/* Checkout Form and Cart Summary */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    maxWidth: "1200px",
                    marginLeft: "350px",
                }}
            >
                {/* Left Section: Billing Address Form */}
                <Box
                    sx={{
                        flex: 1,
                        marginRight: "70px",
                        backgroundColor: "#fff",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            marginBottom: "20px",
                            fontFamily: '"Oswald", sans-serif',
                            textDecoration: "underline",
                            color: "#222222",
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "23px",
                        }}
                    >
                        Billing Address
                    </Typography>

                    {/* Name Fields */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <Box sx={{ flex: 1, marginTop: "30px" }}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 700, marginBottom: "20px" }}
                            >
                                First Name *
                            </Typography>
                            <TextField
                                label="First Name"
                                fullWidth
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: inputStyle,
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1, marginTop: "30px" }}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 700, marginBottom: "20px" }}
                            >
                                Last Name *
                            </Typography>
                            <TextField
                                label="Last Name"
                                fullWidth
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: inputStyle,
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Email and Phone Fields */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <Box sx={{ flex: 1, marginTop: "30px" }}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 700, marginBottom: "20px" }}
                            >
                                Email Address *
                            </Typography>
                            <TextField
                                label="Email Address"
                                fullWidth
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: inputStyle,
                                    },
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1, marginTop: "30px" }}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 700, marginBottom: "20px" }}
                            >
                                Phone No *
                            </Typography>
                            <TextField
                                label="Phone Number"
                                fullWidth
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: inputStyle,
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Company Name and Address Fields - Full Width */}
                    <Box sx={{ marginTop: "30px" }}>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 700, marginBottom: "20px" }}
                        >
                            Company Name
                        </Typography>
                        <TextField
                            label="Company Name"
                            fullWidth
                            variant="outlined"
                            slotProps={{
                                input: {
                                    sx: inputStyle,
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ marginTop: "30px" }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 700,
                                marginBottom: "20px",
                            }}
                        >
                            Address *
                        </Typography>
                        <TextField
                            label="Address"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={3}
                            slotProps={{
                                input: {
                                    sx: inputStyle,
                                },
                            }}
                        />
                    </Box>
                </Box>

                {/* Right Section: Cart Summary */}
                <Box sx={{ marginRight: "-50px" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: "20px",
                            fontFamily: '"Oswald", sans-serif',
                            textDecoration: "underline",
                            color: "#222222",
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "23px",
                        }}
                    >
                        Cart Total
                    </Typography>
                    <Box
                        sx={{
                            width: "400px",
                            backgroundColor: "#222",
                            color: "#fff",
                            padding: "30px",
                            borderRadius: "10px",
                            fontFamily: '"Open Sans", sans-serif',
                        }}
                    >
                        {/* Product and Total Headers */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Typography
                                sx={{
                                    flexBasis: "18px",
                                    lineHeight: "23px",
                                    fontWeight: 700,
                                    color: "#d0a97e",
                                    fontSize: "18px",
                                    fontFamily: '"Oswald", sans-serif',
                                }}
                            >
                                Product
                            </Typography>
                            <Typography
                                sx={{
                                    flexBasis: "18px",
                                    lineHeight: "23px",
                                    fontWeight: 700,
                                    color: "#d0a97e",
                                    fontSize: "18px",
                                    fontFamily: '"Oswald", sans-serif',
                                }}
                            >
                                Total
                            </Typography>
                        </Box>

                        {/* Cart Items */}
                        {cart.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <Typography>
                                    {item.name} X {item.quantity}
                                </Typography>
                                <Typography>
                                    ${(item.price || 0) * item.quantity}.00
                                </Typography>
                            </Box>
                        ))}

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                            }}
                        >
                            <Typography>Sub Total</Typography>
                            <Typography>${subtotal}</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                            }}
                        >
                            <Typography>Shipping Fee</Typography>
                            <Typography>${shippingCost.toFixed(2)}</Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "20px",
                                fontWeight: "bold",
                            }}
                        >
                            <Typography>Grand Total</Typography>
                            <Typography>${grandTotal}</Typography>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                marginTop: "80px",
                                marginLeft: "-30px",
                                float: "left",
                                backgroundColor: "#222222",
                                color: "#d0a97e",
                                "&:hover": {
                                    backgroundColor: "#d0a97e",
                                    color: "#222222",
                                },
                                fontFamily: "Oswald",
                                fontWeight: 600,
                                fontSize: "18px",
                                height: "46px",
                                padding: "9px 30px",
                                borderRadius: "50px",
                                textTransform: "none",
                            }}
                        >
                            Place Order
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
