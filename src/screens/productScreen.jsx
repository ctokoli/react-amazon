import Rating from "components/templates/star_comp";
import data from "data";
import React from "react";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const product = data.products.find(
    (x) => x._id === props.match.params.id
  );

  if (!product) {
    return (
      <div>
        <h2>Product Not Available</h2>
      </div>
    );
  }
  return (
   
    <div>

     <Link to="/"> Go Back </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={process.env.PUBLIC_URL + "." + product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li><h1>{product.name}</h1></li>
            <li>
             <div className="rating">
              <Rating
                  rating={product.rating}
                  numReviews={product.reviews}
                ></Rating>
             </div>
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Discription : <p>{product.discription}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status </div>
                  <div>
                    {product.stock > 0 ? (
                      <span className="success"> In Stock</span>
                    ) : (
                      <span className="error">Not Avialable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
