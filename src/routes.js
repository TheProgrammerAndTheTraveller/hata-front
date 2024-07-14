import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "./views/main";
import Apartment from "./views/apartment";
import { apartmentloader } from "./data-loaders/apartment-loader";
import Profile from "./views/profile/profile";
import Checkout from "./views/checkout/checkout";
import Login from "./views/login";
import Registration from "./views/registration/registration";
import Rent from "./views/rent/rent";
import { ProfileProvider } from "./contexts/ProfileContext";
import DefaultLayout from "./layouts/default";

const router = createBrowserRouter([{
  element: <ProfileProvider>
    <DefaultLayout>
      <Outlet></Outlet>
    </DefaultLayout>
  </ProfileProvider>,
  children: [
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
      path: "/checkout/:id",
      element: <Checkout />,
      loader: apartmentloader,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />
    },
    {
      path: "/rent",
      element: <Rent />
    }
  ]
}
]);

export default router;