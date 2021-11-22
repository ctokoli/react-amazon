import React, { useEffect, useState } from 'react';
import ProductCard from "components/templates/cards";
import axios from 'axios';


function HomeScreen() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await axios.get('/api/products'); 
      setProducts(data);
    };
    fecthData(); 
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default HomeScreen;