import React from 'react';
import { useQuery } from 'react-query';
import './products.scss';

const Products = () => {
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };

  const { data, status } = useQuery('products', fetchProducts);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'error') {
    return <h1>Error!</h1>;
  }

  return (
    <div className="products">
      <p className="products__title">Products:</p>
      <div className="products__list">
        {data.map((product: { title: string }) => (
          <div>{product.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Products;
