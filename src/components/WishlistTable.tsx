import React from "react";
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
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";
import { Product } from "../components/interface/types";

interface WishlistTableProps {
    wishlist: Product[];
}

const WishlistTable: React.FC<WishlistTableProps> = ({ wishlist }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item: Product) => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price || 0,
                quantity: 1,
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

    return (
        <Box>
            {/* Wishlist Table */}
            <TableContainer
                component={Paper}
                sx={{ maxWidth: "1200px", margin: "auto", border: "0" }}
            >
                <Table
                    aria-label="wishlist table"
                    sx={{ borderCollapse: "collapse", border: "0" }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Image
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Product
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Price
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Quantity
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Add to Cart
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
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
                                    sx={{ textAlign: "center" }}
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
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        {item.price !== undefined
                                            ? `$${item.price.toFixed(2)}`
                                            : "N/A"}
                                    </TableCell>
                                    <TableCell>1</TableCell>{" "}
                                    {/* Default to 1 quantity in the wishlist */}
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
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
