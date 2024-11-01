import React from "react";
import { Box, IconButton } from "@mui/material";
import gridIcon from "../assets/grid.png"; 
import listIcon from "../assets/view-list.png"; 

interface ViewToggleShopProps {
    currentView: "grid" | "list";
    onChangeView: (viewType: "grid" | "list") => void;
}

const ViewToggleShop: React.FC<ViewToggleShopProps> = ({
    currentView,
    onChangeView,
}) => {
    return (
        <Box sx={{ marginBottom: "20px", marginLeft: "17.5%" }}>
            <IconButton onClick={() => onChangeView("grid")}>
                <img
                    src={gridIcon}
                    alt="Grid View"
                    style={{
                        width: "30px",
                        height: "30px",
                        opacity: currentView === "grid" ? 1 : 0.5,
                    }}
                />
            </IconButton>
            <IconButton onClick={() => onChangeView("list")}>
                <img
                    src={listIcon}
                    alt="List View"
                    style={{
                        width: "30px",
                        height: "30px",
                        opacity: currentView === "list" ? 1 : 0.5,
                    }}
                />
            </IconButton>
        </Box>
    );
};

export default ViewToggleShop;
