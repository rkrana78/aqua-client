import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
import Navbar from '../Home/Navbar/Navbar';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }
    return (
        <div>
            <div className="bg-info">
                <Navbar />
            </div>
            <div className="log-in my-5 py-5">
                <h3>Log In</h3>
                <button className="btn btn-danger google-btn mt-4" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} /> Google Log in</button>

            </div>
        </div>
    );
};

export default Login;