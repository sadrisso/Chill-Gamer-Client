import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from '../components/Home';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../components/Profile";
import AddReview from "../pages/AddReview";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import WatchList from "../pages/WatchList";
import MyReviews from "../pages/MyReviews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: "/add-review",
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: "/all-reviews",
                element: <PrivateRoute><AllReviews /></PrivateRoute>,
                loader: () => fetch("http://localhost:3000/review")
            },
            {
                path: "/review/:id",
                element: <ReviewDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/review/${params.id}`)
            },
            {
                path: "/game-watch-list/:email",
                element: <WatchList />,
                loader: ({ params }) => fetch(`http://localhost:3000/game-watch-list/${params.email}`)
            },
            {
                path: "/my-review/:email",
                element: <MyReviews />,
                loader: ({params}) => fetch(`http://localhost:3000/my-review/${params.email}`)
            }
        ]
    },
]);