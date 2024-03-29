import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Payment from "../Pages/MyOrders/Payment/Payment";
import  Phones from "../Pages/Phones/Phones/Phones";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ContactForm from "../Pages/ContactForm/ContactForm";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";

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
                element:<PrivateRoute><Phones></Phones></PrivateRoute>,
                loader:({params})=>fetch(`https://y-dun-gamma.vercel.app/category/${params.id}`)
            }, {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '*',
                element:<ErrorPage></ErrorPage>
            },
            {
                path: '/myorders',
                element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/contact',
                element:<ContactForm></ContactForm>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myorders',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element:<MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/allPhones',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reporteditems',
                element:<ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader:({params})=>fetch(`https://y-dun-gamma.vercel.app/payment/${params.id}`)
            },
        ]
    }
])