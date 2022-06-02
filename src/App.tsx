import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContactPage, HomePage, LoginPage, ShopPage } from './pages';
import { SelectedProducts } from './components';
import AuthContext from './store/auth-context';

const queryClient = new QueryClient();

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLogged;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isLoggedIn && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop/:id" element={<SelectedProducts />} />
        </Routes>
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default App;
