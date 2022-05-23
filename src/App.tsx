import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Footer, Header } from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactPage, HomePage, LoginPage, ShopPage } from './pages';
import { SelectedProducts } from './components';

const queryClient = new QueryClient();

const App = () => {
  const [headerIsShown, setHeaderIsShown] = useState(false);
  const navigate = useNavigate();

  const showHeaderHandler = () => {
    setHeaderIsShown(true);
  };

  const hideHeaderHandler = () => {
    setHeaderIsShown(false);
    navigate('/');
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {headerIsShown && <Header onLogout={hideHeaderHandler} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={<LoginPage onShowHeader={showHeaderHandler} />}
          />
          <Route path="/shop/:id" element={<SelectedProducts />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default App;
