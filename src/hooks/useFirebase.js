import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";


firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    //my database url
    const databaseUrl = 'http://localhost:5000';

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleCreateUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                saveUser(newUser, 'post');
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
                const user = result.user;
                const newUser = {
                    email: user.email,
                    displayName: user.displayName
                }
                saveUser(newUser, 'put');
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


    //save user to db
    const saveUser = (newUser, method) => {
        if (method === 'put') {
            axios.put('https://savon-server-sider-api.herokuapp.com/users', newUser)
                .then()
        }
        else {
            axios.post('https://savon-server-sider-api.herokuapp.com/users', newUser)
                .then()
        }

    };

    // check admin
    useEffect(() => {
        axios.get(`${databaseUrl}/users?email=${user.email}`)
            .then(res => setAdmin(res.data.admin))
            .catch()
    }, [user.email])

    return {
        user,
        handleLogOut,
        handleGoogleLogin,
        handleCreateUser,
        handleUserLogin,
        error,
        databaseUrl,
        admin
    }
};

export default useFirebase;