import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    if (user) {
        return children;
    }
    else {
        navigate("/login")
    }

};

export default PrivateRoute;