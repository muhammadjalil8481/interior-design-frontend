export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    let updatedCart = state.items.map((item) => {
      if (action.payload === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    return { ...state, items: updatedCart };
  }

  if (action.type === "DECREMENT") {
    let updatedCart = state.items
      .map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return { ...state, items: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItems, totalAmount } = state.items.reduce(
      (accum, curVal) => {
        let { quantity, price } = curVal;
        accum.totalItems = accum.totalItems + quantity;
        accum.totalAmount = accum.totalAmount + quantity * price;
        return accum;
      },
      {
        totalItems: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItems, totalAmount };
  }

  return state;
};
