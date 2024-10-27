import { createBrowserRouter } from "react-router-dom";
import HomeScreen from './../Components/HomeScreen/HomeScreen';
import Shop from "../Components/ShopPage/Shop";
import HomePageContant from "../Components/HomePageContant/HomePageContant";
import WishlistScreen from "../Components/Wishlist/WishlistScreen";
import CartScreen from "../Components/CartScreen/CartScreen";
import BillingSystem from "../Components/BillingSystemScreen/BillingSystem";

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
      {
        path: "wishlist",
        element: <WishlistScreen />, 
      },
      {
        path: "cart",
        element: <CartScreen />, 
      },
      {
        path: "bilingSystem",
        element: <BillingSystem />, 
      },

    ],
  },
]);

export default router;
