import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


const Register = () => {

    const { createUser, updateUser, signInGoogle } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;
        const registerInfo = { name, email, photo, password }


        createUser(email, password)
            .then(res => {
                console.log("Registered : ", res.user)
                updateUser({displayName: name, photoURL: photo})
            })
            .catch(err => {
                console.log("ERR : ", err)
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
                </form>
                <div className="text-center mb-10">
                    <button className="btn btn-neutral btn-wide btn-outline" onClick={() => signInGoogle(googleProvider)}>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;