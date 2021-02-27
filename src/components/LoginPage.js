import React from 'react';
import { useAuth } from "../provider/AuthProvider";
import {Redirect } from "react-router-dom";

function LoginPage() {

    const { user,singIn} = useAuth();

    return (
        <div>
            { user === null ?
                <div><h2>You are not logged-in</h2>
            <button onClick={() => singIn(() => {})}>Login</button></div>
            :
            <Redirect to="/"/>}
        </div>
    )
}

export default LoginPage
