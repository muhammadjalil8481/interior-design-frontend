import React, { createContext, useReducer, useEffect } from "react";
import { cartProducts } from "../constants";
import { reducer } from "./cartReducer";

export const CartContext = createContext();

const initialState = {
  items: cartProducts,
  totalAmount: 0,
  totalItems: 0,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    return dispatch({
      type: "GET_TOTAL",
    });
  }, [state.items]);

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  return (
    <CartContext.Provider value={{ ...state, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
