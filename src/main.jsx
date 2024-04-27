import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./contexts/user.context.jsx";

import { DropdownProvider } from "./contexts/dropdown.context.jsx";

import "./index.scss";

import { ProductsProvider } from "./contexts/product.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <DropdownProvider>
            <App />
          </DropdownProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
