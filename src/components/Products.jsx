import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getAllProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getAllProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filteredProduct = (filterItem) => {
    const filteredList = data.filter((x) => x.category === filterItem);
    setFilter(filteredList)
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filteredProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filteredProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filteredProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-3"
            onClick={() => filteredProduct("electronics")}
          >
            Electronic
          </button>
        </div>

        {filter.map((item) => (
          <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className="card h-100 text-center p-4">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title.substring(0, 14)}...
                  </h5>
                  <p className="card-text lead fw-bold">${item.price}</p>
                  <a href="#" className="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="container my-3 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
          </div>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
