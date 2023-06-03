import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import { loader as chefAndRecipeLoader } from "../utils/loader";
import ChefPage from "../pages/ChefPage/ChefPage";
import Page404 from "./Page404";
import EditUser from "../pages/EditUser/EditUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://itamae-server.vercel.app/chef-data"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-user",
        element: (
          <PrivateRoute>
            <EditUser />
          </PrivateRoute>
        ),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefPage />
          </PrivateRoute>
        ),
        loader: chefAndRecipeLoader,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);
