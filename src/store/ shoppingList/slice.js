import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_QUANTITY = 5;

const initialState = {
  shoppingItems: [],
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addToShoppingList: (state, action) => {
      const shopItem = action.payload;
      const item = {
        id: shopItem.id,
        name: shopItem.name,
        quantity: DEFAULT_QUANTITY,
      };
      state.shoppingItems = [...state.shoppingItems, item];
    },
    removeFromShoppingList: (state, action) => {
      const { id } = action.payload;
      state.shoppingItems = state.shoppingItems.filter(
        (item) => item.id !== id
      );
    },
  },
});

export const { addToShoppingList, removeFromShoppingList } =
  shoppingListSlice.actions;
export default shoppingListSlice.reducer;
