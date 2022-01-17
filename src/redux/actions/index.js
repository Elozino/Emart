export const addToCart = (productItem) => {
  return {
    type: "ADDITEM",
    payload: productItem,
  };
};

export const delFromCart = (productItem) => {
  return {
    type: "DELITEM",
    payload: productItem,
  };
};
