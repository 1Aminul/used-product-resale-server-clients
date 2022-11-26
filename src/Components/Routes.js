import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Blog from "./Pages/Blog/Blog";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "./Pages/Dashboard/AllBuyers/AllBuyers";
import AllSallers from "./Pages/Dashboard/AllSallers/AllSallers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import MyProducts from "./Pages/Dashboard/MyProducts/MyProducts";
import CategoryItem from "./Pages/Home/Category/CategoryItem";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./PrivateRoute/AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoute/PrivateRoute/PrivateRoutes";
import Login from "./Shared/Login/Login";
import SignUP from "./Shared/SignUp/SignUp";


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
            path: '/signup',
            element: <SignUP></SignUP>,
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/category/:id',
            element: <CategoryItem></CategoryItem>,
            loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
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
                path: '/dashboard/addproducts', element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts', element: <MyProducts></MyProducts>
            },
        ]
    }
])