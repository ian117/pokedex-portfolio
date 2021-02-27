import React from 'react';
import { useAuth } from "../provider/AuthProvider";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();
    const { singIn} = useAuth();

    return (
        <div>
           <h2>You are not logged-in</h2>
            <button onClick={() => singIn(() => {
                history.push("/")
            })}>Login</button>
        </div>
    )
}

export default LoginPage
