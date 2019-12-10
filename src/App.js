import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Route from "./routes/Routes.js";
import { Provider } from "react-redux";

import { store } from "./helpers";

function App() {
  return (
    <Provider store={store}>  
      <Route />
    </Provider>
  );
}

export default App;
