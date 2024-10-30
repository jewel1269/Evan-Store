import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <HomeScreen />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
