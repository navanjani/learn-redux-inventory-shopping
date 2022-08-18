import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory/slice";
import shoppingListReducer from "./ shoppingList/slice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    shoppingList: shoppingListReducer,
  },
});
