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
import ThankYou from "../Components/ThankYou/ThankYou";
import LoginPage from "../Components/LoginPage/LoginPage";
import Resister from "../Components/Register/Register";

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
        path: "productDetails/:id",
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
        path: "thankyou",
        element: <ThankYou />, 
      },

      //Authorization
      {
        path: "loginPage",
        element: <LoginPage />, 
      },
      {
        path: "resiPage",
        element: <Resister />, 
      },

      //this is Category Rotes
      {
        path: "shop/WomansFashion",
        element: <Shop />, 
      },
      {
        path: "shop/MensFashion",
        element: <Shop />, 
      },
      {
        path: "shop/Electronics",
        element: <Shop />, 
      },
      {
        path: "/shop/HomeLifestyle",
        element: <Shop />, 
      },
      {
        path: "shop/BabysToys",
        element: <Shop />, 
      },
      {
        path: "shop/HealthBeauty",
        element: <Shop />, 
      },
      {
        path: "shop/WomansFashion",
        element: <Shop />, 
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
