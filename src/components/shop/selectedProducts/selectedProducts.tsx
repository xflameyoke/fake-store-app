import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import ProductsList from '../productsList/productsList';
import { Nav } from '../../nav';

const SelectedProducts = () => {
  const { id } = useParams();

  const fetchSelected = async () => {
    const response = await fetch('https://fakestoreapi.com/products/');
    return response.json();
  };

  const { data, status } = useQuery('products', fetchSelected);

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (status === 'error') {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <div className="container__nav">
        <Nav link="/shop/jewelery" linkName="Jewelery" />
        <Nav link="/shop/men's clothing" linkName="Men's clothes" />
        <Nav link="/shop/women's clothing" linkName="Women's clothes" />
        <Nav link="/shop/electronics" linkName="Electronics" />
      </div>
      <div>
        {data
          .filter(
            (selected: { category: string }) =>
              selected.category === id?.toString()
          )
          .map(
            (selected: {
              id: number,
              title: string,
              price: number,
              description: string,
            }) => (
              <ProductsList
                key={selected.id}
                title={selected.title}
                id={selected.id}
                description={selected.description}
                price={selected.price}
              />
            )
          )}
      </div>
    </>
  );
};

export default SelectedProducts;
