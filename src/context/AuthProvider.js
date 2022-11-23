import React, { useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth'
import { useState } from 'react';

export const AuthContext = createContext()
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user,setUser]=useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser,userInfo)
    }

    const logOut = () => {
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
        signIn,
        signInWithGoogle,
        updateUser,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;