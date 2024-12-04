import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password }


        signIn(email, password)
            .then(res => {
                console.log("Logged in : ", res.user)
                Swal.fire("Login Done!");
                navigate("/")
            })
            .catch(err => {
                console.log("ERR : ", err)
                setError(err)
            })
    }


    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mb-5">User Login</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                    <p className="text-center text-red-500">{error && error.message}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;