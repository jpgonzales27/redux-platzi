import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "antd/dist/reset.css";

import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { pokemonsReducer } from "./reducers/pokemons";
import {
  // addNumber,
  // featuring,
  logger,
  // myMiddleware,
  // nameUpperCase,
} from "./middlewares";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(logger, featuring, myMiddleware, addNumber, nameUpperCase)
  applyMiddleware(logger)
);

const store = createStore(pokemonsReducer, composedEnhancers);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
