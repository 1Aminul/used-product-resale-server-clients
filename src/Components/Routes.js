import { createBrowserRouter } from "react-router-dom";
import Errorpage from "./Errorpage";
import Main from "./Layout/Main";
import Blog from "./Pages/Blog/Blog";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "./Pages/Dashboard/AllBuyers/AllBuyers";
import AllSallers from "./Pages/Dashboard/AllSallers/AllSallers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import MyProducts from "./Pages/Dashboard/MyProducts/MyProducts";
import Payment from "./Pages/Dashboard/Payment/Payment";
import CategoryItem from "./Pages/Home/Category/CategoryItem";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./PrivateRoute/AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoute/PrivateRoute/PrivateRoutes";
import SallerRoute from "./PrivateRoute/SallerRoute/SallerRoute";
import Login from "./Shared/Login/Login";
import SignUP from "./Shared/SignUp/SignUp";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";


export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/',
            element:<Home></Home> ,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/about',
            element:<About/>,
        },
        {
            path: '/contact',
            element: <Contact/>,
        },
        {
            path: '/signup',
            element: <SignUP></SignUP>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/category/:id',
            element: <PrivateRoutes><CategoryItem></CategoryItem></PrivateRoutes>,
            loader: ({params})=> fetch(`https://used-products-resale-server-1aminul.vercel.app/category/${params.id}`)
        },
    ]},
    {
        path: '/dashboard', element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>, children: [
            {
                path: '/dashboard', element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allsallers', element: <AdminRoute><AllSallers></AllSallers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers', element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts', element: <SallerRoute><AddProducts></AddProducts></SallerRoute>
            },
            {
                path: '/dashboard/myproducts', element: <SallerRoute> <MyProducts></MyProducts></SallerRoute>
            },
            {
                path: '/dashboard/payments/:id', 
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://used-products-resale-server-1aminul.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <Errorpage></Errorpage>
    }

])