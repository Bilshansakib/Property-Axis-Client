import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./../pages/Error/Error_page";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateInvertors from "../pages/PrivateInvertors/PrivateInvertors";
import BookingForm from "../components/BookingForm/BookingForm";
import Bookings from "../components/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/property"),
      },
      {
        path: "/estateDetails/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/property`),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <BookingForm></BookingForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
        // loader: () => fetch("/properties.json"),
      },
      {
        path: "/privateInvertors",
        element: (
          <PrivateRoute>
            <PrivateInvertors></PrivateInvertors>
          </PrivateRoute>
        ),
        // loader: () => fetch("/properties.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
