import React from 'react'
import { useAuth } from "../provider/AuthProvider";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

function AuthButton() {
    const history = useHistory();
    const {user, singOut, singIn} = useAuth()

    return (
        <div>
            { user === 'user' ? <div> 
            <p>Welcome Trainer</p>              
            <button onClick={() => singOut(() => {})}>
                Logout
            </button>
            <button style={{marginLeft:"10px"}} onClick={() => history.push("/")} >
                Home
            </button>
            </div> : 
            <DivForButton>
            <button onClick={() => singIn(() => {})}>
                Login
            </button>
            <button onClick={() => history.push("/")} >
                Home
            </button>
            </DivForButton>
}
        </div>
    )
}

export default AuthButton;

const DivForButton = styled.div`


    button {
        margin: 5px;
    }
`