import React from 'react';
import './App.css';
import Products from './components/products/products';
import Header from './layout/components/header/header';
import Footer from './layout/components/footer/footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <>
    <Header />
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
    <Footer />
  </>
);

export default App;
