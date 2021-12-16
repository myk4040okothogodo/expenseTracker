import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';

// Initial state
const initialState = {
  transanctions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransanction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransanction(transanction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transanction
    });
  }

  return (<GlobalContext.Provider value={{
    transanctions: state.transanctions,
    deleteTransanction,
    addTransanction
  }}>
    {children}
  </GlobalContext.Provider>);
}

