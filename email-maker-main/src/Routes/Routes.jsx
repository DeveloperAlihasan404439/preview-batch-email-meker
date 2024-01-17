import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Inbox from "../components/inbox/Inbox";
import GetEmail from "../components/getEmail/GetEmail";
import Blog from "../components/blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "/getEmail",
        element: <GetEmail></GetEmail>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

