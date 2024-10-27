import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <HomeScreen />
    </RouterProvider>
  </StrictMode>
);
