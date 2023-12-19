import { configureStore } from "@reduxjs/toolkit";

import ordersSlice from "../features/Orders/OrdersSlice";


const store = configureStore({
  reducer: {

    Orders:ordersSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
