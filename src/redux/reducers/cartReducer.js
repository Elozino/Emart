const cart = [];

const cartReducer = (state = cart, action) => {
  const productItem = action.payload;

  switch (action.type) {
    case "ADDITEM":
      //Checking if a product already exist in the cart
      const exist = state.find((item) => item.id === productItem.id);
      if (exist) {
        //Increase the quantity
        return state.map((item) =>
          item.id === productItem.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        //.....
        return [
          ...state,
          {
            ...productItem,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exsit1 = state.find((item) => item.id === productItem.id);

      if (exsit1.qty === 1) {
        return state.filter((item) => item.id !== productItem.id);
      } else {
        return state.map((item) =>
          item.id === productItem.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default cartReducer;
