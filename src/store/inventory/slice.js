import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minimumQuantity: 2,
  items: [
    { id: 1, name: "Milk", quantity: 2 },
    { id: 2, name: "Bread", quantity: 3 },
    { id: 3, name: "Soap", quantity: 1 },
    { id: 4, name: "Kitchen towel", quantity: 3 },
    { id: 5, name: "fabric detergent", quantity: 1 },
  ],
};
export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    buyItem: (state, action) => {
      const { id, quantity } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
    },
  },
});

export const { buyItem } = inventorySlice.actions;
export default inventorySlice.reducer;
