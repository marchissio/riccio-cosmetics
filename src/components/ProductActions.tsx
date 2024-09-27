
import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";



import { Product } from "./interface/types"; 

interface ProductActionsProps {
    product: Product; 
    isFavorited: boolean;
    onToggleFavorite: (product: Product) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({
    product,
    isFavorited,
    onToggleFavorite,
}) => {
    const handleFavorite = () => {
        onToggleFavorite(product); 
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
            }}
        >
    
       
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <IconButton
                    sx={{
                        color: "#fff",
                        backgroundColor: "#333",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0",
                        "&:hover": { backgroundColor: "#555" },
                    }}
                >
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton
                    onClick={handleFavorite} 
                    sx={{
                        color: isFavorited ? "#f54747" : "#fff",
                        backgroundColor: "#333",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0",
                        "&:hover": { backgroundColor: "#555" },
                    }}
                >
                    {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton
                    sx={{
                        color: "#fff",
                        backgroundColor: "#333",
                        width: "40px",
                        height: "40px",
                        borderRadius: "0",
                        "&:hover": { backgroundColor: "#555" },
                    }}
                >
                    <VisibilityIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ProductActions;
