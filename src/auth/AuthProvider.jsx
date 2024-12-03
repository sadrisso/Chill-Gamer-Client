import { createContext, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const updateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }


    const authInfo = { createUser, signIn, updateUser, signInGoogle }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;