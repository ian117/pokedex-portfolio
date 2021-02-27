import React from 'react'
import { useAuth } from "../provider/AuthProvider";

function AuthButton() {
    const {user, singOut, singIn} = useAuth()

    return (
        <div>
            { user === 'user' ? <div> 
            <p>'Welcome Trainer'</p>              
            <button onClick={() => singOut(() => {})}>
                Logout
            </button>
            </div> : 
            <button onClick={() => singIn(() => {})}>
                Login
            </button>
}
        </div>
    )
}

export default AuthButton;
