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
      <div className="products__list">
        {data
          .filter(
            (product: { category: string }) => product.category === 'jewelery'
          )
          .map((product: { id: number, title: string, category: string }) => (
            <li key={product.id}>
              <span>Title: {product.title}</span>
              <span>Category: {product.category}</span>
            </li>
          ))}
      </div>
    </div>
  );
};
export default Products;
