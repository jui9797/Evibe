import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import Event from "../pages/even/Event";
import AddEvent from "../pages/addEvent/AddEvent";
import MyEvent from "../pages/myEvent/MyEvent";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import UpdateEvent from "../components/UpdateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
      {
        path: "/addEvent",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "/MyEvent",
        element: <MyEvent></MyEvent>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/updateEvent",
        element: <UpdateEvent></UpdateEvent>,
      },
    ],
  },
]);

export default router;
