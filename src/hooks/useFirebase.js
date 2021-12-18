import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";


firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    //my database url
    const databaseUrl = 'http://localhost:5000';

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleCreateUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                handleUpdateUser(name);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handleUpdateUser = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 

            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally()
    };

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            setUser({});
            setError(error.message);
        });
    };

    // manage user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
        });
    }, [auth]);



    return {
        user,
        handleLogOut,
        handleGoogleLogin,
        handleCreateUser,
        handleUserLogin,
        error,
        databaseUrl
    }
};

export default useFirebase;