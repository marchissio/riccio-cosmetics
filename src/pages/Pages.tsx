import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

interface PagesProps {
    onClose: () => void;
}

const Pages: React.FC<PagesProps> = ({ onClose }) => {
    const navigate = useNavigate();

    const menuItemStyles = {
        backgroundColor: "#222222",
        color: "white",
        fontFamily: "Oswald, sans-serif",
        padding: "14px 26px",
        cursor: "pointer",
        display: "block",
        width: "100%", 
        textDecoration: "none",
        margin: "0", 
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <div style={{ padding: "0", marginTop: "-10px" }}>
            <div
                style={{ ...menuItemStyles, marginBottom: "-1px" }}
                onClick={() => handleNavigate("/cart")}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#333333")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#222222")
                }
            >
                <Typography sx={{ fontFamily: "Oswald, sans-serif" }}>
                    Cart
                </Typography>
            </div>
            <div
                style={{ ...menuItemStyles, marginBottom: "-1px" }} // Use negative margin to pull closer
                onClick={() => handleNavigate("/wishlist")}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#333333")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#222222")
                }
            >
                <Typography sx={{ fontFamily: "Oswald, sans-serif" }}>
                    Wishlist
                </Typography>
            </div>
            <div
                style={menuItemStyles} // Last item does not need margin
                onClick={() => handleNavigate("/checkout")}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#333333")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#222222")
                }
            >
                <Typography sx={{ fontFamily: "Oswald, sans-serif" }}>
                    Checkout
                </Typography>
            </div>
        </div>
    );
};

export default Pages;
