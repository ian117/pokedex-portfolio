import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../provider/AuthProvider';

function ProtectedRoute({children, ...props}) {
    
    const { user } = useAuth()
    
    return (
        <div>
            <Route {...props} render={() => user ? (children) : <Redirect to="/login"/>}/>
        </div>
    );
}

export default ProtectedRoute
