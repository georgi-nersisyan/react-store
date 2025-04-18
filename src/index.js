import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartContext from "./CartContext";
import { productsReducer } from "./ProductsReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const CartRender = () => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return <CartContext.Provider value={{ products, dispatch }}>
    <App />
  </CartContext.Provider>;
};

root.render(
  <CartRender />
);
