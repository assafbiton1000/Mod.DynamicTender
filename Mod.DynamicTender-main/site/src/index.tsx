import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

// Translation Hook
import { setTranslations, setDefaultLanguage } from "react-multi-lang";
import { createRoot } from "react-dom/client";
import he from "./translations/he/common.json";
import en from "./translations/en/common.json";
// Do this two lines only when setting up the application
setTranslations({ he, en });
setDefaultLanguage("he");

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
