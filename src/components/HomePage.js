import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        response.json()
      }).then((response)=>setProducts([response.data]))
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default HomePage;
