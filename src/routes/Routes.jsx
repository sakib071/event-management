import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EventServices from "../EventServices/EventServices";
import EventGallery from "../pages/EventGallery/EventGallery";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/services',
                element: <PrivateRoute><EventServices></EventServices></PrivateRoute>
            },
            {
                path: '/gallery',
                element: <PrivateRoute><EventGallery></EventGallery></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
]);

export default router;