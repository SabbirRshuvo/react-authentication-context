import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Login from "../Layout/Login";
import Registar from "../Layout/Registar";
import Orders from "../Layout/Orders";
import PriveRoute from "../providers/PriveRoute";
import Profile from "../Layout/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registar",
        element: <Registar />,
      },
      {
        path: "/orders",
        element: (
          <PriveRoute>
            <Orders />
          </PriveRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PriveRoute>
            <Profile />
          </PriveRoute>
        ),
      },
    ],
  },
]);

export default routes;
