import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getAllProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getAllProduct();
    console.log(product);
  }, []);

  const Loading = () => {
    return (
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 mb-5">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6 col-sm-12">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={30} width={100} />
          <Skeleton height={30} width={100} />
          <Skeleton height={200} />
          <div className="d-flex mt-2">
            <Skeleton height={40} width={100} />
            <Skeleton height={40} width={100} style={{ marginLeft: 6 }} />
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12 mb-5">
            <img
              src={product.image}
              alt={product.title}
              height="300px"
              width="250px"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="text-uppercase text-black-50 ">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead">
              Rating - {product.rating && product.rating.rate}
            </p>
            <h3 className="fw-bold py-3">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link to="/cart">
              <button className="btn btn-dark ms-3">Go to Cart</button>
            </Link>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container p-4">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Product;
