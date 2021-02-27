import React from 'react'
import { useAuth } from "../provider/AuthProvider";

function AuthButton() {
    const auth = useAuth()
    
    return (
        <div>
            {auth.user === 'user' ? 'Welcome, Spartan' : 'Login'}
        </div>
    )
}

export default AuthButton;
