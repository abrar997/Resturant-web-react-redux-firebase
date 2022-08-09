// our manin supplied
import React, { createContext, useContext, useReducer } from "react";
export const stateContext = createContext();
// parameter will trans by constext api and reducer
export const StateProvider = (reducer, initialState, children) => {
  <StateProvider.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProvider.Provider>;
};
// trans daat by useConetxt and use this const  as main const
export const useStateValue = () => {
  useContext(stateContext);
};
// useReducere use instead of useState when we get complex daat trans with more than one paramter  