import React from "react";
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    Typography,
    SelectChangeEvent,
} from "@mui/material";

interface SortFilterProps {
    sortOrder: string;
    onSortChange: (order: string) => void;
}

const SortFilterShop: React.FC<SortFilterProps> = ({
    sortOrder,
    onSortChange,
}) => {
    const handleSortChange = (event: SelectChangeEvent<string>) => {
        onSortChange(event.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: "-30px",
                marginRight: "360px",
            }}
        >
            <Typography sx={{ marginRight: "8px", lineHeight: "26px" }}>
                Sort By:
            </Typography>
            <FormControl variant="outlined">
                <Select
                    value={sortOrder}
                    onChange={handleSortChange}
                    sx={{
                        width: "180px",
                        height: "30px",
                        borderRadius: "50px",
                        fontSize: "12px",
                        padding: "0 15px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "clip",
                        "& .MuiSelect-select": {
                            backgroundColor: "#fff",
                            paddingRight: "32px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#cccccc",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#cccccc",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#cccccc",
                        },
                    }}
                    MenuProps={{
                        disableScrollLock: true,
                        PaperProps: { sx: { bgcolor: "#ffffff" } },
                    }}
                >
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="priceAsc">Price: Low to High</MenuItem>
                    <MenuItem value="priceDesc">Price: High to Low</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortFilterShop;
