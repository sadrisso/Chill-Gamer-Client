import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";


const Profile = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <div className="hero bg-base-200 w-full h-[550px] md:w-[450px] mx-auto p-10 rounded-2xl">
                <div className="hero-content flex-col">
                    <img
                        src={user?.photoURL}
                        className=" rounded-full shadow-2xl h-[100px] w-[100px]" />
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                    </div>
                    <div>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;