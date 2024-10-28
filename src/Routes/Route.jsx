import { createBrowserRouter } from "react-router-dom";
import HomeScreen from './../Components/HomeScreen/HomeScreen';
import Shop from "../Components/ShopPage/Shop";
import HomePageContant from "../Components/HomePageContant/HomePageContant";
import WishlistScreen from "../Components/Wishlist/WishlistScreen";
import CartScreen from "../Components/CartScreen/CartScreen";
import BillingSystem from "../Components/BillingSystemScreen/BillingSystem";
import ProductDetail from "../Components/Details/ProductDetail";
import Contact from "../Components/Contact/Contact";
import Profile from "../Components/User/Profile/Profile";
import Sidebar from "../Components/User/Sidebar/Sidebar";
import InvoiceGenerator from "../Components/InvoiceGenerator/InvoiceGenerator";
import OrderList from "../Components/OrderListTable/OrderListTable";

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
      {
        path: "productDetails",
        element: <ProductDetail />, 
      },
      {
        path: "contact",
        element: <Contact />, 
      },
      {
        path: "invoice",
        element: <InvoiceGenerator />, 
      },
      {
        path: "sidebar",
        element: <Sidebar />, 
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "orderList",
            element: <OrderList/>,
          },
        ],
      },
    ],
  },
]);

export default router;
