import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
  HashRouter,
  unstable_HistoryRouter,
  MemoryRouter,
  Outlet, // Important
} from "react-router-dom";

import { StaticRouter } from "react-router-dom/server";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* 99% of the time you don't nedd HashRouter, unstable_HistoryRouter */}
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </React.StrictMode>
);
