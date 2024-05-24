import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "./../Layout/Main";
// import SighUp from "../Pages/SignUp/SighUp";
import LogIn from "../Pages/LogIn/LogIn";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import NotFoundPage from "../Pages/NotFoundPage.jsx/NotFoundPage";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import MyFoods from "../Pages/MyFoods/MyFoods";
import MyRequests from "../Pages/MyRequests/MyRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "AvailableFoods/foodDetails/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://surplus-savour-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "myFoods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
        // loader: () => fetch("https://surplus-savour-server.vercel.app/foodRequests"),
      },
      {
        path: "myRequests",
        element: (
          <PrivateRoute>
            <MyRequests></MyRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
