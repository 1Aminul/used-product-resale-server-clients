import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyBookings from "./Pages/Dashboard/MyBookings/MyBookings";
import CategoryItem from "./Pages/Home/Category/CategoryItem";
import Home from "./Pages/Home/Home/Home";
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
        path: '/dashboard', element: <Dashboard></Dashboard>, children: [
            {
                path: '/dashboard', element: <MyBookings></MyBookings>
            }
        ]
    }
])