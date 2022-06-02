/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  token: '',
  isLogged: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
}) => {
  const [token, setToken] = useState('');

  const userIsLoggedIn = !!token;

  const loginHandler = (token: React.SetStateAction<string>) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken('');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
