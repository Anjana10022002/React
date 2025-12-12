import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: '*', element: <App/> }
]);

export default router;