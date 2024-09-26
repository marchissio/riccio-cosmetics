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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/favoriteSlice";
import { addToCart } from "../store/cartSlice";

interface WishlistItem {
    id: number;
    name: string;
    price?: number;
    quantity: number;
    image: string; 
}

interface WishlistTableProps {
    wishlist: WishlistItem[];
}

const WishlistTable: React.FC<WishlistTableProps> = ({ wishlist }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item: WishlistItem) => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price || 0,
                quantity: item.quantity,
                img: item.image, 
            })
        );
    };

    const handleRemoveFromWishlist = (id: number) => {
        const itemToRemove = wishlist.find((item) => item.id === id);
        if (itemToRemove) {
            dispatch(
                toggleFavorite({
                    id: itemToRemove.id,
                    name: itemToRemove.name,
                    price: itemToRemove.price || 0, 
                    quantity: itemToRemove.quantity,
                    img: itemToRemove.image, 
                })
            );
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="wishlist table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Add to Cart</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {wishlist.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: "50px", height: "50px" }}
                                />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                {item.price !== undefined
                                    ? `$${item.price.toFixed(2)}`
                                    : "N/A"}
                            </TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </Button>
                            </TableCell>
                            <TableCell>
                                <IconButton
                                    color="secondary"
                                    onClick={() =>
                                        handleRemoveFromWishlist(item.id)
                                    }
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WishlistTable;
