import React, { useEffect, useState } from 'react';
import ProductCard from "components/templates/cards";
import LoadingBox from 'components/templates/LoadingBox';
import MessageBox from 'components/templates/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from 'actions/productsAction';


function HomeScreen() {
  
  // @ts-ignore
  const productList = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  const {loading, error, products} = productList
  
  useEffect(() => {
      dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
    {loading ? <LoadingBox></LoadingBox>
    : error ? <MessageBox variant="danger">{error}</MessageBox>
    :
    <div className="row center">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            numReviews={product.reviews}
          />
        ))}
      </div>
    }
      
    </div>
  );
}

export default HomeScreen;