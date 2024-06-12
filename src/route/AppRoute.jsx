import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { LoginPage } from "../pages/LoginPage";
import { RegisterClientPage } from "../pages/RegisterClientPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";

const AppRoute = () => {
  //
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/loginPage",
          element: <LoginPage />,
        },
        {
          path: "/client",
          element: <RegisterClientPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;

