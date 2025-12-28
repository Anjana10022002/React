import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <HomePage /> },
]);

export default router;


