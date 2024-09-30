import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
        <Box>
            {/* Wishlist Table */}
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: "1200px",
                    margin: "auto",
                    border: "0",
                }}
            >
                <Table
                    aria-label="wishlist table"
                    sx={{
                        borderCollapse: "collapse",
                        border: "0",
                        fontFamily: "Open Sans, sans-serif",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Image
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Product
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Price
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Quantity
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Add to Cart
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                    fontFamily: "Open Sans, sans-serif",
                                }}
                            >
                                Remove
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {wishlist.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Open Sans, sans-serif",
                                    }}
                                >
                                    No products in your wishlist.
                                </TableCell>
                            </TableRow>
                        ) : (
                            wishlist.map((item: Product) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                border: "2px black",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: "Open Sans, sans-serif",
                                        }}
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            fontFamily: "Open Sans, sans-serif",
                                        }}
                                    >
                                        {item.price !== undefined
                                            ? `$${item.price.toFixed(2)}`
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                display: "flex",

                                                justifyContent: "left",
                                            }}
                                        >
                                            <IconButton
                                                onClick={() =>
                                                    handleDecrement(item.id)
                                                }
                                                sx={{
                                                    backgroundColor: "#222222",
                                                    color: "#ffffff",
                                                    height: "30px",
                                                    width: "30px",
                                                    fontSize: "19px",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                    borderRadius: "0",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#222222",
                                                        color: "#ffffff",
                                                    },
                                                }}
                                            >
                                                <RemoveIcon />
                                            </IconButton>
                                            <span
                                                style={{
                                                    width: "60px",
                                                    height: "30px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "#222222",
                                                    border: "none",
                                                    color: "#ffffff",
                                                    fontWeight: "600",
                                                    margin: "0 2px",
                                                }}
                                            >
                                                {quantities[item.id]}
                                            </span>
                                            <IconButton
                                                onClick={() =>
                                                    handleIncrement(item.id)
                                                }
                                                sx={{
                                                    backgroundColor: "#222222",
                                                    color: "#ffffff",
                                                    height: "30px",
                                                    width: "30px",
                                                    fontSize: "19px",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                    borderRadius: "0",
                                                    "&:hover": {
                                                        backgroundColor:
                                                            "#222222",
                                                        color: "#ffffff",
                                                    },
                                                }}
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                width: "140px",
                                                borderRadius: "50px",
                                                height: "36px",
                                                border: "1px solid #d0a97e",
                                                lineHeight: "24px",
                                                padding: "5px 20px",
                                                fontWeight: "700",
                                                textTransform: "capitalize",
                                                color: "#222222",
                                                backgroundColor: "#d0a97e",
                                                "&:hover": {
                                                    backgroundColor: "#c5996b",
                                                },
                                            }}
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                        >
                                            Add to Cart
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="error"
                                            onClick={() =>
                                                handleRemoveFromWishlist(item)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default WishlistTable;
