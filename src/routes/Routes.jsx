import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Login from "../Layout/Login";
import Registar from "../Layout/Registar";

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
    ],
  },
]);

export default routes;
