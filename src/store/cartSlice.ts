import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProduct {
    id: number;
    name: string;
    price?: number; 
    quantity: number;
    img: string; 
}

interface CartState {
    items: CartProduct[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingProductIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                // Update quantity if the product is already in the cart
                state.items[existingProductIndex].quantity +=
                    action.payload.quantity;
            } else {
                // Add new product to the cart
                state.items.push(action.payload);
            }

            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; quantity: number }>
        ) => {
            const productIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (productIndex >= 0) {
                state.items[productIndex].quantity = action.payload.quantity;

                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },

        loadCart: (state) => {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                state.items = JSON.parse(storedCart);
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, loadCart } =
    cartSlice.actions;
export default cartSlice.reducer;
