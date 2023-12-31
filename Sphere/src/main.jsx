import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Weather from "./pages/Weather.jsx";

import Warning from "./pages/Warning.jsx";
import Homepage from "./pages/Homepage.jsx";
import Homepages from "./components/home/Homepages.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import SinglePage from "./components/singlePage/SinglePage.jsx";
import WriteBlog from "./pages/WriteBlog.jsx";

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
    path: "/writeblog",
    element: <WriteBlog />,
  },
  {
    path: "/News",
    element: <Homepages />,
  },
  {
    path: "/Aboutus",
    element: <About />,
  },
  {
    path: "/singlepage/:id",
    element: <SinglePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
