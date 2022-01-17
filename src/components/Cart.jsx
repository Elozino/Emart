import React from "react";
import { addToCart, delFromCart } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const state = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const addProduct = (state) => {
    dispatch(addToCart(state));
  };
  const delProduct = (state) => {
    dispatch(delFromCart(state));
  };

  console.log(state);

  const Cart = ({ cart }) => {
    const total = Math.round(cart.qty * cart.price);
    return (
      <div className="row m-4 p-4">
        <div className="col-md-6 col-sm-12">
          <img src={cart.image} alt={cart.title} height="200px" width="200px" />
        </div>
        <div className="col-md-6 p-4">
          <h1 className="text-uppercase fs-2 fw-bold lead mt-3">
            {cart.title}
          </h1>
          <h3 className="lead fw-bold">
            {cart.qty} × {Math.round(cart.price)} = {total}
          </h3>
          <button className="btn btn-dark" onClick={() => delProduct(...state)}>-</button>
          <button className=" btn btn-dark ms-2" onClick={() => addProduct(...state)}>+</button>
        </div>
      </div>
    );
  };
  return (
    <div>
      {state?.map((cart) => (
        <div className="container">
          <Cart cart={cart} />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;
