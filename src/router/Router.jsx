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
import ErrorPage from '../pages/ErrorPage';
import UpdateReview from "../pages/UpdateReview";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://chill-gamer-server-eight.vercel.app/highest-rated-games")
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
                element: <AllReviews />,
                loader: () => fetch("https://chill-gamer-server-eight.vercel.app/review")
            },
            {
                path: "/review/:id",
                element: <PrivateRoute><ReviewDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-eight.vercel.app/review/${params.id}`)
            },
            {
                path: "/game-watch-list/:email",
                element: <PrivateRoute><WatchList /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-eight.vercel.app/game-watch-list/${params.email}`)
            },
            {
                path: "/my-review/:email",
                element: <PrivateRoute><MyReviews /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chill-gamer-server-eight.vercel.app/my-review/${params.email}`)
            },
            {
                path: "/updateReview/:id",
                element: <UpdateReview />,
                loader: ({params}) => fetch(`https://chill-gamer-server-eight.vercel.app/updateReview/${params.id}`)
            }
        ]
    },
]);