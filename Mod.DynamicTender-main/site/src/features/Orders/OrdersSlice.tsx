import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "src/app/store";
import OrdersDto from "./Dtos/OrdersDto";
import orderItemDto from "./Dtos/OrderDto";

const API_URL_Orders =
  "https://demo-kfc-ui.dragontail.com/api/orders/?station=Expo-H&page=1&page_size=4&lazy=false&tab=main&clientId=vfIhSWt45v";

export interface CounterState {
  loading: boolean;
  error: boolean;
  Orders: OrdersDto | never;
}

// initial state
export const initialState = {
  Orders: [] as any,
  loading: false,
  error: false,
};

export const orderSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    propose: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersAsync.pending, (state, action) => {})
      .addCase(fetchOrdersAsync.fulfilled, (state, action) => {
        state.Orders = action.payload;
      })
      .addCase(fetchOrdersAsync.rejected, (state, { payload }) => {});
  },
});

export const fetchOrdersAsync = createAsyncThunk(
  "orderData/get",
  async (pageId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://demo-kfc-ui.dragontail.com/api/orders/?station=Expo-H&page=${pageId}&page_size=4&lazy=false&tab=main&clientId=vfIhSWt45v`
      );

      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
);

export const {
  propose,

  startLoading,
} = orderSlice.actions;

export const selectOrders = (state: RootState) => state.Orders;

export default orderSlice.reducer;
