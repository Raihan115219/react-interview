import { createBrowserRouter } from "react-router-dom";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginPage/Login";
import MainPage from "../Pages/MainPage";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },

      {
        path: "*",
        element: <h1>Error Page</h1>,
      },
    ],
  },
]);
