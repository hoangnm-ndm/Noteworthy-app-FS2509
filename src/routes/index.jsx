import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../components/layout/auth/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Header from "../components/layout/auth/Header";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/layout/main/MainLayout";
import DetailNote from "../pages/DetailNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: ":noteId", element: <DetailNote /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        // * /auth/login
        path: "login",
        element: <LoginPage />,
      },
      {
        // * /auth/register
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
