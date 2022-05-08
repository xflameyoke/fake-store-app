import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './layout/components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactPage, HomePage, LoginPage, ShopPage } from './pages';
import { SelectedProducts } from './components/shop/selectedProducts';

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop/:id" element={<SelectedProducts />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Footer />
  </>
);

export default App;
