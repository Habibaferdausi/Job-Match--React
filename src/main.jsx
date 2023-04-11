import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import JobDetails from "./Components/JobDetails";
import Blogs from "./Components/Blogs";
import Statistics from "./Components/Statistics";
import Error from "./Components/Error";
import AppliedJob from "./Components/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/job.json"),
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobData.json"),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "appliedjobs",
        element: <AppliedJob></AppliedJob>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
