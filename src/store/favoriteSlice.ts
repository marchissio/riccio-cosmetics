import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../components/interface/types";

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

interface FavoriteState {
    items: Product[];
}

const initialState: FavoriteState = {
    items: [],
};

const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<Product>) => {
            const existingIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingIndex >= 0) {
                state.items.splice(existingIndex, 1);
            } else {
                state.items.push(action.payload);
            }

            localStorage.setItem("favorites", JSON.stringify(state.items));
        },

        loadFavorites: (state) => {
            const storedFavorites = localStorage.getItem("favorites");
            if (storedFavorites) {
                state.items = JSON.parse(storedFavorites);
            }
        },
    },
});

export const { toggleFavorite, loadFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
