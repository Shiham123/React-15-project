import React, { useReducer } from 'react';
import cartItems from './data';
import Reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
