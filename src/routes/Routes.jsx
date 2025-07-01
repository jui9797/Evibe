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
import Private from "../private/Private";

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
        element: (
          <Private>
            {" "}
            <Event></Event>
          </Private>
        ),
      },
      {
        path: "/addEvent",
        element: (
          <Private>
            <AddEvent></AddEvent>
          </Private>
        ),
      },
      {
        path: "/MyEvent",
        element: (
          <Private>
            <MyEvent></MyEvent>
          </Private>
        ),
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
        element: (
          <Private>
            <UpdateEvent></UpdateEvent>
          </Private>
        ),
      },
    ],
  },
]);

export default router;
