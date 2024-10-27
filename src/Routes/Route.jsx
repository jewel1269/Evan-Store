import { createBrowserRouter } from "react-router-dom";
import HomeScreen from './../Components/HomeScreen/HomeScreen';
import Shop from "../Components/ShopPage/Shop";
import HomePageContant from "../Components/HomePageContant/HomePageContant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />, 
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <HomePageContant />, 
      },
      {
        path: "shop",
        element: <Shop />, 
      },

    ],
  },
]);

export default router;
