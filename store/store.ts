import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
//configurando un useSelector perzonalizado para la app
export type RootState = ReturnType<typeof store.getState>;

//configurando un useDispatch personalizado para la app
export type AppDispatch = typeof store.dispatch;
