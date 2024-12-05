import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivateRoute;