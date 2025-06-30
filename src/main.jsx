import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout.jsx";
import router from "./routes/Routes.jsx";
import { AuthProvider } from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
