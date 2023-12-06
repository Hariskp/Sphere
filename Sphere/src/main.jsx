import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Weather from "./pages/Weather.jsx";

import Warning from "./pages/Warning.jsx";

import About from "./pages/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Weather",
    element: <Weather />,
  },
  {
    path: "/Warning",
    element: <Warning/>
  },
  {
    path: "/About",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
