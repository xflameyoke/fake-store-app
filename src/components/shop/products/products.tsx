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
    <div className="products__container">
      <div className="products__header">
        <h2>
          Here's a list of all our products! For more specific informations
          chose one of categories from above!
        </h2>
      </div>
      {data.map(
        (product: {
          id: number,
          title: string,
          category: string,
          description: string,
          price: number,
          image: string,
        }) => (
          <ProductsList
            key={product.id}
            title={product.title}
            id={product.id}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        )
      )}
    </div>
  );
};
export default Products;
