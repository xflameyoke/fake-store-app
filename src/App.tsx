import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './layout/components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactPage, HomePage, ShopPage } from './pages';
import { LoginPage } from './pages/loginPage';

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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    <Footer />
  </>
);

export default App;
