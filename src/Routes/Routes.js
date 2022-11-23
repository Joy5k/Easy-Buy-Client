import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import SignUp from "../Pages/Log/SignUp";
import  Phones from "../Pages/Phones/Phones/Phones";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/phones/:id',
                element: <Phones></Phones>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }
])