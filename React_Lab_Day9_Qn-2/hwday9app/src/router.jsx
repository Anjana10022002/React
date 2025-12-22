import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from "././Register";
import Login from "././Login";
import ProductList from "././ProductList";
import ProductView from "././ProductView";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/products", element: <ProductList /> },
  { path: "/product/:id", element: <ProductView /> },
]);

export default router;
