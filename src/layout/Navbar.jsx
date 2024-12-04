import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";


export const Navbar = () => {

    const { user, signout } = useContext(AuthContext)

    const links = <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/">All Reviews</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to="/">My Review</Link>
        <Link to="/">Game Reviews</Link>
    </div>

    const handleLogOut = () => {
        signout()
            .then(() => {
                console.log("Signed Out")
                Swal.fire("Logged Out Successfull");
                navigate("/login")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="">
            <div className="navbar bg-blue-900 text-white font-semibold py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Rpo Gaming</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user &&
                        <div className="tooltip tooltip-bottom" data-tip="hello">
                            <Link to="/profile">{user?.displayName}</Link>
                        </div>}
                    {user ? <Link onClick={handleLogOut}><button className="btn btn-sm">LogOut</button></Link> :
                        <Link to="/login"><a className="btn btn-neutral btn-sm">Login</a></Link>}
                </div>
            </div>
        </div>
    );
};

