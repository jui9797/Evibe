import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import Event from "../pages/even/Event";
import AddEvent from "../pages/addEvent/AddEvent";
import MyEvent from "../pages/myEvent/MyEvent";

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
    ],
  },
]);

export default router;
