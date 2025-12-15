import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Aboutus from "./components/Aboutus";
import Crud from "./components/Crud";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutus", element: <Aboutus /> },
  { path: "/crud", element: <Crud /> }
]);

export default router;
