import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";
import Login from "./pages/login/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,  
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
    {
        path: "/Home",
        element: < Home/>,
    },
]);

export default router;