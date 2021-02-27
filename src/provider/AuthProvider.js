import { createContext, useContext, useState } from "react";

const authContext = createContext();


//Simulación de los endpoints de un API
const fakeAuthProvider = {
    singIn: (callback) => {
        setTimeout(callback, 100)
    },
    singOut: (callback) => {
        setTimeout(callback, 100)
    }
}

//Hook para manejar la autenticación en la app
const useProvideAuth = () => {
    const [ user, setUser ] = useState(null)

    const singIn = (cb) => {
        return fakeAuthProvider.singIn(()  => {
            setUser('user');
            cb();
        })
    }
    const singOut = (cb) => {
        return fakeAuthProvider.singOut(()  => {
            setUser(null);
            cb();
        })
    }

    return {
        user,
        singIn,
        singOut
    }
}

export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth()

    return (<authContext.Provider value={auth}>
                {children}
            </authContext.Provider>
    )}

    export const useAuth = () => useContext(authContext)