import React from 'react'
import Cookies from 'js-cookie';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from './FireBaseConfig';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    let routes=useNavigate()
    const provider = new GoogleAuthProvider();

    let loginWithGoogle = () => {
        const auth = getAuth(app);

        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;

             
                Cookies.set("blinkit-token" ,token )
                routes("/")

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    return (
        <div onClick={loginWithGoogle} className='mt-[200px] w-[500px]  mx-auto'  >
            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Login With Google </button>
        </div>
    )
}
