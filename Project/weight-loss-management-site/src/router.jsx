import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddWeight from "./pages/AddWeight";
import WeightList from "./pages/ListingPage";
import WeightLoss from "./pages/LossCalculator";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
  { path: "/", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/add-record", element: <AddWeight /> },
  { path: "/records", element: <WeightList /> },
  { path: "/loss-calculator", element: <WeightLoss /> },
  { path: "/logout", element: <Logout /> }, 
]);

export default router;
