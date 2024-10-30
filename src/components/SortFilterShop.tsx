import React from "react";
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
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
                justifyContent: "flex-end",
                marginBottom: "20px",
                marginRight: "400px",
            }}
        >
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                    labelId="sort-label"
                    value={sortOrder}
                    onChange={handleSortChange}
                    label="Sort By"
                    sx={{
                        "& .MuiSelect-select": { backgroundColor: "#fff" },
                        "& .MuiSelect-select:focus": {
                            backgroundColor: "#fff",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000",
                        },
                        "& .MuiPaper-root": { backgroundColor: "#ffffff" },
                    }}
                    MenuProps={{
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
