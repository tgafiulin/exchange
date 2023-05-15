import { useContext, useState, createContext, useLayoutEffect } from 'react';
import { getCurrencies } from './api';

const APIContext = createContext({ currencies: [] });

export function APIContextProvider({ children }: any) {
  const [currencies, setCurrencies] = useState();

  useLayoutEffect(() => {
    getCurrencies().then((data) => {
      setCurrencies(data);
    });
  }, []);

  if (!currencies) return null;

  return (
    <APIContext.Provider
      value={{
        currencies
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
