import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Weather from "./pages/Weather.jsx";

import Warning from "./pages/Warning.jsx";
import Homepage from "./pages/Homepage.jsx";
import Homepages from "./components/home/Homepages.jsx";
import Blog from "./pages/Blog.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Weather",
    element: <Weather />,
  },
  {
    path: "/Warning",
    element: <Warning />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/News",
    element: <Homepages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
