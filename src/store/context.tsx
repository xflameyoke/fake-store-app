/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

const Context = createContext({
  token: '',
  isLogged: false,
  login: (token: string) => {},
  logout: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item: string) => {},
  removeItem: (id: number) => {},
});

export const ContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
}) => {
  const initialToken = localStorage.getItem('token');
  // eslint-disable-next-line prettier/prettier
  const [token, setToken] = useState(initialToken as string);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    // eslint-disable-next-line prettier/prettier
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  const addItemToCartHandler = (item: string) => {};
  const removeItemFromCartHandler = (id: number) => {};

  const contextValue = {
    token: token,
    isLogged: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Context;
