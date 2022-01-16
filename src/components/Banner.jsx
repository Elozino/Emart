import React from "react";
import "../App.css";

function Banner() {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="card-img  embed-responsive-item cardFit"
          alt="..."
          height="350px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-primary">
          <h5 className="card-title fw-bold fs-1 display-3 lead">
            NEW ARRIVALS
          </h5>
          <p className="card-text fs-4 ">CHECKOUT ALL TRENDS</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
