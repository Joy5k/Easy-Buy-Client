import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
} from 'firebase/auth'
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }
    const LoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const UpdateUserInfo = (data) => {
        setLoading(true)
        return updateProfile(auth.currentUser,data)
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user', currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
},[])
    const authInfo = {
        createUser,
        LoginUser,
        logOutUser,
        signInWithGoogle,
        UpdateUserInfo,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;