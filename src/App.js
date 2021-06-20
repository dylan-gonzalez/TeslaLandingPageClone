import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { reducer, initialState } from "./reducer.js";

import Navbar from "./Navbar";
import Features from "./Features";
import Footer from "./Footer";

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null,
});

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
      {children}
    </UserContext.Provider>
  );
};

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Features />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
