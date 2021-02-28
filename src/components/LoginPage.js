import React from 'react';
import { useAuth } from "../provider/AuthProvider";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function LoginPage() {
    const history = useHistory();
    const { user , singIn} = useAuth();

    return (
        <div>
           {user ? <Redirect to="/"/> :
            <><h2>You are not logged-in</h2>
            <button onClick={() => singIn(() => {
                history.push("/")
            })}>Login</button></>}
        </div>
    )
}

export default LoginPage
