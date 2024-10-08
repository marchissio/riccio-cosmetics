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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartProduct } from "../store/cartSlice"; 

interface ProductTableProps {
    products: CartProduct[];
    quantities: { [id: number]: number };
    onAddToCart?: (item: CartProduct) => void;
    onRemove: (item: CartProduct) => void;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    isWishlist?: boolean; 
}

const ProductTable: React.FC<ProductTableProps> = ({
    products,
    quantities,
    onAddToCart,
    onRemove,
    onIncrement,
    onDecrement,
    isWishlist = true, 
}) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                maxWidth: "1200px",
                margin: "auto",
                border: "0",
                boxShadow: 0,
                borderBottom: "2px solid black",
            }}
        >
            <Table
                aria-label="product table"
                sx={{
                    borderCollapse: "collapse",
                    fontFamily: "Open Sans, sans-serif",
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ backgroundColor: "#212529", color: "white" }}
                        >
                            Image
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#212529", color: "white" }}
                        >
                            Product
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#212529", color: "white" }}
                        >
                            Price
                        </TableCell>
                        <TableCell
                            sx={{ backgroundColor: "#212529", color: "white" }}
                        >
                            Quantity
                        </TableCell>
                        {!isWishlist && (
                            <TableCell
                                sx={{
                                    backgroundColor: "#212529",
                                    color: "white",
                                }}
                            >
                                Add to Cart
                            </TableCell>
                        )}
                        <TableCell
                            sx={{ backgroundColor: "#212529", color: "white" }}
                        >
                            Remove
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
                                No products available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        products.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            border: "1px solid black",
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
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
                                            onClick={() => onDecrement(item.id)}
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
                                                    backgroundColor: "#222222",
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
                                            onClick={() => onIncrement(item.id)}
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
                                                    backgroundColor: "#222222",
                                                    color: "#ffffff",
                                                },
                                            }}
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                                {!isWishlist && (
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
                                                    backgroundColor: "#222222",
                                                    borderColor: "#222222",
                                                    color: "#d0a97e",
                                                },
                                            }}
                                            onClick={() => onAddToCart?.(item)}
                                        >
                                            Add to Cart
                                        </Button>
                                    </TableCell>
                                )}
                                <TableCell>
                                    <IconButton
                                        color="error"
                                        onClick={() => onRemove(item)}
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
    );
};

export default ProductTable;
