import React from 'react';
import { useQuery } from 'react-query';
import './products.scss';
import ProductsList from '../productsList/productsList';

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
        {data.map(
          (product: {
            id: number,
            title: string,
            category: string,
            description: string,
            price: number,
          }) => (
            <ProductsList
              key={product.id}
              title={product.title}
              id={product.id}
              description={product.description}
              price={product.price}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Products;
