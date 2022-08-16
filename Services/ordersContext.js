import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./ordersReducer";

export const OrdersContext = createContext();

const initialState = {
  orderId: 0,
  orderItems: [],
  totalAmount: 0,
  totalItems: 0,
  address: "",
  zipCode: "",
  email: "",
  phoneNumber: "",
  paymentMethod: "",
};

const OrdersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addOrderItems = (id) => {
    return dispatch({
      type: "ADD_ORDER_ITEMS",
      payload: id,
    });
  };
};

export default OrdersContextProvider;
