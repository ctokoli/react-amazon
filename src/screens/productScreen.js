import { detailsProducts } from "actions/productsAction";
import LoadingBox from "components/templates/LoadingBox";
import MessageBox from "components/templates/MessageBox";
import Rating from "components/templates/star_comp";
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  // @ts-ignore
  const productDetails = useSelector((state) => state.productDetail);

  const {error, product, loading} = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    //console.log(`${productId}?qty=${qty}`)
    props.history.push(`/cart/${productId}?qty=${qty}`);
    
  };

  return (
    
    <div>
    {loading ? <LoadingBox></LoadingBox>
    : error ? <MessageBox variant="danger">{error}</MessageBox>
    : <div className="row top">
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
             {
               product.stock > 0 && (
                 <>
                 
                  <li>
                    <div className="row">
                      <div>Qty</div>
                      <div>
                        <select value={qty} onChange={e => setQty(
// @ts-ignore
                        e.target.value)}>
                          {
                            // @ts-ignore
                            [...Array(product.stock).keys()].map(x => (
                              <option key={x + 1} value={x + 1 }> {x + 1}
                              </option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                  </li>

                  <li>
                    <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                  </li>
                 </>
                  
               )
             }
            </ul>
          </div>
        </div>
      </div>
     
    }
    </div> 
  );
}

export default ProductScreen;
