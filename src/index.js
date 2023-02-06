import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import Pages from "./Pages/Pages";
import About from "./Components/About-us/About";
import Error from "./Components/Error";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/builderreplica",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Pages />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);