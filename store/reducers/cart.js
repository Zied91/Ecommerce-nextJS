import { createSlice } from "@reduxjs/toolkit";

const indexSameProduct = (state, action) => {
  const sameProduct = (product) =>
    product.id === action.id &&
    product.color === action.color &&
    product.size === action.size;

  return state.cartItems.findIndex(sameProduct);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const cartItems = state.cartItems;

      // find index of product
      const index = indexSameProduct(state, action.payload.product);

      if (index !== -1) {
        cartItems[index].count += action.payload.count;
        return;
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],
      };
    },
    removeProduct: (state, action) => {
      state.cartItems.splice(indexSameProduct(state, action.payload), 1);
    },
    setCount(state, action) {
      // find index and add new count on product count
      const indexItem = indexSameProduct(state, action.payload.product);
      state.cartItems[indexItem].count = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, setCount } = cartSlice.actions;

export default cartSlice.reducer;
