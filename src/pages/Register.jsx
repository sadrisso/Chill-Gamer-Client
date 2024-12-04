import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();


const Register = () => {

    const { createUser, updateUser, signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;
        const registerInfo = { name, email, photo, password }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (name.length < 3) {
            setError({...error, nameErr: "name must be atlease 3 character"})
            return;
        }

        if (!passwordRegex.test(password)) {
            setError({...error, passwordError: "password must have atleast 1 uppercase 1 lowercase and 6 digit long"});
            return;
        }


        createUser(email, password)
            .then(res => {
                console.log("Registered : ", res.user)
                updateUser({displayName: name, photoURL: photo})
                Swal.fire("Registration Done!");
                navigate("/")
            })
            .catch(err => {
                console.log("ERR : ", err)
                setError({...error, registerError: err.message})
            })
    }


    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mb-5">User Registration</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        <p className="text-red-500">{error?.nameErr && error.nameErr}</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo" name="photoUrl" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <p className="text-red-500">{error?.passwordError && error.passwordError}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
                </form>
                <div className="text-center mb-10">
                    <button className="btn btn-neutral btn-wide btn-outline" onClick={() => signInGoogle(googleProvider)}>Google</button>
                </div>
                <p className="text-center text-red-500">{error?.registerError && error.registerError}</p>
            </div>
        </div>
    );
};

export default Register;