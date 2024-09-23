import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";

const ProductActions = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
            }}
        >
            <IconButton
                sx={{
                    color: "#fff",
                    backgroundColor: "#333",
                    width: "40px",
                    height: "40px",
                    borderRadius: "0",
                    "&:hover": {
                        backgroundColor: "#555",
                    },
                }}
            >
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton
                sx={{
                    color: "#fff",
                    backgroundColor: "#333",
                    width: "40px",
                    height: "40px",
                    borderRadius: "0",
                    "&:hover": {
                        backgroundColor: "#555",
                    },
                }}
            >
                <FavoriteBorderIcon />
            </IconButton>
            <IconButton
                sx={{
                    color: "#fff",
                    backgroundColor: "#333",
                    width: "40px",
                    height: "40px",
                    borderRadius: "0",
                    "&:hover": {
                        backgroundColor: "#555",
                    },
                }}
            >
                <VisibilityIcon />
            </IconButton>
        </Box>
    );
};

export default ProductActions;
