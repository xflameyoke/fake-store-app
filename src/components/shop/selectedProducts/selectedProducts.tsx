import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

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
    <div>
      {data
        .filter((selected: { category: string }) => selected.category === id)
        .map((selected: { id: number, title: string }) => (
          <li key={selected.id}>{selected.title}</li>
        ))}
    </div>
  );
};

export default SelectedProducts;
