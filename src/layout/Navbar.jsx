import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";


export const Navbar = () => {

    const { user, signout } = useContext(AuthContext)
    const email = user?.email;

    const links = <div className="flex gap-5 text-black md:text-white">
        <Link to="/">Home</Link>
        <Link to="/all-reviews">All Reviews</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to={`/game-watch-list/${email}`}>My WatchList</Link>
        <Link to={`/my-review/${email}`}>My Reviews</Link>
    </div>

    const handleLogOut = () => {
        signout()
            .then(() => {
                console.log("Signed Out")
                Swal.fire("Logged Out Successful");
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
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <Link to="/profile"><img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" /></Link>
                        </div>}
                    {user ? <Link onClick={handleLogOut}><button className="btn">LogOut</button></Link> :
                        <Link to="/login"><a className="btn btn-neutral">Login</a></Link>}
                </div>
            </div>
        </div>
    );
};

