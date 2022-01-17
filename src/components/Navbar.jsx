import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const state = useSelector(state => state.cartReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Emart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
              <Link to="/cart">
                <button className="btn btn-outline-success ms-2">
                  Cart ({state.length})
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
