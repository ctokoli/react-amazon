import React from 'react';
import ProductCard from "components/templates/cards";
import data from "data";


function HomeScreen() {
    return ( 
        <div>
             <div className="row center">
        {data.products.map((product) => (
          <ProductCard
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            numReviews={product.reviews}
          />
        ))}
      </div>
        </div>
     );
}

export default HomeScreen;