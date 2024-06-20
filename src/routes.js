import { createBrowserRouter } from "react-router-dom";
import Main from "./views/main";
import Apartment from "./views/apartment";
import { apartmentloader } from "./data-loaders/apartment-loader";
import Profile from "./views/profile/profile";
import Checkout from "./views/checkout/checkout";
import Login from "./views/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/apartments/:id",
    element: <Apartment />,
    loader: apartmentloader,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/checkout",
  element: <Checkout />,
  },
  {
    path:"/login",
    element: <Login />,
  }
]);

export default router;