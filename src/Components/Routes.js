import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Blog from "./Pages/Blog/Blog";
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
    ]}
])