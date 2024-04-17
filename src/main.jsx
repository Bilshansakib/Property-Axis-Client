import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthContext from "./Providers/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContext>
        <RouterProvider router={router}></RouterProvider>
      </AuthContext>
    </HelmetProvider>
  </React.StrictMode>
);
