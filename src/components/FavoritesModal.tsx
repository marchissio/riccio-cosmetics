import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface FavoritesModalProps {
    open: boolean;
    onClose: () => void;
    favoriteProducts: { id: number; name: string }[];
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({
    open,
    onClose,
    favoriteProducts,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    width: "400px",
                }}
            >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                    Favorited Products
                </Typography>
                {favoriteProducts.length > 0 ? (
                    <Box>
                        {favoriteProducts.map((product) => (
                            <Typography
                                key={product.id}
                                sx={{ marginBottom: "5px" }}
                            >
                                {product.name}
                            </Typography>
                        ))}
                    </Box>
                ) : (
                    <Typography>No products favorited yet.</Typography>
                )}
            </Box>
        </Modal>
    );
};

export default FavoritesModal;
