import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { store } from "@store/index";

import HomePage from "@pages/homepage";

import "@styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
